/**
 * GET POSITION OF INPUT CURSOR
 * @param {*} ctrl 
 */
function getCursorsPosition (ctrl) {
    if (!ctrl) {
        return 0
    }
    
    var  CaretPos = 0;
    if (document.selection) {
        // IE Support
        ctrl.focus()
        var Sel = document.selection.createRange()
        Sel.moveStart('character', -ctrl.value.length)
        CaretPos = Sel.text.length
    } else if (ctrl.selectionStart || ctrl.selectionStart === '0') {
        //  Firefox support
        CaretPos = ctrl.selectionStart
    }
    return CaretPos
}

var timer = null

/**
 * SET POSITION OF INPUT CURSOR
 * @param {*} ctrl 
 * @param {*} pos 
 */
function setCursorsPosition (ctrl, pos) {
    if (!ctrl) {
        return
    }

    if (timer) {
        clearTimeout(timer)
    }

    timer = setTimeout(() => {
        if (ctrl.setSelectionRange) {
            ctrl.focus()
            ctrl.setSelectionRange(pos, pos)
        } else if (ctrl.createTextRange) {
            var range = ctrl.createTextRange()
            range.collapse(true)
            range.moveEnd('character', pos)
            range.moveStart('character', pos)
            range.select()
        }
    }, 50)
}