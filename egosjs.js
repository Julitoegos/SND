   // Navigation functionality
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            const navItems = document.querySelectorAll('.nav-link');
            const pages = document.querySelectorAll('main > section');
            
            // Toggle mobile menu
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
            
            // Switch between pages
            navItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    const page = this.getAttribute('data-page');
                    
                    // Hide all pages
                    pages.forEach(p => p.style.display = 'none');
                    
                    // Show selected page
                    document.getElementById(page).style.display = 'block';
                    
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                });
            });
            
            // Show home page by default
            document.getElementById('home').style.display = 'block';
        });