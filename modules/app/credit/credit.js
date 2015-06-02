FastClick.attach(document.body);

var tasktpl = __inline('./task.tmpl');
var _ = require('underscore')

var taskhtml = tasktpl(window.taskjson)
$('.js_task-loading').remove()
$('.js_task-box').html(taskhtml)
