const footerHtmlCode = `

<footer class="relative w-full bg-cover bg-center bg-no-repeat mt-20" style="background-image: url('images/footer.jpg');" dir="rtl">
    
    <div class="absolute inset-0 bg-black/55"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 md:pt-20 pb-8 md:pb-12">
        
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-12 lg:gap-8">
            
            <div class="flex flex-col h-full">
                <h3 class="text-[#FF5900] text-base sm:text-lg lg:text-xl font-bold mb-5 lg:mb-8">معلومات تواصل</h3>
                
                <ul class="flex flex-col gap-4 lg:gap-6 text-white text-xs sm:text-sm lg:text-lg">
                    <li class="flex items-start lg:items-center gap-2 lg:gap-4">
                        <svg class="w-5 h-5 lg:w-6 lg:h-6 text-[#FF5900] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        <span class="leading-snug">سوريا , حلب , المحافظة</span>
                    </li>
                    <li class="flex items-center gap-2 lg:gap-4">
                        <svg class="w-5 h-5 lg:w-6 lg:h-6 text-[#FF5900] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.03 21c.76 0 .99-.65.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                        </svg>
                        <span dir="ltr">0963 933333333</span>
                    </li>
                    <li class="flex items-center gap-2 lg:gap-4">
                        <svg class="w-5 h-5 lg:w-6 lg:h-6 text-[#FF5900] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <span dir="ltr" class="text-xs sm:text-sm lg:text-base break-all">Sports Lite @gmail.com</span>
                    </li>
                </ul>

                <div class="hidden lg:flex items-center gap-6 mt-auto pt-8" dir="ltr">
                    <a href="#" class="text-[#FF5900] hover:text-white hover:scale-110 transition duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 9h-3v3h3v5h-3v5h-2v-5H7v-5h2V8a4 4 0 014-4h3v3h-2a1 1 0 00-1 1v1z"/><rect width="18" height="18" x="3" y="3" rx="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                    <a href="#" class="text-[#FF5900] hover:text-white hover:scale-110 transition duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                            <rect width="18" height="18" x="3" y="3" rx="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="4" stroke-linecap="round" stroke-linejoin="round"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 7.5v.001"/>
                        </svg>
                    </a>
                    <a href="#" class="text-[#FF5900] hover:text-white hover:scale-110 transition duration-300">
                        <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.004 4.126H5.078z"/>
                        </svg>
                    </a>
                    <a href="#" class="text-[#FF5900] hover:text-white hover:scale-110 transition duration-300">
                        <svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                        </svg>
                    </a>
                </div>
            </div>
        
            <div class="flex flex-col">
                <h3 class="text-[#FF5900] text-base sm:text-lg lg:text-xl font-bold mb-5 lg:mb-8">الدعم و التواصل</h3>
                <ul class="flex flex-col gap-4 lg:gap-5 text-white text-sm sm:text-base lg:text-lg">
                    <li><a href="#" class="hover:text-[#FF5900] transition duration-300">سياسة الخصوصية</a></li>
                    <li><a href="#" class="hover:text-[#FF5900] transition duration-300">الاسئلة الشائعة</a></li>
                    <li><a href="#" class="hover:text-[#FF5900] transition duration-300">الشروط والأحكام</a></li>
                    <li><a href="#" class="hover:text-[#FF5900] transition duration-300">تواصل معنا</a></li>
                </ul>
            </div>
        
            <div class="flex flex-col">
                <h3 class="text-[#FF5900] text-base sm:text-lg lg:text-xl font-bold mb-5 lg:mb-8">الروابط السريعة</h3>
                <ul class="flex flex-col gap-4 lg:gap-5 text-white text-sm sm:text-base lg:text-lg">
                    <li class="flex flex-col gap-2 w-fit">
                        <a href="#" class="hover:text-[#FF5900] transition duration-300">الرئيسية</a>
                        <div class="h-[2px] w-full bg-gradient-to-l from-[#FF5900] to-transparent rounded-full"></div>
                    </li>
                    <li><a href="#" class="hover:text-[#FF5900] transition duration-300">البرامج</a></li>
                    <li><a href="#" class="hover:text-[#FF5900] transition duration-300">المدربين</a></li>
                    <li><a href="#" class="hover:text-[#FF5900] transition duration-300">الاخبار</a></li>
                </ul>
            </div>
        
            <div class="flex flex-col gap-4 lg:gap-6">
                <div class="flex items-center gap-2 lg:gap-3 w-fit" dir="ltr">
                    <svg class="w-6 h-6 lg:w-7 lg:h-7 text-[#FF5900] animate-[spin_10s_linear_infinite]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43 1.43 1.43 2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43 1.43-1.43z"/>
                    </svg>
                    <div class="flex flex-col text-left">
                        <p class="text-base sm:text-lg lg:text-xl font-bold tracking-wide text-white">Sports <span class="text-[#FF5900]">Lite</span></p>
                        <p class="text-[9px] sm:text-[10px] lg:text-[11px] text-gray-300 -mt-1 font-sans whitespace-nowrap">Transform Your Body</p>
                    </div>
                </div>
                <p class="text-white text-xs sm:text-sm lg:text-lg leading-[1.8] lg:leading-[2.2] text-right">
                    أكثر من مجرد نادي رياضي، نحن مجتمع يهتم بصحتك وقوتك.<br>
                    ابدأ رحلتك نحو القوة والصحة معنا. ودعنا نوفر لك بيئة تدريب مثالية.
                </p>
            </div>

            <div class="flex lg:hidden justify-center items-center gap-5 col-span-2 mt-4 pt-8 border-t border-gray-700/50" dir="ltr">
                <a href="#" class="text-[#FF5900] hover:text-white transition duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 9h-3v3h3v5h-3v5h-2v-5H7v-5h2V8a4 4 0 014-4h3v3h-2a1 1 0 00-1 1v1z"/><rect width="18" height="18" x="3" y="3" rx="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                <a href="#" class="text-[#FF5900] hover:text-white transition duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                        <rect width="18" height="18" x="3" y="3" rx="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="4" stroke-linecap="round" stroke-linejoin="round"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 7.5v.001"/>
                    </svg>
                </a>
                <a href="#" class="text-[#FF5900] hover:text-white transition duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.004 4.126H5.078z"/>
                    </svg>
                </a>
                <a href="#" class="text-[#FF5900] hover:text-white transition duration-300">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                    </svg>
                </a>
            </div>
        
        </div>
    </div>

    <div class="relative z-10 w-full border-t border-[#FF5900]/30 bg-black/60 py-4 mt-4 lg:mt-0">
        <div class="max-w-7xl mx-auto px-4 flex justify-center items-center gap-2">
            <p class="text-gray-300 text-xs sm:text-sm md:text-base tracking-wide">
                جميع الحقوق محفوظة <span class="text-white font-sans">Sports Lite</span>
            </p>
            <div class="text-[#FF5900] font-sans font-bold flex items-center gap-1">
                <span class="text-sm md:text-base">2026</span>
                <span class="text-base md:text-lg">&copy;</span>
            </div>
        </div>
    </div>

</footer>
`;

document.getElementById("footer").innerHTML = footerHtmlCode;