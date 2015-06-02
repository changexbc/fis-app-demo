FastClick.attach(document.body);

require('popmodal')

var lazyLoad = require('lazyload')
var lazyload = new lazyLoad()

var malltpl = __inline('./mall.tmpl');
var _ = require('underscore')

var mallhtml = malltpl({mall:window.malljson})
$('.js_mall-loading').remove()
$('.js_mall-box').html(mallhtml);

lazyload.render()
