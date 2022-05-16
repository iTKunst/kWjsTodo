/**********************************************************************
 *
 * main.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

//*******************************************************************//
//***																	   
//***		public initializors
//***
//*******************************************************************//

require
(
	{
		paths:
		{
			jQuery: '../libs/jQuery',
			classes: '../app/classes',
			app: '../app',
			stat: '../stat',
			services: '../services',
			widgets: '../widgets',
			kWApp: '../../bower_components/kWjs/app',
			kWHtml: '../../bower_components/kWjs/html',
			kWLog: '../../bower_components/kWjs/log',
			kWMVC: '../../bower_components/kWjs/mvc',
			kWStat: '../../bower_components/kWjs/stat',
			kWUtils: '../../bower_components/kWjs/utils'
		}
	},
	[
		"./greatapp"
	],
	function
	(
		greatapp
	)
	{
		greatapp.start();
	}
);