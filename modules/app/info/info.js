FastClick.attach(document.body);

var tipTip = require('tiptip')
var tiptip = new tipTip()
// console.log(tiptip)


$('.js_sex-set').on('click',function(){
    var self = $(this)
    self.addClass('active').siblings().removeClass('active')
})

$('.js_info-submit').on('click',function(){
    var self = $(this)
    var name = self.parent().find('.js_name-set')

    if(name.val() == ''){
        name.addClass('error')
        tiptip.open('wrong','昵称不能为空!')
    }
    else{
        name.removeClass('error')
    }
})
