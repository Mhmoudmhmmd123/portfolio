firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', async () => {
    createLanguageDropdown();
    
    const savedLang = localStorage.getItem('selectedLanguage');
    if (!savedLang || savedLang === 'null') {
        const detectedLang = await detectLanguageFromIP();
        applyLanguage(detectedLang);
    } else {
        applyLanguage(savedLang);
    }
    
    await loadSiteData();
    await loadServices();
    await loadPortfolio();
    await loadContactInfo();
    initAnimations();
});

async function loadSiteData() {
    try {
        const doc = await db.collection('site').doc('general').get();
        if (doc.exists) {
            const data = doc.data();
            const elements = {
                'logoText': data.logoText || 'NQ',
                'stat1': data.stat1 || '+15',
                'stat2': data.stat2 || '+10',
                'stat3': data.stat3 || '100%',
                'footerText': data.footerText || 'جميع الحقوق محفوظة © 2024'
            };
            for (const [id, value] of Object.entries(elements)) {
                const el = document.getElementById(id);
                if (el) el.textContent = value;
            }
            if (data.logoUrl) {
                const logoImg = document.getElementById('logoImg');
                if (logoImg) logoImg.src = data.logoUrl;
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

async function loadServices() {
    try {
        const snapshot = await db.collection('services').where('active', '==', true).orderBy('order').get();
        const grid = document.getElementById('servicesGrid');
        if (!grid) return;
        grid.innerHTML = '';
        
        snapshot.forEach(doc => {
            const service = doc.data();
            const sizeClass = service.size ? 'size-' + service.size : '';
            const card = document.createElement('div');
            card.className = 'service-card fade-in ' + sizeClass;
            
            let content = '<div class="service-icon">';
            if (service.imageUrl) {
                content += '<img src="' + service.imageUrl + '" alt="' + service.title + '" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px; margin-bottom: 15px;">';
            } else {
                content += '<i class="' + service.icon + '"></i>';
            }
            content += '</div><h3 class="service-title">' + service.title + '</h3><p class="service-description">' + service.description + '</p>';
            
            card.innerHTML = content;
            grid.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading services:', error);
    }
}

async function loadPortfolio() {
    try {
        const snapshot = await db.collection('projects').where('active', '==', true).orderBy('order').get();
        const grid = document.getElementById('portfolioGrid');
        if (!grid) return;
        grid.innerHTML = '';
        
        const t = translations[currentLang] || translations['ar'];
        
        snapshot.forEach(doc => {
            const project = doc.data();
            const sizeClass = project.size ? 'size-' + project.size : '';
            const item = document.createElement('div');
            item.className = 'portfolio-item fade-in ' + sizeClass;
            item.innerHTML = '<img src="' + project.imageUrl + '" alt="' + project.title + '"><div class="portfolio-overlay"><div class="portfolio-category">' + project.category + '</div><h3 class="portfolio-title">' + project.title + '</h3><a href="' + project.link + '" class="portfolio-link" target="_blank">' + t.portfolio.viewProject + ' <i class="fas fa-arrow-left"></i></a></div>';
            grid.appendChild(item);
        });
    } catch (error) {
        console.error('Error loading portfolio:', error);
    }
}

async function loadContactInfo() {
    try {
        const doc = await db.collection('contact').doc('info').get();
        if (doc.exists) {
            const data = doc.data();
            const t = translations[currentLang] || translations['ar'];
            const buttons = document.getElementById('contactButtons');
            if (buttons) {
                buttons.innerHTML = '';
                if (data.email) buttons.innerHTML += '<a href="mailto:' + data.email + '" class="btn btn-primary"><i class="fas fa-envelope"></i> ' + t.contact.email + '</a>';
                if (data.whatsapp) buttons.innerHTML += '<a href="https://wa.me/' + data.whatsapp + '" class="btn btn-secondary"><i class="fab fa-whatsapp"></i> ' + t.contact.whatsapp + '</a>';
            }
            const social = document.getElementById('socialLinks');
            if (social) {
                social.innerHTML = '';
                if (data.twitter) social.innerHTML += '<a href="' + data.twitter + '" class="social-link"><i class="fab fa-twitter"></i></a>';
                if (data.linkedin) social.innerHTML += '<a href="' + data.linkedin + '" class="social-link"><i class="fab fa-linkedin-in"></i></a>';
                if (data.instagram) social.innerHTML += '<a href="' + data.instagram + '" class="social-link"><i class="fab fa-instagram"></i></a>';
                if (data.github) social.innerHTML += '<a href="' + data.github + '" class="social-link"><i class="fab fa-github"></i></a>';
            }
        }
    } catch (error) {
        console.error('Error loading contact info:', error);
    }
}

function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});