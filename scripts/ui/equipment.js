const deviceModal = document.getElementById('deviceModal');

function openDeviceModal() {
    deviceModal.classList.remove('hidden');
    deviceModal.classList.add('modal-active');
    // منع التمرير في الصفحة الخلفية
    document.body.style.overflow = 'hidden'; 
}
function closeDeviceModal() {
    deviceModal.classList.add('hidden');
    deviceModal.classList.remove('modal-active');
    // استعادة التمرير
    document.body.style.overflow = ''; 
}
// إغلاق النافذة عند الضغط على المساحة المعتمة خارجها
window.onclick = function(event) {
    if (event.target === deviceModal) {
        closeDeviceModal();
    }
}