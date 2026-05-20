// /**
//  * هذا الملف مخصص فقط لإرسال واستقبال البيانات من الخادم (Back-end)
//  * لا يحتوي على أي تفاعل مع الـ HTML أو الواجهة
//  */

// async function sendMessageToAPI(payload) {
//     const apiUrl = 'https://sportslite.app/api/v1/messages/create.php'; 

//     try {
//         const response = await fetch(apiUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify(payload)
//         });

//         const result = await response.json();

//         // إرجاع كائن يحتوي على حالة النجاح والبيانات
//         return {
//             success: response.ok,
//             data: result
//         };

//     } catch (error) {
//         console.error("API Error:", error);
//         // في حال انقطاع النت أو تعطل السيرفر
//         return {
//             success: false,
//             message: "حدث خطأ في الاتصال بالخادم. يرجى التأكد من الإنترنت."
//         };
//     }
// }


// مسار ملف: scripts/api/messages-api.js

// تحديد الرابط الأساسي للـ API لتسهيل التعديل مستقبلاً
const API_BASE_URL = 'https://sportslite.app/api/v1';

/**
 * وظيفة لإرسال رسالة تواصل جديدة إلى الخادم
 * @param {Object} messageData - البيانات المرسلة (الاسم، الإيميل، الهاتف، الرسالة)
 * @returns {Promise<Object>} - يعيد الرد من السيرفر بصيغة JSON
 */
async function sendMessageToAPI(messageData) {
    try {
        // إرسال الطلب إلى السيرفر
        const response = await fetch(`${API_BASE_URL}/messages/`, {
            method: 'POST', // نوع الطلب
            headers: {
                'Content-Type': 'application/json', // إخبار السيرفر أن البيانات المرسلة هي JSON
                'Accept': 'application/json'        // توقع استلام JSON من السيرفر
                // ملاحظة: لم نقم بإضافة أي توكن للحماية بناءً على طلبك
            },
            body: JSON.stringify(messageData) // تحويل كائن الجافا سكريبت إلى نص JSON
        });

        // قراءة الرد القادم من السيرفر كـ JSON
        const responseData = await response.json();

        // التحقق مما إذا كان الطلب غير ناجح (Status Code ليس في نطاق 200-299)
        if (!response.ok) {
            // رمي خطأ ليتم التقاطه في ملف الـ UI
            throw new Error(responseData.message || 'حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة لاحقاً.');
        }

        // إرجاع البيانات في حال النجاح (ليتم استخدامها في ملف ui.js لعرض رسالة نجاح مثلاً)
        return responseData;

    } catch (error) {
        // طباعة الخطأ في الكونسول لتسهيل عملية التتبع (Debugging)
        console.error('API Error (sendMessage):', error);
        
        // إعادة رمي الخطأ ليتم التعامل معه في ملف الواجهة (ui.js) وعرضه للمستخدم
        throw error; 
    }
}