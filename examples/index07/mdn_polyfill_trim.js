/// Running the following code before any other code will create trim() if it's not natively available.
/// MDN上给出的一个 Polyfill trim 方法实现
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    };
}

/// 参考代码
/// https://stackoverflow.com/questions/498970/trim-string-in-javascript
/// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim