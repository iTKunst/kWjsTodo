/**********************************************************************
 *
 * title.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"stat/globals",
		"kWHtml/impl/elmt/h/h3/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		globals,
		h3,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function title() 
		{
			//console.log("title::constructor");
			
			this.m_sKWExt = "title";
		}

		title.prototype = new h3();
		title.prototype.constructor = title;
		title.constructor = h3.prototype.constructor;
		
		title.prototype.check = 
			function check()
		{
			h3.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		title.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			h3.prototype.init.call(this);
		}; 
		
	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		public callbacks
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
		
		title.prototype.h3InitOR = function()
		{
			this.titleInit();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		title.prototype.titleInit = 
			function titleInit() 
		{
			//console.log(this.kWLogCalled());
		};

		return title;
		
	}
		
)