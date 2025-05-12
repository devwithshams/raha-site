// Tailwind CSS configuration
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: {
                            light: '#2563eb',
                            dark: '#1e40af'
                        },
                        secondary: {
                            light: '#fef08a',
                            dark: '#f59e0b'
                        },
                        accent: {
                            light: '#f59e0b',
                            dark: '#d97706'
                        },
                        background: {
                            light: '#f8fafc',
                            dark: '#1e293b'
                        },
                        text: {
                            light: '#1e293b',
                            dark: '#f8fafc'
                        },
                        card: {
                            light: '#ffffff',
                            dark: '#334155'
                        }
                    }
                }
            }
        }


// Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
            });
        });

        // Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        const themeToggleMobile = document.getElementById('theme-toggle-mobile');
        const themeIcon = document.getElementById('theme-icon');
        const themeIconMobile = document.getElementById('theme-icon-mobile');
        
        // Check for saved user preference or use system preference
        if (localStorage.getItem('color-theme') === 'dark' || (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            themeIconMobile.classList.replace('fa-moon', 'fa-sun');
        } else {
            document.documentElement.classList.remove('dark');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            themeIconMobile.classList.replace('fa-sun', 'fa-moon');
        }
        
        // Theme toggle for desktop
        themeToggle.addEventListener('click', function() {
            // Toggle icon
            themeIcon.classList.toggle('fa-moon');
            themeIcon.classList.toggle('fa-sun');
            
            // Toggle theme
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        });
        
        // Theme toggle for mobile
        themeToggleMobile.addEventListener('click', function() {
            // Toggle icon
            themeIconMobile.classList.toggle('fa-moon');
            themeIconMobile.classList.toggle('fa-sun');
            
            // Toggle theme
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        });