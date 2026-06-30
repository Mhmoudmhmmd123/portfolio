firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let isLoggedIn = false;

function login() {
    const password = document.getElementById('adminPassword').value;
    if (password === ADMIN_PASSWORD) {
        isLoggedIn = true;
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        loadData();
    } else {
        document.getElementById('loginError').textContent = '❌ كلمة المرور خاطئة!';
    }
}

function logout() {
    isLoggedIn = false;
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('adminPassword').value = '';
    document.getElementById('loginError').textContent = '';
}

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabName + 'Tab').style.display = 'block';
    event.target.classList.add('active');
    if (tabName === 'services') loadServicesList();
    if (tabName === 'projects') loadProjectsList();
}

async function loadData() {
    await loadGeneralData();
    await loadContactData();
}

async function loadGeneralData() {
    try {
        const doc = await db.collection('site').doc('general').get();
        if (doc.exists) {
            const data = doc.data();
            document.getElementById('logoText').value = data.logoText || '';
            document.getElementById('logoUrl').value = data.logoUrl || '';
            document.getElementById('heroSubtitle').value = data.heroSubtitle || '';
            document.getElementById('heroTitle').value = data.heroTitle || '';
            document.getElementById('heroTitle2').value = data.heroTitle2 || '';
            document.getElementById('heroDescription').value = data.heroDescription || '';
            document.getElementById('stat1').value = data.stat1 || '';
            document.getElementById('stat2').value = data.stat2 || '';
            document.getElementById('stat3').value = data.stat3 || '';
            document.getElementById('footerText').value = data.footerText || '';
        }
    } catch (error) { console.error('Error:', error); }
}

async function loadContactData() {
    try {
        const doc = await db.collection('contact').doc('info').get();
        if (doc.exists) {
            const data = doc.data();
            document.getElementById('email').value = data.email || '';
            document.getElementById('whatsapp').value = data.whatsapp || '';
            document.getElementById('twitter').value = data.twitter || '';
            document.getElementById('linkedin').value = data.linkedin || '';
            document.getElementById('instagram').value = data.instagram || '';
            document.getElementById('github').value = data.github || '';
        }
    } catch (error) { console.error('Error:', error); }
}

async function saveGeneral() {
    try {
        await db.collection('site').doc('general').set({
            logoText: document.getElementById('logoText').value,
            logoUrl: document.getElementById('logoUrl').value,
            heroSubtitle: document.getElementById('heroSubtitle').value,
            heroTitle: document.getElementById('heroTitle').value,
            heroTitle2: document.getElementById('heroTitle2').value,
            heroDescription: document.getElementById('heroDescription').value,
            stat1: document.getElementById('stat1').value,
            stat2: document.getElementById('stat2').value,
            stat3: document.getElementById('stat3').value,
            footerText: document.getElementById('footerText').value
        });
        alert('✅ تم الحفظ بنجاح!');
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function saveContact() {
    try {
        await db.collection('contact').doc('info').set({
            email: document.getElementById('email').value,
            whatsapp: document.getElementById('whatsapp').value,
            twitter: document.getElementById('twitter').value,
            linkedin: document.getElementById('linkedin').value,
            instagram: document.getElementById('instagram').value,
            github: document.getElementById('github').value
        });
        alert('✅ تم الحفظ بنجاح!');
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

function showAddService() {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modalBody');
    body.innerHTML = `
        <h2>إضافة خدمة جديدة</h2>
        <div class="form-group">
            <label>العنوان:</label>
            <input type="text" id="serviceTitle" placeholder="مثال: تطوير المواقع">
        </div>
        <div class="form-group">
            <label>الوصف:</label>
            <textarea id="serviceDesc" rows="3" placeholder="وصف الخدمة..."></textarea>
        </div>
        <div class="form-group">
            <label>صورة الخدمة (URL):</label>
            <input type="url" id="serviceImage" placeholder="https://example.com/image.jpg">
            <small>اتركه فارغاً لاستخدام الأيقونة فقط</small>
        </div>
        <div class="form-group">
            <label>الأيقونة:</label>
            <input type="text" id="serviceIcon" placeholder="fas fa-robot">
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>الحجم:</label>
                <select id="serviceSize">
                    <option value="small">صغير</option>
                    <option value="medium" selected>متوسط</option>
                    <option value="large">كبير</option>
                </select>
            </div>
            <div class="form-group">
                <label>مفعل:</label>
                <select id="serviceActive">
                    <option value="true" selected>نعم</option>
                    <option value="false">لا</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label>الترتيب:</label>
            <input type="number" id="serviceOrder" value="1" min="1">
        </div>
        <button onclick="addService()" class="save-btn">إضافة</button>
    `;
    modal.style.display = 'flex';
}

async function addService() {
    try {
        await db.collection('services').add({
            title: document.getElementById('serviceTitle').value,
            description: document.getElementById('serviceDesc').value,
            imageUrl: document.getElementById('serviceImage').value || '',
            icon: document.getElementById('serviceIcon').value,
            size: document.getElementById('serviceSize').value,
            active: document.getElementById('serviceActive').value === 'true',
            order: parseInt(document.getElementById('serviceOrder').value),
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        closeModal();
        loadServicesList();
        alert('✅ تمت الإضافة بنجاح!');
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function editService(id) {
    try {
        const doc = await db.collection('services').doc(id).get();
        const service = doc.data();
        const modal = document.getElementById('modal');
        const body = document.getElementById('modalBody');
        body.innerHTML = `
            <h2>تعديل الخدمة</h2>
            <div class="form-group">
                <label>العنوان:</label>
                <input type="text" id="serviceTitle" value="${service.title || ''}">
            </div>
            <div class="form-group">
                <label>الوصف:</label>
                <textarea id="serviceDesc" rows="3">${service.description || ''}</textarea>
            </div>
            <div class="form-group">
                <label>صورة الخدمة:</label>
                <input type="url" id="serviceImage" value="${service.imageUrl || ''}">
            </div>
            <div class="form-group">
                <label>الأيقونة:</label>
                <input type="text" id="serviceIcon" value="${service.icon || ''}">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>الحجم:</label>
                    <select id="serviceSize">
                        <option value="small" ${service.size === 'small' ? 'selected' : ''}>صغير</option>
                        <option value="medium" ${service.size === 'medium' ? 'selected' : ''}>متوسط</option>
                        <option value="large" ${service.size === 'large' ? 'selected' : ''}>كبير</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>مفعل:</label>
                    <select id="serviceActive">
                        <option value="true" ${service.active !== false ? 'selected' : ''}>نعم</option>
                        <option value="false" ${service.active === false ? 'selected' : ''}>لا</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label>الترتيب:</label>
                <input type="number" id="serviceOrder" value="${service.order || 1}" min="1">
            </div>
            <button onclick="updateService('${id}')" class="save-btn">تحديث</button>
        `;
        modal.style.display = 'flex';
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function updateService(id) {
    try {
        await db.collection('services').doc(id).update({
            title: document.getElementById('serviceTitle').value,
            description: document.getElementById('serviceDesc').value,
            imageUrl: document.getElementById('serviceImage').value,
            icon: document.getElementById('serviceIcon').value,
            size: document.getElementById('serviceSize').value,
            active: document.getElementById('serviceActive').value === 'true',
            order: parseInt(document.getElementById('serviceOrder').value)
        });
        closeModal();
        loadServicesList();
        alert('✅ تم التحديث بنجاح!');
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function loadServicesList() {
    try {
        const snapshot = await db.collection('services').orderBy('order').get();
        const list = document.getElementById('servicesList');
        list.innerHTML = '';
        snapshot.forEach(doc => {
            const service = doc.data();
            const card = document.createElement('div');
            card.className = 'item-card ' + (!service.active ? 'inactive' : '');
            card.innerHTML = `
                <div class="item-info">
                    <h3>${service.title} ${!service.active ? '<span class="badge-inactive">(معطل)</span>' : ''}</h3>
                    <p>${service.description ? service.description.substring(0, 80) + '...' : ''}</p>
                    ${service.imageUrl ? '<img src="' + service.imageUrl + '" alt="' + service.title + '" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px; margin-top: 10px;">' : ''}
                </div>
                <div class="item-actions">
                    <button class="toggle-btn" onclick="toggleService('${doc.id}', ${service.active})">
                        ${service.active ? '❌ تعطيل' : '✅ تفعيل'}
                    </button>
                    <button class="edit-btn" onclick="editService('${doc.id}')">تعديل</button>
                    <button class="delete-btn" onclick="deleteService('${doc.id}')">حذف</button>
                </div>
            `;
            list.appendChild(card);
        });
    } catch (error) { console.error('Error:', error); }
}

async function toggleService(id, currentStatus) {
    try {
        await db.collection('services').doc(id).update({ active: !currentStatus });
        loadServicesList();
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function deleteService(id) {
    if (confirm('هل أنت متأكد من حذف هذه الخدمة؟')) {
        try {
            await db.collection('services').doc(id).delete();
            loadServicesList();
            alert('✅ تم الحذف بنجاح!');
        } catch (error) { alert('❌ خطأ: ' + error.message); }
    }
}

function showAddProject() {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modalBody');
    body.innerHTML = `
        <h2>إضافة مشروع جديد</h2>
        <div class="form-group">
            <label>عنوان المشروع:</label>
            <input type="text" id="projectTitle" placeholder="مثال: موقع شركة تقنية">
        </div>
        <div class="form-group">
            <label>الوصف:</label>
            <textarea id="projectDesc" rows="3" placeholder="وصف المشروع..."></textarea>
        </div>
        <div class="form-group">
            <label>التصنيف:</label>
            <input type="text" id="projectCategory" placeholder="مثال: موقع تعريفي">
        </div>
        <div class="form-group">
            <label>صورة المشروع (URL):</label>
            <input type="url" id="projectImage" placeholder="https://example.com/image.jpg" required>
        </div>
        <div class="form-group">
            <label>رابط المشروع:</label>
            <input type="url" id="projectLink" placeholder="https://example.com">
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>الحجم:</label>
                <select id="projectSize">
                    <option value="small">صغير</option>
                    <option value="medium" selected>متوسط</option>
                    <option value="large">كبير</option>
                    <option value="featured">مميز</option>
                </select>
            </div>
            <div class="form-group">
                <label>مفعل:</label>
                <select id="projectActive">
                    <option value="true" selected>نعم</option>
                    <option value="false">لا</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label>الترتيب:</label>
            <input type="number" id="projectOrder" value="1" min="1">
        </div>
        <button onclick="addProject()" class="save-btn">إضافة</button>
    `;
    modal.style.display = 'flex';
}

async function addProject() {
    try {
        await db.collection('projects').add({
            title: document.getElementById('projectTitle').value,
            description: document.getElementById('projectDesc').value,
            category: document.getElementById('projectCategory').value,
            imageUrl: document.getElementById('projectImage').value,
            link: document.getElementById('projectLink').value,
            size: document.getElementById('projectSize').value,
            active: document.getElementById('projectActive').value === 'true',
            order: parseInt(document.getElementById('projectOrder').value),
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        closeModal();
        loadProjectsList();
        alert('✅ تمت الإضافة بنجاح!');
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function loadProjectsList() {
    try {
        const snapshot = await db.collection('projects').orderBy('order').get();
        const list = document.getElementById('projectsList');
        list.innerHTML = '';
        snapshot.forEach(doc => {
            const project = doc.data();
            const card = document.createElement('div');
            card.className = 'item-card ' + (!project.active ? 'inactive' : '');
            card.innerHTML = `
                <div class="item-info">
                    <h3>${project.title} ${!project.active ? '<span class="badge-inactive">(معطل)</span>' : ''}</h3>
                    <p>${project.category || ''}</p>
                    ${project.imageUrl ? '<img src="' + project.imageUrl + '" alt="' + project.title + '" style="width: 80px; height: 50px; object-fit: cover; border-radius: 8px; margin-top: 10px;">' : ''}
                </div>
                <div class="item-actions">
                    <button class="toggle-btn" onclick="toggleProject('${doc.id}', ${project.active})">
                        ${project.active ? '❌ تعطيل' : '✅ تفعيل'}
                    </button>
                    <button class="edit-btn" onclick="editProject('${doc.id}')">تعديل</button>
                    <button class="delete-btn" onclick="deleteProject('${doc.id}')">حذف</button>
                </div>
            `;
            list.appendChild(card);
        });
    } catch (error) { console.error('Error:', error); }
}

async function toggleProject(id, currentStatus) {
    try {
        await db.collection('projects').doc(id).update({ active: !currentStatus });
        loadProjectsList();
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function editProject(id) {
    try {
        const doc = await db.collection('projects').doc(id).get();
        const project = doc.data();
        const modal = document.getElementById('modal');
        const body = document.getElementById('modalBody');
        body.innerHTML = `
            <h2>تعديل المشروع</h2>
            <div class="form-group">
                <label>عنوان المشروع:</label>
                <input type="text" id="projectTitle" value="${project.title || ''}">
            </div>
            <div class="form-group">
                <label>الوصف:</label>
                <textarea id="projectDesc" rows="3">${project.description || ''}</textarea>
            </div>
            <div class="form-group">
                <label>التصنيف:</label>
                <input type="text" id="projectCategory" value="${project.category || ''}">
            </div>
            <div class="form-group">
                <label>صورة المشروع:</label>
                <input type="url" id="projectImage" value="${project.imageUrl || ''}">
            </div>
            <div class="form-group">
                <label>رابط المشروع:</label>
                <input type="url" id="projectLink" value="${project.link || ''}">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>الحجم:</label>
                    <select id="projectSize">
                        <option value="small" ${project.size === 'small' ? 'selected' : ''}>صغير</option>
                        <option value="medium" ${project.size === 'medium' ? 'selected' : ''}>متوسط</option>
                        <option value="large" ${project.size === 'large' ? 'selected' : ''}>كبير</option>
                        <option value="featured" ${project.size === 'featured' ? 'selected' : ''}>مميز</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>مفعل:</label>
                    <select id="projectActive">
                        <option value="true" ${project.active !== false ? 'selected' : ''}>نعم</option>
                        <option value="false" ${project.active === false ? 'selected' : ''}>لا</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label>الترتيب:</label>
                <input type="number" id="projectOrder" value="${project.order || 1}" min="1">
            </div>
            <button onclick="updateProject('${id}')" class="save-btn">تحديث</button>
        `;
        modal.style.display = 'flex';
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function updateProject(id) {
    try {
        await db.collection('projects').doc(id).update({
            title: document.getElementById('projectTitle').value,
            description: document.getElementById('projectDesc').value,
            category: document.getElementById('projectCategory').value,
            imageUrl: document.getElementById('projectImage').value,
            link: document.getElementById('projectLink').value,
            size: document.getElementById('projectSize').value,
            active: document.getElementById('projectActive').value === 'true',
            order: parseInt(document.getElementById('projectOrder').value)
        });
        closeModal();
        loadProjectsList();
        alert('✅ تم التحديث بنجاح!');
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function deleteProject(id) {
    if (confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
        try {
            await db.collection('projects').doc(id).delete();
            loadProjectsList();
            alert('✅ تم الحذف بنجاح!');
        } catch (error) { alert('❌ خطأ: ' + error.message); }
    }
}

async function resetSection(section) {
    if (confirm('⚠️ هل أنت متأكد من إعادة ضبط هذا القسم؟\nسيتم حذف جميع العناصر!')) {
        try {
            if (section === 'general') {
                await db.collection('site').doc('general').delete();
                alert('✅ تم إعادة الضبط بنجاح!');
                loadGeneralData();
            } else {
                const snapshot = await db.collection(section).get();
                const batch = db.batch();
                snapshot.forEach(doc => { batch.delete(doc.ref); });
                await batch.commit();
                alert('✅ تم إعادة الضبط بنجاح!');
                if (section === 'services') loadServicesList();
                if (section === 'projects') loadProjectsList();
            }
        } catch (error) {
            alert('❌ خطأ: ' + error.message);
        }
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) closeModal();
        }    await loadContactData();
}

async function loadGeneralData() {
    try {
        const doc = await db.collection('site').doc('general').get();
        if (doc.exists) {
            const data = doc.data();
            document.getElementById('logoText').value = data.logoText || '';
            document.getElementById('logoUrl').value = data.logoUrl || '';
            document.getElementById('heroSubtitle').value = data.heroSubtitle || '';
            document.getElementById('heroTitle').value = data.heroTitle || '';
            document.getElementById('heroTitle2').value = data.heroTitle2 || '';
            document.getElementById('heroDescription').value = data.heroDescription || '';
            document.getElementById('stat1').value = data.stat1 || '';
            document.getElementById('stat2').value = data.stat2 || '';
            document.getElementById('stat3').value = data.stat3 || '';
            document.getElementById('footerText').value = data.footerText || '';
        }
    } catch (error) { console.error('Error:', error); }
}

async function loadContactData() {
    try {
        const doc = await db.collection('contact').doc('info').get();
        if (doc.exists) {
            const data = doc.data();
            document.getElementById('email').value = data.email || '';
            document.getElementById('whatsapp').value = data.whatsapp || '';
            document.getElementById('twitter').value = data.twitter || '';
            document.getElementById('linkedin').value = data.linkedin || '';
            document.getElementById('instagram').value = data.instagram || '';
            document.getElementById('github').value = data.github || '';
        }
    } catch (error) { console.error('Error:', error); }
}

async function saveGeneral() {
    try {
        await db.collection('site').doc('general').set({
            logoText: document.getElementById('logoText').value,
            logoUrl: document.getElementById('logoUrl').value,
            heroSubtitle: document.getElementById('heroSubtitle').value,
            heroTitle: document.getElementById('heroTitle').value,
            heroTitle2: document.getElementById('heroTitle2').value,
            heroDescription: document.getElementById('heroDescription').value,
            stat1: document.getElementById('stat1').value,
            stat2: document.getElementById('stat2').value,
            stat3: document.getElementById('stat3').value,
            footerText: document.getElementById('footerText').value
        });
        alert('✅ تم الحفظ بنجاح!');
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function saveContact() {
    try {
        await db.collection('contact').doc('info').set({
            email: document.getElementById('email').value,
            whatsapp: document.getElementById('whatsapp').value,
            twitter: document.getElementById('twitter').value,
            linkedin: document.getElementById('linkedin').value,
            instagram: document.getElementById('instagram').value,
            github: document.getElementById('github').value
        });
        alert('✅ تم الحفظ بنجاح!');
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

function showAddService() {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modalBody');
    body.innerHTML = `
        <h2>إضافة خدمة جديدة</h2>
        <div class="form-group">
            <label>العنوان:</label>
            <input type="text" id="serviceTitle" placeholder="مثال: تطوير المواقع">
        </div>
        <div class="form-group">
            <label>الوصف:</label>
            <textarea id="serviceDesc" rows="3" placeholder="وصف الخدمة..."></textarea>
        </div>
        <div class="form-group">
            <label>صورة الخدمة (URL):</label>
            <input type="url" id="serviceImage" placeholder="https://example.com/image.jpg">
            <small>اتركه فارغاً لاستخدام الأيقونة فقط</small>
        </div>
        <div class="form-group">
            <label>الأيقونة:</label>
            <input type="text" id="serviceIcon" placeholder="fas fa-robot">
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>الحجم:</label>
                <select id="serviceSize">
                    <option value="small">صغير</option>
                    <option value="medium" selected>متوسط</option>
                    <option value="large">كبير</option>
                </select>
            </div>
            <div class="form-group">
                <label>مفعل:</label>
                <select id="serviceActive">
                    <option value="true" selected>نعم</option>
                    <option value="false">لا</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label>الترتيب:</label>
            <input type="number" id="serviceOrder" value="1" min="1">
        </div>
        <button onclick="addService()" class="save-btn">إضافة</button>
    `;
    modal.style.display = 'flex';
}

async function addService() {
    try {
        await db.collection('services').add({
            title: document.getElementById('serviceTitle').value,
            description: document.getElementById('serviceDesc').value,
            imageUrl: document.getElementById('serviceImage').value || '',
            icon: document.getElementById('serviceIcon').value,
            size: document.getElementById('serviceSize').value,
            active: document.getElementById('serviceActive').value === 'true',
            order: parseInt(document.getElementById('serviceOrder').value),
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        closeModal();
        loadServicesList();
        alert('✅ تمت الإضافة بنجاح!');
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function editService(id) {
    try {
        const doc = await db.collection('services').doc(id).get();
        const service = doc.data();
        const modal = document.getElementById('modal');
        const body = document.getElementById('modalBody');
        body.innerHTML = `
            <h2>تعديل الخدمة</h2>
            <div class="form-group">
                <label>العنوان:</label>
                <input type="text" id="serviceTitle" value="${service.title || ''}">
            </div>
            <div class="form-group">
                <label>الوصف:</label>
                <textarea id="serviceDesc" rows="3">${service.description || ''}</textarea>
            </div>
            <div class="form-group">
                <label>صورة الخدمة:</label>
                <input type="url" id="serviceImage" value="${service.imageUrl || ''}">
            </div>
            <div class="form-group">
                <label>الأيقونة:</label>
                <input type="text" id="serviceIcon" value="${service.icon || ''}">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>الحجم:</label>
                    <select id="serviceSize">
                        <option value="small" ${service.size === 'small' ? 'selected' : ''}>صغير</option>
                        <option value="medium" ${service.size === 'medium' ? 'selected' : ''}>متوسط</option>
                        <option value="large" ${service.size === 'large' ? 'selected' : ''}>كبير</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>مفعل:</label>
                    <select id="serviceActive">
                        <option value="true" ${service.active !== false ? 'selected' : ''}>نعم</option>
                        <option value="false" ${service.active === false ? 'selected' : ''}>لا</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label>الترتيب:</label>
                <input type="number" id="serviceOrder" value="${service.order || 1}" min="1">
            </div>
            <button onclick="updateService('${id}')" class="save-btn">تحديث</button>
        `;
        modal.style.display = 'flex';
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function updateService(id) {
    try {
        await db.collection('services').doc(id).update({
            title: document.getElementById('serviceTitle').value,
            description: document.getElementById('serviceDesc').value,
            imageUrl: document.getElementById('serviceImage').value,
            icon: document.getElementById('serviceIcon').value,
            size: document.getElementById('serviceSize').value,
            active: document.getElementById('serviceActive').value === 'true',
            order: parseInt(document.getElementById('serviceOrder').value)
        });
        closeModal();
        loadServicesList();
        alert('✅ تم التحديث بنجاح!');
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function loadServicesList() {
    try {
        const snapshot = await db.collection('services').orderBy('order').get();
        const list = document.getElementById('servicesList');
        list.innerHTML = '';
        snapshot.forEach(doc => {
            const service = doc.data();
            const card = document.createElement('div');
            card.className = 'item-card ' + (!service.active ? 'inactive' : '');
            card.innerHTML = `
                <div class="item-info">
                    <h3>${service.title} ${!service.active ? '<span class="badge-inactive">(معطل)</span>' : ''}</h3>
                    <p>${service.description ? service.description.substring(0, 80) + '...' : ''}</p>
                    ${service.imageUrl ? '<img src="' + service.imageUrl + '" alt="' + service.title + '" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px; margin-top: 10px;">' : ''}
                </div>
                <div class="item-actions">
                    <button class="toggle-btn" onclick="toggleService('${doc.id}', ${service.active})">
                        ${service.active ? '❌ تعطيل' : '✅ تفعيل'}
                    </button>
                    <button class="edit-btn" onclick="editService('${doc.id}')">تعديل</button>
                    <button class="delete-btn" onclick="deleteService('${doc.id}')">حذف</button>
                </div>
            `;
            list.appendChild(card);
        });
    } catch (error) { console.error('Error:', error); }
}

async function toggleService(id, currentStatus) {
    try {
        await db.collection('services').doc(id).update({ active: !currentStatus });
        loadServicesList();
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function deleteService(id) {
    if (confirm('هل أنت متأكد من حذف هذه الخدمة؟')) {
        try {
            await db.collection('services').doc(id).delete();
            loadServicesList();
            alert('✅ تم الحذف بنجاح!');
        } catch (error) { alert('❌ خطأ: ' + error.message); }
    }
}

function showAddProject() {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modalBody');
    body.innerHTML = `
        <h2>إضافة مشروع جديد</h2>
        <div class="form-group">
            <label>عنوان المشروع:</label>
            <input type="text" id="projectTitle" placeholder="مثال: موقع شركة تقنية">
        </div>
        <div class="form-group">
            <label>الوصف:</label>
            <textarea id="projectDesc" rows="3" placeholder="وصف المشروع..."></textarea>
        </div>
        <div class="form-group">
            <label>التصنيف:</label>
            <input type="text" id="projectCategory" placeholder="مثال: موقع تعريفي">
        </div>
        <div class="form-group">
            <label>صورة المشروع (URL):</label>
            <input type="url" id="projectImage" placeholder="https://example.com/image.jpg" required>
        </div>
        <div class="form-group">
            <label>رابط المشروع:</label>
            <input type="url" id="projectLink" placeholder="https://example.com">
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>الحجم:</label>
                <select id="projectSize">
                    <option value="small">صغير</option>
                    <option value="medium" selected>متوسط</option>
                    <option value="large">كبير</option>
                    <option value="featured">مميز</option>
                </select>
            </div>
            <div class="form-group">
                <label>مفعل:</label>
                <select id="projectActive">
                    <option value="true" selected>نعم</option>
                    <option value="false">لا</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label>الترتيب:</label>
            <input type="number" id="projectOrder" value="1" min="1">
        </div>
        <button onclick="addProject()" class="save-btn">إضافة</button>
    `;
    modal.style.display = 'flex';
}

async function addProject() {
    try {
        await db.collection('projects').add({
            title: document.getElementById('projectTitle').value,
            description: document.getElementById('projectDesc').value,
            category: document.getElementById('projectCategory').value,
            imageUrl: document.getElementById('projectImage').value,
            link: document.getElementById('projectLink').value,
            size: document.getElementById('projectSize').value,
            active: document.getElementById('projectActive').value === 'true',
            order: parseInt(document.getElementById('projectOrder').value),
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        closeModal();
        loadProjectsList();
        alert('✅ تمت الإضافة بنجاح!');
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function loadProjectsList() {
    try {
        const snapshot = await db.collection('projects').orderBy('order').get();
        const list = document.getElementById('projectsList');
        list.innerHTML = '';
        snapshot.forEach(doc => {
            const project = doc.data();
            const card = document.createElement('div');
            card.className = 'item-card ' + (!project.active ? 'inactive' : '');
            card.innerHTML = `
                <div class="item-info">
                    <h3>${project.title} ${!project.active ? '<span class="badge-inactive">(معطل)</span>' : ''}</h3>
                    <p>${project.category || ''}</p>
                    ${project.imageUrl ? '<img src="' + project.imageUrl + '" alt="' + project.title + '" style="width: 80px; height: 50px; object-fit: cover; border-radius: 8px; margin-top: 10px;">' : ''}
                </div>
                <div class="item-actions">
                    <button class="toggle-btn" onclick="toggleProject('${doc.id}', ${project.active})">
                        ${project.active ? '❌ تعطيل' : '✅ تفعيل'}
                    </button>
                    <button class="edit-btn" onclick="editProject('${doc.id}')">تعديل</button>
                    <button class="delete-btn" onclick="deleteProject('${doc.id}')">حذف</button>
                </div>
            `;
            list.appendChild(card);
        });
    } catch (error) { console.error('Error:', error); }
}

async function toggleProject(id, currentStatus) {
    try {
        await db.collection('projects').doc(id).update({ active: !currentStatus });
        loadProjectsList();
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function editProject(id) {
    try {
        const doc = await db.collection('projects').doc(id).get();
        const project = doc.data();
        const modal = document.getElementById('modal');
        const body = document.getElementById('modalBody');
        body.innerHTML = `
            <h2>تعديل المشروع</h2>
            <div class="form-group">
                <label>عنوان المشروع:</label>
                <input type="text" id="projectTitle" value="${project.title || ''}">
            </div>
            <div class="form-group">
                <label>الوصف:</label>
                <textarea id="projectDesc" rows="3">${project.description || ''}</textarea>
            </div>
            <div class="form-group">
                <label>التصنيف:</label>
                <input type="text" id="projectCategory" value="${project.category || ''}">
            </div>
            <div class="form-group">
                <label>صورة المشروع:</label>
                <input type="url" id="projectImage" value="${project.imageUrl || ''}">
            </div>
            <div class="form-group">
                <label>رابط المشروع:</label>
                <input type="url" id="projectLink" value="${project.link || ''}">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>الحجم:</label>
                    <select id="projectSize">
                        <option value="small" ${project.size === 'small' ? 'selected' : ''}>صغير</option>
                        <option value="medium" ${project.size === 'medium' ? 'selected' : ''}>متوسط</option>
                        <option value="large" ${project.size === 'large' ? 'selected' : ''}>كبير</option>
                        <option value="featured" ${project.size === 'featured' ? 'selected' : ''}>مميز</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>مفعل:</label>
                    <select id="projectActive">
                        <option value="true" ${project.active !== false ? 'selected' : ''}>نعم</option>
                        <option value="false" ${project.active === false ? 'selected' : ''}>لا</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label>الترتيب:</label>
                <input type="number" id="projectOrder" value="${project.order || 1}" min="1">
            </div>
            <button onclick="updateProject('${id}')" class="save-btn">تحديث</button>
        `;
        modal.style.display = 'flex';
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function updateProject(id) {
    try {
        await db.collection('projects').doc(id).update({
            title: document.getElementById('projectTitle').value,
            description: document.getElementById('projectDesc').value,
            category: document.getElementById('projectCategory').value,
            imageUrl: document.getElementById('projectImage').value,
            link: document.getElementById('projectLink').value,
            size: document.getElementById('projectSize').value,
            active: document.getElementById('projectActive').value === 'true',
            order: parseInt(document.getElementById('projectOrder').value)
        });
        closeModal();
        loadProjectsList();
        alert('✅ تم التحديث بنجاح!');
    } catch (error) { alert('❌ خطأ: ' + error.message); }
}

async function deleteProject(id) {
    if (confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
        try {
            await db.collection('projects').doc(id).delete();
            loadProjectsList();
            alert('✅ تم الحذف بنجاح!');
        } catch (error) { alert('❌ خطأ: ' + error.message); }
    }
}

async function resetSection(section) {
    if (confirm('⚠️ هل أنت متأكد من إعادة ضبط هذا القسم؟\nسيتم حذف جميع العناصر!')) {
        try {
            if (section === 'general') {
                await db.collection('site').doc('general').delete();
                alert('✅ تم إعادة الضبط بنجاح!');
                loadGeneralData();
            } else {
                const snapshot = await db.collection(section).get();
                const batch = db.batch();
                snapshot.forEach(doc => { batch.delete(doc.ref); });
                await batch.commit();
                alert('✅ تم إعادة الضبط بنجاح!');
                if (section === 'services') loadServicesList();
                if (section === 'projects') loadProjectsList();
            }
        } catch (error) {
            alert('❌ خطأ: ' + error.message);
        }
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) closeModal();
}
