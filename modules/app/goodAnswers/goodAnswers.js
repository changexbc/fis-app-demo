FastClick.attach(document.body);

var answerstpl = __inline('./answers.tmpl');
var _ = require('underscore')

var answershtml = answerstpl({answers:window.answersjson})
$('.js_answers-loading').remove()
$('.js_answers-box').html(answershtml)
