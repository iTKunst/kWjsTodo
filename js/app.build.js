(
	{
		appDir: "../",
		baseUrl: "js/debug",
		dir: "../../webapp-build",

		paths: 
		{
			"jQuery": 'bower_components/jquery/dist',
			"app": '../../js/app',
			"stat": '../../js/stat',
			"widgets": '../../js/widgets',
			"jquery": "require-jquery",
			"kWApp": 'bower_components/kWjs/App',
			"kWHtml": 'bower_components/kWjs/html',
			"kWLog": 'bower_components/kWjs/log',
			"kWMVC": 'bower_components/kWjs/mvc',
			"kWStat": 'bower_components/kWjs/stat',
			"kWUtils": 'bower_components/kWjs/utils'
		},

		modules: 
		[
			{
				name: "main"
			}
		]
	}
)

