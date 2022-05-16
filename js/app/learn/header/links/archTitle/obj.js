/**********************************************************************
 *
 * archTitle.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"kWHtml/impl/elmt/h/h5/obj",
		"kWStat/validate"
	],
	function
	(
		h5,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function archTitle() 
		{
			//console.log("archTitle::constructor");
			this.m_sKWExt = "archTitle";
		}

		archTitle.prototype = new h5();
		archTitle.prototype.constructor = archTitle;
		archTitle.constructor = h5.prototype.constructor;
		
		archTitle.prototype.check = 
			function check()
		{
			h5.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		archTitle.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			h5.prototype.init.call(this);
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
		
		archTitle.prototype.h5InitOR = function()
		{
			this.atInit();
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

		archTitle.prototype.atInit = 
			function atInit() 
		{
			//console.log(this.kWLogCalled());
		};

		return archTitle;
		
	}
		
)