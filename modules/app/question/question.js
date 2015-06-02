FastClick.attach(document.body);

require('popmodal')
var _ = require('underscore')
var placeHolder = require('placeholder')
var placeholder = new placeHolder()
placeholder.render()

var questiontpl = __inline('./question.tmpl');
var answerstpl = __inline('./answers.tmpl');
var recommendtpl = __inline('./recommend.tmpl');

var questionhtml = questiontpl(window.questionjson.question)
var answershtml = answerstpl({answers:window.questionjson.answers})
var recommendhtml = recommendtpl({recommend:window.questionjson.recommend})
$('.js_question-box').html(questionhtml)
$('.js_answers-box').html(answershtml)
$('.js_recommend-box').html(recommendhtml)
$('.js_question-loading').remove()
$('.hand-question-content').addClass('in')


var $modal_answers = $('#modal-answers')
var $reply = $('.reply')
$modal_answers.on('click','.js_reply-show',function(){
	$reply.addClass('flex').offset()
	$reply.addClass('in')
})
$reply.on('click','.js_reply-close',function(){
	$reply.removeClass('in')
	$reply.one('webkitTransitionEnd',function(){
		$reply.removeClass('flex')
	})
})
