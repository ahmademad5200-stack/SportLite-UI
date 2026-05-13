const headerHtmlCode = `
<header class="w-full bg-[#2C2C2C] text-white py-4 px-4 md:px-8 flex justify-between items-center shadow-lg sticky top-0 z-50" >
        
        <div class="flex items-center gap-3 order-first md:order-none">

            <button id="menu-btn" class="lg:hidden p-2 text-white hover:text-[#FF5900] focus:outline-none transition" aria-label="فتح القائمة">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            
            <div class="hidden md:flex items-center gap-3" >
                <button class="px-5 py-2 bg-[#FF5900] text-white rounded-lg hover:bg-orange-600 transition duration-300 text-sm font-bold shadow-lg shadow-orange-500/30 whitespace-nowrap"><a href="sgin.html">اشتراك</a></button>
                <button class="px-5 py-2 border border-[#FF5900] text-[#FF5900] rounded-lg hover:bg-[#FF5900] hover:text-white transition duration-300 text-sm font-bold whitespace-nowrap"><a href="login.html">تسجيل دخول</a></button>
            </div>
        </div>
        
        <nav class="hidden lg:flex items-center gap-6 text-sm font-medium" >

            <div class="nav-item flex flex-col items-center gap-1 cursor-pointer" onclick="setActive(this)">
                <a href="contact.html" class="nav-link text-gray-200 hover:text-[#FF5900] transition duration-300">تواصل معنا</a>
                <div class="nav-line h-[2px] w-full bg-gradient-to-r from-orange-300 to-[#FF5900] rounded-full hidden"></div>
            </div>
            <div class="nav-item flex flex-col items-center gap-1 cursor-pointer" onclick="setActive(this)">
                <a href="healthnews.html" class="nav-link text-gray-200 hover:text-[#FF5900] transition duration-300">الاخبار</a>
                <div class="nav-line h-[2px] w-full bg-gradient-to-r from-orange-300 to-[#FF5900] rounded-full hidden"></div>
            </div>
            <div class="nav-item flex flex-col items-center gap-1 cursor-pointer" onclick="setActive(this)">
                <a href="equipment.html" class="nav-link text-gray-200 hover:text-[#FF5900] transition duration-300">الاجهزة</a>
                <div class="nav-line h-[2px] w-full bg-gradient-to-r from-orange-300 to-[#FF5900] rounded-full hidden"></div>
            </div>
            <div class="nav-item flex flex-col items-center gap-1 cursor-pointer" onclick="setActive(this)">
                <a href="#" class="nav-link text-gray-200 hover:text-[#FF5900] transition duration-300">عضوية</a>
                <div class="nav-line h-[2px] w-full bg-gradient-to-r from-orange-300 to-[#FF5900] rounded-full hidden"></div>
            </div>
            <div class="nav-item flex flex-col items-center gap-1 cursor-pointer" onclick="setActive(this)">
                <a href="trainers.html" class="nav-link text-gray-200 hover:text-[#FF5900] transition duration-300">المدربين</a>
                <div class="nav-line h-[2px] w-full bg-gradient-to-r from-orange-300 to-[#FF5900] rounded-full hidden"></div>
            </div>
            <div class="nav-item flex flex-col items-center gap-1 cursor-pointer" onclick="setActive(this)">
                <a href="trainingprogram.html" class="nav-link text-gray-200 hover:text-[#FF5900] transition duration-300">البرامج</a>
                <div class="nav-line h-[2px] w-full bg-gradient-to-r from-orange-300 to-[#FF5900] rounded-full hidden"></div>
            </div>
            <div class="nav-item flex flex-col items-center gap-1 cursor-pointer" onclick="setActive(this)">
                <a href="index.html" class="nav-link text-[#FF5900] font-bold transition duration-300">رئيسية</a>
                <div class="nav-line h-[2px] w-full bg-gradient-to-r from-orange-300 to-[#FF5900] rounded-full block"></div>
            </div>
        </nav>
        
        <div class="flex items-center gap-3 order-last md:order-none">
            <svg class="w-7 h-7 text-[#FF5900] animate-[spin_10s_linear_infinite]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43 1.43 1.43 2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43 1.43-1.43z"/>
            </svg>
            <div class="flex flex-col">
                <h1><p class="text-xl font-bold tracking-wide">Sports <span class="text-[#FF5900]">Lite</span></p></h1>
                <p class="text-[11px] text-gray-300 -mt-1 font-sans">Transform Your Body</p>
            </div>
        </div>
    </header>
`;

document.getElementById("header").innerHTML = headerHtmlCode;