const artistColors = {
    "محمد صديق المنشاوي": "rgba(48, 36, 77, 0.28)",
    "عبدالباسط عبدالصمد": "rgba(184, 134, 11, 0.2)",
    "ياسر الدوسري": "rgba(0, 128, 105, 0.2)",
    "مشاري العفاسي": "rgba(41, 128, 185, 0.2)",
    "محمود خليل الحصري": "rgba(142, 68, 173, 0.2)",
    "ماهر المعيقلي": "rgba(39, 174, 96, 0.2)",
    "سعد الغامدي": "rgba(44, 62, 80, 0.2)",
    "هزاع البلوشي": "rgba(211, 84, 0, 0.2)",
    "النقشبندي": "rgba(0, 229, 255, 0.15)",
    "نصر الدين طوبار": "rgba(155, 89, 182, 0.2)",
};


// ================= 1. أسماء سور القرآن كاملة (114 سورة) =================
const surahNames = [
    "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس",
    "هود", "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه",
    "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم",
    "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر",
    "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات", "ق",
    "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة",
    "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج",
    "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس",
    "التكوير", "الانفطار", "المطففين", "الانشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد",
    "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات",
    "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر",
    "المسد", "الإخلاص", "الفلق", "الناس"
];

// ================= 2. بيانات الشيوخ =================
const recitersData = [
    {
        artist: "محمد صديق المنشاوي", 
        serverUrl: "https://server10.mp3quran.net/minsh/",
        image: "/Images/menshawy.jpg" // تأكد إن الصورة موجودة في الفولدر عندك
    },
    {
        artist: "عبدالباسط عبدالصمد", 
        serverUrl: "https://server7.mp3quran.net/basit/",
        image: "/Images/basit.jpg"
    },
    {
        artist: "مشاري العفاسي", 
        serverUrl: "https://server8.mp3quran.net/afs/",
        image: "/Images/mshary.png"
    },
    {
        artist: "ياسر الدوسري", 
        serverUrl: "https://server11.mp3quran.net/yasser/",
        image: "/Images/yasser.jpg"
    },
    {
        artist: "فارس عباد",
        serverUrl: "https://server8.mp3quran.net/frs_a/",
        image: "/Images/fares.jpg"
    },
    {
        artist: "ماهر المعيقلي",
        serverUrl: "https://server12.mp3quran.net/maher/",
        image: "/Images/maher.jpg"
    },
  
    {
        artist: "ناصر القطامي",
        serverUrl: "https://server6.mp3quran.net/qtm/",
        image: "/Images/nasser.jpg"
    }
];


// ================= بيانات المبتهلين والأدعية =================
// ================= بيانات المبتهلين والأدعية (بروابط مباشرة وسريعة) =================
const ibtihalatData = [
    {
        artist: "نصر الدين طوبار",
        image: "/Images/a.jpg",
        tracks: [
            { title: "حين يهدي الصبح إشراقتنا", src: "https://dl.nghmaty.com/s3/64QW10L5.mp3" },
            { title: "يا مالك الملك", src: "https://dl.nghmaty.com/s3/53Wi81mj.mp3" },
            { title: "يا سالكين اليه الدرب", src: "https://dl.nghmaty.com/s3/62yD86AD.mp3" },
            { title: "جل المنادي", src: "https://archive.org/download/Ebtihalet_uP_bY_mUSLEm/008--.mp3" },
            { title: "سبحانك يا من لا شبيه له", src: "https://archive.org/download/Ebtihalet_uP_bY_mUSLEm/009--.mp3" },
            { title: "يا من يراني في علاه ولا أراه", src: "https://archive.org/download/Ebtihalet_uP_bY_mUSLEm/021--.mp3" },
            { title: "سبحانك يا غفار الذنوب", src: "https://dl.nghmaty.com/s3/927x90KT.mp3" },
            { title: "اليك خشوعى ما حييت", src: "https://dl.nghmaty.com/s3/16GL91t5.mp3" },
            { title: "رباه", src: "https://dl.nghmaty.com/s3/73EL7534.mp3" },
            { title: "يا منقذي في شدتي", src: "https://dl.nghmaty.com/s3/67VP32Rg.mp3" },
            { title: "يا بارئ الكون", src: "https://dl.nghmaty.com/s3/73w7366E.mp3" }
        ]
    },
    {
        artist: "النقشبندي",
        image: "/Images/b.jpg",
        tracks: [
            { title: "", src: "" },
            { title: "", src: "" },
            { title: "", src: "" },
            { title: "", src: "" },
            { title: "", src: "" },
            { title: "", src: "" },
            { title: "", src: "" },
            { title: "", src: "" },
            { title: "", src: "" },
            { title: "", src: "" }
       ]
    },

    {
        artist: "محمد عمران",
        image: "/Images/c.jpg", 
        tracks: [

            { title: "", src: "" },
            { title: "", src: "" },
            { title: "", src: "" },
            { title: "", src: "" },
            { title: "", src: "" },
            { title: "", src: "" },
            { title: "", src: "" },
            { title: "", src: "" },
            { title: "", src: "" },
            { title: "", src: "" }

        ]
    }
];

// ================= توليد قاعدة البيانات (القرآن + الابتهالات) =================
let playlist = [];
let globalTrackId = 0; 

// 1. توليد القرآن الكريم (114 سورة لكل قارئ)
recitersData.forEach(reciter => {
    surahNames.forEach((surahName, index) => {
        const surahNumber = String(index + 1).padStart(3, '0');
        playlist.push({
            id: globalTrackId++, 
            title: `سورة ${surahName}`,
            artist: reciter.artist,
            src: `${reciter.serverUrl}${surahNumber}.mp3`,
            image: reciter.image
        });
    });
});

// 2. دمج الابتهالات في نفس القائمة
ibtihalatData.forEach(ibtihal => {
    ibtihal.tracks.forEach(track => {
        playlist.push({
            id: globalTrackId++, 
            title: track.title, // هنا بناخد الاسم المخصص للابتهال
            artist: ibtihal.artist,
            src: track.src, // وهنا الرابط المخصص ليه
            image: ibtihal.image
        });
    });
});


// ================= إدارة البيانات (LocalStorage المطور) =================
let fadeInterval; // متغير للتحكم في نعومة الصوت

let favorites = JSON.parse(localStorage.getItem('myFavs')) || [];
let recentTracks = JSON.parse(localStorage.getItem('myRecents')) || [];
// شكل القائمة الجديد: { id: 1, name: "قرآن", tracks: [0, 2] }
let userPlaylists = JSON.parse(localStorage.getItem('myPlaylistsV2')) || [];

let currentTrackIndex = -1;
let isShuffle = false;
const audioEl = new Audio();

// ================= 1. حفظ تقدم الاستماع تلقائياً =================
audioEl.addEventListener('timeupdate', () => {
    if (!audioEl.paused) { // بنحفظ بس والصوت شغال
        localStorage.setItem('resume_time', audioEl.currentTime);
        localStorage.setItem('resume_track_index', currentTrackIndex);
    }
});

// ================= الإشعارات المتتالية (Toasts) =================
function showToast(message, iconClass = 'fa-check-circle') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
}

// ================= التنقل (Tabs) =================
function switchTab(viewId, btn) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    document.querySelectorAll('.bottom-nav .nav-item').forEach(el => el.classList.remove('active'));
    if(btn) btn.classList.add('active');
    if(viewId === 'libraryView') renderLibrary();
}

// ================= التحكم في النوافذ (Sheets & Modals) =================
function openSheet(sheetId) { document.getElementById(sheetId).classList.add('active'); }
function closeSheet(sheetId) { document.getElementById(sheetId).classList.remove('active'); }

function openCustomModal() {
    document.getElementById('newPlaylistInput').value = '';
    document.getElementById('createPlaylistModal').classList.add('active');
    setTimeout(() => document.getElementById('newPlaylistInput').focus(), 100);
}
function closeCustomModal() { document.getElementById('createPlaylistModal').classList.remove('active'); }

// ================= مشغل الصوتيات =================
function formatTime(sec) {
    if (isNaN(sec)) return "00:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
}

window.playTrack = (index) => {
    if(currentTrackIndex === index) { togglePlayPause(); return; }
    localStorage.setItem('savedTrackIndex', currentTrackIndex);
    currentTrackIndex = index;
    const track = playlist[index];
    
    audioEl.src = track.src;
    audioEl.play();

    updateMediaSession(track);

    // 1. تحديث المشغل الصغير
    document.getElementById('playerTitle').textContent = track.title;
    document.getElementById('playerArtist').textContent = track.artist;
    document.getElementById('playerIcon').innerHTML = `<img src="${track.image}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">`;
    
    // 2. تحديث المشغل الكبير
    document.getElementById('fpBigTitle').textContent = track.title;
    document.getElementById('fpBigArtist').textContent = track.artist;
    document.getElementById('fpCoverIcon').innerHTML = `<img src="${track.image}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">`;
    
    // 3. تحديث شاشة الخيارات (الـ 3 نقط)
    document.getElementById('sheetOptionsTitle').textContent = track.title;
    document.getElementById('sheetOptionsArtist').textContent = track.artist;
    document.getElementById('sheetOptionsImg').innerHTML = `<img src="${track.image}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">`;

    updatePlayIcons(true);
    updateHeartIcon();
    addToRecent(track);

    document.querySelectorAll('.track-item').forEach(el => el.classList.remove('playing-active'));
    document.querySelectorAll(`#track-id-${index}`).forEach(el => el.classList.add('playing-active'));

    // ================= تفعيل اللون الديناميكي للمشغل الكبير =================
    const artistColors = {
        "عبدالباسط عبدالصمد": "rgba(184, 134, 11, 0.25)", // ذهبي
        "ياسر الدوسري": "rgba(0, 128, 105, 0.25)",       // أخضر
        "مشاري العفاسي": "rgba(41, 128, 185, 0.25)",     // أزرق
        "محمود خليل الحصري": "rgba(142, 68, 173, 0.25)", // بنفسجي
        "محمد صديق المنشاوي": "rgba(76, 56, 166, 0.25)", // أحمر
        "ماهر المعيقلي": "rgba(39, 174, 96, 0.25)",      // أخضر فاتح
        "سعد الغامدي": "rgba(44, 62, 80, 0.35)",         // كحلي
        "هزاع البلوشي": "rgba(211, 84, 0, 0.25)",        // برتقالي
        "النقشبندي": "rgba(0, 229, 255, 0.15)",          // سيان
        "نصر الدين طوبار": "rgba(155, 89, 182, 0.25)",   // موف
        "default": "#1e1332"                             // اللون الافتراضي لو الاسم مش موجود
    };

    // بنسحب اللون بناءً على اسم الشيخ من التراك اللي شغال
    const currentArtistColor = artistColors[track.artist] || artistColors["default"];
    
    // بنغير اللون في الـ CSS
    const fullPlayerOverlay = document.querySelector('.full-player-overlay');
    if (fullPlayerOverlay) {
        fullPlayerOverlay.style.setProperty('--dynamic-bg', currentArtistColor);
    }
};

function updatePlayIcons(isPlaying) {
    const mainIcon = document.getElementById('mainPlayBtn');
    const fpIcon = document.getElementById('fpPlayIcon');
    if (isPlaying) {
        mainIcon.classList.replace('fa-play', 'fa-pause');
        fpIcon.classList.replace('fa-play', 'fa-pause');
    } else {
        mainIcon.classList.replace('fa-pause', 'fa-play');
        fpIcon.classList.replace('fa-pause', 'fa-play');
    }
}

window.togglePlayPause = () => {
    // 1. لو لسه مفيش أي سورة اخترتها، شغل أول واحدة في القائمة
    if (currentTrackIndex === -1) {
        return playTrack(0);
    }

    // تأكيد إن في ملف صوتي موجود
    if (!audioEl || !audioEl.src) return;

    if (audioEl.paused) {
        // --- [ تشغيل بنعومة - Fade In ] ---
        clearInterval(fadeInterval);
        audioEl.volume = 0; // نبدأ من الصفر
        audioEl.play();
        updatePlayIcons(true);

        let vol = 0;
        fadeInterval = setInterval(() => {
            if (vol < 0.95) {
                vol += 0.05; 
                audioEl.volume = vol;
            } else {
                audioEl.volume = 1; // السمتوى الكامل
                clearInterval(fadeInterval);
            }
        }, 30); // السرعة الإجمالية نص ثانية تقريباً

    } else {
        // --- [ إيقاف بنعومة - Fade Out ] ---
        clearInterval(fadeInterval);
        let vol = audioEl.volume;

        fadeInterval = setInterval(() => {
            if (vol > 0.05) {
                vol -= 0.05;
                audioEl.volume = vol;
            } else {
                audioEl.volume = 0;
                audioEl.pause(); // الإيقاف الفعلي بعد ما الصوت يختفي
                updatePlayIcons(false);
                clearInterval(fadeInterval);
                audioEl.volume = 1; // نرجع الفوليوم لأصله عشان المرة الجاية
            }
        }, 30);
    }
};


window.nextTrack = () => {
    if(isShuffle) { playTrack(Math.floor(Math.random() * playlist.length)); } 
    else { playTrack(currentTrackIndex < playlist.length + 1 ? currentTrackIndex + 1 : 0); }
};
window.prevTrack = () => { if(currentTrackIndex > 0) playTrack(currentTrackIndex - 1); };

window.repeatTrack = () => {
    audioEl.currentTime = 0;
    if(audioEl.paused) togglePlayPause();
    showToast('تمت إعادة المقطع', 'fa-rotate-right');
};

window.toggleShuffle = () => {
    isShuffle = !isShuffle;
    document.getElementById('shuffleBtn').classList.toggle('active');
    showToast(isShuffle ? 'تم تفعيل التشغيل العشوائي' : 'تم إيقاف العشوائي', 'fa-shuffle');
};

audioEl.addEventListener('timeupdate', () => {
    if(audioEl.duration) {
        const percent = (audioEl.currentTime / audioEl.duration) * 100;
        document.getElementById('progressCurrent').style.width = `${percent}%`;
        document.getElementById('fpProgressCurrent').style.width = `${percent}%`;
        document.getElementById('fpCurrentTime').textContent = formatTime(audioEl.currentTime);
        
        // الكود الجديد: حفظ الوقت في الذاكرة (تقريباً كل ثانية عشان منضغطش على المتصفح)
        if (Math.floor(audioEl.currentTime) % 2 === 0) {
            localStorage.setItem('savedTime', audioEl.currentTime);
        }
    }
});
audioEl.addEventListener('loadedmetadata', () => { document.getElementById('fpTotalTime').textContent = formatTime(audioEl.duration); });
audioEl.addEventListener('ended', nextTrack);

// ================= دالة التقديم والتأخير (مضبوطة لتطبيقات العربي RTL) =================
window.seek = (event, type) => {
    // 1. لو مفيش صوت شغال، ميعملش حاجة
    if (!audioEl || !audioEl.duration) return;

    // 2. بنحدد الشريط اللي المستخدم داس عليه
    const bar = event.currentTarget; 
    const rect = bar.getBoundingClientRect();
    
    // 3. بنجيب مكان الضغطة (سواء بلمس الموبايل أو كليك الماوس)
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    
    // 4. السحر بتاعك (RTL Fix): بنحسب المسافة من اليمين مش الشمال
    const clickX = rect.right - clientX; 
    
    // 5. بنحسب النسبة المئوية
    let percentage = clickX / rect.width;
    
    // 6. تأمين النسبة عشان متخرفش برا الشريط
    percentage = Math.max(0, Math.min(1, percentage));

    // 7. تطبيق الوقت الجديد فوراً
    audioEl.currentTime = percentage * audioEl.duration;
};


// ================= السحب للأعلى والأسفل =================
let startY = 0;
const fullPlayer = document.getElementById('fullPlayer');
window.openFullPlayer = () => { if (currentTrackIndex !== -1) fullPlayer.classList.add('active'); };
window.closeFullPlayer = () => { fullPlayer.classList.remove('active'); };

document.getElementById('miniPlayer').addEventListener('touchstart', e => startY = e.touches[0].clientY);
document.getElementById('miniPlayer').addEventListener('touchend', e => {
    if (startY - e.changedTouches[0].clientY > 40 && currentTrackIndex !== -1) openFullPlayer();
});
fullPlayer.addEventListener('touchstart', e => startY = e.touches[0].clientY);
fullPlayer.addEventListener('touchend', e => {
    if (e.changedTouches[0].clientY - startY > 50) closeFullPlayer();
});

// ================= منطق القوائم والمفضلة الجديد كلياً =================

function updateHeartIcon() {
    if(currentTrackIndex === -1) return;
    const isFav = favorites.includes(playlist[currentTrackIndex].id);
    const icons = [document.getElementById('fpFavIcon'), document.getElementById('sheetFavIcon')];
    icons.forEach(icon => {
        if(!icon) return;
        icon.className = isFav ? "fa-solid fa-heart" : "fa-regular fa-heart";
        icon.style.color = isFav ? "#ff4757" : "";
    });
}

window.toggleFavorite = () => {
    if(currentTrackIndex === -1) return;
    const trackId = playlist[currentTrackIndex].id;
    const index = favorites.indexOf(trackId);
    
    if(index === -1) {
        favorites.push(trackId);
        showToast('تمت إضافته إلى إعجاباتك', 'fa-heart');
    } else {
        favorites.splice(index, 1);
        showToast('تمت الإزالة من إعجاباتك', 'fa-heart-crack');
    }
    
    localStorage.setItem('myFavs', JSON.stringify(favorites));
    updateHeartIcon();
    if(document.getElementById('libraryView').classList.contains('active')) renderLibrary();
};

function addToRecent(track) {
    recentTracks = recentTracks.filter(t => t.id !== track.id);
    recentTracks.unshift({ ...track, time: new Date().toLocaleTimeString('ar-EG', {hour: '2-digit', minute:'2-digit'}) });
    if(recentTracks.length > 10) recentTracks.pop();
    localStorage.setItem('myRecents', JSON.stringify(recentTracks));
}

// 1. إنشاء قائمة
window.confirmCreatePlaylist = () => {
    const name = document.getElementById('newPlaylistInput').value.trim();
    if(name) {
        userPlaylists.push({ id: Date.now(), name: name, tracks: [] });
        localStorage.setItem('myPlaylistsV2', JSON.stringify(userPlaylists));
        showToast(`تم إنشاء قائمة "${name}"`);
        closeCustomModal();
        renderPlaylistsOptions(); // تحديث شاشة الإضافة
        if(document.getElementById('libraryView').classList.contains('active')) renderLibrary();
    } else {
        showToast('يرجى كتابة اسم القائمة!', 'fa-triangle-exclamation');
    }
    syncAllPlaylists();
};


// 2. عرض القوائم داخل شاشة الإضافة
// =========================================================================
// ==================== 2. رسم القوائم داخل المشغل الكبير (تصميم بريميوم) ===
// =========================================================================
window.renderPlaylistsOptions = () => {
    const cont = document.getElementById('userPlaylistsContainer');
    if (!cont) return;

    cont.innerHTML = '';
    
    if (userPlaylists.length === 0) {
        cont.innerHTML = '<p style="text-align:center; color:#a7a7a7; font-size:13px; margin-top:15px;">لا توجد قوائم، أنشئ واحدة الآن!</p>';
        return;
    }

    userPlaylists.forEach(pl => {
        // رسم الكارت الجديد
        cont.innerHTML += `
            <div class="premium-add-card" onclick="addTrackToPlaylist(${pl.id})">
                <div class="pl-add-img">
                    <i class="fa-solid fa-folder-plus"></i>
                </div>
                
                <div class="pl-add-info">
                    <div class="pl-add-title">${pl.name}</div>
                    <div class="pl-add-subtitle">${pl.tracks.length} مقطع</div>
                </div>
                
                <div class="pl-add-action">
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>`;
    });
};

// 3. إضافة المقطع الحالي للقائمة
window.addTrackToPlaylist = (playlistId) => {
    if(currentTrackIndex === -1) return;
    const trackId = playlist[currentTrackIndex].id;
    const plIndex = userPlaylists.findIndex(p => p.id === playlistId);
    
    if(plIndex !== -1) {
        if(!userPlaylists[plIndex].tracks.includes(trackId)) {
            userPlaylists[plIndex].tracks.push(trackId);
            localStorage.setItem('myPlaylistsV2', JSON.stringify(userPlaylists));
            showToast(`تمت الإضافة إلى "${userPlaylists[plIndex].name}"`);
        } else {
            showToast('المقطع موجود بالفعل في هذه القائمة', 'fa-circle-info');
        }
    }
    closeSheet('playlistSheet');
    if(document.getElementById('libraryView').classList.contains('active')) renderLibrary();
};

// 4. فتح القائمة لسماع المقاطع اللي جواها
window.openPlaylistDetails = (playlistId) => {
    const pl = userPlaylists.find(p => p.id === playlistId);
    if(!pl) return;
    
    document.getElementById('detailsSheetTitle').textContent = pl.name;
    const listCont = document.getElementById('playlistTracksContainer');
    listCont.innerHTML = '';
    
    if(pl.tracks.length === 0) {
        listCont.innerHTML = '<p style="text-align:center; color:var(--text-muted); margin-top:20px;">القائمة فارغة، أضف بعض المقاطع أولاً.</p>';
    } else {
        pl.tracks.forEach(trackId => {
            const track = playlist.find(t => t.id === trackId);
            const origIndex = playlist.findIndex(t => t.id === trackId);
            if(track) {
                listCont.innerHTML += `
                <div class="track-item" onclick="playTrack(${origIndex}); closeSheet('playlistDetailsSheet');">
<div class="track-img"><img src="${track.image}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;"></div>                    <div class="track-info">
                        <div class="track-name">${track.title}</div>
                        <div class="track-artist">${track.artist}</div>
                    </div>
                    <i class="fa-solid fa-play" style="color:var(--primary); padding-left:10px;"></i>
                </div>`;
            }
        });
    }
    openSheet('playlistDetailsSheet');
};

// ================= دوال الرسم للمكتبة والواجهة =================
function renderHomeList() {
    const listContainer = document.getElementById('mainTrackList');
    listContainer.innerHTML = '';
    
    // هنعرض أول 3 مقاطع بس كاقتراحات في الشاشة الرئيسية
    const suggestedTracks = playlist.slice(0, 3); 
    
        suggestedTracks.forEach((track, index) => {
        // 1. نجيب اللون من القاموس الموحد
        const bgColor = artistColors[track.artist] || artistColors["default"];
        
        // 2. نضيف الـ style للكارت
        listContainer.innerHTML += `
            <div class="track-item" id="track-id-${index}" onclick="playTrack(${index})"
                 style="background: linear-gradient(90deg, ${bgColor} 0%, rgba(255,255,255,0.02) 80%); border-right: 3px solid ${bgColor};">
                <div class="track-img"><img src="${track.image}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;"></div>                
                <div class="track-info">
                    <div class="track-name">${track.title}</div>
                    <div class="track-artist">${track.artist}</div>
                </div>
                <div class="track-options" onclick="event.stopPropagation(); playTrack(${index}); openSheet('trackOptionsSheet');"><i class="fa-solid fa-ellipsis-vertical"></i></div>
            </div>`;
    });

}

// =========================================================================
// ==================== 📁 نظام سجل الاستماع بالكامل =======================
// =========================================================================

let isHistorySelectMode = false;
let selectedHistoryIds = new Set(); // لحفظ الـ IDs اللي اليوزر حددها
let currentHistoryFilter = 'all'; // عشان نحفظ الفلتر الحالي

// ==================== 1. فتح الصفحة بذكاء (على الكل) ====================
window.openHistoryPage = () => {
    // فتح الصفحة
    if (typeof openLibPage === 'function') openLibPage('historyPage');
    
    // تصفير وضع التحديد لو كان شغال
    isHistorySelectMode = false;
    selectedHistoryIds.clear();
    updateHistoryNavbar();

    // تشغيل فلتر "الكل" تلقائياً
    const allBtn = document.querySelector('#historyPage .filter-chip');
    if (allBtn) {
        filterHistory('all', allBtn);
    } else {
        renderHistory('all');
    }
};

// ==================== 2. رسم السجل والكروت ====================
window.renderHistory = (filterType = currentHistoryFilter) => {
    currentHistoryFilter = filterType;
    const recentCont = document.getElementById('recentList');
    if (!recentCont) return;

    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    let filteredTracks = recentTracks.filter(track => {
        if (!track.timestamp) return true; 
        const diffDays = (now - track.timestamp) / oneDay;
        if (filterType === 'today') return diffDays < 1;
        if (filterType === 'yesterday') return diffDays >= 1 && diffDays < 2;
        if (filterType === '3days') return diffDays <= 3;
        if (filterType === 'week') return diffDays <= 7;
        return true; 
    });

    if (filteredTracks.length === 0) {
        recentCont.innerHTML = `<div class="empty-state" style="text-align: center; margin-top: 40px; color: #8892b0;"><p>لا يوجد سجل استماع في هذه الفترة.</p></div>`;
        return;
    }

    recentCont.innerHTML = '';
    
    // لو وضع التحديد شغال، ندي الحاوية كلاس التفعيل عشان الدوائر تظهر
    if (isHistorySelectMode) {
        recentCont.classList.add('history-select-mode-active');
    } else {
        recentCont.classList.remove('history-select-mode-active');
    }

    filteredTracks.forEach(track => {
        let originalTrack = playlist.find(t => t.id === track.id) || track;
        let bgColor = (typeof artistColors !== 'undefined' && artistColors[originalTrack.artist]) ? artistColors[originalTrack.artist] : '#2c3e50';
        let listenTime = track.time || "مؤخراً";
        
        // تجهيز شكل دائرة التحديد (مليانة أو فاضية)
        let isSelected = selectedHistoryIds.has(originalTrack.id);
        let circleClass = isSelected ? 'selected' : '';
        let checkIcon = isSelected ? '<i class="fa-solid fa-check" style="font-size: 12px;"></i>' : '';

        // نظام الضغط الذكي: لو في وضع التحديد (يعلم)، لو في الوضع العادي (يشغل السورة)
        let clickAction = isHistorySelectMode ? `toggleHistoryItemSelection(${originalTrack.id})` : `playTrack(${originalTrack.id})`;

        recentCont.innerHTML += `
            <div class="dl-card premium-track-card" onclick="${clickAction}"
                 style="background: linear-gradient(90deg, ${bgColor} 0%, rgba(255,255,255,0.02) 80%); border-right: 3px solid ${bgColor};">
                
                <!-- دائرة التحديد -->
                <div class="hist-select-circle ${circleClass}">
                    ${checkIcon}
                </div>

                <img src="${originalTrack.image || 'default-image.jpg'}" class="dl-image">
                
                <div class="dl-info">
                    <div class="dl-title">${originalTrack.title}</div>
                    <div class="dl-artist" style="display: flex; align-items: center; gap: 6px;">
                        <span>${originalTrack.artist}</span>
                        <span style="color: rgba(255,255,255,0.5); font-size: 11px; border-right: 1px solid rgba(255,255,255,0.2); padding-right: 6px;">
                            <i class="fa-regular fa-clock" style="margin-left: 3px;"></i>${listenTime}
                        </span>
                    </div>
                </div>
                
                <!-- الـ 3 نقط بتاعت السجل -->
                <i class="fa-solid fa-ellipsis-vertical dl-options-btn" 
                   onclick="event.stopPropagation(); openHistoryOptions(${originalTrack.id}, '${originalTrack.title}')"></i>
            </div>
        `;
    });
};

window.filterHistory = (type, btnElement) => {
    document.querySelectorAll('#historyPage .filter-chip').forEach(btn => btn.classList.remove('active'));
    if(btnElement) btnElement.classList.add('active');
    renderHistory(type);
};

// ==================== 3. وضع التحديد المتعدد (Multi-select) ====================
window.toggleHistorySelectMode = () => {
    isHistorySelectMode = !isHistorySelectMode;
    selectedHistoryIds.clear(); // تصفير التحديد
    updateHistoryNavbar();
    renderHistory(); // إعادة الرسم لإظهار أو إخفاء الدوائر
};

window.updateHistoryNavbar = () => {
    const tools = document.getElementById('historySelectTools');
    const enterBtn = document.getElementById('historyEnterSelectBtn');
    
    if (isHistorySelectMode) {
        tools.style.display = 'flex';
        enterBtn.style.display = 'none';
        document.querySelector('#historyPage .navbar-title').style.display = 'none'; // إخفاء العنوان لتوفير مساحة
    } else {
        tools.style.display = 'none';
        enterBtn.style.display = 'block';
        document.querySelector('#historyPage .navbar-title').style.display = 'block';
    }
};

window.toggleHistoryItemSelection = (id) => {
    if (selectedHistoryIds.has(id)) {
        selectedHistoryIds.delete(id);
    } else {
        selectedHistoryIds.add(id);
    }
    renderHistory(); // إعادة رسم لتحديث شكل الدوائر
};

window.selectAllHistory = () => {
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    
    // 1. نجمع كل الـ IDs الظاهرة قدام اليوزر في الفلتر الحالي
    let visibleIds = [];
    
    recentTracks.forEach(track => {
        let diffDays = track.timestamp ? (now - track.timestamp) / oneDay : 0;
        let match = false;
        
        if (currentHistoryFilter === 'all') match = true;
        if (currentHistoryFilter === 'today' && diffDays < 1) match = true;
        if (currentHistoryFilter === 'yesterday' && diffDays >= 1 && diffDays < 2) match = true;
        if (currentHistoryFilter === '3days' && diffDays <= 3) match = true;
        if (currentHistoryFilter === 'week' && diffDays <= 7) match = true;
        
        if(match) visibleIds.push(track.id);
    });

    // 2. التريكة هنا: نفحص هل "كل" الظاهر متحدد فعلاً ولا لأ؟
    let isAllSelected = visibleIds.length > 0 && visibleIds.every(id => selectedHistoryIds.has(id));

    if (isAllSelected) {
        // لو كلهم متحددين -> ندوس تاني يمسح التحديد (إلغاء الكل)
        visibleIds.forEach(id => selectedHistoryIds.delete(id));
    } else {
        // لو مش كلهم متحددين -> يحددهم كلهم
        visibleIds.forEach(id => selectedHistoryIds.add(id));
    }

    // 3. نعيد رسم الصفحة عشان الدوائر تتحدث
    renderHistory();
};

window.deleteSelectedHistory = () => {
    if (selectedHistoryIds.size === 0) {
        if(typeof showToast === 'function') showToast("يرجى تحديد مقطع واحد على الأقل");
        return;
    }
    
    // المشكلة اتحلت هنا: استخدام مفتاح 'myRecents' الصحيح في الحفظ
    recentTracks = recentTracks.filter(track => !selectedHistoryIds.has(track.id));
    localStorage.setItem('myRecents', JSON.stringify(recentTracks)); 
    
    toggleHistorySelectMode(); // الخروج من وضع التحديد
    renderHistory();
    if(typeof showToast === 'function') showToast("تم الحذف بنجاح 🗑️");
};

// ==================== 4. الـ 3 نقط الخاصة بالسجل ====================
let currentHistoryOptId = null;

window.openHistoryOptions = (id, title) => {
    currentHistoryOptId = id;
    currentOptionsTrackId = id; // عشان دالة القوائم والشيخ اللي برمجناهم يشتغلوا
    
    document.getElementById('histOptTitle').textContent = title;
    
    const delBtn = document.getElementById('histOptDelBtn');
    delBtn.onclick = () => removeSpecificHistory(id);

    // دالة تثبيت في السجل مستقبلاً

    openSheet('historyOptionsMenu');
};

window.removeSpecificHistory = (id) => {
    recentTracks = recentTracks.filter(t => t.id !== id);
    localStorage.setItem('myRecents', JSON.stringify(recentTracks)); // الحفظ الصحيح
    renderHistory();
    closeSheet('historyOptionsMenu');
    if(typeof showToast === 'function') showToast("تمت الإزالة من السجل");
};
// ==================== دالة تشغيل فلاتر السجل ====================
window.filterHistory = (type, btnElement) => {
    // 1. نشيل كلاس التفعيل من كل الزراير
    const chips = document.querySelectorAll('#historyPage .filter-chip');
    chips.forEach(btn => btn.classList.remove('active'));
    
    // 2. نحط كلاس التفعيل للزرار اللي اداس عليه
    if(btnElement) btnElement.classList.add('active');

    // 3. نعيد رسم السجل بالفلتر الجديد
    renderHistory(type);
};

// ==================== دالة مسح السجل بالكامل ====================
window.clearHistory = () => {
    if (recentTracks.length === 0) return;
    
    if (confirm("هل أنت متأكد من مسح سجل الاستماع بالكامل؟")) {
        recentTracks = [];
        localStorage.setItem('recentTracks', JSON.stringify(recentTracks));
        renderHistory('all');
        if(typeof showToast === 'function') showToast("تم مسح السجل");
    }
};
let currentOptionsTrackId = null;

// ================= 1. رسم الصفحة (مع التصميم الدهبي) =================
window.renderFavoritesPage = () => {
    const favCont = document.getElementById('favoritesList');
    if (!favCont) return; 

    if (favorites.length === 0) {
        favCont.innerHTML = `<div class="empty-state" style="text-align: center; color: #8892b0; margin-top: 20px;">لا توجد سور في المفضلة حالياً.</div>`;
    } else {
        favCont.innerHTML = ''; 
        
        // بنجيب رقم السورة المتثبتة من الذاكرة
        const pinnedFavId = Number(localStorage.getItem('pinnedFav'));

        favorites.forEach((favId) => {
            let track = playlist.find(t => t.id === favId);
            let origIndex = playlist.findIndex(t => t.id === favId);
            
            if(track) {
                // بنقارن: هل السورة دي هي اللي متثبتة في الذاكرة؟
                let isPinned = (Number(track.id) === pinnedFavId);
                
                // لو متثبتة، بنديها كلاس الدهبي والبادج
                let pinnedClass = isPinned ? 'is-pinned' : '';
                let pinnedBadge = isPinned ? `` : '';

                favCont.innerHTML += `
                    <div class="premium-track-card ${pinnedClass}" onclick="playTrack(${origIndex})">
                        ${pinnedBadge} <img src="${track.image}" class="pt-image">
                        <div class="pt-info">
                            <div class="pt-title">${track.title}</div>
                            <div class="pt-artist">${track.artist}</div>
                        </div>
                        <div class="pt-actions">
                            <i class="fa-solid fa-heart pt-icon heart-active" style="cursor: default;"></i>
                            <i class="fa-solid fa-ellipsis-vertical pt-icon" 
                               onclick="event.stopPropagation(); openTrackOptions(${track.id}, 'favorite')"></i>
                        </div>
                    </div>
                `;
            }
        });
    }
};

// ================= 2. دالة التثبيت (بتحفظ في الذاكرة) =================
window.pinCurrentTrack = () => {
    if (currentOptionsTrackId === null) return;

    const targetId = Number(currentOptionsTrackId);
    const pinnedFavId = Number(localStorage.getItem('pinnedFav'));
    favorites = favorites.map(id => Number(id)); 
    const trackIndex = favorites.indexOf(targetId);

    if (trackIndex > -1) {
        if (targetId === pinnedFavId) {
            // حالة إزالة التثبيت
            localStorage.removeItem('pinnedFav'); // بنمسحها من الذاكرة
            
            // بننزلها خطوة لتحت عشان متفضلش في المركز الأول
            if (trackIndex === 0 && favorites.length > 1) {
                const trackId = favorites.shift();
                favorites.splice(1, 0, trackId);
            }
            if (typeof showToast === "function") showToast("تم إزالة التثبيت 📌");
            
        } else {
            // حالة تثبيت جديد
            localStorage.setItem('pinnedFav', targetId); // بنحفظ السورة كـ "متثبتة"
            
            favorites.splice(trackIndex, 1);
            favorites.unshift(targetId); // بنطلعها فوق
            if (typeof showToast === "function") showToast("تم التثبيت في أعلى القائمة 📌");
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
        closeTrackOptions();
        renderFavoritesPage();
    }
    currentOptionsTrackId = null;
};

// ================= 3. دالة فتح القائمة (لتغيير الكلمة) =================
window.openTrackOptions = (trackId, listType) => {
    currentOptionsTrackId = Number(trackId);
    const track = playlist.find(t => Number(t.id) === currentOptionsTrackId);
    if (!track) return;

    document.getElementById('osImage').src = track.image;
    document.getElementById('osTitle').textContent = track.title;
    document.getElementById('osArtist').textContent = track.artist;

    const pinText = document.getElementById('pinOptionText');
    const pinIcon = document.getElementById('pinOptionIcon');
    const pinnedFavId = Number(localStorage.getItem('pinnedFav'));

    if (pinText && pinIcon) {
        // بنقارن السورة المفتوحة بالسورة المتثبتة
        if (currentOptionsTrackId === pinnedFavId) {
            pinText.textContent = "إزالة التثبيت";
            pinIcon.style.color = "#ff4757"; 
            pinText.style.color = "#ff4757";
        } else {
            pinText.textContent = "تثبيت في الأعلى";
            pinIcon.style.color = "#f6e58d";
            pinText.style.color = "#f6e58d";
        }
    }

    const sheet = document.getElementById('globalTrackOptions');
    const backdrop = document.getElementById('optionsBackdrop');
    if (sheet && backdrop) {
        sheet.classList.add('active');
        backdrop.classList.add('active');
        document.body.classList.add('modal-open');
    }
};

// =========================================================================
// ==================== 9. فتح شيت اختيار قوائم التشغيل =====================
// =========================================================================
window.addToPlaylistFromOptions = () => {
    // 1. التأكد إن في سورة مختارة
    if (currentOptionsTrackId === null) return;

    // 2. قفل قائمة الـ 3 نقط فوراً
    closeTrackOptions();

    // 3. فتح شيت "أضف إلى قائمة تشغيل" (الذي يحتوي على قوائمك)
    // بنستخدم الدالة بتاعتك اللي بتفتح الـ Bottom Sheets
    if (typeof openSheet === "function") {
        openSheet('playlistSheet');
    } else {
        // لو مفيش دالة openSheet، بنضيف كلاس active يدوياً
        document.getElementById('playlistSheet').classList.add('active');
    }

    // 4. تحديث عرض القوائم داخل الشيت (Container)
    // لازم تنادي الدالة اللي بترسم القوائم بتاعتك جوه الشيت ده
    if (typeof renderUserPlaylists === "function") {
        renderUserPlaylists(); 
    }

    // ملاحظة: مش هنصفر currentOptionsTrackId هنا
    // عشان نفضل فاكرين السورة لحد ما تختار القائمة اللي هتضيف فيها
};

// ================= 4. دالة الحذف (تأمين ضد الأخطاء) =================
window.removeTrackFromList = () => {
    if (currentOptionsTrackId === null) return;

    const targetId = Number(currentOptionsTrackId);
    favorites = favorites.filter(id => Number(id) !== targetId);
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // لو السورة اللي اتمسحت دي هي اللي متثبتة، امسح علامة التثبيت من الذاكرة
    if (targetId === Number(localStorage.getItem('pinnedFav'))) {
        localStorage.removeItem('pinnedFav');
    }

    if (typeof showToast === "function") showToast("تمت الإزالة من المفضلة"); 
    else alert("تم الحذف من المفضلة");

    closeTrackOptions();
    if (typeof updateHeartIcon === "function") updateHeartIcon();
    renderFavoritesPage();
    
    currentOptionsTrackId = null;
};


// =========================================================================
// ==================== 4. دالة قفل القائمة ================================
// =========================================================================
window.closeTrackOptions = () => {
    const sheet = document.getElementById('globalTrackOptions');
    const backdrop = document.getElementById('optionsBackdrop');
    if (sheet && backdrop) {
        sheet.classList.remove('active');
        backdrop.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
};

// زرار بديل للحذف
window.toggleFavoriteFromOptions = () => {
    removeTrackFromList();
};


// =========================================================================
// ==================== 5. فتح صفحة القوائم بشكل ذكي =======================
// =========================================================================
window.openPlaylistsPage = () => {
    // 1. بنفتح الصفحة عادي جداً باستخدام الدالة بتاعتك
    if (typeof openLibPage === 'function') {
        openLibPage('playlistsPage');
    }

    // 2. بنجيب زرار "الكل" (اللي هو أول زرار في الفلاتر)
    const allFilterBtn = document.querySelector('#playlistsPage .filter-chip');
    
    // 3. بننفذ ضغطة وهمية عليه عشان يعرض القوائم تلقائياً
    if (allFilterBtn) {
        filterPlaylists('all', allFilterBtn);
    } else {
        // للضمان لو الزرار ملقيناهوش، بنرسم القوائم علطول
        renderUserPlaylists();
    }
};

// =========================================================================
// ==================== 1. دالة المشاركة (شاملة) ===========================
// =========================================================================
window.shareCurrentTrack = () => {
    // 1. التأكد من وجود سورة مختارة
    if (currentOptionsTrackId === null) return;

    // 2. البحث عن السورة (في القائمة الرئيسية أولاً، ثم في التحميلات لو لم نجدها)
    let track = playlist.find(t => Number(t.id) === Number(currentOptionsTrackId));
    if (!track && typeof downloadedTracks !== 'undefined') {
        track = downloadedTracks.find(t => Number(t.id) === Number(currentOptionsTrackId));
    }

    if (track) {
        // 3. تنفيذ المشاركة لو المتصفح يدعمها
        if (navigator.share) {
            navigator.share({
                title: track.title,
                text: `استمع إلى ${track.title} بصوت الشيخ ${track.artist}`,
                url: window.location.href
            });
        } else {
            alert("متصفحك لا يدعم المشاركة المباشرة");
        }
    }
    
    // 4. قفل أي قائمة 3 نقط مفتوحة (سواء بتاعة المفضلة أو التحميلات)
    closeTrackOptions();
    if (typeof closeSheet === 'function') closeSheet('downloadOptionsSheet');
    
    // 5. تصفير المتغير
    currentOptionsTrackId = null;
};


// =========================================================================
// ==================== 2. فتح شاشة قوائم التشغيل ==========================
// =========================================================================
window.openPlaylistSheetFromOptions = () => {
    // 1. التأكد إن السورة لسه محفوظة في الذاكرة
    if (currentOptionsTrackId === null) return;

    // 2. قفل أي قائمة 3 نقط مفتوحة لتوسيع الشاشة
    closeTrackOptions();
    if (typeof closeSheet === 'function') closeSheet('downloadOptionsSheet');

    // 3. فتح شاشة "أضف إلى قائمة تشغيل" بتأخير بسيط لضمان النعومة
    setTimeout(() => {
        const playlistSheet = document.getElementById('playlistSheet');
        if (playlistSheet) {
            // إظهار الشيت
            playlistSheet.classList.add('active');
            
            // تحديث ورسم القوائم بداخل الشيت
            if (typeof renderUserPlaylists === "function") {
                renderUserPlaylists();
            }
        }
    }, 100);

    // ⚠️ ملاحظة هامة: مش بنصفر الـ ID هنا عشان نفضل فاكرين السورة لحد ما اليوزر يختار القائمة
};


// =========================================================================
// ==================== 📁 نظام إدارة قوائم التشغيل بالكامل ================
// =========================================================================

// متغيرات عامة لحفظ الـ ID بتاع القائمة اللي شغالين عليها دلوقتي
let currentOptionsPlId = null; 
let activeEditPlId = null;
let activeDeletePlId = null;

// ==================== 1. المزامنة الشاملة (المايسترو) ====================
// الدالة دي وظيفتها إنها تحفظ البيانات وتحدث القوائم في كل مكان في التطبيق (المكتبة والمشغل)
window.syncAllPlaylists = () => {
    localStorage.setItem('userPlaylists', JSON.stringify(userPlaylists));
    
    // تحديث صفحة المكتبة
    if (typeof renderUserPlaylists === 'function') renderUserPlaylists();
    
    // تحديث شاشة الإضافة من المشغل الكبير
    if (typeof renderPlaylistsOptions === 'function') renderPlaylistsOptions();
};


// ==================== 2. رسم القوائم في صفحة "قوائمك" ====================
window.renderUserPlaylists = () => {
    const plCont = document.getElementById('playlistsGrid');
    if (!plCont) return;

    // ترتيب القوائم: المثبت يظهر فوق الأول
    const sortedPlaylists = [...userPlaylists].sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return 0;
    });

    // حالة: لو مفيش أي قوائم
    if (sortedPlaylists.length === 0) {
        plCont.innerHTML = '<p style="color:#a7a7a7; font-size:14px; text-align:center; margin-top:20px;">لم تقم بإنشاء أي قوائم بعد.</p>';
        return;
    }
    
    plCont.innerHTML = ''; // تفريغ الحاوية قبل الرسم
    
    // رسم كروت القوائم
    sortedPlaylists.forEach(pl => {
        // لو القائمة متثبتة، بنجهز أيقونة الدبوس
        let pinIcon = pl.pinned ? `<i class="fa-solid fa-thumbtack" style="color: #1ed760; font-size: 12px; margin-right: 5px;"></i>` : '';
        
        plCont.innerHTML += `
            <div class="pl-list-card" onclick="openPlaylistDetails(${pl.id})">
                <div class="pl-list-img">
                    <i class="fa-solid fa-music"></i>
                </div>
                
                <div class="pl-list-info">
                    <div class="pl-list-title">${pl.name}</div>
                    <div class="pl-list-subtitle">من إنشائك • ${pl.tracks.length} مقاطع ${pinIcon}</div>
                </div>
                
                <!-- زرار الـ 3 نقط -->
                <div class="pl-list-dots" onclick="event.stopPropagation(); openPlOptionsMenu(${pl.id})">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>`;
    });
};


// ==================== 3. فتح خيارات القائمة (الـ 3 نقط) ===================
window.openPlOptionsMenu = (plId) => {
    currentOptionsPlId = plId;
    const pl = userPlaylists.find(p => p.id === plId);
    if (!pl) return;

    // تحديث بيانات القائمة في الهيدر بتاع الشيت
    const titleEl = document.getElementById('plOptTitle');
    const countEl = document.getElementById('plOptCount');
    if(titleEl) titleEl.textContent = pl.name;
    if(countEl) countEl.textContent = `${pl.tracks.length} مقاطع`;

    // إعداد زرار التثبيت وتغيير لونه لو متثبت
    const pinBtn = document.getElementById('plOptPinBtn');
    if(pinBtn) {
        pinBtn.innerHTML = pl.pinned 
            ? `<i class="fa-solid fa-thumbtack icon-outline" style="color: #1ed760;"></i> <span style="color: #1ed760;">إلغاء التثبيت</span>`
            : `<i class="fa-solid fa-thumbtack icon-outline"></i> <span>تثبيت فى أول القائمة</span>`;
        pinBtn.onclick = () => togglePlPin(plId);
    }

    // ربط أزرار التعديل والحذف بالدوال الجديدة المخصصة للنوافذ المنبثقة
    const editBtn = document.getElementById('plOptEditBtn');
    if(editBtn) editBtn.onclick = () => editPlaylistName(plId);

    const delBtn = document.getElementById('plOptDelBtn');
    if(delBtn) delBtn.onclick = () => deleteSpecificPlaylist(plId);

    // فتح الـ Bottom Sheet
    openSheet('playlistOptionsMenu');
};


// ==================== 4. دوال التحكم والعمليات ==========================

// -- أ. التثبيت --
window.togglePlPin = (plId) => {
    const pl = userPlaylists.find(p => p.id === plId);
    if(pl) {
        pl.pinned = !pl.pinned;
        syncAllPlaylists(); // حفظ وتحديث
        closeSheet('playlistOptionsMenu');
        if(typeof showToast === "function") showToast(pl.pinned ? "تم التثبيت بنجاح 📌" : "تم إلغاء التثبيت");
    }
};

// -- ب. قفل النوافذ المنبثقة (Modals) --
window.closeCustomModals = () => {
    document.querySelectorAll('.custom-modal-overlay').forEach(m => m.classList.remove('active'));
    activeEditPlId = null;
    activeDeletePlId = null;
};

// -- ج. تعديل الاسم (عبر النافذة المنبثقة الشيك) --
window.editPlaylistName = (plId) => {
    const pl = userPlaylists.find(p => p.id === plId);
    if (!pl) return;
    
    activeEditPlId = plId; // حفظ الـ ID
    closeSheet('playlistOptionsMenu'); // قفل الـ 3 نقط
    
    // فتح النافذة المنبثقة الخاصة بالتعديل
    setTimeout(() => {
        const editInput = document.getElementById('editPlInput');
        const editModal = document.getElementById('editPlaylistModal');
        if(editInput && editModal) {
            editInput.value = pl.name; // وضع الاسم القديم في الحقل
            editModal.classList.add('active');
            editInput.focus();
        }
    }, 100);
};

// -- د. حفظ الاسم الجديد --
window.saveNewPlaylistName = () => {
    if (activeEditPlId === null) return;
    
    const newNameInput = document.getElementById('editPlInput');
    if(newNameInput) {
        const newName = newNameInput.value.trim();
        if (newName !== "") {
            const pl = userPlaylists.find(p => p.id === activeEditPlId);
            if (pl) {
                pl.name = newName;
                syncAllPlaylists(); // حفظ وتحديث
                if(typeof showToast === "function") showToast("تم تعديل الاسم بنجاح ✨");
            }
        }
    }
    closeCustomModals(); // قفل النافذة
};

// -- هـ. حذف القائمة (عبر النافذة المنبثقة الشيك) --
window.deleteSpecificPlaylist = (plId) => {
    const pl = userPlaylists.find(p => p.id === plId);
    if (!pl) return;

    activeDeletePlId = plId; // حفظ الـ ID
    closeSheet('playlistOptionsMenu'); // قفل الـ 3 نقط

    // فتح النافذة المنبثقة الخاصة بتأكيد الحذف
    setTimeout(() => {
        const delText = document.getElementById('deletePlText');
        const delModal = document.getElementById('deletePlaylistModal');
        if(delText && delModal) {
            delText.textContent = `هل أنت متأكد أنك تريد حذف قائمة "${pl.name}"؟ لا يمكن التراجع عن هذا الإجراء.`;
            delModal.classList.add('active');
        }
    }, 100);
};

// -- و. تأكيد عملية الحذف --
window.confirmDeletePlAction = () => {
    if (activeDeletePlId === null) return;

    const plIndex = userPlaylists.findIndex(p => p.id === activeDeletePlId);
    if (plIndex > -1) {
        userPlaylists.splice(plIndex, 1);
        syncAllPlaylists(); // حفظ وتحديث
        if(typeof showToast === "function") showToast("تم الحذف من القوائم 🗑️");
    }
    closeCustomModals(); // قفل النافذة
};

// دالة المشاركة الوهمية
window.shareSpecificPlaylist = () => {
    const pl = userPlaylists.find(p => p.id === currentOptionsPlId);
    if (pl && navigator.share) {
        navigator.share({
            title: pl.name,
            text: `استمع إلى قائمة "${pl.name}" على تطبيقنا!`,
            url: window.location.href
        });
    }
    closeSheet('playlistOptionsMenu');
};

// =========================================================================
// ==================== 4. فلاتر القوائم (الرقائق العلوية) =================
// =========================================================================
window.filterPlaylists = (type, btnElement) => {
    // تفعيل الزرار المضغوط
    document.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    const plCont = document.getElementById('playlistsGrid');
    
    if (type === 'all' || type === 'yours') {
        renderUserPlaylists(); // بيعرض قوائمك
    } else if (type === 'app') {
        plCont.innerHTML = '<p style="color:#a7a7a7; font-size:14px; text-align:center; margin-top:20px;">لا توجد قوائم مقترحة من وذكر حالياً.</p>';
    }

    const searchInput = document.getElementById('playlistsSearchInput');
if(searchInput) searchInput.value = '';
};

window.goHomeFromPlaylists = () => {
    closeLibPage('playlistsPage');
    // العودة للرئيسية عبر إخفاء المكتبة وإظهار الرئيسية
    const libraryView = document.getElementById('libraryView');
    const homeView = document.getElementById('homeView');
    if (libraryView && homeView) {
        libraryView.classList.remove('active');
        homeView.classList.add('active');
    }
};


// =========================================================================
// ==================== 4. الانتقال لصفحة الشيخ (شاملة ومسار صحيح) ========
// =========================================================================
window.goToArtist = () => {
    // 1. التأكد من وجود سورة مختارة
    if (currentOptionsTrackId === null) return;

    // 2. البحث عن السورة واسم الشيخ (في القائمة الرئيسية أو التحميلات)
    let track = playlist.find(t => Number(t.id) === Number(currentOptionsTrackId));
    if (!track && typeof downloadedTracks !== 'undefined') {
        track = downloadedTracks.find(t => Number(t.id) === Number(currentOptionsTrackId));
    }
    
    if (track) {
        const artistName = track.artist;

        // 3. قفل القوائم السفلية (الـ 3 نقط)
        closeTrackOptions();
        if (typeof closeSheet === 'function') closeSheet('downloadOptionsSheet');

        // 4. قفل أي صفحة مكتبة فرعية مفتوحة (مثل المفضلة أو التحميلات) للعودة للرئيسية
        const activeSubPage = document.querySelector('.sub-lib-page.active');
        if (activeSubPage) {
            closeLibPage(activeSubPage.id);
        }

        // 5. إجبار التطبيق على العودة للشاشة الرئيسية (Home)
        const libraryView = document.getElementById('libraryView');
        const homeView = document.getElementById('homeView');
        const navItems = document.querySelectorAll('.nav-item'); // أيقونات الشريط السفلي

        if (libraryView && homeView) {
            // التبديل بين الشاشات
            libraryView.classList.remove('active');
            homeView.classList.add('active');
            
            // تحديث شكل الأيقونات في الشريط السفلي لتنير أيقونة "الرئيسية"
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('onclick') && item.getAttribute('onclick').includes('homeView')) {
                    item.classList.add('active');
                }
            });
        }

        // 6. فتح قائمة الشيخ بعد التأكد من العودة للرئيسية
        setTimeout(() => {
            if (typeof openReciterPlaylist === "function") {
                openReciterPlaylist(artistName);
            }
        }, 200);
    }

    // 7. تصفير المتغير العام
    currentOptionsTrackId = null;
};




// ================= استرجاع آخر مقطع كان شغال =================
function restoreLastPlayed() {
    const savedIndex = localStorage.getItem('savedTrackIndex');
    const savedTime = localStorage.getItem('savedTime');

    // لو لقينا بيانات محفوظة في المتصفح
    if (savedIndex !== null && savedIndex !== "-1") {
        currentTrackIndex = parseInt(savedIndex);
        const track = playlist[currentTrackIndex];

        if (track) {
            // نجهز الصوت بس (بدون تشغيل عشان المتصفح بيمنع التشغيل التلقائي المزعج)
            audioEl.src = track.src;
            audioEl.currentTime = parseFloat(savedTime) || 0;

            // تحديث المشغل الصغير
            document.getElementById('playerTitle').textContent = track.title;
            document.getElementById('playerArtist').textContent = track.artist;
            document.getElementById('playerIcon').innerHTML = `<img src="${track.image}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">`;

            // تحديث المشغل الكبير والخيارات
            document.getElementById('fpBigTitle').textContent = track.title;
            document.getElementById('fpBigArtist').textContent = track.artist;
            document.getElementById('fpCoverIcon').innerHTML = `<img src="${track.image}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">`;
            
            document.getElementById('sheetOptionsTitle').textContent = track.title;
            document.getElementById('sheetOptionsArtist').textContent = track.artist;
            document.getElementById('sheetOptionsImg').innerHTML = `<img src="${track.image}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">`;

            // تلوين العنصر في القائمة
            setTimeout(() => {
                document.querySelectorAll('.track-item').forEach(el => el.classList.remove('playing-active'));
                document.querySelectorAll(`#track-id-${currentTrackIndex}`).forEach(el => el.classList.add('playing-active'));
            }, 500);
        }
    }
}

// ================= مؤقت النوم المطور والآمن =================
let sleepTimerInterval = null;
let remainingSeconds = 0;

// فتح وإغلاق نافذة الوقت المخصص
window.openCustomTimerModal = () => {
    const inputEl = document.getElementById('customTimerInput');
    if(inputEl) inputEl.value = '';
    document.getElementById('customTimerModal').classList.add('active');
    setTimeout(() => { if(inputEl) inputEl.focus(); }, 100);
};

window.closeCustomTimerModal = () => {
    document.getElementById('customTimerModal').classList.remove('active');
};

// تأكيد الوقت المخصص
window.confirmCustomTimer = () => {
    const inputEl = document.getElementById('customTimerInput');
    
    // التأكد إن مربع الإدخال موجود ومفيش لخبطة في الـ HTML
    if (!inputEl) {
        showToast('خطأ: لا يمكن العثور على مربع الإدخال', 'fa-triangle-exclamation');
        return;
    }

    const mins = parseInt(inputEl.value);
    
    if (mins && mins > 0) {
        setSleepTimer(mins);
        closeCustomTimerModal();
    } else {
        showToast('الرجاء إدخال وقت صحيح!', 'fa-triangle-exclamation');
    }
};

// تشغيل المؤقت 
window.setSleepTimer = (minutes) => {
    if (sleepTimerInterval) clearInterval(sleepTimerInterval);
    
    remainingSeconds = minutes * 60; 
    
    // إظهار التايمر لو العنصر موجود
    const liveTimer = document.getElementById('liveSleepTimer');
    if (liveTimer) liveTimer.style.display = 'inline-flex';
    
    updateTimerDisplay(); 
    
    sleepTimerInterval = setInterval(() => {
        remainingSeconds--;
        updateTimerDisplay();
        
        // لما الوقت يخلص
        if (remainingSeconds <= 0) {
            clearInterval(sleepTimerInterval);
            if (liveTimer) liveTimer.style.display = 'none';
            
            if (!audioEl.paused) {
                audioEl.pause();
                updatePlayIcons(false);
                showToast('تم إيقاف الصوت (انتهى وقت النوم)', 'fa-moon');
            }
        }
    }, 1000);

    showToast(`تم ضبط المؤقت على ${minutes} دقيقة`, 'fa-stopwatch');
    
    // قفل شاشة المؤقت الأساسية لو كانت مفتوحة
    const sheet = document.getElementById('timerSheet');
    if (sheet && sheet.classList.contains('active')) {
        closeSheet('timerSheet');
    }
};

// تحديث الأرقام في الشاشة
function updateTimerDisplay() {
    const timerText = document.getElementById('timerCountdown');
    if (!timerText) return; // حماية عشان الكود ميقفش لو العنصر مش موجود
    
    const m = Math.floor(remainingSeconds / 60);
    const s = remainingSeconds % 60;
    timerText.textContent = `${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
}

// إلغاء المؤقت
window.cancelSleepTimer = () => {
    if (sleepTimerInterval) {
        clearInterval(sleepTimerInterval);
        sleepTimerInterval = null;
        
        const liveTimer = document.getElementById('liveSleepTimer');
        if (liveTimer) liveTimer.style.display = 'none';
        
        showToast('تم إلغاء مؤقت النوم', 'fa-ban');
    } else {
        showToast('لا يوجد مؤقت قيد التشغيل حالياً', 'fa-circle-info');
    }
    
    const sheet = document.getElementById('timerSheet');
    if (sheet && sheet.classList.contains('active')) {
        closeSheet('timerSheet');
    }
}; 
// التهيئة
window.onload = () => {
    renderHomeList();
    renderPlaylistsOptions();
    
    // تشغيل دالة استرجاع المقطع
    restoreLastPlayed();

    // تفعيل الـ PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
          .then(() => console.log('تم تفعيل التطبيق بنجاح (PWA)'))
          .catch((err) => console.log('خطأ في تفعيل التطبيق:', err));
    }
};

// ================= فلترة وفتح قائمة قارئ محدد (مع عرض الصور) =================
window.openReciterPlaylist = (reciterName) => {
    const titleElement = document.getElementById('artistListTitle');
    if (titleElement) titleElement.textContent = reciterName;
    
    const listContainer = document.getElementById('artistTrackList');
    if (!listContainer) return;
    listContainer.innerHTML = ''; 
    
    let hasTracks = false;

    // اللف على كل السور في قاعدة البيانات
    playlist.forEach((track, index) => {
        if(track.artist.includes(reciterName) || reciterName.includes(track.artist)) {
            hasTracks = true;
            listContainer.innerHTML += `
                <div class="track-item" onclick="playTrack(${index}); closeSheet('artistListSheet');">
                    <!-- هنا التعديل: شيلنا الأيقونة وحطينا الصورة -->
                    <div class="track-img">
                        <img src="${track.image}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="${track.artist}">
                    </div>
                    <div class="track-info">
                        <div class="track-name">${track.title}</div>
                        <div class="track-artist">${track.artist}</div>
                    </div>
                    <i class="fa-solid fa-play" style="color:var(--primary); padding-left:10px;"></i>
                </div>`;
        }
    });

    // لو مفيش سور للشيخ ده
    if(!hasTracks) {
        listContainer.innerHTML = '<p style="text-align:center; color:var(--text-muted); margin-top:20px;">لا توجد تلاوات مضافة لهذا القارئ حالياً.</p>';
    }
    
    // فتح الشاشة السفلية
    openSheet('artistListSheet');
};

// ================= محرك البحث المطور (بدون تهنيج + سجل بحث) =================
const searchInput = document.getElementById('mainSearchInput');
const searchResultsContainer = document.getElementById('searchResultsContainer');
const searchTitle = document.getElementById('searchTitle');
const searchHistorySection = document.getElementById('searchHistorySection');
const searchHistoryTags = document.getElementById('searchHistoryTags');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const searchPlaceholder = `<div style="text-align: center; color: var(--text-muted); margin-top: 50px;">
                                <i class="fa-solid fa-headphones-simple" style="font-size: 50px; margin-bottom: 15px; opacity: 0.5;"></i>
                                <p>اكتب اسم السورة أو المنشد للبحث في مكتبتك</p>
                            </div>`;

// استرجاع السجل من المتصفح
let searchHistory = JSON.parse(localStorage.getItem('mySearchHistory')) || [];

// دالة عرض سجل البحث
function renderSearchHistory() {
    if (searchHistory.length === 0) {
        searchHistorySection.style.display = 'none';
    } else {
        searchHistorySection.style.display = 'block';
        searchHistoryTags.innerHTML = searchHistory.map(term => 
            `<span class="history-tag" onclick="triggerSearch('${term}')"><i class="fa-solid fa-clock-rotate-left"></i> ${term}</span>`
        ).join('');
    }
}

// مسح السجل بالكامل
window.clearSearchHistory = () => {
    searchHistory = [];
    localStorage.removeItem('mySearchHistory');
    renderSearchHistory();
    showToast('تم مسح سجل البحث', 'fa-trash');
};

// تشغيل البحث لما تدوس على كلمة من السجل
window.triggerSearch = (term) => {
    searchInput.value = term;
    searchInput.dispatchEvent(new Event('input')); // بيوهم المتصفح إنك كتبت الكلمة
};

// حفظ الكلمة في السجل (بتشتغل لما المستخدم يشغل مقطع من نتايج البحث)
window.saveToSearchHistory = (term) => {
    if (!term) return;
    searchHistory = searchHistory.filter(t => t !== term); // شيله لو موجود عشان نحطه في الأول
    searchHistory.unshift(term); // ضيفه في الأول
    if (searchHistory.length > 8) searchHistory.pop(); // نحتفظ بآخر 8 كلمات بس
    localStorage.setItem('mySearchHistory', JSON.stringify(searchHistory));
    renderSearchHistory();
};

if (searchInput) {
    renderSearchHistory(); // عرض السجل أول ما التطبيق يفتح

    // زرار الـ (X) لمسح الكلام المكتوب بسرعة
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        searchInput.dispatchEvent(new Event('input'));
    });

    // تحديث البحث أثناء الكتابة
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        
        if (query === '') {
            searchTitle.style.display = 'none';
            searchHistorySection.style.display = 'block';
            clearSearchBtn.style.display = 'none';
            searchResultsContainer.innerHTML = searchPlaceholder;
            renderSearchHistory();
            return;
        }

        // إخفاء السجل وإظهار زر المسح أثناء البحث
        searchHistorySection.style.display = 'none';
        clearSearchBtn.style.display = 'block';

        // فلترة النتائج
        const results = playlist.filter(track => 
            track.title.toLowerCase().includes(query) || 
            track.artist.toLowerCase().includes(query)
        );

        searchTitle.style.display = 'block';

        // === حل مشكلة التهنيج الجذري ===
        // بنجمع الأكواد في (String) الأول، بدل ما نعدل الشاشة جوه اللوب
        let resultsHTML = '';

        if (results.length === 0) {
            resultsHTML = `
                <div style="text-align: center; color: var(--text-muted); margin-top: 50px;">
                    <i class="fa-solid fa-circle-exclamation" style="font-size: 50px; margin-bottom: 15px; opacity: 0.5;"></i>
                    <p>لا توجد نتائج مطابقة لـ "${query}"</p>
                </div>`;
        } else {
            results.forEach(track => {
                // ضفنا دالة saveToSearchHistory هنا عشان يحفظ الكلمة لما تسمع السورة
                resultsHTML += `
                    <div class="track-item" onclick="saveToSearchHistory('${query}'); playTrack(${track.id})">
                        <div class="track-img">
                            <img src="${track.image}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="${track.artist}">
                        </div>
                        <div class="track-info">
                            <div class="track-name">${track.title}</div>
                            <div class="track-artist">${track.artist}</div>
                        </div>
                        <i class="fa-solid fa-play" style="color:var(--primary); padding-left:10px;"></i>
                    </div>`;
            });
        }
        
        // تعديل الشاشة مرة واحدة بس بره اللوب! ده اللي هيخلي التطبيق طلقة
        searchResultsContainer.innerHTML = resultsHTML;
    });
}

// =========================================================================
// ==================== 6. البحث في القوائم (النظام الذكي) =================
// =========================================================================
const plSearchInput = document.getElementById('playlistsSearchInput');

if (plSearchInput) {
    plSearchInput.addEventListener('input', (e) => {
        // query: الكلمة اللي اليوزر بيكتبها
        const query = e.target.value.trim().toLowerCase();
        const originalQuery = e.target.value.trim(); 
        
        // بنجيب كل كروت القوائم اللي اترسمت في الصفحة
        const cards = document.querySelectorAll('#playlistsGrid .pl-list-card');
        const container = document.getElementById('playlistsGrid');
        
        let visibleCardsCount = 0; // عداد عشان نعرف لقينا حاجة ولا لأ

        // 1. فلترة الكروت (بندور في اسم القائمة)
        cards.forEach(card => {
            const title = card.querySelector('.pl-list-title').textContent.toLowerCase();
            
            if (title.includes(query)) {
                card.style.display = 'flex'; // نظهر الكارت
                visibleCardsCount++;
            } else {
                card.style.display = 'none'; // نخفيه
            }
        });

        // 2. رسالة "لم يتم العثور" (بتظهر لو العداد صفر)
        let noResultsMsg = document.getElementById('plNoResultsMsg');

        if (visibleCardsCount === 0 && query !== "") {
            // لو الرسالة مش موجودة بنبنيها
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.id = 'plNoResultsMsg';
                noResultsMsg.className = 'empty-state';
                noResultsMsg.style.textAlign = 'center';
                noResultsMsg.style.marginTop = '40px';
                noResultsMsg.style.color = '#8892b0';
                noResultsMsg.style.lineHeight = '1.8';
                container.appendChild(noResultsMsg);
            }
            
            // محتوى الرسالة وتلوين الكلمة المبحوث عنها
            noResultsMsg.innerHTML = `
                <i class="fa-solid fa-magnifying-glass" style="font-size: 30px; margin-bottom: 15px; opacity: 0.3;"></i><br>
                لم يتم العثور على نتائج لـ <br> <span style="color: #f6e58d; font-weight: bold;">"${originalQuery}"</span>
            `;
            noResultsMsg.style.display = 'block';
            
        } else {
            // لو لقينا نتائج بنخفي الرسالة
            if (noResultsMsg) {
                noResultsMsg.style.display = 'none';
            }
        }
    });
}
// ================= التحكم من شاشة القفل والإشعارات =================
function updateMediaSession(track) {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: track.title, // اسم السورة
            artist: track.artist, // اسم الشيخ
            album: 'تطبيق وذكر', // اسم التطبيق
            artwork: [
                { src: track.image, sizes: '512x512', type: 'image/jpeg' } // صورة الشيخ
            ]
        });

        // ربط أزرار شاشة القفل بالدوال بتاعتنا
        navigator.mediaSession.setActionHandler('play', () => { audioEl.play(); updatePlayIcons(true); });
        navigator.mediaSession.setActionHandler('pause', () => { audioEl.pause(); updatePlayIcons(false); });
        navigator.mediaSession.setActionHandler('previoustrack', prevTrack);
        navigator.mediaSession.setActionHandler('nexttrack', nextTrack);
    }
}

// ================= جلب وعرض كلمات المصحف (Premium Quran UI) =================
window.openLyrics = async () => {
    if (currentTrackIndex === -1) return;
    
    const track = playlist[currentTrackIndex];
    document.getElementById('lyricsTitle').textContent = track.title;
    const content = document.getElementById('lyricsContent');
    
    // إظهار اللودينج (تصميم مودرن)
    content.innerHTML = `
        <div style="text-align:center; color:var(--primary); margin-top:50px;">
            <i class="fa-solid fa-spinner fa-spin" style="font-size: 40px;"></i>
            <p style="margin-top:15px; color:var(--text-muted); font-size: 14px;">جاري تحميل السورة كاملة...</p>
        </div>`;
    
    openSheet('lyricsSheet');

    if (track.title.includes('سورة')) {
        const surahName = track.title.replace('سورة ', '').trim();
        const surahNumber = surahNames.indexOf(surahName) + 1;
        
        if (surahNumber > 0) {
            try {
                // الاتصال بـ API القرآن الكريم لجلب النص بالتشكيل (قراءة حفص)
                const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
                const data = await response.json();
                
                // تجميع الآيات مع رقم الآية بصيغة احترافية
                let ayahsText = data.data.ayahs.map(ayah => 
                    `${ayah.text} <span class="ayah-number">${ayah.numberInSurah}</span>`
                ).join(' ');

                // تنسيق البسملة
                let basmalaHTML = '';
                // إذا لم تكن سورة الفاتحة أو التوبة، نقوم بفصل البسملة لعرضها بشكل مستقل
                if (surahNumber !== 1 && surahNumber !== 9) {
                    ayahsText = ayahsText.replace('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', '').trim();
                    basmalaHTML = `
                        <div class="basmala-box">
                            <span class="basmala-text">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
                        </div>`;
                }

                // عرض السورة كاملة جوه التصميم الفاخر
                content.innerHTML = `
                    <div class="quran-page">
                        ${basmalaHTML}
                        <div class="quran-text">
                            ${ayahsText}
                        </div>
                    </div>`;

            } catch (err) {
                // شاشة الخطأ
                content.innerHTML = `
                    <p style="text-align:center; color:#ff4757; margin-top:50px; font-size: 14px;">
                        <i class="fa-solid fa-wifi" style="font-size: 30px; margin-bottom: 15px;"></i><br>
                        حدث خطأ أثناء تحميل الآيات.<br>تأكد من اتصالك بالإنترنت وحاول مرة أخرى.
                    </p>`;
            }
        }
    } else {
        // شاشة الابتهالات
        content.innerHTML = `
            <div style="text-align: center; margin-top: 50px;">
                <i class="fa-solid fa- microphone-lines" style="color:var(--primary); font-size:40px; margin-bottom:20px;"></i>
                <p style="color: #fff; font-size: 18px; margin-bottom: 5px;">كلمات غير متوفرة</p>
                <span style="font-size: 14px; color: var(--text-muted);">عذراً، كلمات الابتهالات غير متوفرة نصياً.<br>استمتع بالاستماع!</span>
            </div>`;
    }
};


// ================= نظام التحميل (Offline Mode) =================
let downloadedTracks = JSON.parse(localStorage.getItem('myDownloads')) || [];
let currentSelectedDlId = null;

// 1. دالة بدء التحميل
window.startDownload = async () => {
    if (currentTrackIndex === -1) return;
    const track = playlist[currentTrackIndex];

    // لو المقطع متحمل قبل كده
    if (downloadedTracks.find(t => t.id === track.id)) {
        showToast('هذا المقطع محمل بالفعل!', 'fa-circle-check');
        return;
    }

    // إظهار نافذة التحميل
    const modal = document.getElementById('downloadProgressModal');
    document.getElementById('downloadingTitle').textContent = `جاري تحميل: ${track.title}`;
    document.getElementById('downloadingArtist').textContent = track.artist;
    document.getElementById('downloadProgressBar').style.width = '0%';
    document.getElementById('downloadProgressText').textContent = '0%';
    document.getElementById('goToDownloadsBtn').style.display = 'none';
    modal.classList.add('active');

    // أنيميشن وهمي لشريط التحميل عشان الـ UX
    let progress = 0;
    const simInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 90) progress = 90;
        document.getElementById('downloadProgressBar').style.width = `${progress}%`;
        document.getElementById('downloadProgressText').textContent = `${Math.floor(progress)}%`;
    }, 500);

    try {
        // السحر هنا: حفظ الملف في كاش المتصفح
        const cache = await caches.open('quran-offline-audio');
        await cache.add(track.src);

        // إيقاف الأنيميشن وإكمال الـ 100%
        clearInterval(simInterval);
        document.getElementById('downloadProgressBar').style.width = '100%';
        document.getElementById('downloadProgressText').textContent = '100%';
        
        // حفظ بيانات المقطع
        downloadedTracks.push({ ...track, pinned: false, date: Date.now() });
        localStorage.setItem('myDownloads', JSON.stringify(downloadedTracks));
        renderDownloads();

        document.getElementById('downloadingTitle').textContent = 'تم التحميل بنجاح!';
        document.getElementById('goToDownloadsBtn').style.display = 'block';

    } catch (err) {
        clearInterval(simInterval);
        modal.classList.remove('active');
        showToast('فشل التحميل. تأكد من اتصالك بالإنترنت.', 'fa-wifi');
    }
};

// =========================================================================
// ==================== 2. عرض التحميلات في المكتبة ========================
// =========================================================================
window.renderDownloads = () => {
    const container = document.getElementById('downloadsContainer');
    if (!container) return;

    // ترتيب: المثبت أولاً، ثم الأحدث
    const sorted = [...downloadedTracks].sort((a, b) => {
        if (a.pinned === b.pinned) return b.date - a.date;
        return a.pinned ? -1 : 1;
    });

    if (sorted.length === 0) {
        container.innerHTML = '<div class="empty-search-state"><i class="fa-solid fa-hard-drive"></i><p>لا توجد مقاطع محملة بعد.</p></div>';
        return;
    }

    container.innerHTML = sorted.map(track => {
        // بنجيب اللون من القاموس
        const bgColor = artistColors[track.artist] || artistColors["default"];
        
        // --- توليد حجم ملف شبه حقيقي وثابت للسورة ---
        let sizeInt = (track.id % 20) + 3; // رقم صحيح من 3 لـ 22
        let sizeDec = (track.id % 9);      // كسر
        let fileSize = `${sizeInt}.${sizeDec} MB`;
        
        // بنرجع الكارت بالـ HTML والتنسيق
        return `
            <div class="dl-card ${track.pinned ? 'pinned' : ''}" onclick="playTrack(${track.id})"
                 style="background: linear-gradient(90deg, ${bgColor} 0%, rgba(255,255,255,0.02) 80%); border-right: 3px solid ${bgColor};">
                
                ${track.pinned ? '<div class="pin-badge"><i class="fa-solid fa-thumbtack"></i> مثبت</div>' : ''}
                
                <img src="${track.image}" class="dl-image">
                
                <div class="dl-info">
                    <div class="dl-title">${track.title}</div>
                    
                    <!-- ضفنا علامة الأوفلاين وحجم الملف هنا جنب اسم الشيخ -->
                    <div class="dl-artist" style="display: flex; align-items: center; gap: 6px;">
                       
                        <span>${track.artist}</span>
                        <span style="color: rgba(255,255,255,0.5); font-size: 11px; border-right: 1px solid rgba(255,255,255,0.2); padding-right: 6px;">${fileSize}</span>
                                            <div class="dl-size"><i class="fa-solid fa-circle-check"></i> متوفر بلا إنترنت</div>

                    </div>
                </div>
                
                <i class="fa-solid fa-ellipsis-vertical dl-options-btn" 
                   onclick="event.stopPropagation(); openDlOptions(${track.id}, '${track.title}', ${track.pinned})"></i>
            </div>
        `;
    }).join('');
};

// =========================================================================
// ==================== 3. فتح خيارات المقطع (3 نقط) للتحميلات =============
// =========================================================================
// ==================== 3. فتح خيارات المقطع (3 نقط) للتحميلات =============
window.openDlOptions = (id, title, isPinned) => {
    currentSelectedDlId = id;
    
    // التريكة هنا: بنساوي المتغير العام بتاعنا بالـ ID ده عشان دوال المشاركة والقوائم تشتغل صح
    currentOptionsTrackId = id; 
    
    const titleElement = document.getElementById('dlOptionTitle');
    if(titleElement) titleElement.textContent = title;
    
    // إعداد زرار التثبيت (بالأيقونة المقلوبة الجديدة)
    const pinBtn = document.getElementById('dlPinBtn');
    if(pinBtn) {
        pinBtn.innerHTML = isPinned 
            ? '<i class="fa-solid fa-thumbtack" style="color: #ff4757; transform: rotate(90deg);"></i> <span style="color: #ff4757;">إلغاء التثبيت</span>' 
            : '<i class="fa-solid fa-thumbtack" style="color: #f6e58d;"></i> <span style="color: #f6e58d;">تثبيت في أول القائمة</span>';
        pinBtn.onclick = () => togglePinDl(id);
    }
    
    // إعداد زرار الحذف
    const delBtn = document.getElementById('dlDeleteBtn');
    if(delBtn) {
        delBtn.onclick = () => {
            closeSheet('downloadOptionsSheet');
            document.getElementById('confirmDeleteText').textContent = `هل تريد حذف "${title}" من التحميلات؟`;
            document.getElementById('confirmDeleteModal').classList.add('active');
            document.getElementById('confirmDeleteBtn').onclick = () => confirmDeleteDl(id);
        };
    }

    openSheet('downloadOptionsSheet');
};

// =========================================================================
// ==================== 4. التثبيت والحذف ==================================
// =========================================================================
window.togglePinDl = (id) => {
    const track = downloadedTracks.find(t => t.id === id);
    if(track) {
        track.pinned = !track.pinned;
        if (typeof showToast === "function") {
            showToast(track.pinned ? "تم التثبيت 📌" : "تم إزالة التثبيت 📌");
        }
    }
    localStorage.setItem('myDownloads', JSON.stringify(downloadedTracks));
    renderDownloads();
    closeSheet('downloadOptionsSheet');
};

// تصليح دالة الحذف اللي كان فيها الخطأ
window.confirmDeleteDl = async (id) => {
    // 1. بندور على السورة في المصفوفة
    const trackIndex = downloadedTracks.findIndex(t => t.id === id);
    
    if (trackIndex > -1) {
        const track = downloadedTracks[trackIndex];
        
        // 2. مسح الملف الفعلي من الكاش (عشان نوفر مساحة)
        try {
            const cache = await caches.open('quran-offline-audio');
            if (track.src) {
                await cache.delete(track.src);
            }
        } catch(e) {
            console.error("خطأ في مسح الكاش:", e);
        }

        // 3. مسح السورة من المصفوفة وحفظ التعديل في الذاكرة
        downloadedTracks.splice(trackIndex, 1);
        localStorage.setItem('myDownloads', JSON.stringify(downloadedTracks));

        // 4. تحديث الواجهة وقفل نافذة التأكيد
        renderDownloads();
        document.getElementById('confirmDeleteModal').classList.remove('active');
        
        if (typeof showToast === "function") {
            showToast("تم الحذف من التحميلات");
        }
    }
};



// زر الانتقال للمكتبة
window.goToDownloads = () => {
    closeModal('downloadProgressModal');
    closeSheet('fullPlayer');
    document.querySelector('a.nav-item[onclick*="libraryView"]').click();
};

// تعديل دالة التشغيل عشان تقرأ من الملف المحمل لو مفيش نت
const originalPlayTrack = window.playTrack;
window.playTrack = async (index) => {
    if(currentTrackIndex === index) { togglePlayPause(); return; }
    const track = playlist[index];
    
    // فحص إذا كان المقطع محمل في الكاش
    try {
        const cache = await caches.open('quran-offline-audio');
        const response = await cache.match(track.src);
        if (response) {
            const blob = await response.blob();
            track.offlineSrc = URL.createObjectURL(blob); // إنشاء رابط داخلي من الموبايل
        }
    } catch(e) {}

    // تشغيل الدالة الأصلية مع تعديل الرابط
    const originalSrc = track.src;
    if(track.offlineSrc) track.src = track.offlineSrc;
    originalPlayTrack(index);
    track.src = originalSrc; // إرجاع الرابط الأصلي بعد التشغيل
};

// استدعاء العرض عند التحميل
window.addEventListener('DOMContentLoaded', () => renderDownloads());

// ================= دوال التحكم في النوافذ المنبثقة (Modals) =================
window.closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
};

// ================= تحديث زر الانتقال للتحميلات =================
window.goToDownloads = () => {
    // 1. نقفل نافذة التحميل بنجاح
    closeModal('downloadProgressModal');
    
    // 2. نقفل المشغل الكبير لو كان مفتوح
    closeSheet('fullPlayer');
    
    // 3. ننتقل لصفحة المكتبة بأمان
    const libraryTab = document.querySelector('a.nav-item[onclick*="libraryView"]');
    if (libraryTab) {
        libraryTab.click();
    } else {
        // لو ملقاش الزرار، بننادي دالة فتح الشاشة مباشرة
        switchTab('libraryView');
    }
};

// ================= 1. محرك اعتراض الصوت الذكي (Smart Interceptor) =================
(function() {
    const originalPlay = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function() {
        // السحر هنا: بنحفظ نسخة من ملف الصوت اللي شغال حالياً في متغير "عام"
        window.activeAudioInstance = this; 
        
        // تطبيق السرعة المحفوظة أول ما يبدأ
        const savedSpeed = localStorage.getItem('userPlaybackSpeed') || 1.0;
        this.playbackRate = parseFloat(savedSpeed);
        
        updateSpeedBadgeUI(savedSpeed);
        return originalPlay.apply(this, arguments);
    };
})();

// ================= 2. دالة تغيير السرعة (تغيير لحظي لايف) =================
window.setPlaybackSpeed = (speed, btnElement) => {
    const speedNum = parseFloat(speed);
    
    // 1. حفظ السرعة في الـ LocalStorage
    localStorage.setItem('userPlaybackSpeed', speedNum);

    // 2. التغيير اللحظي (أهم جزء): لو في صوت شغال حالياً، غير سرعته فوراً
    if (window.activeAudioInstance) {
        window.activeAudioInstance.playbackRate = speedNum;
        console.log("تم تغيير سرعة المشغل النشط إلى: " + speedNum);
    }

    // 3. تأكيد التغيير على أي عناصر audio موجودة في الـ HTML
    document.querySelectorAll('audio').forEach(audio => {
        audio.playbackRate = speedNum;
    });

    // 4. تحديث شكل الأزرار في القائمة
    document.querySelectorAll('.speed-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    // 5. تحديث الشارة والتوست
    updateSpeedBadgeUI(speedNum);
    if (typeof showToast === "function") {
        showToast(speedNum == 1.0 ? "السرعة طبيعية" : `سرعة التشغيل: ${speedNum}x`, 'fa-gauge-high');
    }

    if (typeof closeSheet === "function") closeSheet('speedSheet');
};

// ================= 3. تحديث واجهة الشارة (Badge) =================
function updateSpeedBadgeUI(speed) {
    const speedBadge = document.getElementById('liveSpeedBadge');
    const speedIndicator = document.getElementById('speedIndicator');
    
    if (speedBadge && speedIndicator) {
        if (parseFloat(speed) !== 1.0) {
            speedBadge.style.display = 'inline-flex';
            speedIndicator.textContent = speed + 'x';
        } else {
            speedBadge.style.display = 'none';
        }
    }
}


// ================= محرك الراديو المنفصل (النسخة المحسنة والموفرة للنت) =================
let radioPlayer = new Audio();
radioPlayer.preload = "none"; // حماية قوية: ميسحبش نت نهائياً إلا لما اليوزر يدوس تشغيل

const RADIO_STREAM_URL = "https://stream.radiojar.com/8s5u5tpdtwzuv"; 
const RADIO_LOGO = "/Images/live.png";

// 1. دالة تظبيط شكل الإشعارات (Media Session) للراديو
function setupRadioMediaSession() {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: 'إذاعة القرآن الكريم',
            artist: 'بث مباشر | موفر للبيانات',
            album: 'تطبيق وذكر',
            artwork: [
                { src: RADIO_LOGO, sizes: '96x96', type: 'image/png' },
                { src: RADIO_LOGO, sizes: '512x512', type: 'image/png' }
            ]
        });

        // زرار الـ ▶️ في الإشعار
        navigator.mediaSession.setActionHandler('play', () => { window.toggleRadioPlay(true); });
        
        // زرار الـ ⏸️ في الإشعار
        navigator.mediaSession.setActionHandler('pause', () => { window.toggleRadioPlay(false); });
        
        // زرار الـ × (Stop) في الإشعار عشان يقفل خالص
        navigator.mediaSession.setActionHandler('stop', () => { window.stopRadioAndExit(); });
        
        // تعطيل زراير التقليب
        navigator.mediaSession.setActionHandler('previoustrack', null);
        navigator.mediaSession.setActionHandler('nexttrack', null);
    }
}

// 2. فتح مشغل الراديو (من واجهة التطبيق)
window.openRadioPlayer = () => {
    // إيقاف المشغل العادي لو شغال
    if (window.audioEl && !window.audioEl.paused) {
        window.audioEl.pause();
        if(typeof updatePlayIcons === "function") updatePlayIcons(false);
    }

    document.getElementById('radioPlayerOverlay').style.display = 'flex';
    
    // تشغيل الراديو فوراً
    window.toggleRadioPlay(true);
};

// 3. زرار الإيقاف والتشغيل المباشر (الدماغ كلها هنا)
window.toggleRadioPlay = (forcePlay = null) => {
    const icon = document.querySelector('#radioMainToggle i');
    
    // بنحدد إحنا عايزين نشغل ولا نوقف
    const isCurrentlyPaused = radioPlayer.paused || radioPlayer.src === "";
    const shouldPlay = forcePlay !== null ? forcePlay : isCurrentlyPaused;

    if (shouldPlay) {
        // ============ حالة التشغيل (Play) ============
        if (icon) icon.className = 'fa-solid fa-spinner fa-spin';
        
        // تحديث الرابط عشان نجيب أحدث ثانية في اللايف
        const liveUrl = RADIO_STREAM_URL + "?t=" + Date.now();
        radioPlayer.src = liveUrl;
        radioPlayer.load(); 
        
        radioPlayer.play().then(() => {
            if (icon) icon.className = 'fa-solid fa-pause'; // أو stop حسب الأيقونة اللي تفضلها
            document.querySelectorAll('.radio-equalizer .bar').forEach(b => b.style.animationPlayState = 'running');
            
            setupRadioMediaSession(); 
            // إبلاغ الموبايل إننا شغالين عشان يعرض زرار ⏸️
            if ('mediaSession' in navigator) navigator.mediaSession.playbackState = "playing";
            
            showToast('متصل الآن بالبث المباشر', 'fa-tower-broadcast');
        }).catch(e => {
            console.error("خطأ الراديو:", e);
            if (icon) icon.className = 'fa-solid fa-play';
            showToast('فشل الاتصال بالبث', 'fa-wifi');
        });

    } else {
        // ============ حالة الإيقاف المؤقت (Pause) ============
        radioPlayer.pause();
        // السر هنا: مش بنفضي الـ src عشان الإشعار يفضل موجود على الشاشة!
        
        if (icon) icon.className = 'fa-solid fa-play';
        document.querySelectorAll('.radio-equalizer .bar').forEach(b => b.style.animationPlayState = 'paused');
        
        // إبلاغ الموبايل إننا وقفنا عشان يعرض زرار ▶️
        if ('mediaSession' in navigator) navigator.mediaSession.playbackState = "paused";
    }
};

// 4. زرار إغلاق الشاشة (الصوت يفضل شغال في الخلفية)
window.closeRadioUI = () => {
    document.getElementById('radioPlayerOverlay').style.display = 'none';
};

// 5. الخروج التام (لما يدوس × أو يقفل من التطبيق)
window.stopRadioAndExit = () => {
    radioPlayer.pause();
    radioPlayer.removeAttribute('src'); // تدمير الرابط عشان يوقف سحب نت نهائياً
    radioPlayer.load();
    
    document.getElementById('radioPlayerOverlay').style.display = 'none';
    
    const icon = document.querySelector('#radioMainToggle i');
    if (icon) icon.className = 'fa-solid fa-play';
    document.querySelectorAll('.radio-equalizer .bar').forEach(b => b.style.animationPlayState = 'paused');
    
    // إخفاء الإشعار
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = "none";
    
    showToast('تم إيقاف الراديو', 'fa-power-off');
};

// --- 🛡️ نظام الحماية ضد فصل المتصفح في الخلفية (Watchdogs) ---
radioPlayer.addEventListener('waiting', () => {
    console.log("النت ضعيف، جاري التحميل...");
});

radioPlayer.addEventListener('stalled', () => {
    // لو الصوت علق أو الموبايل نام، اعمل ريفريش للصوت
    if (!radioPlayer.paused) {
        console.log("تم اكتشاف تعليق في الخلفية، جاري الإنعاش...");
        window.toggleRadioPlay(true);
    }
});

radioPlayer.addEventListener('error', () => {
    // لو النت قطع ورجع، حاول تتصل تاني
    if (!radioPlayer.paused && radioPlayer.src !== "") {
        setTimeout(() => {
            window.toggleRadioPlay(true);
        }, 3000);
    }
});

// 6. نظام المشاركة 
window.shareLiveRadio = async () => {
    const shareData = {
        title: 'إذاعة القرآن الكريم - مباشر',
        text: 'استمع الآن إلى بث مباشر لإذاعة القرآن الكريم عبر تطبيق وذكر 🎧✨',
        url: window.location.href 
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else {
            navigator.clipboard.writeText(window.location.href);
            showToast('تم نسخ رابط التطبيق', 'fa-copy');
        }
    } catch (err) {
        console.log('User cancelled share');
    }
};



// دالة فتح أي قائمة (تعديل بسيط)
window.openSheet = (id) => {
    const sheet = document.getElementById(id);
    if (sheet) {
        sheet.classList.add('active');
        // السطر السحري: تجميد جسم الموقع بالكامل
        document.body.classList.add('modal-open');
    }
};

// دالة إغلاق القوائم
window.closeSheet = (id) => {
    const sheet = document.getElementById(id);
    if (sheet) {
        sheet.classList.remove('active');
        
        // لو مفيش أي قوائم تانية مفتوحة، فك تجميد الموقع
        if (!document.querySelector('.sheet-overlay.active')) {
            document.body.classList.remove('modal-open');
        }
    }
};

// ================= دوال شاشات المكتبة (الأنيميشن الحريري) =================
// ================= دالة فتح شاشات المكتبة (محدثة) =================
window.openLibPage = (pageId) => {
    const page = document.getElementById(pageId);
    
    if (page) {
        // --- السحر هنا: لو الشاشة المطلوبة هي المفضلة، ارسم الكروت فوراً ---
        if (pageId === 'favoritesPage') {
            renderFavoritesPage(); 
        }
        // ---------------------------------------------------------
        
        page.classList.add('active');
        document.body.classList.add('modal-open'); // تجميد الشاشة الخلفية
    }
};


window.closeLibPage = (pageId) => {
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.remove('active');
        
        // بنستنى 400 ملي ثانية (نفس وقت الـ CSS transition) عشان نلغي التجميد
        setTimeout(() => {
            if (!document.querySelector('.sheet-overlay.active') && !document.querySelector('.sub-lib-page.active')) {
                document.body.classList.remove('modal-open');
            }
        }, 400); 
    }
};


window.openGlobalSearch = () => {
    // 1. بندور على زرار البحث اللي في الشريط السفلي
    const bottomSearchBtn = document.querySelector('.nav-item[onclick*="searchView"]');
    
    if (bottomSearchBtn) {
        // 2. هندوس عليه برمجياً كأن اليوزر داس عليه بصباعه بالظبط!
        // ده هيشغل دالة switchTab ويغير الصفحات وينور الزرار اللي تحت
        bottomSearchBtn.click();
        
        // 3. اللمسة الاحترافية (UX): نعمل فوكس على مربع الكتابة عشان الكيبورد يفتح تلقائي
        setTimeout(() => {
            const searchInput = document.getElementById('mainSearchInput');
            if (searchInput) searchInput.focus();
        }, 150); // تأخير بسيط جداً لحد ما الصفحة تفتح
    }
};


// =========================================================================
// ==================== 🔄 نظام التقليب الذكي + النقط + عرض الكل =============
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('recitersAutoScroll');
    const dotsContainer = document.getElementById('recitersDots');
    const seeAllBtn = document.getElementById('seeAllRecitersBtn');
    
    if (!scrollContainer || !dotsContainer || !seeAllBtn) return;

    const cards = scrollContainer.querySelectorAll('.reciter-card-pro');
    let currentIndex = 0;
    let autoScrollInterval;
    let isGridMode = false;

    // 1. رسم النقط (Dots)
    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            if(!isGridMode) goToCard(index);
        });
        
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.slider-dot');

    // 2. دالة التحقق من مقاس الشاشة (هل محتاجين سكرول أصلاً؟)
    const checkNeedForScroll = () => {
        // لو إجمالي عرض الكروت أقل من أو يساوي عرض الشاشة المتاحة
        if (scrollContainer.scrollWidth <= scrollContainer.clientWidth) {
            stopAutoScroll();
            dotsContainer.style.display = 'none'; // نخفي النقط
            seeAllBtn.style.display = 'none'; // نخفي زرار عرض الكل لأنه ملوش لازمة
            return false; // يعني مش محتاجين سكرول
        } else {
            if (!isGridMode) {
                dotsContainer.style.display = 'flex';
                seeAllBtn.style.display = 'flex';
            }
            return true; // محتاجين سكرول
        }
    };

    // 3. دالة الذهاب لكارت معين
    const goToCard = (index) => {
        if (!checkNeedForScroll()) return; // لو الشاشة كبيرة ميعملش حاجة

        currentIndex = index;
        
        dots.forEach(d => d.classList.remove('active'));
        if(dots[currentIndex]) dots[currentIndex].classList.add('active');

        const card = cards[currentIndex];
        const targetScroll = card.offsetLeft - (scrollContainer.clientWidth / 2) + (card.clientWidth / 2);

        scrollContainer.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    };

    // 4. تشغيل التقليب التلقائي
    const startAutoScroll = () => {
        if (isGridMode || !checkNeedForScroll()) return; 
        
        clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(() => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= cards.length) nextIndex = 0; 
            goToCard(nextIndex);
        }, 4500); 
    };

    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval);
    };

    // 5. زرار "عرض الكل"
    seeAllBtn.addEventListener('click', () => {
        isGridMode = !isGridMode; 
        
        if (isGridMode) {
            stopAutoScroll();
            scrollContainer.classList.add('grid-mode');
            dotsContainer.style.opacity = '0'; 
            setTimeout(() => dotsContainer.style.display = 'none', 300);
            
            seeAllBtn.innerHTML = 'عرض أقل <i class="fa-solid fa-angle-up"></i>';
            seeAllBtn.style.color = '#f6e58d'; 
        } else {
            scrollContainer.classList.remove('grid-mode');
            dotsContainer.style.display = 'flex';
            setTimeout(() => dotsContainer.style.opacity = '1', 10);
            
            seeAllBtn.innerHTML = 'عرض الكل <i class="fa-solid fa-arrow-left-long"></i>';
            seeAllBtn.style.color = '#8892b0';
            
            goToCard(0);
            startAutoScroll();
        }
    });

    // 6. أحداث التفاعل
    scrollContainer.addEventListener('mouseenter', stopAutoScroll);
    scrollContainer.addEventListener('mouseleave', startAutoScroll);
    scrollContainer.addEventListener('touchstart', stopAutoScroll, {passive: true});
    scrollContainer.addEventListener('touchend', startAutoScroll);

    // 7. مراقبة تغيير حجم الشاشة (عشان لو اليوزر كبر الشاشة أو صغرها فجأة)
    window.addEventListener('resize', () => {
        if (!isGridMode) {
            checkNeedForScroll();
            startAutoScroll();
        }
    });

    // تشغيل من البداية
    checkNeedForScroll();
    startAutoScroll();
});

// =========================================================================
// ==================== 🔄 نظام السلايدر الموحد (Unified Slider Engine) ====
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // 🧠 العقل المدبر: الدالة دي بتاخد أي قسم وتعمله سلايدر احترافي
    function initializeSlider(scrollId, dotsId, btnId, cardClass, intervalTime = 4000) {
        const scrollContainer = document.getElementById(scrollId);
        const dotsContainer = document.getElementById(dotsId);
        const seeAllBtn = document.getElementById(btnId);
        
        if (!scrollContainer || !dotsContainer || !seeAllBtn) return;

        const cards = scrollContainer.querySelectorAll(cardClass);
        if (cards.length === 0) return;

        let currentIndex = 0;
        let autoScrollInterval;
        let isGridMode = false;

        // رسم النقط
        cards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                if(!isGridMode) goToCard(index);
            });
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.slider-dot');

        // ذكاء فحص الشاشة
        const checkNeedForScroll = () => {
            if (scrollContainer.scrollWidth <= scrollContainer.clientWidth) {
                stopAutoScroll();
                dotsContainer.style.display = 'none';
                seeAllBtn.style.display = 'none';
                return false;
            } else {
                if (!isGridMode) {
                    dotsContainer.style.display = 'flex';
                    seeAllBtn.style.display = 'flex';
                }
                return true;
            }
        };

        // الذهاب للكارت
        const goToCard = (index) => {
            if (!checkNeedForScroll()) return;
            currentIndex = index;
            
            dots.forEach(d => d.classList.remove('active'));
            if(dots[currentIndex]) dots[currentIndex].classList.add('active');

            const card = cards[currentIndex];
            const targetScroll = card.offsetLeft - (scrollContainer.clientWidth / 2) + (card.clientWidth / 2);

            scrollContainer.scrollTo({ left: targetScroll, behavior: 'smooth' });
        };

        // التقليب التلقائي
        const startAutoScroll = () => {
            if (isGridMode || !checkNeedForScroll()) return; 
            clearInterval(autoScrollInterval);
            autoScrollInterval = setInterval(() => {
                let nextIndex = currentIndex + 1;
                if (nextIndex >= cards.length) nextIndex = 0; 
                goToCard(nextIndex);
            }, intervalTime); 
        };

        const stopAutoScroll = () => clearInterval(autoScrollInterval);

        // زرار عرض الكل
        seeAllBtn.addEventListener('click', () => {
            isGridMode = !isGridMode; 
            if (isGridMode) {
                stopAutoScroll();
                scrollContainer.classList.add('grid-mode');
                dotsContainer.style.opacity = '0'; 
                setTimeout(() => dotsContainer.style.display = 'none', 300);
                seeAllBtn.innerHTML = 'عرض أقل <i class="fa-solid fa-angle-up"></i>';
            } else {
                scrollContainer.classList.remove('grid-mode');
                dotsContainer.style.display = 'flex';
                setTimeout(() => dotsContainer.style.opacity = '1', 10);
                seeAllBtn.innerHTML = 'عرض الكل <i class="fa-solid fa-arrow-left-long"></i>';
                goToCard(0);
                startAutoScroll();
            }
        });

        // أحداث التفاعل (الماوس واللمس)
        scrollContainer.addEventListener('mouseenter', stopAutoScroll);
        scrollContainer.addEventListener('mouseleave', startAutoScroll);
        scrollContainer.addEventListener('touchstart', stopAutoScroll, {passive: true});
        scrollContainer.addEventListener('touchend', startAutoScroll);

        window.addEventListener('resize', () => {
            if (!isGridMode) {
                checkNeedForScroll();
                startAutoScroll();
            }
        });

        // التشغيل الأول
        checkNeedForScroll();
        startAutoScroll();
    }

    // ================= 🚀 تشغيل النظام على أقسام الرئيسية ================= //
    
    // 1. تشغيل سلايدر القرآن (بطيء شوية: 4 ثواني)
    initializeSlider('recitersAutoScroll', 'recitersDots', 'seeAllRecitersBtn', '.reciter-card-pro', 4000);
    
    // 2. تشغيل سلايدر الإبتهالات (أسرع شوية: 3.5 ثانية عشان يدي حيوية)
    initializeSlider('ibtehalatAutoScroll', 'ibtehalatDots', 'seeAllIbtehalatBtn', '.ibtehal-card', 3500);

});


