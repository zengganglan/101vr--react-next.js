// function resetWidth() {

//               // 兼容ie浏览器 document.body.clientWidth
    
//               var baseWidth = document.documentElement.clientWidth || document.body.clientWidth;
    
//               console.log(baseWidth);
    
//               // 默认的设置是375px(ip6)的根元素设为100px, 其他的手机都相对这个进行调整
    
//               document.documentElement.style.fontSize = baseWidth / 320 * 100 + 'px'
    
//           }
    
//           resetWidth();
    
//           window.addEventListener('resize', function () {
    
//               resetWidth();
    
//           })     
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            // 假如640图纸
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
                // fontSize会在body把他设置16px覆盖掉 1rem=100px,换算500px/100=5rem
            }else{
                // 1rem=100 * (clientWidth / 640) + 'px',换算(500px/100)*(clientWidth / 640)rem
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);