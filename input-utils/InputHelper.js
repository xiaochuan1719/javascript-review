$.fn.extend({
    // 银行卡号分段
    bankInput: function () {
        var $this = $(this);
        $this.on('keyup', function (event) {
            var curPos = this.selectionStart;
            var value = this.value;
            var sp = (value.slice(0, curPos).match(/\s/g) || []).length;
            var curVal = this.value =value.replace(/\D/g, '').replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
            var curSp =(curVal.slice(0, curPos).match(/\s/g) || []).length;
            this.selectionEnd = this.selectionStart = curPos + curSp - sp;
        })
    },

    bankInputEx: function () {
        var $this = $(this);
        $this.on('keyup', function (event) {
            this.value = this.value.replace(/\s/g, '').replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
        })
    },

    /**
     * 金额输入，限制m位小数
     * @param m 小数位数
     */
    moneyInputDefault: function (m) {
        var $this = $(this);
        $this.on('keyup', function() {
            var regStrs = [
                ['^0(\\d+)$', '$1'],
                ['[^\\d\\.]+$', ''],
                ['\\.(\\d?)\\.+', '.$1'],
                ['^(\\d+\\.\\d{' + m + '}).+', '$1']
            ];
            for(i = 0; i < regStrs.length; i++) {
                var reg = new RegExp(regStrs[i][0]);
                $this.val( $this.val().replace(reg, regStrs[i][1]) );
            }
            // var reg = $this.val().match(/\d+\.?\d{0,4}/);
            // var value = '';
            // if (reg != null) {
            //     value = reg[0];
            // }
            // $this.val(value);
        }).on('change', function() {
            $this.keypress();
            var value = $this.val();
            /\.$/.test(value) && $this.val(value.substr(0, value.length - 1));
        });
    }
});