const modal = document.getElementById('trainerModal');

// دالة فتح النافذة
function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('modal-active');
    // منع الصفحة الخلفية من التمرير أثناء فتح البوب أب
    document.body.style.overflow = 'hidden'; 
}
// دالة إغلاق النافذة
function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('modal-active');
    // استعادة تمرير الصفحة الخلفية
    document.body.style.overflow = ''; 
}
// إغلاق النافذة عند الضغط على المساحة الفارغة (الخلفية السوداء الشفافة)
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}