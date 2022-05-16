/**********************************************************************
 *
 * link.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"kWHtml/impl/elmt/a/obj",
		"kWStat/validate"
	],
	function
	(
		a,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function link() 
		{
			//console.log("link::constructor");
			
			this.m_sKWExt			= "link";
			
			this.m_bIsClickHandled	= false;	
		}

		link.prototype = new a();
		link.prototype.constructor = link;
		link.constructor = a.prototype.constructor;
		
		link.prototype.check = 
			function check()
		{
			a.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		link.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			a.prototype.init.call(this);
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
		
		link.prototype.aInitOR = function()
		{
			this.linkInit();
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

		link.prototype.linkInit = 
			function linkInit() 
		{
			//console.log(this.kWLogCalled());
		};

		return link;
		
	}
		
)