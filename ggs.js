// Mobil menü fonksiyonları
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');
    
    // Menü butonuna tıklama olayı
    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Event bubbling'i engelle
        nav.classList.toggle('active');
    });
    
    // Sayfa herhangi bir yerine tıklandığında menüyü kapat
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
            nav.classList.remove('active');
        }
    });
    
    // Menü linklerine tıklandığında menüyü kapat
    const menuLinks = nav.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
});
