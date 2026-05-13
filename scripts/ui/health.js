document.addEventListener('DOMContentLoaded', () => {
const filterBtns = document.querySelectorAll('.filter-btn');
const articles = Array.from(document.querySelectorAll('.article-card'));
const pageNumbersContainer = document.getElementById('page-numbers');
const prevBtn = document.getElementById('prev-page');
const nextBtn = document.getElementById('next-page');
let currentCategory = 'all';
let currentPage = 1;
const itemsPerPage = 4; // عدد المقالات المعروضة في كل صفحة
// دالة لتحديث العرض بناءً على الفلتر والصفحة
function updateDisplay() {
    // 1. تصفية المقالات
    const filteredArticles = articles.filter(article => {
        return currentCategory === 'all' || article.getAttribute('data-category') === currentCategory;
    });
    // 2. حساب الصفحات
    const totalPages = Math.ceil(filteredArticles.length / itemsPerPage) || 1;
    if (currentPage > totalPages) currentPage = totalPages;
    // 3. تحديد نطاق العرض
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // 4. إظهار/إخفاء الكروت
    articles.forEach(article => {
        article.style.display = 'none'; // إخفاء الكل أولاً
    });
    filteredArticles.slice(startIndex, endIndex).forEach(article => {
        article.style.display = 'block'; // إظهار المطلوب فقط
    });
    // 5. تحديث أزرار الترقيم
    renderPagination(totalPages);
}
// دالة رسم أزرار الأرقام
function renderPagination(totalPages) {
    pageNumbersContainer.innerHTML = '';
    
    // إذا لم يكن هناك كروت كافية لصفحتين، أخفِ الترقيم
    if(totalPages <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        return;
    } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    }
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        
        if (i === currentPage) {
            btn.className = 'flex items-center justify-center w-6 h-6 rounded-full bg-white text-black font-bold text-xs transition-colors cursor-pointer';
        } else {
            btn.className = 'flex items-center justify-center w-6 h-6 rounded-full bg-transparent text-gray-500 hover:text-white font-bold text-xs transition-colors cursor-pointer';
        }
        btn.addEventListener('click', () => {
            currentPage = i;
            updateDisplay();
            // العودة لأعلى قسم المقالات عند تقليب الصفحة
            document.getElementById('articles-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        pageNumbersContainer.appendChild(btn);
    }
    // تحديث حالة الأسهم
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}
// أحداث أزرار الفلترة (التصنيفات)
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // إزالة التنسيق النشط من كل الأزرار
        filterBtns.forEach(b => {
            b.classList.remove('bg-[#FF5900]', 'text-white', 'shadow-inner');
            b.classList.add('text-[#FF5900]');
        });
        
        // إضافة التنسيق النشط للزر المضغوط
        e.target.classList.add('bg-[#FF5900]', 'text-white', 'shadow-inner');
        e.target.classList.remove('text-[#FF5900]');
        currentCategory = e.target.getAttribute('data-filter');
        currentPage = 1; // العودة للصفحة الأولى عند تغيير الفلتر
        updateDisplay();
    });
});
// أحداث أسهم التقليب
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateDisplay();
    }
});
nextBtn.addEventListener('click', () => {
    const filteredLength = articles.filter(a => currentCategory === 'all' || a.getAttribute('data-category') === currentCategory).length;
    const totalPages = Math.ceil(filteredLength / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        updateDisplay();
    }
});
// التشغيل الأولي
updateDisplay();
});