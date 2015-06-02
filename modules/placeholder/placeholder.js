function PlaceHolder(options) {
    var defaults = {
        container:'.placeholder',
        focusClass:'focus',
        text:'请输入内容'
    }
    this.settings = $.extend({}, defaults, options);
    this.container = $(this.settings.container);
    this.render()
}

PlaceHolder.prototype.render = function() {
    this._init();
}

PlaceHolder.prototype._init = function() {
    var settings = this.settings;
    this.container.each(function(i) {
        var self = $(this)
        var text = self.attr('data-placeholder') || settings.text
        self.blur(function(){
            if(self.val() == ''){
                self.val(text).removeClass(settings.focusClass)
            }
        }).focus(function(){
            if(self.val() == text){
                self.val('').addClass(settings.focusClass)
            }
        })
    })
}
module.exports = PlaceHolder;
