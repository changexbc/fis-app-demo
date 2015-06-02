
$('.js_get-verify-code').on('click',function(){
    // console.log(1)
    if(!$(this).hasClass('waiting')){
        var _self = $(this)
        var _text = _self.text()
        var _autotime
        var _time = 30
        _self.addClass('waiting')
        timeGo()
        _autotime = setInterval(function(){
            timeGo()
        },1000)

        function timeGo(){
            _time = _time - 1;
            _self.text('重新发送('+_time+')')
            if(_time == 0){
                clearInterval(_autotime)
                _time = 30
                _self.removeClass('waiting')
                _self.text(_text)
            }
        }

    }
})
