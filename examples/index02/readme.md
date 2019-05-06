## 原生JS实现 document.ready 以及和 window.onload 的先后顺序  

### jQuery里面的文档就绪用法
> 在 `jQuery` 里面，我们可以看到两种用法：
> `$(function() {})` 和 `$(document).ready(function() {})` 这两个方法的效果都是一样的，都是在dom文档树加载完之后执行一个函数,（注意，这里面的ready 是 DOM树加载完成，不是onload的页面资源加载完成的）。  

### document.ready 方法
```js
// document 是一个DOM对象，这个对象本身没有 ready 方法，要使用需得自己定义
// 方法一：
document.ready = function(callback) {
    // 兼容 FF,Chrome
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function() {
            document.removeEventListener('DOMContentLoaded', arguments.callee, false);
            callback();
        }, false);
    } 
    // 兼容 IE
    else if (document.attachEvent) {
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState === 'complete') {
                document.detachEvent('onreadystatechange', arguments.callee);
                callback();
            }
        });
    } else if (document.lastChild === document.body) {
        callback();
    }
};


// 方法二：
(function() {
    var ie = !!(window.attachEvent && !window.opera);
    var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
    var fn = [];
    var run = function() { for(var i = 0; i < fn.length; i++) fn[i](); };
    var d = document;
    d.ready = function(f) {
        if (!ie && !wk && d.addEventListener) {
            return d.addEventListener('DOMConentLoaded', f, false);
        }
            
        
        if (fn.push(f) > 1) return;

        if (ie) {
            (function() {
                try ( 
                    d.documentElement.doSroll('left'); 
                    run(); 
                ) catch (err) {
                    setTimeout(arguments.callee, 0);            
                };
            })();
        } else if (wk) {
            var t = setInterval(function() {
                if (/^(loaded|complete)$/.test(d.readyState)) {
                    clearInterval(t);
                    run();
                }
            }, 0);
        }
    };
})();

// 上面两种方法任选其一即可，jQuery 的 ready 方法实现机制与此大同小异

```