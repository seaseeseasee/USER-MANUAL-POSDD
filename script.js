// Debug Version - Manual Documentation Site JavaScript

// Menu items data with navigation URLs
const menuItems = [
    {
        id: 'drink-dispensers',
        icon: '🛠️',
        text: 'Equipment preparation',
        keywords: 'equipment preparation เตรียมอุปกรณ์ จัดเตรียม เครื่องมือ setup installation configuration hardware machinery tools',
        url: 'index.html'
    },
    {
        id: 'employees',
        icon: '👥',
        text: 'System Login',
        keywords: 'system login เข้าสู่ระบบ authentication user access credentials password username signin account portal',
        url: 'employees.html'
    },
    {
        id: 'Time-recording',
        icon: '⏰',
        text: 'Time Recording',
        keywords: 'time recording บันทึกเวลา timesheet attendance clock tracking hours minutes timestamp logging',
        url: 'Time.html'
    },
    {
        id: 'Sales',
        icon: '💰',
        text: 'Sales Access',
        keywords: 'sales access การเข้าถึงการขาย transaction revenue billing payment checkout cashier pos terminal',
        url: 'Sales.html'
    },
    {
        id: 'maintenance',
        icon: '🧾',
        text: 'Tax invoice issuance',
        keywords: 'tax invoice issuance ออกใบกำกับภาษี vat receipt billing document taxation financial accounting',
        url: 'maintenance.html'
    },
    {
        id: 'settings',
        icon: '👁️',
        text: 'Showing details',
        keywords: 'showing details แสดงรายละเอียด display information view data presentation visualization report summary',
        url: 'settings.html'
    },
    {
        id: 'faq',
        icon: '📤',
        text: 'Exporting intraday sales files',
        keywords: 'exporting intraday sales files ส่งออกไฟล์ขาย export data download backup csv excel report daily',
        url: 'faq.html'
    },
    {
        id: 'contact-support',
        icon: '🔚',
        text: 'ENDDAY SALE',
        keywords: 'endday sale ปิดยอดขาย end of day closing summary final total daily sales closure',
        url: 'contact-support.html'
    }
];
// State management
let currentSearchTerm = '';
let filteredMenuItems = [...menuItems];
let currentPage = 'drink-dispensers'; // default
let searchInput;
let menuList;

// Debug function
function debugLog(message, data = null) {
    console.log(`🐛 DEBUG: ${message}`, data || '');
}

// Auto-detect current page
function detectCurrentPage() {
    debugLog('Starting page detection...');
    
    // Method 1: Check if CURRENT_PAGE is set globally
    if (window.CURRENT_PAGE) {
        currentPage = window.CURRENT_PAGE;
        debugLog('Page detected from CURRENT_PAGE variable', currentPage);
        return;
    }
    
    // Method 2: Detect from URL
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '');
    
    debugLog('URL Detection', { path, filename });
    
    if (filename === '' || filename === 'index') {
        currentPage = 'drink-dispensers';
    } else {
        currentPage = filename;
    }
    
    debugLog('Current page detected', currentPage);
}

// Initialize the application
function initializeApp() {
    debugLog('🚀 Manual Documentation System initializing...');
    
    // Detect current page
    detectCurrentPage();
    
    // Cache DOM elements
    searchInput = document.getElementById('searchInput');
    menuList = document.getElementById('menuList');
    
    debugLog('DOM Elements', {
        searchInput: !!searchInput,
        menuList: !!menuList,
        searchInputElement: searchInput,
        menuListElement: menuList
    });
    
    if (!searchInput || !menuList) {
        debugLog('❌ Required DOM elements not found!');
        return;
    }
    
    // Render initial menu
    renderMenuItems(menuItems);
    
    // Setup search functionality
    setupSearch();
    
    // Setup menu click handlers with navigation
    setupMenuClickHandlers();
    
    // Setup keyboard shortcuts
    setupKeyboardShortcuts();
    
    debugLog('✅ Initialization complete', currentPage);
}

// Render menu items with navigation support
function renderMenuItems(items) {
    if (!menuList) {
        debugLog('❌ menuList not found in renderMenuItems');
        return;
    }
    
    debugLog('Rendering menu items', { itemCount: items.length, currentPage });
    
    menuList.innerHTML = '';
    
    if (items.length === 0) {
        menuList.innerHTML = `
            <li class="no-results">
                <span style="color: rgba(255,255,255,0.6); font-style: italic; padding: 20px; display: block;">
                    🔍 ไม่พบผลลัพธ์ที่ตรงกับการค้นหา
                </span>
            </li>
        `;
        return;
    }
    
    items.forEach((item, index) => {
        const li = document.createElement('li');
        const isActive = item.id === currentPage;
        const href = item.url || `${item.id}.html`;
        
        debugLog(`Creating menu item: ${item.id}`, { isActive, href });
        
        li.innerHTML = `
            <a href="${href}" 
               class="${isActive ? 'active' : ''}" 
               data-id="${item.id}"
               data-url="${href}"
               title="${item.text}">
                ${item.icon} ${highlightSearchTerm(item.text, currentSearchTerm)}
            </a>
        `;
        menuList.appendChild(li);
        
        // Add animation delay for smooth appearance
        li.style.animationDelay = `${index * 50}ms`;
        li.classList.add('menu-item-animate');
    });
    
    debugLog('Menu rendering complete');
}

// Setup menu click handlers with ENHANCED debugging
function setupMenuClickHandlers() {
    if (!menuList) {
        debugLog('❌ menuList not found in setupMenuClickHandlers');
        return;
    }
    
    debugLog('Setting up menu click handlers...');
    
    menuList.addEventListener('click', function(e) {
        debugLog('🖱️ Click event detected', e.target);
        
        const link = e.target.closest('a');
        if (!link) {
            debugLog('❌ No link found from click target');
            return;
        }
        
        // Prevent default behavior first
        e.preventDefault();
        debugLog('✅ Default behavior prevented');
        
        // Get navigation info
        const itemId = link.dataset.id;
        const url = link.getAttribute('href');
        const dataUrl = link.dataset.url;
        
        debugLog('📊 Click data extracted', {
            itemId,
            url,
            dataUrl,
            currentPage,
            linkElement: link
        });
        
        // Special handling for employees
        if (itemId === 'employees') {
            debugLog('🎯 EMPLOYEES DETECTED - Starting navigation...');
            
            // Add loading visual feedback
            link.classList.add('loading');
            debugLog('✅ Loading class added to link');
            
            // Show navigation feedback
            showNavigationFeedback('Employees');
            debugLog('✅ Navigation feedback shown');
            
            // Navigate to employees page
            debugLog(`🚀 Attempting navigation to: ${url}`);
            setTimeout(() => {
                debugLog('⏰ Timeout executed, navigating now...');
                try {
                    window.location.href = url;
                    debugLog('✅ window.location.href set successfully');
                } catch (error) {
                    debugLog('❌ Navigation error', error);
                }
            }, 500); // Increased delay for better debugging
            
            return;
        }
        
        // For other pages
        if (itemId !== currentPage && url) {
            debugLog(`🚀 Navigating to different page: ${itemId} -> ${url}`);
            
            link.classList.add('loading');
            showNavigationFeedback(link.textContent.trim());
            
            setTimeout(() => {
                debugLog(`⏰ Navigating to: ${url}`);
                try {
                    window.location.href = url;
                    debugLog('✅ Navigation successful');
                } catch (error) {
                    debugLog('❌ Navigation error', error);
                }
            }, 300);
            return;
        }
        
        // Same page - just update active state
        if (itemId === currentPage) {
            debugLog('📍 Same page clicked - updating active state');
            
            document.querySelectorAll('.sidebar a').forEach(a => {
                a.classList.remove('active');
            });
            
            link.classList.add('active');
            debugLog('✅ Active state updated');
            return;
        }
        
        debugLog('⚠️ No navigation action taken', { itemId, currentPage, url });
    });
    
    debugLog('✅ Menu click handlers setup complete');
}

// Enhanced navigation feedback with debugging
function showNavigationFeedback(pageName) {
    debugLog('🎨 Showing navigation feedback', pageName);
    
    try {
        let loadingDiv = document.getElementById('navigation-loading');
        
        if (!loadingDiv) {
            debugLog('Creating new loading div...');
            loadingDiv = document.createElement('div');
            loadingDiv.id = 'navigation-loading';
            loadingDiv.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0,0,0,0.9);
                color: white;
                padding: 25px 35px;
                border-radius: 12px;
                z-index: 10000;
                font-size: 18px;
                display: flex;
                align-items: center;
                gap: 15px;
                border: 2px solid #3498db;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            `;
            document.body.appendChild(loadingDiv);
            debugLog('✅ Loading div created and added to body');
        }
        
        loadingDiv.innerHTML = `
            <div style="
                width: 24px; 
                height: 24px; 
                border: 3px solid #fff; 
                border-top: 3px solid #3498db; 
                border-radius: 50%; 
                animation: spin 1s linear infinite;
            "></div>
            <span>กำลังโหลด ${pageName}...</span>
        `;
        
        // Add CSS animation if not exists
        if (!document.getElementById('loading-animation-styles')) {
            const style = document.createElement('style');
            style.id = 'loading-animation-styles';
            style.textContent = `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
            debugLog('✅ Loading animation styles added');
        }
        
        debugLog('✅ Navigation feedback displayed successfully');
        
    } catch (error) {
        debugLog('❌ Error showing navigation feedback', error);
    }
}

// Enhanced search functionality
function setupSearch() {
    if (!searchInput) {
        debugLog('❌ searchInput not found in setupSearch');
        return;
    }
    
    debugLog('Setting up search functionality...');
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function(e) {
        currentSearchTerm = e.target.value.toLowerCase().trim();
        debugLog('🔍 Search input', currentSearchTerm);
        
        clearTimeout(searchTimeout);
        
        searchTimeout = setTimeout(() => {
            performSearch(currentSearchTerm);
        }, 200);
    });
    
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            clearSearch();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
    });
    
    debugLog('✅ Search setup complete');
}

// Perform search with highlighting
function performSearch(searchTerm) {
    debugLog('🔍 Performing search', searchTerm);
    
    if (searchTerm === '') {
        filteredMenuItems = [...menuItems];
        renderMenuItems(filteredMenuItems);
        clearContentHighlight();
        return;
    }
    
    filteredMenuItems = menuItems.filter(item => {
        const searchableText = `${item.text} ${item.keywords}`.toLowerCase();
        return searchableText.includes(searchTerm) || fuzzyMatch(searchableText, searchTerm);
    });
    
    debugLog('🔍 Search results', { searchTerm, resultCount: filteredMenuItems.length });
    
    renderMenuItems(filteredMenuItems);
    highlightContent(searchTerm);
}

// Simple fuzzy matching
function fuzzyMatch(text, pattern) {
    let textIndex = 0;
    let patternIndex = 0;
    
    while (textIndex < text.length && patternIndex < pattern.length) {
        if (text[textIndex] === pattern[patternIndex]) {
            patternIndex++;
        }
        textIndex++;
    }
    
    return patternIndex === pattern.length;
}

// Highlight search terms
function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm) return text;
    
    try {
        const regex = new RegExp(`(${escapeRegex(searchTerm)})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    } catch (error) {
        debugLog('❌ Error highlighting search term', error);
        return text;
    }
}

// Clear search
function clearSearch() {
    debugLog('🧹 Clearing search');
    if (searchInput) {
        searchInput.value = '';
    }
    currentSearchTerm = '';
    filteredMenuItems = [...menuItems];
    renderMenuItems(filteredMenuItems);
    clearContentHighlight();
    if (searchInput) {
        searchInput.blur();
    }
}

// Highlight content in main area
function highlightContent(searchTerm) {
    debugLog('🎨 Highlighting content', searchTerm);
    clearContentHighlight();
    
    if (!searchTerm) return;
    
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;
    
    try {
        const walker = document.createTreeWalker(
            mainContent,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    const parent = node.parentElement;
                    if (!parent) return NodeFilter.FILTER_REJECT;
                    
                    const tagName = parent.tagName.toLowerCase();
                    if (['script', 'style', 'input'].includes(tagName)) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    
                    if (parent.classList.contains('search-box') || 
                        parent.classList.contains('highlight')) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    
                    return NodeFilter.FILTER_ACCEPT;
                }
            },
            false
        );
        
        const textNodes = [];
        let node;
        
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }
        
        textNodes.forEach(textNode => {
            const text = textNode.textContent;
            const regex = new RegExp(`(${escapeRegex(searchTerm)})`, 'gi');
            
            if (regex.test(text)) {
                const highlightedHTML = text.replace(regex, '<span class="highlight">$1</span>');
                const wrapper = document.createElement('span');
                wrapper.innerHTML = highlightedHTML;
                if (textNode.parentNode) {
                    textNode.parentNode.replaceChild(wrapper, textNode);
                }
            }
        });
    } catch (error) {
        debugLog('❌ Error highlighting content', error);
    }
}

// Clear content highlights
function clearContentHighlight() {
    try {
        const highlights = document.querySelectorAll('.main-content .highlight');
        highlights.forEach(highlight => {
            const parent = highlight.parentNode;
            if (parent) {
                parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
                parent.normalize();
            }
        });
    } catch (error) {
        debugLog('❌ Error clearing highlights', error);
    }
}

// Escape regex special characters
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Setup keyboard shortcuts
function setupKeyboardShortcuts() {
    debugLog('⌨️ Setting up keyboard shortcuts');
    
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
        
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            clearSearch();
        }
    });
}

// Add CSS animation classes
function addAnimationStyles() {
    try {
        const style = document.createElement('style');
        style.textContent = `
            .menu-item-animate {
                animation: slideInLeft 0.3s ease-out forwards;
                opacity: 0;
                transform: translateX(-20px);
            }
            
            @keyframes slideInLeft {
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            .sidebar a.loading {
                opacity: 0.6;
                pointer-events: none;
                background-color: rgba(255,255,255,0.1);
            }
            
            .sidebar a.loading::after {
                content: " 🔄";
                animation: spin 1s linear infinite;
            }
            
            .highlight {
                background: linear-gradient(120deg, #fff3cd 0%, #ffeaa7 100%);
                padding: 2px 4px;
                border-radius: 3px;
                font-weight: bold;
                color: #856404;
            }
        `;
        document.head.appendChild(style);
        debugLog('✅ Animation styles added');
    } catch (error) {
        debugLog('❌ Error adding animation styles', error);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    debugLog('📄 DOM Content Loaded');
    
    try {
        addAnimationStyles();
        initializeApp();
        debugLog('🎉 Application started successfully');
    } catch (error) {
        debugLog('❌ Error during initialization', error);
        console.error('Full error details:', error);
    }
});

// Export for global access and debugging
window.ManualApp = {
    clearSearch: clearSearch,
    performSearch: performSearch,
    renderMenuItems: renderMenuItems,
    menuItems: menuItems,
    filteredMenuItems: filteredMenuItems,
    currentPage: currentPage,
    detectCurrentPage: detectCurrentPage,
    debugLog: debugLog
};

// Additional debug helpers
window.debugNavigation = function() {
    debugLog('=== NAVIGATION DEBUG INFO ===');
    debugLog('Current Page', currentPage);
    debugLog('Menu Items', menuItems);
    debugLog('DOM Elements', {
        searchInput: !!searchInput,
        menuList: !!menuList
    });
    debugLog('Menu Links', document.querySelectorAll('.sidebar a'));
    debugLog('Current URL', window.location.href);
    debugLog('CURRENT_PAGE variable', window.CURRENT_PAGE);
};

debugLog('🔧 Debug version loaded - Use debugNavigation() for detailed info');
// เพิ่มโค้ดนี้ท้าย script.js

// ==================== SCROLL TO TOP FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', function() {
    // รอให้หน้าโหลดเสร็จก่อน
    setTimeout(initScrollToTop, 100);
});

function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    if (!scrollToTopBtn) {
        console.log('Scroll to top button not found');
        return;
    }
    
    // ฟังก์ชันแสดง/ซ่อนปุ่ม
    function toggleScrollButton() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollPosition > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    }
    
    // ฟังก์ชัน Scroll to Top
    function scrollToTop() {
        // วิธีที่ 1: Smooth scroll (modern browsers)
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // วิธีที่ 2: Animated scroll (เข้ากันได้กับ browser เก่า)
            const currentPosition = window.pageYOffset;
            const step = currentPosition / 20;
            
            function animateScroll() {
                const newPosition = window.pageYOffset - step;
                if (newPosition > 0) {
                    window.scrollTo(0, newPosition);
                    requestAnimationFrame(animateScroll);
                } else {
                    window.scrollTo(0, 0);
                }
            }
            animateScroll();
        }
    }
    
    // Event Listeners
    window.addEventListener('scroll', toggleScrollButton);
    scrollToTopBtn.addEventListener('click', scrollToTop);
    
    // ตรวจสอบ position เริ่มต้น
    toggleScrollButton();
    
    // เพิ่ม Keyboard accessibility
    scrollToTopBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToTop();
        }
    });
    
    console.log('✅ Scroll to top button initialized');
}
// Follow Mouse Scroll Functionality
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initFollowMouseScroll, 100);
});

function initFollowMouseScroll() {
    const followBtn = document.getElementById('followMouseBtn');
    
    if (!followBtn) {
        console.log('Follow mouse button not found');
        return;
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let isVisible = false;
    let isMobile = window.innerWidth <= 768;
    
    // ตรวจสอบว่าเป็น Mobile หรือไม่
    function checkMobile() {
        isMobile = window.innerWidth <= 768;
        if (isMobile) {
            followBtn.style.position = 'fixed';
            followBtn.style.bottom = '20px';
            followBtn.style.right = '20px';
            followBtn.style.left = 'auto';
            followBtn.style.top = 'auto';
        }
    }
    
    // ติดตาม Mouse Position
    function updateMousePosition(e) {
        if (isMobile) return;
        
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (isVisible) {
            // วางปุ่มห่างจากเมาส์เล็กน้อย
            const offsetX = 30;
            const offsetY = 30;
            
            // คำนวณตำแหน่งใหม่
            let newX = mouseX + offsetX;
            let newY = mouseY + offsetY;
            
            // ป้องกันไม่ให้ปุ่มออกนอกหน้าจอ
            const btnWidth = 50;
            const btnHeight = 50;
            const maxX = window.innerWidth - btnWidth - 10;
            const maxY = window.innerHeight - btnHeight - 10;
            
            newX = Math.min(Math.max(10, newX), maxX);
            newY = Math.min(Math.max(10, newY), maxY);
            
            followBtn.style.left = newX + 'px';
            followBtn.style.top = newY + 'px';
            followBtn.style.right = 'auto';
            followBtn.style.bottom = 'auto';
        }
    }
    
    // แสดง/ซ่อนปุ่มตาม Scroll Position
    function toggleButton() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollPosition > 300) {
            if (!isVisible) {
                isVisible = true;
                followBtn.classList.add('show');
                followBtn.classList.add('following');
                
                if (!isMobile) {
                    // ตั้งตำแหน่งเริ่มต้นใกล้เมาส์
                    updateMousePosition({ clientX: mouseX, clientY: mouseY });
                }
            }
        } else {
            if (isVisible) {
                isVisible = false;
                followBtn.classList.remove('show');
                followBtn.classList.remove('following');
            }
        }
    }
    
    // Scroll to Top Function
    function scrollToTop() {
        followBtn.classList.add('clicking');
        
        // Smooth scroll
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // เอา animation class ออกหลัง animation เสร็จ
        setTimeout(() => {
            followBtn.classList.remove('clicking');
        }, 300);
    }
    
    // Magnetic Effect (ปุ่มดึงดูดเมาส์)
    function addMagneticEffect(e) {
        if (isMobile || !isVisible) return;
        
        const btnRect = followBtn.getBoundingClientRect();
        const btnCenterX = btnRect.left + btnRect.width / 2;
        const btnCenterY = btnRect.top + btnRect.height / 2;
        
        const distance = Math.sqrt(
            Math.pow(e.clientX - btnCenterX, 2) + 
            Math.pow(e.clientY - btnCenterY, 2)
        );
        
        // ถ้าเมาส์ใกล้ปุ่ม (ระยะ < 100px) ให้ปุ่มดึงดูด
        if (distance < 100) {
            const pullStrength = (100 - distance) / 100 * 20;
            const angleX = (e.clientX - btnCenterX) / distance;
            const angleY = (e.clientY - btnCenterY) / distance;
            
            const newX = btnCenterX + (angleX * pullStrength) - btnRect.width / 2;
            const newY = btnCenterY + (angleY * pullStrength) - btnRect.height / 2;
            
            followBtn.style.left = newX + 'px';
            followBtn.style.top = newY + 'px';
            
            followBtn.classList.add('magnetic');
        } else {
            followBtn.classList.remove('magnetic');
        }
    }
    
    // Event Listeners
    document.addEventListener('mousemove', function(e) {
        updateMousePosition(e);
        addMagneticEffect(e);
    });
    
    window.addEventListener('scroll', toggleButton);
    window.addEventListener('resize', checkMobile);
    followBtn.addEventListener('click', scrollToTop);
    
    // Keyboard accessibility
    followBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToTop();
        }
    });
    
    // เริ่มต้น
    checkMobile();
    toggleButton();
    
    console.log('✅ Follow mouse scroll button initialized');
}

// Optional: Mouse Trail Effect
function createMouseTrail() {
    let trails = [];
    const maxTrails = 10;
    
    document.addEventListener('mousemove', function(e) {
        if (window.innerWidth <= 768) return; // ไม่ใช้ใน Mobile
        
        // สร้าง trail element
        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        
        document.body.appendChild(trail);
        trails.push(trail);
        
        // ลบ trail เก่า
        if (trails.length > maxTrails) {
            const oldTrail = trails.shift();
            oldTrail.remove();
        }
        
        // Fade out trail
        setTimeout(() => {
            trail.style.opacity = '0';
            trail.style.transform = 'scale(0)';
        }, 100);
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.remove();
            }
        }, 200);
    });
}
