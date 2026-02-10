// 1. البيانات (الآيات)

let currentIndex = 0;
const duration = 5000; // 5 ثواني لكل آية

// 2. دالة تحديث الآية وشريط التحميل
function updateAyah() {
    const textEl = document.getElementById('display-text');
    const sourceEl = document.getElementById('display-source');
    const lessonEl = document.getElementById('display-lesson');
    const progressEl = document.getElementById('progress');
    const contentWrapper = document.querySelector('.ayah-content-wrapper');

    if (!contentWrapper || !progressEl) return;

    // أنيميشن الاختفاء (تأكد إن كلاس fade-out موجود في الـ CSS)
    contentWrapper.classList.add('fade-out');

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % quranData.length;
        const data = quranData[currentIndex];

        // تحديث النصوص
        textEl.innerText = `"${data.text}"`;
        sourceEl.innerText = data.source;
        lessonEl.innerText = data.lesson;

        // إظهار المحتوى الجديد
        contentWrapper.classList.remove('fade-out');

        // إعادة ضبط وتشغيل شريط التقدم
        progressEl.style.transition = 'none';
        progressEl.style.width = '0%';

        setTimeout(() => {
            progressEl.style.transition = `width ${duration}ms linear`;
            progressEl.style.width = '100%';
        }, 50);

    }, 1000); // وقت الأنيميشن
}

// 3. دالة إظهار محتوى الموقع (المنصة)
function revealSite() {
    // إظهار العناصر العلوية
    const topElements = ['.hero-section', '.ayah-slider-container'];
    topElements.forEach((selector, index) => {
        const el = document.querySelector(selector);
        if (el) {
            setTimeout(() => el.classList.add('element-reveal'), index * 300);
        }
    });

    // تشغيل شريط التحميل لأول مرة
    const progressEl = document.getElementById('progress');
    if (progressEl) {
        progressEl.style.transition = `width ${duration}ms linear`;
        progressEl.style.width = '100%';
    }

    // بدء دورة تبديل الآيات
    setInterval(updateAyah, duration + 1000);

    // تشغيل مراقب السكرول للكروت الصغيرة
    initScrollReveal();
}

// 4. مراقب السكرول (Scroll Reveal)
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('element-reveal');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.mini-card, .footer').forEach(el => observer.observe(el));
}

// 5. دالة الدخول (عند الضغط على الزر)
function startJourney() {
    const welcome = document.getElementById('welcome-screen');
    localStorage.setItem('hasVisitedWazaker', 'true');

    if (welcome) {
        welcome.classList.add('exit-welcome');
        setTimeout(() => {
            welcome.style.display = 'none';
            revealSite();
        }, 1000);
    }
}

// 6. التحكم في القائمة الجانبية (Sidebar)
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

// 7. عند تحميل الصفحة
window.onload = () => {
    const welcome = document.getElementById('welcome-screen');
    const hasVisited = localStorage.getItem('hasVisitedWazaker');

    if (hasVisited) {
        if (welcome) welcome.style.display = 'none';
        revealSite();
    } else {
        if (welcome) welcome.style.display = 'flex';
    }
};

// Swipe لإغلاق السايد بار (اختياري وسلس)
let startX = 0;
document.getElementById("sidebar").addEventListener("touchstart", e => startX = e.touches[0].clientX);
document.getElementById("sidebar").addEventListener("touchmove", e => {
    if (startX - e.touches[0].clientX > 60) closeSidebar();
});

// دالة النزول للكروت بسلاسة
function scrollToCards() {
    // بنحدد أول كارت أذكار عندك (تأكد إن الكروت ليها class اسمه mini-card)
    const firstCard = document.querySelector('.ddd');
    if (firstCard) {
        firstCard.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

///////////////////////////
const tasbeehAzkar = [
    { text: "سبحان الله 🌿", theme: "theme-subhan" },
    { text: "الحمد لله 🍂", theme: "theme-hamd" },
    { text: "لا إله إلا الله ☝🏻", theme: "theme-tawhid" },
    { text: "الله أكبر ️🌹", theme: "theme-akbar" },
    { text: "لا حول ولا قوة إلا بالله 🪻", theme: "theme-hawqala" },
    { text: "الباقيات الصالحات 🤍", theme: "theme-baqiyat" }
];

let tasbeehIndex = 0;

function showTasbeehReminder() {
    const bubble = document.getElementById('tasbeeh-bubble');
    const card = document.getElementById('tasbeeh-card');

    if (!bubble || !card) return;

    const currentZikr = tasbeehAzkar[tasbeehIndex];

    // 1. تنظيف الكلاسات القديمة
    tasbeehAzkar.forEach(item => {
        bubble.classList.remove(item.theme);
        card.classList.remove(item.theme);
    });

    // 2. إضافة النص واللون الجديد للفقاعة والكارت
    bubble.innerText = currentZikr.text;
    bubble.classList.add(currentZikr.theme);
    card.classList.add(currentZikr.theme); // تلوين أطراف الكارت

    // 3. الأنيميشن
    bubble.classList.add('show');

    if (typeof popSound !== 'undefined') {
        popSound.currentTime = 0;
        popSound.play().catch(e => { });
    }

    // 4. الإخفاء بعد وقت محدد
    setTimeout(() => {
        bubble.classList.remove('show');
        // بنشيل اللون من الكارت عشان يرجع لطبيعته بعد الذكر
        card.classList.remove(currentZikr.theme);
        tasbeehIndex = (tasbeehIndex + 1) % tasbeehAzkar.length;
    }, 6000);
}

// تشغيل فوري ثم تكرار
showTasbeehReminder();
setInterval(showTasbeehReminder, 11000);

const morningMessages = [
    { text: "هل قرأت أذكار الصباح؟ ☀️", theme: "theme-morning-1" },
    { text: "لا تنسى أذكار الصباح 🤍", theme: "theme-morning-2" },
    { text: "ابدأ يومك بذكر طيب 🌹", theme: "theme-morning-3" }
];

let morningIndex = 0;

function showMorningReminder() {
    const now = new Date();
    const hour = now.getHours();

    // التأكد إننا في وقت الصباح (من 5 الفجر لحد 11 قبل الظهر)
    if (hour >= 17 && hour < 12) {
        const bubble = document.getElementById('morning-bubble');
        const card = document.getElementById('morning-card');

        if (!bubble || !card) return;

        const currentMsg = morningMessages[morningIndex];

        // تنظيف الكلاسات القديمة
        morningMessages.forEach(m => {
            bubble.classList.remove(m.theme);
            card.classList.remove(m.theme);
        });

        // إضافة النص واللون الجديد
        bubble.innerText = currentMsg.text;
        bubble.classList.add(currentMsg.theme);
        card.classList.add(currentMsg.theme);

        // إظهار الفقاعة
        bubble.classList.add('show');

        // صوت الـ Pop
        if (typeof popSound !== 'undefined') {
            popSound.currentTime = 0;
            popSound.play().catch(e => { });
        }

        // إخفاء الفقاعة بعد 10 ثواني
        setTimeout(() => {
            bubble.classList.remove('show');
            card.classList.remove(currentMsg.theme);
            morningIndex = (morningIndex + 1) % morningMessages.length;
        }, 5000);
    }
}


// تشغيل الفحص فوراً عند فتح الموقع
showMorningReminder();

// تكرار الفحص كل ربع ساعة (15 دقيقة = 900,000 مللي ثانية)
setInterval(showMorningReminder, 9000);


const eveningAzkar = [
    "أذكار المساء 🌙",
    "أذكار المساء لسكينة قلبك 🤍",
    "لا تنسَ أذكار المساء 🌸"
];

let eveningIndex = 0;

function showEveningReminder() {
    const now = new Date();
    const hour = now.getHours();

    // شرط الوقت (من 4 عصراً لـ 10 مساءً)
    if (hour >= 15 && hour < 24) {
        const bubble = document.getElementById('evening-bubble');
        const card = document.getElementById('evening-card');

        if (!card || !bubble) return;

        // الوصول للأيقونة جوه الكارت
        const iconWrap = card.querySelector('.card-icon');

        // 1. تشغيل الرسالة واللون
        bubble.innerText = eveningAzkar[eveningIndex];
        bubble.className = "card-talk show theme-evening";
        card.classList.add('theme-evening');

        // 2. تشغيل المرجحة
        if (iconWrap) {
            iconWrap.classList.add('swing-active');
        }

        // 3. إنهاء الحالة بعد 7 ثواني
        setTimeout(() => {
            bubble.classList.remove('show');
            card.classList.remove('theme-evening');
            if (iconWrap) {
                iconWrap.classList.remove('swing-active');
            }
            eveningIndex = (eveningIndex + 1) % eveningAzkar.length;
        }, 7000);
    }
}

// تشغيل فوري للتجربة أول ما تفتح
showEveningReminder();

// تكرار كل ربع ساعة
setInterval(showEveningReminder, 99991);

//******************//
const sleepMessages = [
    "أذكار النوم 🌙",
    "ليلة هادئة 🤍",
];

let sleepIdx = 0;

function showSleepReminder() {
    const now = new Date();
    const hour = now.getHours();

    // من 10 مساءً حتى 2 فجراً
    if (hour >= 21 || hour < 2) {
        const card = document.getElementById('sleep-card');
        const bubble = document.getElementById('sleep-bubble');
        const zBox = document.getElementById('zzz-box');

        if (!card || !bubble || !zBox) return;

        // 1. تفعيل الكارت والرسالة
        bubble.innerText = sleepMessages[sleepIdx];
        bubble.className = "card-talk show theme-sleep";
        card.classList.add('theme-sleep', 'sleep-active');

        // 2. توليد الـ ZZZ الطائرة
        zBox.innerHTML = ''; // تنظيف
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const z = document.createElement('span');
                z.innerText = 'Z';
                z.className = 'zzz-unit';
                z.style.left = (i * 5) + 'px';
                zBox.appendChild(z);
            }, i * 800); // تتابع في الظهور
        }

        // 3. الإخفاء بعد 8 ثواني
        setTimeout(() => {
            bubble.classList.remove('show');
            card.classList.remove('theme-sleep', 'sleep-active');
            zBox.innerHTML = '';
            sleepIdx = (sleepIdx + 1) % sleepMessages.length;
        }, 8000);
    }
}

// للتشغيل الفوري والتأكد
showSleepReminder();
setInterval(showSleepReminder, 90000);


// مواقيت الصلاة
const prayerTimes = {
    "الفجر": "5:18",
    "الظهر": "21:36",
    "العصر": "15:15",
    "المغرب": "17:30",
    "العشاء": "20:00"
};

const prayerThemes = {
    "الفجر": "theme-fajr",
    "الظهر": "theme-dhuhr",
    "العصر": "theme-asr",
    "المغرب": "theme-maghrib",
    "العشاء": "theme-isha"
};

function checkPrayerLogic() {
    const now = new Date();
    const currentHHMM = now.getHours().toString().padStart(2, '0') + ":" +
        now.getMinutes().toString().padStart(2, '0');

    const bubble = document.getElementById('prayer-bubble');
    const card = document.getElementById('prayer-card');

    if (!bubble || !card) return;

    for (let name in prayerTimes) {
        const pTime = prayerTimes[name];
        const [pHour, pMin] = pTime.split(':').map(Number);
        const [cHour, cMin] = currentHHMM.split(':').map(Number);

        const diff = (pHour * 60 + pMin) - (cHour * 60 + cMin);

        // الحالات
        if (diff === 15) {
            updatePrayerUI(card, bubble, `باقي 15د على صلاة ${name}`, name);
        } else if (diff === 10) {
            updatePrayerUI(card, bubble, `باقي 10د على صلاة ${name}`, name);
        } else if (diff === 5) {
            updatePrayerUI(card, bubble, `أذان ${name} بعد 5 دقائق`, name);
        } else if (diff === 0) {
            updatePrayerUI(card, bubble, `صلاة ${name} الآن 🕌`, name);
        } else if (diff === -15) {
            updatePrayerUI(card, bubble, `هل صليت ${name}؟ ✨`, name);
        }
    }
}

function updatePrayerUI(card, bubble, message, prayerName) {
    if (bubble.innerText === message && bubble.classList.contains('show')) return;

    const theme = prayerThemes[prayerName];

    bubble.innerText = message;

    // استخدام classList عشان ميبوظش الـ CSS الأساسي
    bubble.classList.add('show', theme);
    card.classList.add('prayer-active', theme);

    // إخفاء التنبيه بعد 40 ثانية
    setTimeout(() => {
        bubble.classList.remove('show', theme);
        card.classList.remove('prayer-active', theme);
    }, 40000);
}

// فحص كل ثانية
setInterval(checkPrayerLogic, 1000);
checkPrayerLogic();




const wakeupMessages = [
    "الحمد لله الذي أحيانا   ... ☀️",

    "ابدأ يومك بذكر الله 🌸",
    "لا تنسَ أذكار الاستيقاظ"
];

function checkWakeupLogic() {
    const now = new Date();
    const hour = now.getHours();

    const card = document.getElementById('wakeup-card');
    const bubble = document.getElementById('wakeup-bubble');

    // يظهر بقوة من الساعة 5 صباحاً حتى 10 صباحاً
    if (hour >= 20 && hour < 10) {
        let msgIdx = Math.floor(Math.random() * wakeupMessages.length);
        bubble.innerText = wakeupMessages[msgIdx];

        bubble.classList.add('show');
        card.classList.add('wakeup-active');

        // يختفي بعد 15 ثانية عشان ميزعجش المستخدم
        setTimeout(() => {
            bubble.classList.remove('show');
            card.classList.remove('wakeup-active');
        }, 15000);
    }
}

// فحص كل نصف ساعة
setInterval(checkWakeupLogic, 50000);
// تشغيل فوري للتجربة
checkWakeupLogic();

const islamicAdab = [
    "أدب الطعام: الأكل باليمين ومما يليك",
    "أدب السلام: إفشاء السلام على من عرفت ومن لم تعرف",
    "أدب الاستئذان: الاستئذان ثلاثاً قبل الدخول",
    "أدب الكلام: قل خيراً أو اصمت",
    "أدب العطاس: حمد الله وتشميت العاطس",
    "أدب النوم: نفض الفراش والنوم على الشق الأيمن",
    "أدب المجلس: التفسح في المجالس للآخرين",
    "أدب الطريق: غض البصر وكف الأذى",
    "أدب الوالدين: خفض الجناح والقول الكريم",
    "أدب الشرب: الشرب جالساً وعلى ثلاث دفعات"
];

function showNextAdab() {
    const card = document.getElementById('adab-card');
    const bubble = document.getElementById('adab-bubble');

    if (!card || !bubble) return;

    // اختيار أدب عشوائي
    const randomIndex = Math.floor(Math.random() * islamicAdab.length);
    bubble.innerText = islamicAdab[randomIndex];

    // إظهار الرسالة
    bubble.classList.add('show');
    card.classList.add('adab-active');

    // إخفاء الرسالة بعد 20 ثانية (عشان الجملة طويلة شوية وتحتاج قراءة)
    setTimeout(() => {
        bubble.classList.remove('show');
        card.classList.remove('adab-active');
    }, 9000);
}



// التغيير كل 10 دقائق (600,000 مللي ثانية)
setInterval(showNextAdab, 100000);

// تشغيل فوري أول ما الصفحة تفتح
showNextAdab();

const nawawiTitles = [
    "الحديث ١: إنما الأعمال بالنيات",
    "الحديث ٢: مراتب الدين (جبريل)",
    "الحديث ٣: أركان الإسلام",
    "الحديث ٤: مراحل خلق الإنسان",
    "الحديث ٥: النهي عن الابتداع",
    "الحديث ٦: البعد عن الشبهات",
    "الحديث ٧: الدين النصيحة",
    "الحديث ٨: حرمة دم المسلم",
    "الحديث ٩: الأمر بالمستطاع",
    "الحديث ١٠: طيب المطعم",
    "الحديث ١١: اترك ما يريبك",
    "الحديث ١٢: ترك ما لا يعنيك"
];

function showNawawiTitle() {
    const card = document.getElementById('nawawi-card');
    const bubble = document.getElementById('nawawi-bubble');

    if (!card || !bubble) return;

    const randomIndex = Math.floor(Math.random() * nawawiTitles.length);
    bubble.innerText = nawawiTitles[randomIndex];

    bubble.classList.add('show');
    card.classList.add('nawawi-active');

    setTimeout(() => {
        bubble.classList.remove('show');
        card.classList.remove('nawawi-active');
    }, 7000); // 10 ثواني كفاية جداً للعنوان
}

// تظهر كل 15 دقيقة (عشان متبقاش زحمة مع الآداب)
setInterval(showNawawiTitle, 90000);
// تشغيل فوري للتجربة
showNawawiTitle();

const shortHadiths = [
    "قَالَ ﷺ: «الدِّينُ النَّصِيحَةُ»",
    "قَالَ ﷺ: «الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ»",
    "قَالَ ﷺ: «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»",
    "قَالَ ﷺ: «اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ»",
    "قَالَ ﷺ: «مَنْ صَمَتَ نَجَا»",
    "قَالَ ﷺ: «الْبِرُّ حُسْنُ الْخُلُقِ»",
    "قَالَ ﷺ: «الدَّالُّ عَلَى الْخَيْرِ كَفَاعِلِهِ»",
    "قَالَ ﷺ: «لا يَشْكُرُ اللَّهَ مَنْ لا يَشْكُرُ النَّاسَ»",
    "قَالَ ﷺ: «طَهُورُ إِنَاءِ أَحَدِكُمْ..» (أدب)",
    "قَالَ ﷺ: «الْحَيَاءُ لا يَأْتِي إِلا بِخَيْرٍ»"
];

function showHadithMessage() {
    const card = document.getElementById('hadith-card');
    const bubble = document.getElementById('hadith-bubble');

    if (!card || !bubble) return;

    const randomIndex = Math.floor(Math.random() * shortHadiths.length);
    bubble.innerText = shortHadiths[randomIndex];

    bubble.classList.add('show');
    card.classList.add('hadith-active');

    // الحديث يحتاج وقت بسيط للقراءة
    setTimeout(() => {
        bubble.classList.remove('show');
        card.classList.remove('hadith-active');
    }, 7000);
}

// تظهر كل 12 دقيقة
setInterval(showHadithMessage, 720000);
// تشغيل فوري
showHadithMessage();

const ibtehalatData = [
    "النقشبندي: مولاي ...",
    "طوبار: يا مالك الملك",
    "محمد عمران: يا سيد الكونين",
    "النقشبندي: أقول أمتي",
    "طوبار: مجيب السائلين",
    "محمد عمران: فكم لله...",
    "النقشبندي: رمضان أهلاً",
    "طوبار: جل المنادي",
    "النقشبندي: يا رب...",

];

function showIbtehalMessage() {
    const card = document.getElementById('ibtehal-card');
    const bubble = document.getElementById('ibtehal-bubble');

    if (!card || !bubble) return;

    const randomIndex = Math.floor(Math.random() * ibtehalatData.length);
    bubble.innerText = ibtehalatData[randomIndex];

    bubble.classList.add('show');
    card.classList.add('ibtehal-active');

    setTimeout(() => {
        bubble.classList.remove('show');
        card.classList.remove('ibtehal-active');
    }, 9000);
}

// تظهر كل 8 دقائق (عشان الابتهالات بتحلي الجو)
setInterval(showIbtehalMessage, 480000);
// تشغيل فوري
showIbtehalMessage();

const hisnChapters = [
    "دعاء الهم والحزن",
    "أذكار الكرب",
    "دعاء قضاء الدين",
    "ما يقوله من خاف قوماً",
    "دعاء الريح والرعد",
    "أذكار دخول المنزل",
    "ما يقول عند الغضب",
    "دعاء من أصيب بمصيبة",
    "أذكار الخروج من المسجد",
    "دعاء صلاة الاستخارة"
];

function showHisnMessage() {
    const card = document.getElementById('hisn-card');
    const bubble = document.getElementById('hisn-bubble');

    if (!card || !bubble) return;

    const randomIndex = Math.floor(Math.random() * hisnChapters.length);
    bubble.innerText = "باب: " + hisnChapters[randomIndex];

    bubble.classList.add('show');
    card.classList.add('hisn-active');

    // يختفي بعد 12 ثانية
    setTimeout(() => {
        bubble.classList.remove('show');
        card.classList.remove('hisn-active');
    }, 9000);
}

// تظهر كل 11 دقيقة
setInterval(showHisnMessage, 660000);
// تشغيل فوري
showHisnMessage();

const quizChallenges = [
    "هل تعرف ترتيب السور؟ ",
    "كم عدد سجدات القرآن؟ ",
    "اختبر حفظك في جزء عم ",
    "تحدي الأنبياء والرسل ",
    "ما هي أطول سورة؟ 📝",
    "جاهز لاختبار اليوم؟ ",
    "تنشيط الذاكرة القرآنية ",
    "سؤال سريع في التفسير "
];

function showQuizChallenge() {
    const card = document.getElementById('quiz-card');
    const bubble = document.getElementById('quiz-bubble');

    if (!card || !bubble) return;

    const randomIndex = Math.floor(Math.random() * quizChallenges.length);
    bubble.innerText = quizChallenges[randomIndex];

    bubble.classList.add('show');
    card.classList.add('quiz-active');

    // يختفي بعد 10 ثواني (سريع وخفيف)
    setTimeout(() => {
        bubble.classList.remove('show');
        card.classList.remove('quiz-active');
    }, 10000);
}

// تظهر كل 7 دقائق (عشان التفاعل)
setInterval(showQuizChallenge, 42000);
// تشغيل فوري
showQuizChallenge();

const afterSalahAzkar = [
    "أستغفر الله (ثلاثاً)",
    "اللهم أنت السلام ومنك السلام",
    "لا إله إلا الله وحده لا شريك له",
    "اللهم لا مانع لما أعطيت",
    "سبحان الله (33 مرة)",
    "الحمد لله (33 مرة)",
    "الله أكبر (33 مرة)",
    "لا تنسَ قراءة آية الكرسي",
    "اللهم أعني على ذكرك وشكرك",
    "قراءة المعوذات بعد الصلاة"
];

function showAfterSalahMessage() {
    const card = document.getElementById('aftersalah-card');
    const bubble = document.getElementById('aftersalah-bubble');

    if (!card || !bubble) return;

    const randomIndex = Math.floor(Math.random() * afterSalahAzkar.length);
    bubble.innerText = afterSalahAzkar[randomIndex];

    bubble.classList.add('show');
    card.classList.add('aftersalah-active');

    // يختفي بعد 12 ثانية
    setTimeout(() => {
        bubble.classList.remove('show');
        card.classList.remove('aftersalah-active');
    }, 12000);
}

// تظهر كل 9 دقائق
setInterval(showAfterSalahMessage, 54000);
// تشغيل فوري
showAfterSalahMessage();


const quranMessages = [
    "ورتّل القرآن ترتيلاً ✨",
    "نور لقلبك وحياة لروحك",
    "اجعل لنفسك ورداً اليوم 📖",
    "القرآن يشفع لصاحبه",
    "ألا بذكر الله تطمئن القلوب",
    "خيركم من تعلم القرآن وعلمه",
    "آية تقرؤها.. درجة ترفعها",
    "تدبّر في آيات الله 🌿",
    "القرآن مأدبة الله في أرضه",
    "يا حامل القرآن.. استمسك به"
];

function showQuranMessage() {
    const card = document.getElementById('quran-card');
    const bubble = document.getElementById('quran-bubble');

    if (!card || !bubble) return;

    const randomIndex = Math.floor(Math.random() * quranMessages.length);
    bubble.innerText = quranMessages[randomIndex];

    bubble.classList.add('show');
    card.classList.add('quran-active');

    // يختفي بعد 15 ثانية (عشان الرسالة روحانية وتحتاج تأمل)
    setTimeout(() => {
        bubble.classList.remove('show');
        card.classList.remove('quran-active');
    }, 15000);
}

// تظهر كل 10 دقائق
setInterval(showQuranMessage, 600000);
// تشغيل فوري
showQuranMessage();
let count = 0;
const tasbeehCard = document.getElementById('tasbeeh-card');
const bubble = document.getElementById('tasbeeh-bubble');
const saphaImg = document.getElementById('sapha-img');

if (tasbeehCard) {
    tasbeehCard.addEventListener('click', function (e) {
        // منع الانتقال للصفحة عشان نلحق نع

        // 3. تأثير "النبض" للكارت
        tasbeehCard.style.transform = "scale(0.95)";
        setTimeout(() => {
            tasbeehCard.style.transform = "scale(1.05)";
        }, 100);

        // 4. إذا كنت تريد الذهاب للصفحة بعد عدد معين (مثلاً 33) أو بطريقة تانية
        // ممكن نخليه يروح لصفحة السبحة لو ضغط "Double Click"
    });

    // لو ضغط مرتين ورا بعض يفتح الصفحة
    tasbeehCard.addEventListener('dblclick', function () {
        window.location.href = "tasbeeh.html";
    });
}
function updateTicker() {
    const dateElement = document.getElementById('ticker-date');
    const msgElement = document.getElementById('ticker-msg');

    // 1. عرض التاريخ الهجري (باستخدام خاصية Intl المدمجة في المتصفح)
    const today = new Date();
    const options = { calendar: 'islamic-uma', day: 'numeric', month: 'long', year: 'numeric' };
    const hijriDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-uma', options).format(today);
    dateElement.innerText = "اليوم: " + hijriDate;

    // 2. رسائل متغيرة كل فترة
    const rotatingMsgs = [
        "سبحان الله وبحمده، سبحان الله العظيم",
        "اللهم صلِ وسلم على نبينا محمد",
        "استغفر الله العظيم واتوب إليه",
        "لا حول ولا قوة إلا بالله العلي العظيم"
    ];

    let msgIndex = 0;
    setInterval(() => {
        msgElement.style.opacity = 0;
        setTimeout(() => {
            msgElement.innerText = rotatingMsgs[msgIndex];
            msgElement.style.opacity = 1;
            msgIndex = (msgIndex + 1) % rotatingMsgs.length;
        }, 500);
    }, 10000); // تغيير الذكر كل 10 ثواني
}

// تشغيل عند التحميل
window.onload = () => {
    updateTicker();
    // هنا ممكن تنادي باقي الدوال اللي عملناها للكروت
};
// الحصول على الزرار
const backToTopBtn = document.getElementById("backToTop");

// مراقبة التمرير (Scroll)
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        // لو نزل أكتر من 300 بكسل يظهر
        backToTopBtn.style.display = "block";
        setTimeout(() => { backToTopBtn.style.opacity = "1"; }, 10);
    } else {
        // لو طلع فوق يختفي
        backToTopBtn.style.display = "none";
    }
};

// عند الضغط على الزرار، يطلع لفوق بسلاسة
backToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // حركة الانزلاق السلسة
    });
};
// مصفوفة الآيات المحدثة بالتنسيق الخاص بك (q, s, l)
const mirAyahs = [
    {
        q: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
        s: "سورة طه - 114",
        l: "ليكن طلب العلم رفيقك الدائم، فبالعلم ترتقي العقول وتُفتح الأبواب."
    },
    {
        q: "إِنَّ رَبِّي لَطِيفٌ لِّمَا يَشَاءُ",
        s: "سورة يوسف - 100",
        l: "لطف الله يحيط بك من حيث لا تدري، حتى في أشد المواقف ضيقاً."
    },
    {
        q: "وَاصْبِرْ لِحُكْمِ رَبِّكَ فَإِنَّكَ بِأَعْيُنِنَا",
        s: "سورة الطور - 48",
        l: "يا له من شعور! أن تكون تحت رعاية الله وعينه التي لا تنام."
    },
    {
        q: "فَسَيَكْفِيكَهُمُ اللَّهُ ۚ وَهُوَ السَّمِيعُ الْعَلِيمُ",
        s: "سورة البقرة - 137",
        l: "حين يكون الله معك، فلا يضرك كيد الكائدين ولا مكر الحاقدين."
    },
    {
        q: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
        s: "سورة الضحى - 5",
        l: "وعدٌ رباني ليس فقط بالعطاء، بل بالرضا الذي يملأ الروح ويجبر الخاطر."
    },
    
    {
        q: "ادْخُلُوهَا بِسَلَامٍ ۖ ذَٰلِكَ يَوْمُ الْخُلُودِ",
        s: "سورة ق - 34",
        l: "بشرى لأهل الطاعة؛ هناك ستنتهي غصص الدنيا، وتُفتح أبواب النعيم الذي لا ينقطع."
    },
    {
        q: "وُجُوهٌ يَوْمَئِذٍ نَّاضِرَةٌ * إِلَىٰ رَبِّهَا نَاظِرَةٌ",
        s: "سورة القيامة - 22، 23",
        l: "أعلى مراتب الجنة وأعظم نعيم أعده الله لنا؛ النظر إلى وجه الكريم سبحانه."
    },
    {
        q: "فَلَا تَعْلَمُ نَفْسٌ مَّا أُخْفِيَ لَهُم مِّن قُرَّةِ أَعْيُنٍ جَزَاءً بِمَا كَانُوا يَعْمَلُونَ",
        s: "سورة السجدة - 17",
        l: "مفاجآت الجنة تفوق الخيال؛ ما أعده الله لك خلف ستار الغيب سيجعلك تنسى كل تعب."
    },
    {
        q: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا",
        s: "سورة الكهف - 107",
        l: "الضيافة في أعلى مراتب الجنة (الفردوس) لمن أخلص العمل وثبت على الإيمان."
    },
    {
        q: "لَا يَسْمَعُونَ فِيهَا لَغْوًا وَلَا تَأْثِيمًا * إِلَّا قِيلًا سَلَامًا سَلَامًا",
        s: "سورة الواقعة - 25، 26",
        l: "في الجنة، راحة من ضجيج البشر وكلامهم المؤذي؛ لا صوت يعلو فوق السلام النفسي المطلق."
    },
    {
        q: "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ",
        s: "سورة الزمر - 10",
        l: "تهوين لكل عسير؛ أجرك عند الله ليس له حدود، سيُصبُّ عليك صبّاً يدهشك."
    },
    {
        q: "فَمَن زُحْزِحَ عَنِ النَّارِ وَأُدْخِلَ الْجَنَّةَ فَقَدْ فَازَ",
        s: "سورة آل عمران - 185",
        l: "هذا هو الفوز الحقيقي والنجاح الأكبر؛ أن تتجاوز أهوال القيامة لتستقر في دار السلام."
    },
    {
        q: "وَمَن يَعْمَلْ مِنَ الصَّالِحَاتِ وَهُوَ مُؤْمِنٌ فَلَا يَخَافُ ظُلْمًا وَلَا هَضْمًا",
        s: "سورة طه - 112",
        l: "أمانٌ تام في الآخرة؛ لن يضيع جهدك، ولن يُنقص من قدرك عند ربٍّ لا يظلم أحداً."
    },
    {
        q: "وَتِلْكَ الْجَنَّةُ الَّتِي أُورِثْتُمُوهَا بِمَا كُنتُمْ تَعْمَلُونَ",
        s: "سورة الزخرف - 72",
        l: "الميراث الحقيقي ليس مالاً ولا جاهاً، بل جنةٌ عرضها السماوات والأرض دفعتم ثمنها بجهادكم."
    },
    {
        q: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
        s: "سورة الزمر - 53",
        l: "أعظم آية تهوين للمذنبين؛ باب العودة مفتوح، ورحمة الله أوسع من كل خطاياك."
    },
    {
        q: "دَعْوَاهُمْ فِيهَا سُبْحَانَكَ اللَّهُمَّ وَتَحِيَّتُهُمْ فِيهَا سَلَامٌ",
        s: "سورة يونس - 10",
        l: "حتى عبادة أهل الجنة هي (التسبيح)، لأنهم في حال من الشكر الدائم على كرم الله."
    },
    
    {
        q: "لَا تَدْرِي لَعَلَّ اللَّهَ يُحْدِثُ بعد ذَلِكَ أَمْرًا",
        s: "سورة الطلاق - 1",
        l: "اليقين هو أن تنتظر الفرج وأنت في قمة الأزمة، فتدبير الله لا يخضع للمستحيل."
    },
    {
        q: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
        s: "سورة الرعد - 28",
        l: "إذا شعرت بضجيج في صدرك، فداوه بذكر الله، فإنه الدواء الذي لا يخطئ."
    },
    {
        q: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        s: "سورة الشرح - 6",
        l: "اليسر لا يأتي بعد العسر فقط، بل يسير معه جنباً إلى جنب ليخفف ثقله."
    },
    {
        q: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
        s: "سورة الطلاق - 2",
        l: "من جعل الله وجهته، فلن يضل الطريق، ومن خاف الله آمنه من كل خوف."
    },
    {
        q: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ",
        s: "سورة غافر - 60",
        l: "بينك وبين أحلامك دعوة صادقة؛ فالله لم يلهمك الدعاء إلا ليعطيك."
    },
    {
        q: "وَمَا كَانَ رَبُّكَ نَسِيًّا",
        s: "سورة مريم - 64",
        l: "تلك الدعوات التي ظننت أنها ضاعت، والدموع التي خفيتها، كلها مسجلة وستُجاب في أوانها."
    }
];

let mirIndex = 0;
const mirSwitchTime = 6000; // 12 ثانية

function runMirSlider() {
    const textOut = document.getElementById('mir-text-output');
    const sourceOut = document.getElementById('mir-source-output');
    const lessonOut = document.getElementById('mir-lesson-output');
    const bar = document.getElementById('mir-progress-fill');

    if (!textOut) return;

    // تغيير المحتوى مع أنيميشن بسيط
    const current = mirAyahs[mirIndex];

    // إخفاء مؤقت للتبديل
    document.querySelector('.mir-content-body').style.opacity = 0;

    setTimeout(() => {
        textOut.innerText = `"${current.q}"`;
        sourceOut.innerText = current.s;
        lessonOut.innerText = current.l;
        document.querySelector('.mir-content-body').style.opacity = 1;

        // تحريك الشريط
        let start = null;
        bar.style.width = "0%";

        function frame(timestamp) {
            if (!start) start = timestamp;
            let progress = timestamp - start;
            let pWidth = (progress / mirSwitchTime) * 100;
            bar.style.width = Math.min(pWidth, 100) + "%";
            if (progress < mirSwitchTime) {
                requestAnimationFrame(frame);
            }
        }
        requestAnimationFrame(frame);

        mirIndex = (mirIndex + 1) % mirAyahs.length;
    }, 500);
}

// تشغيل
setInterval(runMirSlider, mirSwitchTime);
runMirSlider();

function scrollToQuiz() {
    // هنجيب العنصر اللي عايزين نروحه عن طريق الـ ID
    const element = document.getElementById("quiz-section");

    // تنفيذ النزول السلس
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth', // الحركة تكون ناعمة مش قفزة مفاجئة
            block: 'start'      // يخلي بداية القسم في أعلى الشاشة
        });
    }
}


