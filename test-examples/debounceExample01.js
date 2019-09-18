$('#btn1').on('click', function () {
    console.log('btn1 =>> ', new Date().getTime());
})

$('#btn2').on('click', _.debounce(function() {
    console.log('btn2 =>> ', new Date().getTime());
}, 2000, {
    // 'maxWait': 0,
    'leading': true,
    'trailing': false
}))