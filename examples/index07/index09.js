/// 这次是用懒惰匹配顶替非捕获分组，在火狐中得到改善，IE没有上次那么疯狂。
String.prototype.trim = function() {
    return this.replace(/^\s*([\S\s]*?)\s*$/, '$1');
}