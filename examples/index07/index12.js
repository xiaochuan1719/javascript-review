/// 实现10与实现11在写法上更好的改进版，注意说的不是性能速度，而是易记与使用上。
/// 和它的两个前辈都是零毫秒级别的，以后就用这个来工作与吓人。
String.prototype.trim = function() {
    var str = this,
        str = str.replace(/^\s\s*/, ""),
        ws = /\s/,
        i = str.length;
    while (ws.test(str.charAt(--i)));
    return str.slice(0, i + 1);
};
