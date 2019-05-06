/// 沿着上面两个的思路进行改进，动用了非捕获分组与字符集合，用?顶替了*，效果非常惊人。
/// 尤其在IE6中，可以用疯狂来形容这次性能的提升，直接秒杀火狐。
String.prototype.trim = function() {
    return this.replace(/^\s*((?:[\S\s]*\S)?)\s*$/, '$1');
}