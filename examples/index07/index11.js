/// 实现10已经告诉我们普通的原生字符串截取方法是远胜于正则替换，虽然是复杂一点。
/// 但只要正则不过于复杂，我们就可以利用浏览器对正则的优化，改善程序执行效率，如实现8在IE的表现。
/// 我想通常不会有人在项目中应用实现10，因为那个whitespace 实现太长太难记了（当然如果你在打造一个类库，它绝对是首先）。
/// 实现11可谓其改进版，前面部分的空白由正则替换负责砍掉，后面用原生方法处理，效果不逊于原版，但速度都是非常逆天。
String.prototype.trim = function() {
    var str = this,
        str = str.replace(/^\s+/, "");
    for (var i = str.length - 1; i >= 0; i--) {
        if (/\S/.test(str.charAt(i))) {
            str = str.substring(0, i + 1);
            break;
        }
    }
    return str;
};
