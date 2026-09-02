// Mobile hamburger nav toggle
document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav-links');
    if (toggle && nav) {
        toggle.addEventListener('click', function() {
            nav.classList.toggle('nav-open');
            toggle.classList.toggle('active');
        });
        // Close nav when a link is clicked
        nav.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                nav.classList.remove('nav-open');
                toggle.classList.remove('active');
            });
        });
    }

    // Scroll fade-in animations
    var fadeEls = document.querySelectorAll('.fade-in');
    if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        fadeEls.forEach(function(el) { observer.observe(el); });
    } else {
        // Fallback: just show everything
        fadeEls.forEach(function(el) { el.classList.add('visible'); });
    }
});
