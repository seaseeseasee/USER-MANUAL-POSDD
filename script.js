// Debug Version - Manual Documentation Site JavaScript
// Debug Version - Manual Documentation Site JavaScript

// === Global Variables ===
// ประกาศตัวแปรหลักๆ ที่ใช้ทั่วทั้งไฟล์

// Menu items data with navigation URLs
const menuItems = [
    {
        id: 'drink-dispensers',
        icon: '',
        text: 'Equipment preparation',
        keywords: 'equipment preparation เตรียมอุปกรณ์ จัดเตรียม เครื่องมือ setup installation configuration hardware machinery tools',
        url: 'index.html'
    },
    {
        id: 'employees',
        icon: '',
        text: 'System Login',
        keywords: 'system login เข้าสู่ระบบ authentication user access credentials password username signin account portal',
        url: 'employees.html'
    },
    // *** เพิ่ม Sub-menu ที่จะซ่อนไว้ก่อน ***
    {
        id: 'employees-items-to-check',
        icon: '',
        text: 'Items to check',
        keywords: 'items to check รายการตรวจสอบ สิ่งที่ต้องตรวจสอบ',
        url: 'employees.html#items-to-check',
        parent: 'employees', // ระบุ parent
        type: 'submenu' // ระบุประเภทว่าเป็น submenu
    },
    {
        id: 'employees-important-notes',
        icon: '',
        text: 'Important Notes',
        keywords: 'important notes บันทึกสำคัญ ข้อควรจำ',
        url: 'employees.html#important-notes',
        parent: 'employees',
        type: 'submenu'
    },
    {
        id: 'time-recording',
        icon: '',
        text: 'Time Recording',
        keywords: 'time recording บันทึกเวลา timesheet attendance clock tracking hours minutes timestamp logging',
        url: 'Time.html'
    },
     {
        id: 'Clock In',
        icon: '',
        text: 'Clock In',
        keywords: 'clock in บันทึกเวลา เข้าทำงาน',
        url: 'Time.html#clock-in',
        parent: 'time-recording',
        type: 'submenu'
    },
    
    {
        id: 'clock-in-BREAK',
        icon: '',
        text: 'RECORDING BREAK TIMES ',
        keywords: 'clock in บันทึกเวลาเบรก เข้าทำงาน',
        url: 'Time.html#clock-in-BREAK',
        parent: 'time-recording',
        type: 'submenu'
    },
    {
        id: 'clock-end-BREAK',
        icon: '',
        text: 'END OF BREAK TIME ',
        keywords: 'clock in จบเวลา เข้าทำงาน',
        url: 'Time.html#clock-end-BREAK',
        parent: 'time-recording',
        type: 'submenu'
    },
     {
        id: 'Clock Out',
        icon: '',
        text: 'Clock Out',
        keywords: 'clock out บันทึกเวลา ออกงาน',
        url: 'Time.html#clock-out',
        parent: 'time-recording',
        type: 'submenu'
    },
     {
        id: 'sales-access-and-opening-sales',
        icon: '',
        text: 'Sales Access and Opening Sales',
        keywords: 'sales access opening sales การเข้าถึงการขาย การเปิดขาย',
        url: 'Sales.html', // ให้มี URL หรือไม่มีก็ได้ตามความเหมาะสม
    },
    // นี่คือลูกโดยตรงของ 'sales-access-and-opening-sales'
    {
        id: '1',
        icon: '',
        text: 'Adding Change Money to set Cashier Permissions',
        keywords: 'adding change money set cashier permissions เพิ่มเงินทอน ตั้งค่าสิทธิ์แคชเชียร์',
        url: 'Sales.html#1',
        parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    // เปลี่ยน ORDER PROCESSING ให้เป็นแค่ submenu
    {
        id: '2',
        icon: '',
        text: 'ORDER PROCESSING',
        keywords: 'order processing กระบวนการสั่งซื้อ',
        url: 'Sales.html#2',
        parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    // ย้าย New Order Processing ขึ้นมาเป็นลูกโดยตรงของ Sales Access
    {
        id: '2.1.',
        icon: '',
        text: 'New Order Processing',
        keywords: 'new order processing กระบวนการสั่งซื้อใหม่',
        url: 'Sales.html#2.1.',
        parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    // ย้าย Customer Type Selection ขึ้นมาเป็นลูกโดยตรงของ Sales Access
    {
        id: '2.2.',
        icon: '',
        text: 'Customer Type Selection - DINE IN OR TAKE AWAY',
        keywords: 'customer type selection dine in take away เลือกประเภทลูกค้า ทานที่ร้าน กลับบ้าน',
        url: 'Sales.html#2.2.',
        parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    // เปลี่ยน PAYMENT PROCESSING ให้เป็นแค่ submenu
    {
        id: '3',
        icon: '',
        text: 'PAYMENT PROCESSING',
        keywords: 'payment processing กระบวนการชำระเงิน',
        url: 'Sales.html#3',
         parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    // ย้ายลูกๆ ของ PAYMENT PROCESSING ขึ้นมาเป็นลูกโดยตรงของ Sales Access
    {
        id: '3.1.',
        icon: '',
        text: 'Cash Payment Processing',
        keywords: 'cash payment processing ชำระเงินสด',
        url: 'Sales.html#3.1.',
        parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    {
        id: '3.2.',
        icon: '',
        text: 'Exact Amount Payment Processing',
        keywords: 'exact amount payment processing ชำระเงินตรงจำนวน',
        url: 'Sales.html#3.2.',
         parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    {
        id: '3.3.',
        icon: '',
        text: 'Credit Card Payment Processing',
        keywords: 'credit card payment processing ชำระด้วยบัตรเครดิต',
        url: 'Sales.html#3.3.',
         parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    {
        id: '3.4.',
        icon: '',
        text: 'Cash Payment Processing Based on Received Amount',
        keywords: 'cash payment received amount ชำระเงินสดตามจำนวนที่ได้รับ',
        url: 'Sales.html#3.4.',
        parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    {
        id: '3.5.',
        icon: '',
        text: 'In cases where the customer wants to pay partially with cash and complete the payment with a credit card',
        keywords: 'partial payment cash credit card ชำระบางส่วน เงินสด บัตรเครดิต',
        url: 'Sales.html#3.5.',
        parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    // Void Order, Check Hourly Sales, Closing Sales จะยังคงเป็นลูกโดยตรงอยู่แล้ว
    {
        id: '4',
        icon: '',
        text: 'VOID ORDER - AFTER BILL COMPLETION',
        keywords: 'void order ยกเลิกออเดอร์ หลังพิมพ์บิล',
        url: 'Sales.html#4',
        parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    {
        id: '5',
        icon: '',
        text: 'CHECK HOURLY SALES FIGURES',
        keywords: 'check hourly sales figures ตรวจสอบยอดขายรายชั่วโมง',
        url: 'Sales.html#5',
        parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    {
        id: '6',
        icon: '',
        text: 'CLOSING SALES DURING THE DAY',
        keywords: 'closing sales during day ปิดยอดขายระหว่างวัน',
        url: 'Sales.html#6',
        parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    // เปลี่ยน Using Additional Functions ให้เป็นแค่ submenu
    {
        id: '7',
        icon: '',
        text: 'Using Additional Functions',
        keywords: 'using additional functions ใช้ฟังก์ชันเพิ่มเติม',
        url: 'Sales.html#7',
        parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    // ย้ายลูกๆ ของ Using Additional Functions ขึ้นมาเป็นลูกโดยตรงของ Sales Access
    {
        id: '7.1.',
        icon: '',
        text: 'CLOSE SHIFT REPRINT',
        keywords: 'close shift reprint พิมพ์ซ้ำปิดกะ',
        url: 'Sales.html#7.1.',
        parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    {
        id: '7.2.',
        icon: '',
        text: 'Active SHIFT REPRINT',
        keywords: 'active shift reprint พิมพ์ซ้ำกะปัจจุบัน',
        url: 'Sales.html#7.2.',
        parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    {
        id: '7.3',
        icon: '',
        text: 'ENDDAY REPRINT',
        keywords: 'endday reprint พิมพ์ซ้ำปิดวัน',
        url: 'Sales.html#7.3.',
        parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    {
        id: '7.4.',
        icon: '',
        text: 'ENDDAY NOTIFY',
        keywords: 'endday notify แจ้งเตือนปิดวัน',
        url: 'Sales.html#7.4.',
        parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    {
        id: '7.4.',
        icon: '',
        text: 'OPEN CASH DRAWER',
        keywords: 'open cash drawer เปิดลิ้นชักเก็บเงิน',
        url: 'Sales.html#7.4.',
        parent: 'sales-access-and-opening-sales',
        type: 'submenu'
    },
    {
        id: 'tax',
        icon: '',
        text: 'Tax invoice issuance',
        keywords: 'tax invoice issuance ออกใบกำกับภาษี vat receipt billing document taxation financial accounting',
        url: 'tax.html'
    },
    {
        id: 'show',
        icon: '',
        text: 'Showing details',
        keywords: 'showing details แสดงรายละเอียด display information view data presentation visualization report summary',
        url: 'show.html'
    },
    {
        id: 'export',
        icon: '',
        text: 'Exporting intraday sales files',
        keywords: 'exporting intraday sales files ส่งออกไฟล์ขาย export data download backup csv excel report daily',
        url: 'export.html'
    },
    {
        id: 'endday',
        icon: '',
        text: 'ENDDAY SALE',
        keywords: 'endday sale ปิดยอดขาย end of day closing summary final total daily sales closure',
        url: 'endday.html'
    }
];

// ประกาศตัวแปรหลักๆ ที่ใช้ทั่วทั้งไฟล์
let searchInput;
let menuList;
let currentSearchTerm = '';
let searchTimeout;
let currentPage = '';
let filteredMenuItems = [];


// Debug function
function debugLog(message, data = null) {
    console.log(`🐛 DEBUG: ${message}`, data || '');
}

function highlightSearchTerm(text, term) {
    if (!term) return text;
    // Escapes special characters in the term for use in regex
    const regex = new RegExp(`(${term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

function clearContentHighlight() {
    document.querySelectorAll('.content-section .highlight').forEach(span => {
        const parent = span.parentNode;
        parent.replaceChild(document.createTextNode(span.textContent), span);
        parent.normalize(); // Merges adjacent text nodes
    });
}

function highlightContent(term) {
    if (!term) {
        clearContentHighlight();
        return;
    }
    document.querySelectorAll('.content-section p, .content-section h1, .content-section h2, .content-section h3, .content-section li').forEach(element => {
        const originalHTML = element.innerHTML;
        const highlightedHTML = highlightSearchTerm(originalHTML, term);
        if (originalHTML !== highlightedHTML) {
            element.innerHTML = highlightedHTML;
        }
    });
}

   
// Function to create TOC for Time Recording page
function createTimeRecordingTOC() {
    // สร้าง main container
    const tocContainer = document.createElement('div');

    
    // สร้างปุ่ม toggle - ใช้ข้อความที่คุณต้องการ
    const tocToggle = document.createElement('button');
    tocToggle.className = 'toc-toggle';
  
    
    
    // สร้าง content container
    const tocContent = document.createElement('div');
 
 
    
    // เพิ่ม comment สำหรับ reference
    const comment = document.createComment(' TOC items will be generated by JavaScript ');
    tocContent.appendChild(comment);
    
    // รวมทุกส่วนเข้าด้วยกัน
  
    tocContainer.appendChild(tocContent);
    
    debugLog('✅ TOC HTML structure created via JavaScript');
    
    return tocContainer;
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
        // แปลง filename ให้ตรงกับ menu item id
        if (filename.toLowerCase() === 'time') {
            currentPage = 'time-recording';
        } else {
            currentPage = filename.toLowerCase();
        }
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
    // ... (ส่วนบนของ script.js เช่น global variables, buildMenuTree, findActiveChild)

// === Helper Functions ===

// ... (debugLog, fuzzyMatch, highlightText, buildMenuTree, findActiveChild)

/**
 * Sets up hover functionality for menu items that have a TOC.
 * This makes a specific menu item's TOC visible on hover and hidden on mouse leave.
 * @param {HTMLElement} menuItemElement - The <li> element of the menu item.
 * @param {Object} itemData - The original menu item data for this element. (Added for menuLink click logic)
 */
function setupMenuItemHoverWithTOC(menuItemElement, itemData) { // Added itemData parameter
    const tocContainer = menuItemElement.querySelector('.toc-container');
    const tocToggle = menuItemElement.querySelector('.toc-toggle');
    const tocContent = menuItemElement.querySelector('.toc-content');
    const menuLink = menuItemElement.querySelector('.menu-link');

    if (!tocContainer || !tocToggle || !tocContent || !menuLink) {
        // debugLog('❌ TOC elements not found for menu item, skipping setup:', menuItemElement.querySelector('.menu-link')?.textContent || 'N/A');
        return;
    }

    let hoverTimeout;
    let isHovering = false;
    // Determine initial isTocOpen state based on whether the menu link or its parent is active
    let isTocOpen = menuLink.classList.contains('active') || menuItemElement.classList.contains('parent-active');

    // Set initial display state based on isTocOpen
    tocContent.style.display = isTocOpen ? 'block' : 'none';
    tocToggle.textContent = isTocOpen ? '▲' : '▼';
    if (isTocOpen) {
        menuItemElement.classList.add('toc-open-by-active');
        // Ensure the main sub-menu is also displayed if parent is active
        const subMenu = menuItemElement.querySelector('.sub-menu');
        if (subMenu) subMenu.style.display = 'block';
    } else {
        menuItemElement.classList.remove('toc-open-by-active');
        const subMenu = menuItemElement.querySelector('.sub-menu');
        if (subMenu) subMenu.style.display = 'none'; // Ensure it's hidden if not active
    }


    // Mouse enter on menu item (li)
    menuItemElement.addEventListener('mouseenter', () => {
        isHovering = true;
        clearTimeout(hoverTimeout); // Clear any pending hide
        if (!isTocOpen) { // Only show on hover if not already open from click/active state
            tocContent.style.display = 'block';
            tocToggle.textContent = '▲';
            menuItemElement.classList.add('toc-hover');
        }
        // debugLog('✅ TOC shown on hover for:', menuLink.textContent);
    });

    // Mouse leave on menu item (li)
    menuItemElement.addEventListener('mouseleave', () => {
        isHovering = false;
        hoverTimeout = setTimeout(() => {
            if (!isHovering && !isTocOpen) { // Only hide if not hovering and not explicitly open
                tocContent.style.display = 'none';
                tocToggle.textContent = '▼';
                menuItemElement.classList.remove('toc-hover');
                // debugLog('✅ TOC hidden on mouse leave for:', menuLink.textContent);
            }
        }, 300); // Small delay before hiding
    });

    // Mouse enter on TOC container itself - prevent hiding when cursor moves into TOC
    tocContainer.addEventListener('mouseenter', () => {
        isHovering = true;
        clearTimeout(hoverTimeout); // Keep TOC visible
    });

    // Mouse leave on TOC container
    tocContainer.addEventListener('mouseleave', () => {
        isHovering = false;
        hoverTimeout = setTimeout(() => {
            if (!isHovering && !isTocOpen) { // Only hide if not hovering and not explicitly open
                tocContent.style.display = 'none';
                tocToggle.textContent = '▼';
                menuItemElement.classList.remove('toc-hover');
                // debugLog('✅ TOC hidden on TOC container leave for:', menuLink.textContent);
            }
        }, 300);
    });

    // Click handler for the toggle icon (optional, for persistent toggle)
    tocToggle.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from bubbling up to parent link
        isTocOpen = !isTocOpen; // Toggle the persistent open state

        if (isTocOpen) {
            tocContent.style.display = 'block';
            tocToggle.textContent = '▲';
            menuItemElement.classList.add('toc-open-clicked');
            menuItemElement.classList.remove('toc-hover'); // Remove hover class if opened by click
            // debugLog('✅ TOC opened by click:', menuLink.textContent);

            // Also toggle the main sub-menu if it's a parent link
            const subMenu = menuItemElement.querySelector('.sub-menu');
            if (subMenu) subMenu.style.display = 'block';

        } else {
            tocContent.style.display = 'none';
            tocToggle.textContent = '▼';
            menuItemElement.classList.remove('toc-open-clicked');
            // debugLog('✅ TOC closed by click:', menuLink.textContent);

            // Also toggle the main sub-menu
            const subMenu = menuItemElement.querySelector('.sub-menu');
            if (subMenu) subMenu.style.display = 'none';
        }
    });

    // Add a click handler to the main menu link itself
    menuLink.addEventListener('click', (event) => {
        // If the link has children and its URL is primarily a placeholder for children,
        // prevent default navigation and toggle the sub-menu/TOC
        if (itemData && itemData.children && itemData.children.length > 0 && (itemData.url === '#' || !itemData.url)) {
            event.preventDefault(); // Stop default link behavior
            tocToggle.click(); // Simulate a click on the toggle icon to open/close
        }
        // If it has a URL AND children (e.g., Sales.html), it will navigate.
        // The hover TOC will still work.
    });
}

// ... (ส่วน createMenuItemHTML, filterTree, renderMenuItems, performSearch ด้านล่าง)
    // Render initial menu - แสดงเมนูทั้งหมดเสมอ
    renderMenuItems(menuItems)
    function renderMenuItems(itemsToRender) { // เปลี่ยนชื่อ parameter ให้ชัดเจนขึ้น
    if (!menuList) {
        debugLog('❌ menuList not found in renderMenuItems');
        return;
    }

    debugLog('Rendering menu items', { itemCount: itemsToRender.length, currentPage });

    menuList.innerHTML = '';

    if (itemsToRender.length === 0) {
        menuList.innerHTML = `
            <li class="no-results">
                <span style="color: rgba(255,255,255,0.6); font-style: italic; padding: 20px; display: block;">
                    🔍 ไม่พบผลลัพธ์ที่ตรงกับการค้นหา
                </span>
            </li>
        `;
        return;
    }

    // สร้าง Map สำหรับเก็บ parent menu item เพื่อแนบ sub-menu เข้าไป
    const parentMenuItems = new Map();

    // Loop แรก: สร้างเมนูหลักและเก็บอ้างอิง
    itemsToRender.forEach((item, index) => {
        if (item.type === 'submenu') { // ข้าม sub-menu ในการ loop รอบแรก
            return;
        }

        const li = document.createElement('li');
        li.className = 'menu-item';
        li.setAttribute('data-id', item.id); // เพิ่ม data-id ให้ li ด้วย

        const isActive = item.id === currentPage;
        const href = item.url || `${item.id}.html`;

        const link = document.createElement('a');
        link.href = href;
        link.className = isActive ? 'menu-link active' : 'menu-link';
        link.setAttribute('data-id', item.id);
        link.setAttribute('data-url', href);
        link.title = item.text;

        if (item.icon) {
            const iconSpan = document.createElement('span');
            iconSpan.className = 'menu-icon';
            iconSpan.textContent = item.icon;
            link.appendChild(iconSpan);
        }

        const textSpan = document.createElement('span');
        textSpan.innerHTML = highlightSearchTerm(item.text, currentSearchTerm);
        link.appendChild(textSpan);

        li.appendChild(link);

        

        menuList.appendChild(li);
        parentMenuItems.set(item.id, li); // เก็บอ้างอิง li ของเมนูหลัก

        li.style.animationDelay = `${index * 50}ms`;
        li.classList.add('menu-item-animate');
    });

    // Loop ที่สอง: สร้าง Sub-menu และแนบเข้ากับ Parent
    itemsToRender.forEach((item) => {
        if (item.type === 'submenu' && item.parent) {
            const parentLi = parentMenuItems.get(item.parent);
            if (parentLi) {
                // ถ้ายังไม่มี ul.sub-menu ให้สร้างขึ้นมา
                let subMenuUl = parentLi.querySelector('.sub-menu');
                if (!subMenuUl) {
                    subMenuUl = document.createElement('ul');
                    subMenuUl.className = 'sub-menu';
                    // ให้ซ่อนไว้ก่อน
                    subMenuUl.style.display = 'none'; // เริ่มต้นซ่อน sub-menu
                    parentLi.appendChild(subMenuUl);
                }

                const subLi = document.createElement('li');
                const subLink = document.createElement('a');
                subLink.href = item.url;
                subLink.textContent = item.text; // ไม่ต้อง highlight ใน sub-menu โดยตรง (หรือจะใส่ก็ได้)
                subLink.className = 'sub-menu-link';
                subLink.setAttribute('data-id', item.id);
                subLink.setAttribute('data-url', item.url);
                subLi.appendChild(subLink);
                subMenuUl.appendChild(subLi);
                
                debugLog(`✅ Sub-menu "${item.text}" added to "${item.parent}"`);
            }
        }
    });

    // *** เพิ่ม Logic สำหรับ Hover เพื่อแสดง/ซ่อน Sub-menu ***
    // (ควรเรียกหลังจาก renderMenuItems เสร็จสมบูรณ์)
    setupSubMenuHover();

    debugLog('Menu rendering complete');
}


// ฟังก์ชันใหม่สำหรับจัดการ Hover ของ Sub-menu
function setupSubMenuHover() {
   const parentMenuIdsWithSubmenus = [...new Set(menuItems
        .filter(item => item.type === 'submenu')
        .map(item => item.parent)
    )];

    parentMenuIdsWithSubmenus.forEach(parentId => {
        const parentLi = document.querySelector(`.menu-item[data-id="${parentId}"]`);
        if (!parentLi) return;

        const subMenuUl = parentLi.querySelector('.sub-menu');
        if (!subMenuUl) return; // หากไม่มี sub-menu element จริงๆ ก็ข้ามไป

        let hoverTimeout;

        parentLi.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            subMenuUl.style.display = 'block';
            parentLi.classList.add('has-submenu-hover');
            debugLog(`Sub-menu for ${parentLi.dataset.id} shown.`);
        });

        parentLi.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => {
                subMenuUl.style.display = 'none';
                parentLi.classList.remove('has-submenu-hover');
                debugLog(`Sub-menu for ${parentLi.dataset.id} hidden.`);
            }, 200);
        });

        subMenuUl.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
        });

        subMenuUl.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => {
                subMenuUl.style.display = 'none';
                parentLi.classList.remove('has-submenu-hover');
                debugLog(`Sub-menu for ${parentLi.dataset.id} hidden from sub-menu leave.`);
            }, 200);
        });
    });

    debugLog('✅ Sub-menu hover functionality setup');
}


// ต้องแน่ใจว่า initializeApp ถูกเรียก
document.addEventListener('DOMContentLoaded', initializeApp);
;
    
    // Setup search functionality
    setupSearch();
    
    // Setup menu click handlers with navigation
    setupMenuClickHandlers();
    
    // Setup keyboard shortcuts
    setupKeyboardShortcuts();
    
  
    debugLog('✅ Initialization complete', currentPage);
}

// Render menu items with navigation support and TOC
function createMenuItemHTML(item, searchTerm) {
    const li = document.createElement('li');
    li.className = 'menu-item';
    li.setAttribute('data-id', item.id);

     const href = item.url && item.url !== 'javascript:void(0);' ? item.url : 'javascript:void(0);';
     const link = document.createElement('a');
    link.href = href;
    link.className = 'menu-link';
    link.setAttribute('data-id', item.id);
    link.setAttribute('data-url', item.url || ''); // Store actual URL
    link.title = item.text;


     if (item.icon) {
        const iconSpan = document.createElement('span');
        iconSpan.className = 'menu-icon';
        iconSpan.textContent = item.icon;
        link.appendChild(iconSpan);
    }

    const textSpan = document.createElement('span');
    textSpan.innerHTML = highlightSearchTerm(item.text, searchTerm); // ใช้ highlightSearchTerm
    link.appendChild(textSpan);

    li.appendChild(link);

    // ถ้าเมนูนี้มี Sub-menu (มี children)
    if (item.children && item.children.length > 0) {
        // เพิ่ม dropdown arrow
        const arrow = document.createElement('span');
        arrow.className = 'menu-arrow';
        arrow.textContent = ' ▼'; // หรือใช้ icon arrow_drop_down
        link.appendChild(arrow); // เพิ่มลูกศรในลิงก์หลัก

        const subMenuUl = document.createElement('ul');
        subMenuUl.className = 'sub-menu';
        subMenuUl.style.display = 'none'; // ซ่อน Sub-menu ไว้ก่อน

        item.children.forEach(childItem => {
            // เรียกฟังก์ชันนี้ซ้ำ (Recursive) เพื่อสร้าง Sub-menu
            const subMenuItemHTML = createMenuItemHTML(childItem, searchTerm);
            subMenuUl.appendChild(subMenuItemHTML);
        });
        li.appendChild(subMenuUl);

        // เพิ่ม Event Listener สำหรับการ Hover (สำหรับเมนูหลักที่มี sub-menu)
        // เพื่อควบคุมการแสดง/ซ่อน subMenuUl นี้
        let hoverTimeout;
        li.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            subMenuUl.style.display = 'block';
            li.classList.add('has-submenu-hover');
            debugLog(`Sub-menu for ${item.id} shown.`);
        });

        li.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => {
                subMenuUl.style.display = 'none';
                li.classList.remove('has-submenu-hover');
                debugLog(`Sub-menu for ${item.id} hidden.`);
            }, 200);
        });

        // ทำให้ Sub-menu ยังคงแสดงอยู่เมื่อเมาส์อยู่บน Sub-menu เอง
        subMenuUl.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
        });
        subMenuUl.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => {
                subMenuUl.style.display = 'none';
            }, 200);
        });
    }

    return li;
}

// ปรับปรุง renderMenuItems function
function renderMenuItems(itemsToRender) {
    if (!menuList) {
        debugLog('❌ menuList not found in renderMenuItems');
        return;
    }

    debugLog('Rendering menu items', { itemCount: itemsToRender.length, currentPage });

    menuList.innerHTML = '';

    // ก่อนอื่น สร้าง Map เพื่อให้เข้าถึงเมนูทั้งหมดได้ง่ายขึ้นเมื่อกรอง
    // เนื่องจากโครงสร้างเป็น Tree เราต้อง Flatten มันก่อนสำหรับการค้นหาทั้งหมด
    // (ฟังก์ชัน performSearch จะจัดการเรื่องนี้)
function performSearch(searchTerm) {
    debugLog('🔍 Performing search', searchTerm);

    if (itemsToRender.length === 0) {
        menuList.innerHTML = `
            <li class="no-results">
                <span style="color: rgba(255,255,255,0.6); font-style: italic; padding: 20px; display: block;">
                    🔍 No results found matching your search.
                </span>
            </li>
        `;
        return;
    }
    
    // ฟังก์ชัน helper สำหรับค้นหาในโครงสร้าง Tree และคืนค่าเฉพาะรายการที่ตรงกัน
    function filterTree(items, term) {
        const results = [];
        items.forEach(item => {
            const searchableText = `${item.text} ${item.keywords || ''}`.toLowerCase();
            const isMatch = searchableText.includes(term) || fuzzyMatch(searchableText, term);

            let childrenMatches = [];
            if (item.children && item.children.length > 0) {
                childrenMatches = filterTree(item.children, term);
            }

            // ถ้าเมนูนี้ตรง หรือมีลูกที่ตรง
            if (isMatch || childrenMatches.length > 0) {
                const matchedItem = { ...item }; // Copy item เพื่อไม่ให้แก้ไขต้นฉบับ
                if (childrenMatches.length > 0) {
                    matchedItem.children = childrenMatches; // รวมเฉพาะลูกที่ตรง
                } else if (item.children) {
                    // ถ้าเมนูหลักตรง แต่ลูกไม่ตรง ให้ใส่ลูกทั้งหมดกลับไป แต่จะไม่ไฮไลต์
                    // คุณอาจจะเลือกไม่ใส่ลูกเลยถ้าลูกไม่ตรง หรือใส่แค่โครงสร้างเปล่า
                    // สำหรับตอนนี้ เราจะใส่ลูกทั้งหมดกลับไป แต่จะถูกไฮไลต์เฉพาะที่ตรง
                    matchedItem.children = item.children.map(child => ({ ...child }));
                }
                results.push(matchedItem);
            }
        });
        return results;
    }

    // กรองเมนูหลักโดยใช้ฟังก์ชัน filterTree
    filteredMenuItems = filterTree(menuItems, searchTerm);

    debugLog('🔍 Search results', { searchTerm, resultCount: filteredMenuItems.length });

    // ส่งเมนูที่กรองแล้ว (ซึ่งยังคงเป็นโครงสร้าง Tree) ไปยัง renderMenuItems
    renderMenuItems(filteredMenuItems);
    highlightContent(searchTerm);
}
    if (itemsToRender.length === 0) {
        menuList.innerHTML = `
            <li class="no-results">
                <span style="color: rgba(255,255,255,0.6); font-style: italic; padding: 20px; display: block;">
                    🔍 ไม่พบผลลัพธ์ที่ตรงกับการค้นหา
                </span>
            </li>
        `;
        return;
    }

    // สร้างเมนูหลัก
    itemsToRender.forEach((item, index) => {
        // ใช้ฟังก์ชัน createMenuItemHTML เพื่อสร้าง HTML สำหรับแต่ละเมนูหลัก
        const menuItemHTML = createMenuItemHTML(item, currentSearchTerm);

        // ตั้งค่า active class สำหรับเมนูหลัก
        const linkElement = menuItemHTML.querySelector('.menu-link');
        if (linkElement && item.id === currentPage) {
             linkElement.classList.add('active');
        } else { // ตรวจสอบ Sub-menu ด้วยว่า active หรือไม่
            // Logic สำหรับ active sub-menu จะซับซ้อนขึ้นถ้าต้องทำ recursive
            // เบื้องต้นจะแค่ไฮไลต์เมนูหลัก (parent) ถ้า sub-menu ของมัน active
            // หรือคุณอาจจะส่ง currentUrl ไปที่ createMenuItemHTML และให้มันตรวจสอบลิงก์ทั้งหมด
             if (linkElement && item.children && item.children.some(child => child.url === currentPage)) {
                 linkElement.classList.add('active'); // ถ้ามี sub-menu เป็นหน้าปัจจุบัน ให้เมนูหลัก active
             }
        }

        menuList.appendChild(menuItemHTML);
        menuItemHTML.style.animationDelay = `${index * 50}ms`;
        menuItemHTML.classList.add('menu-item-animate');
    });

    debugLog('Menu rendering complete');
}

// Setup hover functionality for Time Recording menu
function setupTimeRecordingHover(menuItem, tocContainer) {
    const menuLink = menuItem.querySelector('.menu-link');
    const tocContent = tocContainer.querySelector('#tocContent');
    const tocToggle = tocContainer.querySelector('#tocToggle');
    
    if (!menuLink || !tocContent || !tocToggle) return;
    
    let hoverTimeout;
    let isHovering = false;
    
    // Mouse enter on menu item
    menuItem.addEventListener('mouseenter', () => {
        isHovering = true;
        clearTimeout(hoverTimeout);
        
        // แสดง TOC เมื่อ hover
        
        tocToggle.classList.add('active');
   
        
        // เพิ่มเอฟเฟกต์ hover
        menuItem.classList.add('toc-hover');
        
        debugLog('✅ TOC shown on hover');
    });
    
    // Mouse leave on menu item
    menuItem.addEventListener('mouseleave', () => {
        isHovering = false;
        
        // ซ่อน TOC หลังจาก delay เล็กน้อย
        hoverTimeout = setTimeout(() => {
            if (!isHovering) {
              
                tocToggle.classList.remove('active');
              
                
                // ลบเอฟเฟกต์ hover
                menuItem.classList.remove('toc-hover');
                
                debugLog('✅ TOC hidden on mouse leave');
            }
        }, 300); // รอ 300ms ก่อนซ่อน
    });
    
    // Mouse enter on TOC container - ป้องกันการซ่อนเมื่อ hover อยู่ใน TOC
    tocContainer.addEventListener('mouseenter', () => {
        isHovering = true;
        clearTimeout(hoverTimeout);
    });
    
    // Mouse leave on TOC container
    tocContainer.addEventListener('mouseleave', () => {
        isHovering = false;
        
        hoverTimeout = setTimeout(() => {
            if (!isHovering) {
                tocContent.style.display = 'none';
                tocToggle.classList.remove('active');
                tocToggle.innerHTML = 'Time Recording ▼';
                
                menuItem.classList.remove('toc-hover');
                
                debugLog('✅ TOC hidden on TOC container leave');
            }
        }, 300);
    });
    
    debugLog('✅ Time Recording hover functionality setup');
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
            }, 500);
            
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
            <span>Loading ${pageName}...</span>
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
        
        // Auto-hide loading div after 5 seconds (fallback)
        setTimeout(() => {
            hideNavigationFeedback();
        }, 5000);
        
        debugLog('✅ Navigation feedback displayed successfully');
        
    } catch (error) {
        debugLog('❌ Error showing navigation feedback', error);
    }
}

// Function to hide navigation feedback
function hideNavigationFeedback() {
    try {
        const loadingDiv = document.getElementById('navigation-loading');
        if (loadingDiv) {
            // Fade out animation
            loadingDiv.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            loadingDiv.style.opacity = '0';
            loadingDiv.style.transform = 'translate(-50%, -50%) scale(0.9)';
            
            // Remove from DOM after animation
            setTimeout(() => {
                if (loadingDiv.parentNode) {
                    loadingDiv.parentNode.removeChild(loadingDiv);
                    debugLog('✅ Loading div removed');
                }
            }, 300);
        }
    } catch (error) {
        debugLog('❌ Error hiding navigation feedback', error);
    }
}

// Hide loading when page loads
window.addEventListener('load', function() {
    debugLog('📄 Page fully loaded - hiding navigation feedback');
    hideNavigationFeedback();
});

// Hide loading when page visibility changes (when switching tabs back)
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        debugLog('📄 Page became visible - hiding navigation feedback');
        setTimeout(() => {
            hideNavigationFeedback();
        }, 500);
    }
});

// Hide loading when DOM is ready (faster than window load)
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        debugLog('📄 DOM ready - hiding navigation feedback');
        hideNavigationFeedback();
    }, 1000);
});

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
function fuzzyMatch(text, term) {
    // Simple fuzzy match: checks if all chars of term are in text in order
    // Example: "py" matches "python"
    let i = 0, j = 0;
    while (i < text.length && j < term.length) {
        if (text[i].toLowerCase() === term[j].toLowerCase()) {
            j++;
        }
        i++;
    }
    return j === term.length;
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

// Add CSS animation classes and TOC styles
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
            
            .highlight {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 2px 4px;
                border-radius: 3px;
                font-weight: bold;
                color: rgb(3, 3, 0);
            }

            /* Menu Styles */
            .menu-item {
                list-style: none;
                margin-bottom: 5px;
            }

           
            .menu-link:hover {
                background: rgba(42, 82, 152, 0.3);
                color: #ffffff;
            }


            .menu-icon {
                margin-right: 10px;
                font-size: 16px;
            }

            /* TOC Hover Effects */
            .menu-item.toc-hover {
                background: rgba(42, 82, 152, 0.1);
                border-radius: 8px;
                transform: translateX(2px);
            }

            .menu-item.toc-hover .menu-link {
                background: rgba(42, 82, 152, 0.3);
                color: #ffffff;
            }

            /* TOC Container Styles */
            .toc-container {
                margin-left: 30px;
                margin-top: 8px;
                border-left: 2px solid rgba(42, 82, 152, 0.3);
                padding-left: 15px;
                transition: all 0.3s ease;
            }

            .toc-toggle {
                width: 100%;
                background: rgba(42, 82, 152, 0.2);
                color: rgba(255, 255, 255, 0.8);
                border: none;
                border-radius: 4px;
                padding: 8px;
                cursor: pointer;
                font-size: 11px;
                margin-bottom: 8px;
                transition: all 0.3s ease;
                border-left: 3px solid transparent;
            }

            .toc-toggle:hover {
                background: rgba(42, 82, 152, 0.4);
                border-left-color: #2a5298;
                color: #ffffff;
            }

            .toc-toggle.active {
                background: rgba(42, 82, 152, 0.5);
                border-left-color: #2a5298;
                color: #ffffff;
            }
    
            .heading-tooltip:hover::before,
            .heading-tooltip:hover::after {
                opacity: 1;
                visibility: visible;
                transform: translateX(-50%) translateY(-5px);
            }

          
            /* Responsive design */
            @media (max-width: 768px) {
                .toc-container {
                    margin-top: 15px;
                    padding-top: 10px;
                }
                
                .toc-toggle {
                    font-size: 11px;
                    padding: 8px;
                }
            }
        `;
        document.head.appendChild(style);
        debugLog('✅ Animation styles and TOC styles added');
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
    debugLog: debugLog,
    
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
    debugLog('TOC Elements', {
        tocToggle: !!document.getElementById('tocToggle'),
        tocContent: !!document.getElementById('tocContent')
    });
};

debugLog('🔧 Debug version loaded - Use debugNavigation() for detailed info');

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

// ==================== SIDEBAR FOLLOW MOUSE FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initSidebarFollowMouse, 100);
});

function initSidebarFollowMouse() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (!sidebar) {
        console.log('Sidebar not found');
        return;
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let isMobile = window.innerWidth <= 768;
    let isCollapsed = false;
    let isMouseTracking = true;
    
    // สร้างปุ่ม Toggle Sidebar
    createSidebarToggle();
    
    // สร้าง Mobile Overlay
    if (isMobile) {
        createMobileOverlay();
    }
    
    // การตั้งค่า
    const CONFIG = {
        // ระยะที่ sidebar จะเลื่อนตาม mouse
        followStrength: 0.1,
        
        // ระยะ Magnetic Effect
        magneticDistance: 150,
        magneticStrength: 30,
        
        // ความเร็วในการติดตาม
        followSpeed: 0.15,
        
        // เปิด/ปิด Parallax Effect
        enableParallax: true,
        
        // เปิด/ปิด Magnetic Effect
        enableMagnetic: true,
        
        // เปิด/ปิด Auto Hide
        enableAutoHide: false
    };
    
    // ตรวจสอบ Mobile
    function checkMobile() {
        const wasMobile = isMobile;
        isMobile = window.innerWidth <= 768;
        
        if (wasMobile !== isMobile) {
            if (isMobile) {
                setupMobile();
            } else {
                setupDesktop();
            }
        }
    }
    
    // Setup Desktop Mode
    function setupDesktop() {
        sidebar.style.position = 'fixed';
        sidebar.style.transform = 'translateX(0)';
        sidebar.classList.remove('mobile-open');
        mainContent.style.marginLeft = isCollapsed ? '50px' : '250px';
        
        // เปิดใช้ mouse tracking
        enableMouseTracking();
    }
    
    // Setup Mobile Mode  
    function setupMobile() {
        sidebar.style.position = 'fixed';
        sidebar.style.transform = 'translateX(-100%)';
        mainContent.style.marginLeft = '0';
        
        // ปิด mouse tracking
        disableMouseTracking();
    }
    
    // เปิดใช้ Mouse Tracking
    function enableMouseTracking() {
        if (isMobile) return;
        
        isMouseTracking = true;
        sidebar.classList.add('mouse-tracking');
        
        document.addEventListener('mousemove', handleMouseMove);
    }
    
    // ปิด Mouse Tracking
    function disableMouseTracking() {
        isMouseTracking = false;
        sidebar.classList.remove('mouse-tracking');
        
        document.removeEventListener('mousemove', handleMouseMove);
        
        // รีเซ็ต position
        sidebar.style.transform = isCollapsed ? 'translateX(-200px)' : 'translateX(0)';
    }
    
    // จัดการการเคลื่อนไหวของ Mouse
    function handleMouseMove(e) {
        if (!isMouseTracking || isMobile || isCollapsed) return;
        
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Parallax Effect
        if (CONFIG.enableParallax) {
            applyParallaxEffect(e);
        }
        
        // Magnetic Effect
        if (CONFIG.enableMagnetic) {
            applyMagneticEffect(e);
        }
    }
    
    // Parallax Effect
    function applyParallaxEffect(e) {
        const centerY = window.innerHeight / 2;
        const mouseOffsetY = (e.clientY - centerY) / centerY;
        
        // คำนวณการเลื่อน (เลื่อนย้อนกับ mouse)
        const moveY = mouseOffsetY * CONFIG.followStrength * -20;
        
        // จำกัดการเลื่อน
        const maxMove = 30;
        const clampedMoveY = Math.max(-maxMove, Math.min(maxMove, moveY));
        
        sidebar.style.transform = `translateY(${clampedMoveY}px)`;
    }
    
    // Magnetic Effect
    function applyMagneticEffect(e) {
        const sidebarRect = sidebar.getBoundingClientRect();
        const sidebarCenterX = sidebarRect.left + sidebarRect.width / 2;
        const sidebarCenterY = sidebarRect.top + sidebarRect.height / 2;
        
        const distance = Math.sqrt(
            Math.pow(e.clientX - sidebarCenterX, 2) + 
            Math.pow(e.clientY - sidebarCenterY, 2)
        );
        
        // ถ้าเมาส์ใกล้ sidebar
        if (distance < CONFIG.magneticDistance) {
            const pullStrength = (CONFIG.magneticDistance - distance) / CONFIG.magneticDistance * CONFIG.magneticStrength;
            const angleX = (e.clientX - sidebarCenterX) / distance;
            const angleY = (e.clientY - sidebarCenterY) / distance;
            
            const moveX = Math.max(-10, Math.min(10, angleX * pullStrength));
            const moveY = Math.max(-20, Math.min(20, angleY * pullStrength));
            
            sidebar.style.transform = `translate(${moveX}px, ${moveY}px)`;
            sidebar.classList.add('magnetic');
        } else {
            sidebar.classList.remove('magnetic');
            
            // รีเซ็ตกลับตำแหน่งเดิม
            if (!CONFIG.enableParallax) {
                sidebar.style.transform = 'translate(0, 0)';
            }
        }
    }
    
    // สร้างปุ่ม Toggle
    function createSidebarToggle() {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'sidebar-toggle';
        toggleBtn.innerHTML = '☰';
        toggleBtn.title = 'Toggle Sidebar';
        
        // เพิ่มใน main content
        if (mainContent) {
            mainContent.appendChild(toggleBtn);
        }
        
        toggleBtn.addEventListener('click', toggleSidebar);
    }
    
    // Toggle Sidebar
    function toggleSidebar() {
        if (isMobile) {
            toggleMobileSidebar();
        } else {
            toggleDesktopSidebar();
        }
    }
    
    // Toggle Desktop Sidebar
    function toggleDesktopSidebar() {
        isCollapsed = !isCollapsed;
        
        if (isCollapsed) {
            sidebar.classList.add('collapsed');
            if (mainContent) {
                mainContent.style.marginLeft = '50px';
            }
            
            // ปิด mouse tracking เมื่อหด
            disableMouseTracking();
        } else {
            sidebar.classList.remove('collapsed');
            if (mainContent) {
                mainContent.style.marginLeft = '250px';
            }
            
            // เปิด mouse tracking เมื่อขยาย
            enableMouseTracking();
        }
        
        // อัปเดตไอคอนปุ่ม
        const toggleBtn = document.querySelector('.sidebar-toggle');
        if (toggleBtn) {
            toggleBtn.innerHTML = isCollapsed ? '☰' : '✕';
        }
    }
    
    // Toggle Mobile Sidebar
    function toggleMobileSidebar() {
        const isOpen = sidebar.classList.contains('mobile-open');
        const overlay = document.querySelector('.sidebar-overlay');
        
        if (isOpen) {
            sidebar.classList.remove('mobile-open');
            if (overlay) {
                overlay.classList.remove('show');
            }
        } else {
            sidebar.classList.add('mobile-open');
            if (overlay) {
                overlay.classList.add('show');
            }
        }
        
        // อัปเดตไอคอนปุ่ม
        const toggleBtn = document.querySelector('.sidebar-toggle');
        if (toggleBtn) {
            toggleBtn.innerHTML = isOpen ? '☰' : '✕';
        }
    }
    
    // สร้าง Mobile Overlay
    function createMobileOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', function() {
            toggleMobileSidebar();
        });
    }
    
    // Auto Hide Sidebar (เมื่อ scroll)
    function handleScroll() {
        if (!CONFIG.enableAutoHide || isMobile) return;
        
        const scrollY = window.pageYOffset;
        
        if (scrollY > 100 && !isCollapsed) {
            // ซ่อน sidebar เมื่อ scroll ลง
            sidebar.style.transform = 'translateX(-50px)';
            sidebar.style.opacity = '0.7';
        } else if (!isCollapsed) {
            // แสดง sidebar เมื่อ scroll ขึ้น
            sidebar.style.transform = 'translateX(0)';
            sidebar.style.opacity = '1';
        }
    }
    
    // Event Listeners
    window.addEventListener('resize', checkMobile);
    
    if (CONFIG.enableAutoHide) {
        window.addEventListener('scroll', handleScroll);
    }
    
    // Keyboard Shortcuts
    document.addEventListener('keydown', function(e) {
        // กด Ctrl+B เพื่อ toggle sidebar
        if (e.ctrlKey && e.key === 'b') {
            e.preventDefault();
            toggleSidebar();
        }
        
        // กด Escape เพื่อปิด mobile sidebar
        if (e.key === 'Escape' && isMobile) {
            if (sidebar.classList.contains('mobile-open')) {
                toggleMobileSidebar();
            }
        }
    });
    
    // เริ่มต้น
    checkMobile();
    
    console.log('✅ Sidebar follow mouse initialized');
}

// ==================== DISABLE MENU EFFECTS (MODIFIED) ====================
document.addEventListener('DOMContentLoaded', function() {
    // รอให้เมนูโหลดเสร็จก่อน แล้วค่อยปรับแต่ง
    setTimeout(adjustMenuStyling, 800);
});

function adjustMenuStyling() {
    // ไม่ลบเมนู แต่ปรับแต่งสไตล์เท่านั้น
    const menuLinks = document.querySelectorAll('.sidebar .menu-link');
    
    menuLinks.forEach(link => {
        // ปรับแต่งสไตล์ให้เรียบง่าย แต่ยังคงการทำงาน
        link.style.transition = 'background-color 0.2s ease, color 0.2s ease';
        
        // เก็บ event listeners เดิมไว้ แต่ปรับแต่งเอฟเฟกต์
        link.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = 'rgba(19, 18, 97, 0.2)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = 'transparent';
            }
        });
    });
    
    console.log('✅ Menu styling adjusted (not removed)');
}

// ฟังก์ชันอัปเดต active state สำหรับหน้าปัจจุบัน
function updateActiveMenuState() {
    const menuLinks = document.querySelectorAll('.sidebar .menu-link');
    menuLinks.forEach(link => {
        const itemId = link.dataset.id;
        if (itemId === currentPage) {
            link.classList.add('active');
            link.style.backgroundColor = 'rgba(42, 82, 152, 0.5)';
            link.style.color = '#ffffff';
        } else {
            link.classList.remove('active');
            link.style.backgroundColor = 'transparent';
            link.style.color = 'rgba(255,255,255,0.8)';
        }
    });
}

// เรียกใช้ฟังก์ชันอัปเดต active state หลังจากเมนูโหลดเสร็จ
setTimeout(updateActiveMenuState, 900);

function clearSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = ''; // ล้างข้อความในช่องค้นหา
        performSearch(''); // เรียก performSearch ด้วยค่าว่างเปล่า เพื่อแสดงเมนูทั้งหมด
    }
    debugLog('🗑️ Search input cleared.');
}

// ... (ส่วนที่เหลือของโค้ด เช่น Event Listeners, initApp)

// ตรวจสอบให้แน่ใจว่ามีการผูก Event Listener สำหรับปุ่ม Clear Search
document.addEventListener('DOMContentLoaded', () => {
    // ... (Event Listeners อื่นๆ)

    const clearSearchBtn = document.getElementById('scrollToTopBtn'); // ตรวจสอบ ID ของปุ่ม Clear ของคุณ
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', clearSearch);
        debugLog('🔍 Clear Search button listener attached.');
    }
});
// JavaScript แบบ Debug - มีการแสดงผลใน Console
        console.log('🔧 เริ่มโหลด JavaScript สำหรับปุ่มกลับขึ้นด้านบน');

        // รอให้หน้าโหลดเสร็จ
        document.addEventListener('DOMContentLoaded', function() {
            console.log('✅ DOM โหลดเสร็จแล้ว');
            
            // หาปุ่ม
            const scrollBtn = document.getElementById('scrollToTopBtn');
            
            if (!scrollBtn) {
                console.error('❌ ไม่พบปุ่มที่มี ID: scrollToTopBtn');
                alert('❌ ไม่พบปุ่ม! ตรวจสอบ ID ใน HTML');
                return;
            }
            
            console.log('✅ พบปุ่มแล้ว:', scrollBtn);

            // ฟังก์ชันแสดง/ซ่อนปุ่ม
            function toggleButton() {
                const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                
                // Debug: แสดงตำแหน่งการเลื่อน
                console.log('📏 ตำแหน่งการเลื่อน:', scrollPosition + 'px');
                
                if (scrollPosition > 300) {
                    if (!scrollBtn.classList.contains('show')) {
                        scrollBtn.classList.add('show');
                        console.log('👁️ แสดงปุ่ม');
                    }
                } else {
                    if (scrollBtn.classList.contains('show')) {
                        scrollBtn.classList.remove('show');
                        console.log('🙈 ซ่อนปุ่ม');
                    }
                }
            }

            // เมื่อเลื่อนหน้า
            window.addEventListener('scroll', toggleButton);
            console.log('✅ ติดตั้ง scroll listener แล้ว');

            // เมื่อคลิกปุ่ม
            scrollBtn.addEventListener('click', function() {
                console.log('🖱️ คลิกปุ่มแล้ว - เลื่อนขึ้นด้านบน');
                
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            console.log('✅ ติดตั้ง click listener แล้ว');

            // ตรวจสอบตำแหน่งเริ่มต้น
            toggleButton();
        });

        // ตรวจสอบ error ทั่วไป
        window.addEventListener('error', function(e) {
            console.error('❌ JavaScript Error:', e.message);
        });

        console.log('🚀 JavaScript พร้อมทำงาน')
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.body.classList.remove('sidebar-open'); // สมมุติว่ามี sidebar toggle
            document.querySelector('.content').style.display = 'block'; // แสดงเนื้อหา
        }
    });
});

document.querySelectorAll('.menu-item').forEach(el => {
    el.addEventListener('click', closeSidebarOnClick);
});
function setupMenuClickHandling() {
    const menuContainer = document.getElementById('menu-container');
    if (!menuContainer) return;

    menuContainer.addEventListener('click', function (e) {
        const target = e.target.closest('[data-id]');
        if (!target) return;

        const itemId = target.dataset.id;
        const item = menuItems.find(i => i.id === itemId);
        if (!item) return;

        // Clear all active first
        document.querySelectorAll('#menu-container .active').forEach(el => {
            el.classList.remove('active');
        });

        // If submenu clicked → remove main highlight
        if (item.type === 'submenu') {
            // Highlight only this submenu
            target.classList.add('active');
        } else {
            // Highlight the main menu
            target.classList.add('active');

            // Toggle submenu visibility
            toggleSubmenus(itemId);
        }

        // Navigate if URL is set
        if (item.url) {
            window.location.href = item.url;
        }
    });
}

function toggleSubmenus(parentId) {
    document.querySelectorAll(`[data-parent]`).forEach(el => {
        if (el.dataset.parent === parentId) {
            el.classList.toggle('hidden');
        } else {
            el.classList.add('hidden');
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('hidden');
    });
});
// เพิ่มโค้ดนี้ใน script.js ภายใน document.addEventListener('DOMContentLoaded', function () { ... });

    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // เมื่อผู้ใช้เลื่อนหน้าจอ ให้แสดงหรือซ่อนปุ่ม
    window.onscroll = function() {
        if (scrollToTopBtn) { // ตรวจสอบว่าปุ่มมีอยู่จริงก่อนใช้งาน
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        }
    };

    // เมื่อผู้ใช้คลิกที่ปุ่ม ให้เลื่อนกลับไปด้านบนสุดของเอกสาร
    if (scrollToTopBtn) { // ตรวจสอบว่าปุ่มมีอยู่จริงก่อนเพิ่ม Event Listener
        scrollToTopBtn.addEventListener("click", function() {
            // ใช้ window.scrollTo() สำหรับการเลื่อนที่ราบรื่น (smooth scroll)
            window.scrollTo({
                top: 0,
                behavior: "smooth" // ทำให้การเลื่อนเป็นไปอย่างราบรื่น
            });

            // สำหรับเบราว์เซอร์เก่าที่ไม่รองรับ behavior: "smooth"
            // document.body.scrollTop = 0; // สำหรับ Safari
            // document.documentElement.scrollTop = 0; // สำหรับ Chrome, Firefox, IE และ Opera
        });
    } 
  