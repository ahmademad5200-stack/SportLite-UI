const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');
const body = document.body;
// دالة فتح القائمة
function openMenu() {
    mobileMenu.classList.remove('-translate-x-full'); // تحريك من اليسار للداخل
    menuOverlay.classList.remove('opacity-0'); // إظهار الخلفية المعتمة
    menuOverlay.classList.add('opacity-100');
    body.classList.add('overflow-hidden'); // منع تمرير الصفحة بالخلفية
}
// دالة إغلاق القائمة
function closeMenu() {
    mobileMenu.classList.add('-translate-x-full'); // تحريك لليسار للخارج
    menuOverlay.classList.remove('opacity-100'); // إخفاء الخلفية المعتمة
    menuOverlay.classList.add('opacity-0');
    body.classList.remove('overflow-hidden'); // السماح بالتمرير مجدداً
}
// الاستماع للأحداث
menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu); // إغلاق عند النقر على الخلفية المعتمة
// دالة setActive الأصلية من كودك (للدسكتاوب)
function setActive(element) {
    // إزالة النشاط من الجميع
    document.querySelectorAll('.nav-item').forEach(item => {
        const link = item.querySelector('.nav-link');
        const line = item.querySelector('.nav-line');

        link.classList.remove('text-[#FF5900]', 'font-bold');
        link.classList.add('text-gray-200');
        line.classList.remove('block');
        line.classList.add('hidden');
    });
    // إضافة النشاط للعنصر المحدد
    const activeLink = element.querySelector('.nav-link');
    const activeLine = element.querySelector('.nav-line');

    activeLink.classList.add('text-[#FF5900]', 'font-bold');
    activeLink.classList.remove('text-gray-200');
    activeLine.classList.add('block');
    activeLine.classList.remove('hidden');
}

tailwind.config = {
    theme: {
        extend: {
            // إضافة أنيميشن الدوران للأيقونة إذا لم تكن موجودة في ملف الإعدادات
            animation: {
                'spin-slow': 'spin 10s linear infinite',
            }
        }
    }
}

function setActive(clickedElement) {
    // 1. تحديد جميع الروابط الموجودة في القائمة
    const navItems = document.querySelectorAll('.nav-item');

    // 2. إزالة حالة التفعيل (اللون البرتقالي والخط) من جميع الروابط
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const line = item.querySelector('.nav-line');

        // إرجاع لون الخط للرمادي
        link.classList.remove('text-[#FF5900]', 'font-bold');
        link.classList.add('text-gray-200', 'hover:text-[#FF5900]');

        // إخفاء الخط المتدرج
        line.classList.remove('block');
        line.classList.add('hidden');
    });

    // 3. إضافة حالة التفعيل للرابط الذي تم الضغط عليه فقط
    const activeLink = clickedElement.querySelector('.nav-link');
    const activeLine = clickedElement.querySelector('.nav-line');

    // تغيير لون الخط للبرتقالي
    activeLink.classList.remove('text-gray-200', 'hover:text-[#FF5900]');
    activeLink.classList.add('text-[#FF5900]', 'font-bold');

    // إظهار الخط المتدرج تحته
    activeLine.classList.remove('hidden');
    activeLine.classList.add('block');
}



const sliderTrack = document.getElementById('sliderTrack');
const prevBtn = document.getElementById('prevSlideBtn');
const nextBtn = document.getElementById('nextSlideBtn');

let currentSlideIndex = 0;
// حساب عدد العناصر داخل السلايدر تلقائياً
const totalSlidesCount = sliderTrack.children.length;
// دالة الانتقال للرقم المحدد
function updateSliderPosition() {
    // إزاحة الشريط لليسار بنسبة 100% لكل عنصر
    sliderTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}
// عند الضغط على زر "التالي"
nextBtn.addEventListener('click', () => {
    if (currentSlideIndex < totalSlidesCount - 1) {
        currentSlideIndex++; // اذهب للصورة التالية
    } else {
        currentSlideIndex = 0; // إذا وصلنا للنهاية، ارجع للأولى
    }
    updateSliderPosition();
});
// عند الضغط على زر "السابق"
prevBtn.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--; // اذهب للصورة السابقة
    } else {
        currentSlideIndex = totalSlidesCount - 1; // إذا كنا بالأولى، اذهب للأخيرة
    }
    updateSliderPosition();
});




const track = document.getElementById('iconTrack');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const items = track.querySelectorAll('.slide-item');

let currentIndex = 0;
let visibleItems = window.innerWidth >= 768 ? 3 : 1; window.addEventListener('resize', () => {
    visibleItems = window.innerWidth >= 768 ? 3 : 1;
    updateSlider();
}); function updateSlider() {
    const maxIndex = items.length - visibleItems;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0; const percentage = currentIndex * (100 / visibleItems);
    track.style.transform = `translateX(${percentage}%)`;
} leftArrow.addEventListener('click', () => {
    const maxIndex = items.length - visibleItems;
    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
}); rightArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = items.length - visibleItems;
    }
    updateSlider();
});