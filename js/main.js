 // 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('企业官网加载完成');
    
    // 平滑滚动
    initSmoothScroll();
    
    // 导航栏效果
    initNavbarEffects();
});

// 平滑滚动功能
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 导航栏效果
function initNavbarEffects() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(37, 99, 235, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = '#2563eb';
            header.style.boxShadow = 'none';
        }
    });
}

// 页面加载完成
window.addEventListener('load', function() {
    console.log('页面完全加载完成');
});