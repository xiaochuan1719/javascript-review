/// 搞出这个的人已经不是用牛来形容，已是神一样的级别。
/// 它先是把可能的空白符全部列出来，在第一次遍历中砍掉前面的空白，第二次砍掉后面的空白。
/// 全过程只用了indexOf与substring这个专门为处理字符串而生的原生方法，没有使用到正则。
/// 速度快得惊人，估计直逼上内部的二进制实现，并且在IE与火狐（其他浏览器当然也毫无疑问）都有良好的表现。
/// 速度都是零毫秒级别的。
String.prototype.trim = function() {
    var str = this;
    var whitespace = " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
    
    for (var i = 0, len = str.length; i < len; i++) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(i);
            break;
        }
    }

    for (i = str.length - 1; i >= 0; i--) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(0, i + 1);
            break;
        }
    }

    return whitespace.indexOf(str.charAt(0)) === -1 ? str : "";
};
