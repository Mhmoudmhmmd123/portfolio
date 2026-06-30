const translations = {
    ar: {
        dir: 'rtl',
        nav: { home: 'الرئيسية', services: 'الخدمات', portfolio: 'أعمالي', contact: 'تواصل' },
        hero: { subtitle: 'أهلاً، أنا مطور مواقع', title1: 'مطور مواقع', title2: 'بالذكاء الاصطناعي', description: 'أصمم وأطور مواقع احترافية باستخدام أحدث تقنيات الذكاء الاصطناعي.', stat1Label: 'مشروع منجز', stat2Label: 'عميل سعيد', stat3Label: 'جودة عالية', btn1: 'شاهد أعمالي', btn2: 'تواصل معي' },
        services: { title: 'خدماتي' },
        portfolio: { title: 'أعمالي', viewProject: 'مشاهدة المشروع' },
        contact: { title1: 'هل لديك مشروع؟', title2: 'لنعمل معاً', email: 'أرسل لي إيميل', whatsapp: 'واتساب' },
        footer: 'جميع الحقوق محفوظة © 2024',
        languageName: 'العربية'
    },
    en: {
        dir: 'ltr',
        nav: { home: 'Home', services: 'Services', portfolio: 'Portfolio', contact: 'Contact' },
        hero: { subtitle: 'Hello, I am a Web Developer', title1: 'Web Developer', title2: 'Powered by AI', description: 'I design and develop professional websites using the latest AI technologies.', stat1Label: 'Completed Projects', stat2Label: 'Happy Clients', stat3Label: 'High Quality', btn1: 'View My Work', btn2: 'Contact Me' },
        services: { title: 'My Services' },
        portfolio: { title: 'My Work', viewProject: 'View Project' },
        contact: { title1: 'Have a project?', title2: "Let's work together", email: 'Send me an email', whatsapp: 'WhatsApp' },
        footer: 'All rights reserved © 2024',
        languageName: 'English'
    },
    fr: {
        dir: 'ltr',
        nav: { home: 'Accueil', services: 'Services', portfolio: 'Portfolio', contact: 'Contact' },
        hero: { subtitle: 'Bonjour, je suis développeur web', title1: 'Développeur Web', title2: 'Propulsé par IA', description: 'Je conçois des sites web professionnels avec les dernières technologies IA.', stat1Label: 'Projets terminés', stat2Label: 'Clients satisfaits', stat3Label: 'Haute qualité', btn1: 'Voir mon travail', btn2: 'Contactez-moi' },
        services: { title: 'Mes Services' },
        portfolio: { title: 'Mon Travail', viewProject: 'Voir le projet' },
        contact: { title1: 'Vous avez un projet?', title2: 'Travaillons ensemble', email: 'Envoyez-moi un email', whatsapp: 'WhatsApp' },
        footer: 'Tous droits réservés © 2024',
        languageName: 'Français'
    },
    de: {
        dir: 'ltr',
        nav: { home: 'Startseite', services: 'Dienste', portfolio: 'Portfolio', contact: 'Kontakt' },
        hero: { subtitle: 'Hallo, ich bin Webentwickler', title1: 'Webentwickler', title2: 'KI-gestützt', description: 'Ich entwerfe professionelle Websites mit modernster KI-Technologie.', stat1Label: 'Abgeschlossene Projekte', stat2Label: 'Zufriedene Kunden', stat3Label: 'Hohe Qualität', btn1: 'Meine Arbeit ansehen', btn2: 'Kontaktieren Sie mich' },
        services: { title: 'Meine Dienste' },
        portfolio: { title: 'Meine Arbeit', viewProject: 'Projekt ansehen' },
        contact: { title1: 'Haben Sie ein Projekt?', title2: 'Lassen Sie uns zusammenarbeiten', email: 'Senden Sie mir eine E-Mail', whatsapp: 'WhatsApp' },
        footer: 'Alle Rechte vorbehalten © 2024',
        languageName: 'Deutsch'
    },
    zh: {
        dir: 'ltr',
        nav: { home: '首页', services: '服务', portfolio: '作品集', contact: '联系' },
        hero: { subtitle: '你好，我是网站开发者', title1: '网站开发者', title2: 'AI 驱动', description: '我使用最新的 AI 技术设计和开发专业网站。', stat1Label: '完成项目', stat2Label: '满意客户', stat3Label: '高质量', btn1: '查看作品', btn2: '联系我' },
        services: { title: '我的服务' },
        portfolio: { title: '我的作品', viewProject: '查看项目' },
        contact: { title1: '有项目吗？', title2: '让我们一起合作', email: '给我发邮件', whatsapp: 'WhatsApp' },
        footer: '版权所有 © 2024',
        languageName: '中文'
    },
    es: {
        dir: 'ltr',
        nav: { home: 'Inicio', services: 'Servicios', portfolio: 'Portafolio', contact: 'Contacto' },
        hero: { subtitle: 'Hola, soy desarrollador web', title1: 'Desarrollador Web', title2: 'Impulsado por IA', description: 'Diseño sitios web profesionales con las últimas tecnologías de IA.', stat1Label: 'Proyectos completados', stat2Label: 'Clientes felices', stat3Label: 'Alta calidad', btn1: 'Ver mi trabajo', btn2: 'Contáctame' },
        services: { title: 'Mis Servicios' },
        portfolio: { title: 'Mi Trabajo', viewProject: 'Ver proyecto' },
        contact: { title1: '¿Tienes un proyecto?', title2: 'Trabajemos juntos', email: 'Envíame un correo', whatsapp: 'WhatsApp' },
        footer: 'Todos los derechos reservados © 2024',
        languageName: 'Español'
    },
    pt: { dir: 'ltr', nav: { home: 'Início', services: 'Serviços', portfolio: 'Portfólio', contact: 'Contato' }, hero: { subtitle: 'Olá, sou desenvolvedor web', title1: 'Desenvolvedor Web', title2: 'Impulsionado por IA', description: 'Projeto sites profissionais com IA.', stat1Label: 'Projetos concluídos', stat2Label: 'Clientes felizes', stat3Label: 'Alta qualidade', btn1: 'Ver meu trabalho', btn2: 'Contate-me' }, services: { title: 'Meus Serviços' }, portfolio: { title: 'Meu Trabalho', viewProject: 'Ver projeto' }, contact: { title1: 'Tem um projeto?', title2: 'Vamos trabalhar juntos', email: 'Envie-me um email', whatsapp: 'WhatsApp' }, footer: 'Todos os direitos reservados © 2024', languageName: 'Português' },
    ru: { dir: 'ltr', nav: { home: 'Главная', services: 'Услуги', portfolio: 'Портфолио', contact: 'Контакты' }, hero: { subtitle: 'Привет, я веб-разработчик', title1: 'Веб-разработчик', title2: 'На базе ИИ', description: 'Я создаю профессиональные сайты с ИИ.', stat1Label: 'Завершённых проектов', stat2Label: 'Довольных клиентов', stat3Label: 'Высокое качество', btn1: 'Посмотреть работы', btn2: 'Связаться' }, services: { title: 'Мои Услуги' }, portfolio: { title: 'Мои Работы', viewProject: 'Посмотреть проект' }, contact: { title1: 'Есть проект?', title2: 'Давайте работать вместе', email: 'Напишите мне', whatsapp: 'WhatsApp' }, footer: 'Все права защищены © 2024', languageName: 'Русский' },
    ja: { dir: 'ltr', nav: { home: 'ホーム', services: 'サービス', portfolio: 'ポートフォリオ', contact: '連絡' }, hero: { subtitle: 'こんにちは、ウェブ開発者です', title1: 'ウェブ開発者', title2: 'AI搭載', description: '最新のAI技術でプロフェッショナルなサイトを設計します。', stat1Label: '完了プロジェクト', stat2Label: '満足したクライアント', stat3Label: '高品質', btn1: '作品を見る', btn2: 'お問い合わせ' }, services: { title: 'サービス' }, portfolio: { title: '作品', viewProject: 'プロジェクトを見る' }, contact: { title1: 'プロジェクトがありますか？', title2: '一緒に働きましょう', email: 'メールを送る', whatsapp: 'WhatsApp' }, footer: '全著作権所有 © 2024', languageName: '日本語' },
    ko: { dir: 'ltr', nav: { home: '홈', services: '서비스', portfolio: '포트폴리오', contact: '연락처' }, hero: { subtitle: '안녕하세요, 웹 개발자입니다', title1: '웹 개발자', title2: 'AI 기반', description: '최신 AI 기술로 전문적인 웹사이트를 개발합니다.', stat1Label: '완료된 프로젝트', stat2Label: '만족한 고객', stat3Label: '높은 품질', btn1: '내 작품 보기', btn2: '연락하기' }, services: { title: '서비스' }, portfolio: { title: '내 작품', viewProject: '프로젝트 보기' }, contact: { title1: '프로젝트가 있나요?', title2: '함께 일합시다', email: '이메일 보내기', whatsapp: 'WhatsApp' }, footer: '모든 권리 보유 © 2024', languageName: '한국어' },
    it: { dir: 'ltr', nav: { home: 'Home', services: 'Servizi', portfolio: 'Portfolio', contact: 'Contatti' }, hero: { subtitle: 'Ciao, sono uno sviluppatore web', title1: 'Sviluppatore Web', title2: 'Alimentato da IA', description: 'Progetto siti web professionali con IA.', stat1Label: 'Progetti completati', stat2Label: 'Clienti soddisfatti', stat3Label: 'Alta qualità', btn1: 'Vedi il mio lavoro', btn2: 'Contattami' }, services: { title: 'I Miei Servizi' }, portfolio: { title: 'Il Mio Lavoro', viewProject: 'Vedi progetto' }, contact: { title1: 'Hai un progetto?', title2: 'Lavoriamo insieme', email: 'Inviami un email', whatsapp: 'WhatsApp' }, footer: 'Tutti i diritti riservati © 2024', languageName: 'Italiano' },
    tr: { dir: 'ltr', nav: { home: 'Ana Sayfa', services: 'Hizmetler', portfolio: 'Portföy', contact: 'İletişim' }, hero: { subtitle: 'Merhaba, ben web geliştiriciyim', title1: 'Web Geliştirici', title2: 'Yapay Zeka Destekli', description: 'En son AI teknolojileriyle profesyonel web siteleri tasarlıyorum.', stat1Label: 'Tamamlanan Proje', stat2Label: 'Mutlu Müşteri', stat3Label: 'Yüksek Kalite', btn1: 'Çalışmalarımı Gör', btn2: 'İletişime Geç' }, services: { title: 'Hizmetlerim' }, portfolio: { title: 'Çalışmalarım', viewProject: 'Projeyi Gör' }, contact: { title1: 'Bir projeniz var mı?', title2: 'Birlikte çalışalım', email: 'Bana email gönder', whatsapp: 'WhatsApp' }, footer: 'Tüm hakları saklıdır © 2024', languageName: 'Türkçe' },
    nl: { dir: 'ltr', nav: { home: 'Home', services: 'Diensten', portfolio: 'Portfolio', contact: 'Contact' }, hero: { subtitle: 'Hallo, ik ben webontwikkelaar', title1: 'Webontwikkelaar', title2: 'Aangedreven door AI', description: 'Ik ontwerp professionele websites met AI.', stat1Label: 'Voltooide projecten', stat2Label: 'Tevreden klanten', stat3Label: 'Hoge kwaliteit', btn1: 'Bekijk mijn werk', btn2: 'Neem contact op' }, services: { title: 'Mijn Diensten' }, portfolio: { title: 'Mijn Werk', viewProject: 'Bekijk project' }, contact: { title1: 'Heb je een project?', title2: 'Laten we samenwerken', email: 'Stuur me een email', whatsapp: 'WhatsApp' }, footer: 'Alle rechten voorbehouden © 2024', languageName: 'Nederlands' },
    pl: { dir: 'ltr', nav: { home: 'Strona główna', services: 'Usługi', portfolio: 'Portfolio', contact: 'Kontakt' }, hero: { subtitle: 'Cześć, jestem programistą', title1: 'Programista Web', title2: 'Napędzany AI', description: 'Projektuję profesjonalne strony z AI.', stat1Label: 'Ukończonych projektów', stat2Label: 'Zadowolonych klientów', stat3Label: 'Wysoka jakość', btn1: 'Zobacz moje prace', btn2: 'Skontaktuj się' }, services: { title: 'Moje Usługi' }, portfolio: { title: 'Moje Prace', viewProject: 'Zobacz projekt' }, contact: { title1: 'Masz projekt?', title2: 'Pracujmy razem', email: 'Wyślij mi email', whatsapp: 'WhatsApp' }, footer: 'Wszelkie prawa zastrzeżone © 2024', languageName: 'Polski' },
    sv: { dir: 'ltr', nav: { home: 'Hem', services: 'Tjänster', portfolio: 'Portfolio', contact: 'Kontakt' }, hero: { subtitle: 'Hej, jag är webbutvecklare', title1: 'Webbutvecklare', title2: 'Drivs av AI', description: 'Jag designar professionella webbplatser med AI.', stat1Label: 'Slutförda projekt', stat2Label: 'Nöjda kunder', stat3Label: 'Hög kvalitet', btn1: 'Se mitt arbete', btn2: 'Kontakta mig' }, services: { title: 'Mina Tjänster' }, portfolio: { title: 'Mitt Arbete', viewProject: 'Se projekt' }, contact: { title1: 'Har du ett projekt?', title2: 'Låt oss arbeta tillsammans', email: 'Skicka mejl', whatsapp: 'WhatsApp' }, footer: 'Alla rättigheter förbehållna © 2024', languageName: 'Svenska' },
    id: { dir: 'ltr', nav: { home: 'Beranda', services: 'Layanan', portfolio: 'Portofolio', contact: 'Kontak' }, hero: { subtitle: 'Halo, saya pengembang web', title1: 'Pengembang Web', title2: 'Didukung AI', description: 'Saya merancang situs web profesional dengan AI.', stat1Label: 'Proyek selesai', stat2Label: 'Klien puas', stat3Label: 'Kualitas tinggi', btn1: 'Lihat karya saya', btn2: 'Hubungi saya' }, services: { title: 'Layanan Saya' }, portfolio: { title: 'Karya Saya', viewProject: 'Lihat proyek' }, contact: { title1: 'Punya proyek?', title2: 'Mari bekerja sama', email: 'Kirim email', whatsapp: 'WhatsApp' }, footer: 'Hak cipta dilindungi © 2024', languageName: 'Bahasa Indonesia' },
    vi: { dir: 'ltr', nav: { home: 'Trang chủ', services: 'Dịch vụ', portfolio: 'Hồ sơ', contact: 'Liên hệ' }, hero: { subtitle: 'Xin chào, tôi là nhà phát triển web', title1: 'Nhà phát triển Web', title2: 'Được hỗ trợ bởi AI', description: 'Tôi thiết kế trang web chuyên nghiệp với AI.', stat1Label: 'Dự án hoàn thành', stat2Label: 'Khách hàng hài lòng', stat3Label: 'Chất lượng cao', btn1: 'Xem công việc', btn2: 'Liên hệ' }, services: { title: 'Dịch vụ' }, portfolio: { title: 'Công việc', viewProject: 'Xem dự án' }, contact: { title1: 'Bạn có dự án?', title2: 'Hãy làm việc cùng nhau', email: 'Gửi email', whatsapp: 'WhatsApp' }, footer: 'Bản quyền © 2024', languageName: 'Tiếng Việt' },
    th: { dir: 'ltr', nav: { home: 'หน้าแรก', services: 'บริการ', portfolio: 'ผลงาน', contact: 'ติดต่อ' }, hero: { subtitle: 'สวัสดี ฉันเป็นนักพัฒนาเว็บ', title1: 'นักพัฒนาเว็บ', title2: 'ขับเคลื่อนด้วย AI', description: 'ฉันออกแบบเว็บไซต์ระดับมืออาชีพด้วย AI', stat1Label: 'โครงการที่เสร็จแล้ว', stat2Label: 'ลูกค้าที่พอใจ', stat3Label: 'คุณภาพสูง', btn1: 'ดูผลงาน', btn2: 'ติดต่อฉัน' }, services: { title: 'บริการ' }, portfolio: { title: 'ผลงาน', viewProject: 'ดูโครงการ' }, contact: { title1: 'มีโครงการ?', title2: 'มาทำงานร่วมกัน', email: 'ส่งอีเมล', whatsapp: 'WhatsApp' }, footer: 'สงวนลิขสิทธิ์ © 2024', languageName: 'ภาษาไทย' },
    hi: { dir: 'ltr', nav: { home: 'होम', services: 'सेवाएं', portfolio: 'पोर्टफोलियो', contact: 'संपर्क' }, hero: { subtitle: 'नमस्ते, मैं वेब डेवलपर हूं', title1: 'वेब डेवलपर', title2: 'AI संचालित', description: 'मैं AI तकनीकों से पेशेवर वेबसाइटें बनाता हूं।', stat1Label: 'पूर्ण परियोजनाएं', stat2Label: 'खुश ग्राहक', stat3Label: 'उच्च गुणवत्ता', btn1: 'मेरा काम देखें', btn2: 'मुझसे संपर्क करें' }, services: { title: 'मेरी सेवाएं' }, portfolio: { title: 'मेरा काम', viewProject: 'प्रोजेक्ट देखें' }, contact: { title1: 'क्या आपके पास प्रोजेक्ट है?', title2: 'आइए साथ काम करें', email: 'मुझे ईमेल भेजें', whatsapp: 'WhatsApp' }, footer: 'सर्वाधिकार सुरक्षित © 2024', languageName: 'हिन्दी' },
    uk: { dir: 'ltr', nav: { home: 'Головна', services: 'Послуги', portfolio: 'Портфоліо', contact: 'Контакти' }, hero: { subtitle: 'Привіт, я веб-розробник', title1: 'Веб-розробник', title2: 'На базі ШІ', description: 'Я створюю професійні сайти з ШІ.', stat1Label: 'Завершених проектів', stat2Label: 'Задоволених клієнтів', stat3Label: 'Висока якість', btn1: 'Переглянути роботи', btn2: 'Звязатися' }, services: { title: 'Мої Послуги' }, portfolio: { title: 'Мої Роботи', viewProject: 'Переглянути проект' }, contact: { title1: 'Маєте проект?', title2: 'Працюймо разом', email: 'Надішліть email', whatsapp: 'WhatsApp' }, footer: 'Всі права захищені © 2024', languageName: 'Українська' }
};

const availableLanguages = [
    { code: 'ar', flag: '🇸🇦', name: 'العربية' },
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'zh', flag: '🇨🇳', name: '中文' },
    { code: 'es', flag: '🇪🇸', name: 'Español' },
    { code: 'pt', flag: '🇧🇷', name: 'Português' },
    { code: 'ru', flag: '🇷🇺', name: 'Русский' },
    { code: 'ja', flag: '🇵', name: '日本語' },
    { code: 'ko', flag: '🇷', name: '한국어' },
    { code: 'it', flag: '🇮🇹', name: 'Italiano' },
    { code: 'tr', flag: '🇹🇷', name: 'Türkçe' },
    { code: 'nl', flag: '🇳🇱', name: 'Nederlands' },
    { code: 'pl', flag: '🇱', name: 'Polski' },
    { code: 'sv', flag: '🇸🇪', name: 'Svenska' },
    { code: 'id', flag: '🇮🇩', name: 'Bahasa Indonesia' },
    { code: 'vi', flag: '🇻🇳', name: 'Tiếng Việt' },
    { code: 'th', flag: '🇭', name: 'ภาษาไทย' },
    { code: 'hi', flag: '🇳', name: 'हिन्दी' },
    { code: 'uk', flag: '🇺🇦', name: 'Українська' }
];

let currentLang = localStorage.getItem('selectedLanguage') || 'ar';

function applyLanguage(langCode) {
    if (!translations[langCode]) langCode = 'ar';
    currentLang = langCode;
    localStorage.setItem('selectedLanguage', langCode);
    const t = translations[langCode];
    document.documentElement.dir = t.dir;
    document.documentElement.lang = langCode;
    if (document.getElementById('navHome')) document.getElementById('navHome').textContent = t.nav.home;
    if (document.getElementById('navServices')) document.getElementById('navServices').textContent = t.nav.services;
    if (document.getElementById('navPortfolio')) document.getElementById('navPortfolio').textContent = t.nav.portfolio;
    if (document.getElementById('navContact')) document.getElementById('navContact').textContent = t.nav.contact;
    if (document.getElementById('heroSubtitle')) document.getElementById('heroSubtitle').textContent = t.hero.subtitle;
    if (document.getElementById('heroTitle')) document.getElementById('heroTitle').textContent = t.hero.title1;
    if (document.getElementById('heroTitle2')) document.getElementById('heroTitle2').textContent = t.hero.title2;
    if (document.getElementById('heroDescription')) document.getElementById('heroDescription').textContent = t.hero.description;
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels[0]) statLabels[0].textContent = t.hero.stat1Label;
    if (statLabels[1]) statLabels[1].textContent = t.hero.stat2Label;
    if (statLabels[2]) statLabels[2].textContent = t.hero.stat3Label;
    const buttons = document.querySelectorAll('.hero-buttons .btn');
    if (buttons[0]) buttons[0].textContent = t.hero.btn1;
    if (buttons[1]) buttons[1].textContent = t.hero.btn2;
    const sectionTitles = document.querySelectorAll('.section-title span');
    if (sectionTitles[0]) sectionTitles[0].textContent = t.services.title;
    if (sectionTitles[1]) sectionTitles[1].textContent = t.portfolio.title;
    const contactTitle = document.getElementById('contactTitle');
    if (contactTitle) contactTitle.innerHTML = t.contact.title1 + '<br><span class="gradient-text">' + t.contact.title2 + '</span>';
    if (document.getElementById('footerText')) document.getElementById('footerText').textContent = t.footer;
    const currentLangBtn = document.getElementById('currentLangBtn');
    if (currentLangBtn) {
        const lang = availableLanguages.find(l => l.code === langCode);
        if (lang) currentLangBtn.textContent = lang.flag + ' ' + lang.name;
    }
    if (typeof loadServices === 'function') loadServices();
    if (typeof loadPortfolio === 'function') loadPortfolio();
    if (typeof loadContactInfo === 'function') loadContactInfo();
}

function createLanguageDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    if (!dropdown) return;
    dropdown.innerHTML = '';
    availableLanguages.forEach(lang => {
        const item = document.createElement('div');
        item.className = 'lang-item';
        item.textContent = lang.flag + ' ' + lang.name;
        item.onclick = () => { applyLanguage(lang.code); toggleLanguageMenu(); };
        if (lang.code === currentLang) item.classList.add('active');
        dropdown.appendChild(item);
    });
}

function toggleLanguageMenu() {
    const dropdown = document.getElementById('languageDropdown');
    if (dropdown) dropdown.classList.toggle('show');
}

document.addEventListener('click', (e) => {
    const langSwitcher = document.querySelector('.language-switcher');
    const dropdown = document.getElementById('languageDropdown');
    if (langSwitcher && dropdown && !langSwitcher.contains(e.target)) dropdown.classList.remove('show');
});