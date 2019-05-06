/// 看起来不怎么样，动用了两次正则替换，实际速度非常惊人，主要得益于浏览器的内部优化。
/// 一个著名的例子字符串拼接，直接相加比用Array做成的StringBuffer还快。base2类库使用这种实现。
String.prototype.trim = function() {
    return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}