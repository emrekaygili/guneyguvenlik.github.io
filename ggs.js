/**
 * Sayfa yükleme ve kullanıcı etkileşimi yönetimi
 */
document.addEventListener('DOMContentLoaded', function() {
    // DOM elementlerini seç
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeIcon = darkModeToggle.querySelector('i');
    
    // Ekran yönü değişikliği yönetimi
    window.addEventListener('orientationchange', function() {
        // Sayfa boyutlarını yeniden hesapla
        document.body.style.width = '100vw';
        document.body.style.height = '100vh';
        // Scroll pozisyonunu sıfırla
        window.scrollTo(0, 0);
        // 100ms sonra yeniden boyutlandırma için güncelleme
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
    });

    // Karanlık mod yönetimi
    const darkModeManager = {
        init() {
            this.checkDarkMode();
            this.setupEventListeners();
        },

        checkDarkMode() {
            if (localStorage.getItem('darkMode') === 'enabled') {
                document.body.classList.add('dark-mode');
                this.updateIcon(true);
            }
        },

        updateIcon(isDark) {
            if (isDark) {
                darkModeIcon.classList.remove('fa-moon');
                darkModeIcon.classList.add('fa-sun');
            } else {
                darkModeIcon.classList.remove('fa-sun');
                darkModeIcon.classList.add('fa-moon');
            }
        },

        toggleDarkMode() {
            const isDark = document.body.classList.toggle('dark-mode');
            this.updateIcon(isDark);
            localStorage.setItem('darkMode', isDark ? 'enabled' : null);
        },

        setupEventListeners() {
            darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
        }
    };

    // Mobil menü yönetimi
    const mobileMenuManager = {
        init() {
            this.setupEventListeners();
        },

        toggleMenu() {
            nav.classList.toggle('active');
        },

        closeMenu() {
            nav.classList.remove('active');
        },

        setupEventListeners() {
            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMenu();
            });

            document.addEventListener('click', (e) => {
                if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
                    this.closeMenu();
                }
            });

            nav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => this.closeMenu());
            });
        }
    };

    // Yöneticileri başlat
    darkModeManager.init();
    mobileMenuManager.init();
}); 
