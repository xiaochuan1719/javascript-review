const HtmlEncode = (str) => {
    // 设置 16 进制编码，方便拼接
    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    // 赋值需要转换的HTML
    const preescape = str;
    let escaped = "";
    for (let i = 0; i < preescape.length; i++) {
        // 获取每个位置上的字符
        let p = preescape.charAt(i);
        // 重新编码组装
        escaped = escaped + escapeCharx(p);
    }

    return escaped;
    // HTMLEncode 主要函数
    // original 为每次循环出来的字符
    function escapeCharx(original) {
        // 默认查到这个字符编码
        let found = true;
        // charCodeAt 获取 16 进制字符编码
        const thechar = original.charCodeAt(0);
        switch (thechar) {
            case 10: return "<br/>"; // 新的一行
            case 32: return "&nbsp;"; // space
            case 34: return "&quot;"; // "
            case 38: return "&amp;"; // &
            case 39: return "&#x27;"; // '
            case 47: return "&#x2F;"; // /
            case 60: return "&lt;"; // <
            case 62: return "&gt;"; // >
            case 198: return "&AElig;"; // Æ
            case 193: return "&Aacute;"; // Á
            case 194: return "&Acirc;"; // Â
            case 192: return "&Agrave;"; // À
            case 197: return "&Aring;"; // Å
            case 195: return "&Atilde;"; // Ã
            case 196: return "&Auml;"; // Ä
            case 199: return "&Ccedil;"; // Ç
            case 208: return "&ETH;"; // Ð
            case 201: return "&Eacute;"; // É
            case 202: return "&Ecirc;";
            case 200: return "&Egrave;";
            case 203: return "&Euml;";
            case 205: return "&Iacute;";
            case 206: return "&Icirc;";
            case 204: return "&Igrave;";
            case 207: return "&Iuml;";
            case 209: return "&Ntilde;";
            case 211: return "&Oacute;";
            case 212: return "&Ocirc;";
            case 210: return "&Ograve;";
            case 216: return "&Oslash;";
            case 213: return "&Otilde;";
            case 214: return "&Ouml;";
            case 222: return "&THORN;";
            case 218: return "&Uacute;";
            case 219: return "&Ucirc;";
            case 217: return "&Ugrave;";
            case 220: return "&Uuml;";
            case 221: return "&Yacute;";
            case 225: return "&aacute;";
            case 226: return "&acirc;";
            case 230: return "&aelig;";
            case 224: return "&agrave;";
            case 229: return "&aring;";
            case 227: return "&atilde;";
            case 228: return "&auml;";
            case 231: return "&ccedil;";
            case 233: return "&eacute;";
            case 234: return "&ecirc;";
            case 232: return "&egrave;";
            case 240: return "&eth;";
            case 235: return "&euml;";
            case 237: return "&iacute;";
            case 238: return "&icirc;";
            case 236: return "&igrave;";
            case 239: return "&iuml;";
            case 241: return "&ntilde;";
            case 243: return "&oacute;";
            case 244: return "&ocirc;";
            case 242: return "&ograve;";
            case 248: return "&oslash;";
            case 245: return "&otilde;";
            case 246: return "&ouml;";
            case 223: return "&szlig;";
            case 254: return "&thorn;";
            case 250: return "&uacute;";
            case 251: return "&ucirc;";
            case 249: return "&ugrave;";
            case 252: return "&uuml;";
            case 253: return "&yacute;";
            case 255: return "&yuml;";
            case 162: return "&cent;";
            case '\r': break;
            default: found = false; break;
        }
        if (!found) {
            // 如果和上面内容不匹配且字符编码大于127的话，用unicode(非常严格模式)
            if (thechar > 127) {
                let c = thechar;
                let a4 = c % 16;
                c = Math.floor(c / 16);
                let a3 = c % 16;
                c = Math.floor(c / 16);
                let a2 = c % 16;
                c = Math.floor(c / 16);
                let a1 = c % 16;
                return "&#x" + hex[a1] + hex[a2] + hex[a3] + hex[a4] + ";";
            } else {
                return original;
            }
        }
    }
}

//使用“\”对特殊字符进行转义，除数字字母之外，小于127使用16进制“\xHH”的方式进行编码，大于用unicode（非常严格模式）。
// 大部分代码和上面一样，我就不写注释了
const JavaScriptEncode =  (str) => {
    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    const preescape = str;
    let escaped = "";
    for (let i = 0; i < preescape.length; i++) {
        escaped = escaped + encodeCharx(preescape.charAt(i));
    }
    return escaped;
    // 小于127转换成十六进制
    function changeTo16Hex(charCode) {
        return "\\x" + charCode.charCodeAt(0).toString(16);
    }
    function encodeCharx(original) {
        let found = true;
        const thecharchar = original.charAt(0);
        const thechar = original.charCodeAt(0);
        switch (thecharchar) {
            case '\n': return "\\n"; //newline
            case '\r': return "\\r"; //Carriage return
            case '\'': return "\\'"; 
            case '"': return "\\\"";
            case '\&': return "\\&";
            case '\\': return "\\\\";
            case '\t': return "\\t";
            case '\b': return "\\b";
            case '\f': return "\\f";
            case '/': return "\\x2F";
            case '<': return "\\x3C";
            case '>': return "\\x3E";
            default: found = false;
        }

        if (!found) {
            if (thechar > 47 && thechar < 58) { //数字
                return original;
            }

            if (thechar > 64 && thechar < 91) { //大写字母
                return original;
            }

            if (thechar > 96 && thechar < 123) { //小写字母
                return original;
            }

            if (thechar > 127) { //大于127用unicode
                let c = thechar;
                let a4 = c % 16;
                c = Math.floor(c / 16);
                let a3 = c % 16;
                c = Math.floor(c / 16);
                let a2 = c % 16;
                c = Math.floor(c / 16);
                let a1 = c % 16;
                return "\\u" + hex[a1] + hex[a2] + hex[a3] + hex[a4] + "";
            } else {
                return changeTo16Hex(original);
            }
        }
    }
}
