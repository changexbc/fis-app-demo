
function popModal(options) {
    var defaults={
        width:'90%',
        height:null,
        maskclose:true
    }

    this.settings = $.extend({}, defaults, options)
    this.$modal = $(this.settings.modal)
    this.$modal_main = this.$modal.find('.pop-modal__main')
    this.$modal_mask = this.$modal.find('.pop-modal__mask')
    this.$modal_close = this.$modal.find('[data-modal-close]')

}

popModal.prototype.render = function() {
    this._init();
    this.events();
}
popModal.prototype._init = function() {
    this.settings.width && this.$modal_main.width(this.settings.width);
    this.settings.height && this.$modal_main.height(this.settings.height);
    this.open(this.$modal)
}
popModal.prototype.open = function(currentModal) {
    currentModal.css('display','block').height()
    currentModal.addClass('fadeIn')
}
popModal.prototype.close = function(currentModal) {
    currentModal.removeClass('fadeIn');
    currentModal.one('webkitTransitionEnd',function(){
       currentModal.css('display','none')
   })
}
popModal.prototype.events = function() {
    var self = this
    if(self.settings.maskclose){
        self.$modal_mask.on('click.modal.mask',function(){
            self.close(self.$modal)
        })
    }
    if(self.$modal_close.length){
        self.$modal_close.on('click.modal.close',function(){
            self.close(self.$modal)
        })
    }
}


$(document).on('click.modal', '[data-modal]', function() {
    var self = $(this)
    var data = self.data('modal.event')
    var modal = self.data('modal')
    var maskclose = self.data('maskclose')
    var width = self.data('modal-width')
    var height = self.data('modal-height')
    var options = {}

    if(!$(modal).length){
        return
    }

    modal !== undefined && (options.modal = modal)
    maskclose !== undefined  && (options.maskclose = maskclose)
    width !== undefined  && (options.width = width)
    height !== undefined  && (options.height = height)

    console.log(options)
    //缓存实例对象
    if(!data){
        self.data('modal.event', (data = new popModal(options)));
    }

    data.render()
});

module.exports = popModal;
