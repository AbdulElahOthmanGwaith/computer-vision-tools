// Computer Vision Tools Data
const tools = [
    {
        id: 1,
        name: "OpenCV",
        category: "computer-vision",
        description: {
            ar: "مكتبة رؤية حاسوبية مفتوحة المصدر شاملة تدعم معالجة الصور والفيديو في الوقت الفعلي مع أداء عالي وتوافق مع منصات متعددة",
            en: "Comprehensive open-source computer vision library supporting real-time image and video processing with high performance and cross-platform compatibility"
        },
        features: {
            ar: ["معالجة الصور", "كشف الأجسام", "التعرف على الوجوه", "التتبع", "معايرة الكاميرا", "رؤية ثلاثية الأبعاد"],
            en: ["Image Processing", "Object Detection", "Face Recognition", "Tracking", "Camera Calibration", "3D Vision"]
        },
        icon: "fas fa-camera",
        github: "https://github.com/opencv/opencv",
        website: "https://opencv.org/",
        language: "C++/Python",
        stars: "77k+"
    },
    {
        id: 2,
        name: "TensorFlow",
        category: "deep-learning",
        description: {
            ar: "منصة تعلم آلي مفتوحة المصدر من Google تدعم بناء وتدريب النماذج العميقة للرؤية الحاسوبية مع أدوات شاملة للإنتاج",
            en: "Open-source machine learning platform from Google supporting deep learning model development for computer vision with comprehensive production tools"
        },
        features: {
            ar: ["التعلم العميق", "الشبكات العصبية", "كشف الأجسام", "تصنيف الصور", "تجزئة الصور", "نشر النماذج"],
            en: ["Deep Learning", "Neural Networks", "Object Detection", "Image Classification", "Image Segmentation", "Model Deployment"]
        },
        icon: "fas fa-brain",
        github: "https://github.com/tensorflow/tensorflow",
        website: "https://tensorflow.org/",
        language: "Python/C++",
        stars: "185k+"
    },
    {
        id: 3,
        name: "PyTorch",
        category: "deep-learning",
        description: {
            ar: "مكتبة تعلم عميق مرنة ومفتوحة المصدر تتميز بالبساطة والديناميكية في بناء النماذج مع دعم قوي للبحث العلمي",
            en: "Flexible and open-source deep learning library featuring simplicity and dynamic model building with strong research support"
        },
        features: {
            ar: ["الرسوم البيانية الديناميكية", "التعلم العميق", "رؤية حاسوبية", "معالجة اللغة الطبيعية", "التدريب الموزع", "أدوات البحث"],
            en: ["Dynamic Graphs", "Deep Learning", "Computer Vision", "Natural Language Processing", "Distributed Training", "Research Tools"]
        },
        icon: "fas fa-fire",
        github: "https://github.com/pytorch/pytorch",
        website: "https://pytorch.org/",
        language: "Python",
        stars: "82k+"
    },
    {
        id: 4,
        name: "YOLO",
        category: "detection",
        description: {
            ar: "خوارزمية كشف الأجسام السريعة والدقيقة في الوقت الفعلي، تشتهر بكفاءتها العالية في التطبيقات المباشرة والمحمولة",
            en: "Fast and accurate real-time object detection algorithm, renowned for its high efficiency in live and mobile applications"
        },
        features: {
            ar: ["كشف الأجسام", "الوقت الفعلي", "سرعة عالية", "دقة ممتازة", "تطبيقات محمولة", "تتبع متعدد الأجسام"],
            en: ["Object Detection", "Real-time", "High Speed", "Excellent Accuracy", "Mobile Applications", "Multi-object Tracking"]
        },
        icon: "fas fa-crosshairs",
        github: "https://github.com/ultralytics/yolov5",
        website: "https://ultralytics.com/yolo",
        language: "Python",
        stars: "50k+"
    },
    {
        id: 5,
        name: "Detectron2",
        category: "detection",
        description: {
            ar: "منصة كشف الأجسام وتجزئة الصور المتقدمة من Facebook AI، تدعم أحدث خوارزميات البحث مع سهولة الاستخدام والتخصيص",
            en: "Advanced object detection and image segmentation platform from Facebook AI, supporting latest research algorithms with ease of use and customization"
        },
        features: {
            ar: ["كشف الأجسام", "تجزئة الصور", "كشف الأشخاص", "تجزئة البانوراما", "نماذج متقدمة", "بحث متطور"],
            en: ["Object Detection", "Image Segmentation", "Person Detection", "Panoptic Segmentation", "Advanced Models", "Cutting-edge Research"]
        },
        icon: "fas fa-search-plus",
        github: "https://github.com/facebookresearch/detectron2",
        website: "https://detectron2.readthedocs.io/",
        language: "Python",
        stars: "30k+"
    },
    {
        id: 6,
        name: "scikit-image",
        category: "processing",
        description: {
            ar: "مجموعة خوارزميات معالجة الصور المبنية على NumPy، تقدم أدوات شاملة وسهلة الاستخدام للتحليل العلمي للصور",
            en: "Collection of image processing algorithms built on NumPy, providing comprehensive and user-friendly tools for scientific image analysis"
        },
        features: {
            ar: ["معالجة الصور", "الفلاتر", "التحويلات الهندسية", "قياس الخصائص", "تجزئة الصور", "تحليل علمي"],
            en: ["Image Processing", "Filters", "Geometric Transformations", "Feature Measurement", "Image Segmentation", "Scientific Analysis"]
        },
        icon: "fas fa-microscope",
        github: "https://github.com/scikit-image/scikit-image",
        website: "https://scikit-image.org/",
        language: "Python",
        stars: "6k+"
    },
    {
        id: 7,
        name: "Dlib",
        category: "computer-vision",
        description: {
            ar: "مكتبة تعلم آلي وكمبيوتر فيجن متطورة تتخصص في التعرف على الوجوه وكشف المعالم مع خوارزميات محسنة للأداء",
            en: "Advanced machine learning and computer vision library specializing in face recognition and landmark detection with optimized algorithms"
        },
        features: {
            ar: ["كشف الوجوه", "التعرف على المعالم", "تتبع الأجسام", "التصنيف", "الانحدار", "معالجة الصور"],
            en: ["Face Detection", "Landmark Recognition", "Object Tracking", "Classification", "Regression", "Image Processing"]
        },
        icon: "fas fa-user-circle",
        github: "https://github.com/davisking/dlib",
        website: "http://dlib.net/",
        language: "C++/Python",
        stars: "13k+"
    },
    {
        id: 8,
        name: "SimpleCV",
        category: "computer-vision",
        description: {
            ar: "إطار عمل مبسط للرؤية الحاسوبية يهدف لجعل تطوير تطبيقات الرؤية الحاسوبية أسهل وأكثر إمتاعاً للمبتدئين",
            en: "Simplified computer vision framework aimed at making computer vision application development easier and more enjoyable for beginners"
        },
        features: {
            ar: ["واجهة بسيطة", "للمبتدئين", "معالجة الصور", "كشف الأجسام", "التفاعل السهل", "تعليمي"],
            en: ["Simple Interface", "Beginner Friendly", "Image Processing", "Object Detection", "Easy Interaction", "Educational"]
        },
        icon: "fas fa-graduation-cap",
        github: "https://github.com/sightmachine/SimpleCV",
        website: "http://simplecv.org/",
        language: "Python",
        stars: "2.6k+"
    },
    {
        id: 9,
        name: "BoofCV",
        category: "computer-vision",
        description: {
            ar: "مكتبة رؤية حاسوبية شاملة مكتوبة بلغة Java، تقدم أداءً عالياً مع خوارزميات متقدمة للتطبيقات التجارية والأكاديمية",
            en: "Comprehensive computer vision library written in Java, providing high performance with advanced algorithms for commercial and academic applications"
        },
        features: {
            ar: ["لغة Java", "أداء عالي", "خوارزميات متقدمة", "كشف المعالم", "المعايرة", "تتبع الأجسام"],
            en: ["Java Language", "High Performance", "Advanced Algorithms", "Feature Detection", "Calibration", "Object Tracking"]
        },
        icon: "fab fa-java",
        github: "https://github.com/lessthanoptimal/BoofCV",
        website: "https://boofcv.org/",
        language: "Java",
        stars: "2k+"
    },
    {
        id: 10,
        name: "OpenMMLab",
        category: "deep-learning",
        description: {
            ar: "منصة شاملة للتعلم العميق تضم مجموعة من المكتبات المتخصصة في الرؤية الحاسوبية والذكاء الاصطناعي مع نماذج حديثة",
            en: "Comprehensive deep learning platform featuring specialized libraries for computer vision and AI with state-of-the-art models"
        },
        features: {
            ar: ["نماذج متطورة", "أدوات شاملة", "بحث متقدم", "تطبيقات متنوعة", "سهولة الاستخدام", "مجتمع نشط"],
            en: ["State-of-the-art Models", "Comprehensive Tools", "Advanced Research", "Diverse Applications", "User Friendly", "Active Community"]
        },
        icon: "fas fa-layer-group",
        github: "https://github.com/open-mmlab",
        website: "https://openmmlab.com/",
        language: "Python",
        stars: "25k+"
    }
];

// Current language state
let currentLanguage = 'ar';
let currentTheme = 'light';
let filteredTools = [...tools];

// DOM Elements
const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const langToggle = document.querySelector('.language-toggle');
const themeToggle = document.querySelector('.theme-toggle');

// Initialize the application
function init() {
    renderTools();
    setupEventListeners();
    updateLanguage();
    loadTheme();
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Filter functionality
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => handleFilter(btn.dataset.filter));
    });
    
    // Language toggle
    langToggle.addEventListener('click', toggleLanguage);
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
}

// Render tools to the grid
function renderTools() {
    if (filteredTools.length === 0) {
        toolsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 1rem;"></i>
                <p data-ar="لم يتم العثور على أدوات مطابقة" data-en="No matching tools found" style="color: var(--text-secondary); font-size: 1.125rem;">
                    ${currentLanguage === 'ar' ? 'لم يتم العثور على أدوات مطابقة' : 'No matching tools found'}
                </p>
            </div>
        `;
        return;
    }
    
    toolsGrid.innerHTML = filteredTools.map(tool => createToolCard(tool)).join('');
}

// Create a tool card HTML
function createToolCard(tool) {
    const description = tool.description[currentLanguage];
    const features = tool.features[currentLanguage];
    
    return `
        <div class="tool-card" data-category="${tool.category}">
            <div class="tool-header">
                <div class="tool-icon">
                    <i class="${tool.icon}"></i>
                </div>
                <div class="tool-title">
                    <h3>${tool.name}</h3>
                    <span class="tool-category" data-ar="${getCategoryName(tool.category, 'ar')}" data-en="${getCategoryName(tool.category, 'en')}">
                        ${getCategoryName(tool.category, currentLanguage)}
                    </span>
                </div>
            </div>
            
            <p class="tool-description">${description}</p>
            
            <div class="tool-features">
                <h4 data-ar="الميزات الرئيسية" data-en="Key Features">
                    ${currentLanguage === 'ar' ? 'الميزات الرئيسية' : 'Key Features'}
                </h4>
                <div class="feature-tags">
                    ${features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
            </div>
            
            <div class="tool-links">
                <a href="${tool.github}" target="_blank" class="tool-link primary">
                    <i class="fab fa-github"></i>
                    <span data-ar="كود المصدر" data-en="Source Code">
                        ${currentLanguage === 'ar' ? 'كود المصدر' : 'Source Code'}
                    </span>
                </a>
                <a href="${tool.website}" target="_blank" class="tool-link secondary">
                    <i class="fas fa-external-link-alt"></i>
                    <span data-ar="الموقع الرسمي" data-en="Website">
                        ${currentLanguage === 'ar' ? 'الموقع الرسمي' : 'Website'}
                    </span>
                </a>
            </div>
        </div>
    `;
}

// Get category name in specified language
function getCategoryName(category, lang) {
    const categories = {
        'computer-vision': {
            ar: 'رؤية حاسوبية',
            en: 'Computer Vision'
        },
        'deep-learning': {
            ar: 'التعلم العميق',
            en: 'Deep Learning'
        },
        'detection': {
            ar: 'كشف الأجسام',
            en: 'Object Detection'
        },
        'processing': {
            ar: 'معالجة الصور',
            en: 'Image Processing'
        }
    };
    
    return categories[category]?.[lang] || category;
}

// Handle search functionality
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query === '') {
        filteredTools = [...tools];
    } else {
        filteredTools = tools.filter(tool => {
            const name = tool.name.toLowerCase();
            const description = tool.description[currentLanguage].toLowerCase();
            const features = tool.features[currentLanguage].join(' ').toLowerCase();
            const category = getCategoryName(tool.category, currentLanguage).toLowerCase();
            
            return name.includes(query) || 
                   description.includes(query) || 
                   features.includes(query) ||
                   category.includes(query);
        });
    }
    
    // Apply current filter
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    if (activeFilter !== 'all') {
        filteredTools = filteredTools.filter(tool => tool.category === activeFilter);
    }
    
    renderTools();
}

// Handle filter functionality
function handleFilter(filterType) {
    // Update active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${filterType}"]`).classList.add('active');
    
    // Filter tools
    if (filterType === 'all') {
        filteredTools = [...tools];
    } else {
        filteredTools = tools.filter(tool => tool.category === filterType);
    }
    
    // Apply search if exists
    const query = searchInput.value.toLowerCase().trim();
    if (query !== '') {
        filteredTools = filteredTools.filter(tool => {
            const name = tool.name.toLowerCase();
            const description = tool.description[currentLanguage].toLowerCase();
            const features = tool.features[currentLanguage].join(' ').toLowerCase();
            const category = getCategoryName(tool.category, currentLanguage).toLowerCase();
            
            return name.includes(query) || 
                   description.includes(query) || 
                   features.includes(query) ||
                   category.includes(query);
        });
    }
    
    renderTools();
}

// Toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    updateLanguage();
    renderTools();
    
    // Save language preference
    localStorage.setItem('preferred-language', currentLanguage);
}

// Update language across the site
function updateLanguage() {
    const html = document.documentElement;
    const langText = document.getElementById('lang-text');
    
    if (currentLanguage === 'ar') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        langText.textContent = 'EN';
        searchInput.placeholder = searchInput.dataset.placeholderAr;
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        langText.textContent = 'عر';
        searchInput.placeholder = searchInput.dataset.placeholderEn;
    }
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-ar]').forEach(element => {
        if (currentLanguage === 'ar') {
            element.textContent = element.dataset.ar;
        } else {
            element.textContent = element.dataset.en;
        }
    });
}

// Toggle theme
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    updateTheme();
    
    // Save theme preference
    localStorage.setItem('preferred-theme', currentTheme);
}

// Update theme
function updateTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
    } else {
        body.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-moon';
    }
}

// Load saved preferences
function loadTheme() {
    const savedTheme = localStorage.getItem('preferred-theme');
    const savedLanguage = localStorage.getItem('preferred-language');
    
    if (savedTheme) {
        currentTheme = savedTheme;
        updateTheme();
    }
    
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        updateLanguage();
        renderTools();
    }
}

// Smooth scrolling for anchor links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize the application when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export functions for global access
window.toggleLanguage = toggleLanguage;
window.toggleTheme = toggleTheme;
window.smoothScroll = smoothScroll;

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    // Observe lazy images when they are added to the DOM
    const observeLazyImages = () => {
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    };
    
    // Call after initial render and when new content is added
    setTimeout(observeLazyImages, 100);
}

// Add loading states for better UX
function showLoading() {
    toolsGrid.innerHTML = '<div class="loading"></div>';
}

function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

// Error handling for network requests
function handleError(error) {
    console.error('Application Error:', error);
    
    // Show user-friendly error message
    toolsGrid.innerHTML = `
        <div class="error-message" style="text-align: center; padding: 3rem; color: var(--text-secondary);">
            <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem; color: var(--accent-color);"></i>
            <p style="font-size: 1.125rem;">
                ${currentLanguage === 'ar' ? 'حدث خطأ في تحميل البيانات' : 'An error occurred while loading data'}
            </p>
            <button onclick="location.reload()" class="tool-link primary" style="margin-top: 1rem; display: inline-flex;">
                ${currentLanguage === 'ar' ? 'إعادة المحاولة' : 'Try Again'}
            </button>
        </div>
    `;
}

// Service Worker registration for offline support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}