function testCallback (name, callback) {
    name = 'Hertz';
    !!callback && typeof callback === 'function' && callback();
}

function callbackHandle (name) {
    console.log(`print name: ${name}`);
}

let name = 'Fove';
name && testCallback('Loong', callbackHandle(name));
