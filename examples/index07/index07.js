/// 和实现6很相似，但用了非捕获分组进行了优点，性能效之有一点点提升。但与实现5的效率没太大差距
String.prototype.trim = function() {
    return this.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/, '$1');
}
