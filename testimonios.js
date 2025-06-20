// Initialize mobile menu and language selector
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    document.querySelector('.hamburger')?.addEventListener('click', function() {
        document.querySelector('.menu')?.classList.toggle('active');
    });

    // Language selector functionality
    function setLanguage(lang) {
        // Hide all language elements
        document.querySelectorAll('[class^="lang-"]').forEach(el => {
            el.style.display = 'none';
        });
        
        // Show only elements for the selected language
        document.querySelectorAll(`.lang-${lang}`).forEach(el => {
            el.style.display = 'inline';
        });
        
        // Update language selector active state
        document.querySelectorAll('.language-selector a').forEach(link => {
            if (link.dataset.lang === lang) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        // Save language preference
        localStorage.setItem('preferredLanguage', lang);
    }
    
    // Set up language selector
    document.querySelectorAll('.language-selector a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            setLanguage(this.dataset.lang);
        });
    });
    
    // Load saved language or default to Spanish
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'es';
    setLanguage(savedLanguage);
});
