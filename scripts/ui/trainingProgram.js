document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const dots = document.querySelectorAll('.dot');
    const cards = document.querySelectorAll('.card-item');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // حساب المسافة الديناميكية (عرض الكرت + الفراغ) لتعمل على جميع الشاشات
    const getScrollAmount = () => {
        const cardWidth = cards[0].offsetWidth;
        // نحصل على الـ gap من الستايل المطبق على الحاوية
        const gap = parseInt(window.getComputedStyle(slider).gap) || 0;
        return cardWidth + gap;
    };

    const updateDots = () => {
        let scrollPos = Math.abs(slider.scrollLeft);
        let scrollAmount = getScrollAmount();
        let activeIndex = Math.round(scrollPos / scrollAmount);

        // التأكد من عدم تجاوز عدد الكروت
        if(activeIndex >= dots.length) activeIndex = dots.length - 1;

        dots.forEach((dot, index) => {
            dot.classList.toggle('text-white', index === activeIndex);
            dot.classList.toggle('text-gray-600', index !== activeIndex);
        });
    };

    slider.addEventListener('scroll', updateDots);

    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });
    });
    
    // تحديث مبدئي للنقاط
    updateDots();
});
