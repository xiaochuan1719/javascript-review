/// 以截取方式取得空白部分（当然允许中间存在空白符），总共调用了四个原生方法。
/// 设计得非常巧妙，substring以两个数字作为参数。Math.max以两个数字作参数，search则返回一个数字。
/// 速度比上面两个慢一点，但比下面（后续实现）大多数都快。
String.prototype.trim = function() {
    return this.substring( Math.max(this.search(/\S/), 0), this.search(/\S\s*$/) + 1 );
}