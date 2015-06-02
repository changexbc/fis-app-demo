fis.config.set('pack', {
    'pkg/lib.js': [
        '/view/lib/mod.js',
        '/view/lib/zepto.js',
        // '/view/lib/fastclick.js'
    ]
});

//静态资源域名，使用hand release命令时，添加--domains或-D参数即可生效
// fis.config.set('roadmap.domain', 'http://127.0.0.1:8080');

fis.config.set('settings.optimizer.png-compressor.type', 'pngquant');

fis.config.set('settings.spriter.csssprites',{
	scale: 0.5,
	margin:20,
});

// 如果发布，使用cssprefixer
// if(process.env.USE_CSS_PREFIXER){
    fis.config.set('modules.preprocessor.css', 'cssprefixer');
// }


