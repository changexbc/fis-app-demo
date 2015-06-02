function tipTip(options) {
    var defaults={
        staytime:1800
    }
    this.settings = $.extend({}, defaults, options)
    this.autotime = 0
    this.transitioning = false

	if(!$('.tiptip').length){
		this.tipTip_box = $(
	        '<div class="tiptip">'+
	            '<div class="tiptip__content"></div>'+
	        '</div>'
	    )
	    this.tipTip_content = this.tipTip_box.find('.tiptip__content')
	    $('body').append(this.tipTip_box)
    }


}

tipTip.prototype.close = function() {
	var self = this
	self.transitioning = true
	self.tipTip_box.removeClass('in right wrong')
	self.tipTip_box.one('webkitTransitionEnd',function(){
	    self.tipTip_box.css('display','none')
	})
}
tipTip.prototype.open = function(type,content) {
	var self = this
	clearTimeout(self.autotime)
	self.transitioning && self.tipTip_box.off('webkitTransitionEnd')
	if(type == 'wrong'){
		self.tipTip_box.removeClass('right')

	}
	else if(type == 'right'){
		self.tipTip_box.removeClass('wrong')
	}
	self.tipTip_box.css('display','block').height()
	self.tipTip_box.addClass('in '+type)
	self.tipTip_content.text(content)
	self.autotime = setTimeout(function(){
		self.close()
	},self.settings.staytime)
}
module.exports = tipTip;

