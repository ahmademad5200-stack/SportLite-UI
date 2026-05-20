/**
 * هذا الملف مخصص فقط لإرسال واستقبال البيانات من الخادم (Back-end)
 * لا يحتوي على أي تفاعل مع الـ HTML أو الواجهة
 */

async function sendMessageToAPI(payload) {
    const apiUrl = 'https://sportslite.app/api/v1/messages/create.php'; 

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        // إرجاع كائن يحتوي على حالة النجاح والبيانات
        return {
            success: response.ok,
            data: result
        };

    } catch (error) {
        console.error("API Error:", error);
        // في حال انقطاع النت أو تعطل السيرفر
        return {
            success: false,
            message: "حدث خطأ في الاتصال بالخادم. يرجى التأكد من الإنترنت."
        };
    }
}