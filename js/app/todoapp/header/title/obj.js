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
		"kWHtml/impl/elmt/h/h1/obj",
		"kWStat/validate"
	],
	function
	(
		h1,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function title()
		{
			this.m_sClass	= "title";
			this.m_sKWExt	= "title";
		}

		title.prototype = new h1();
		title.prototype.constructor = title;
		title.constructor = h1.prototype.constructor;
		
		title.prototype.check = function check()
		{
			h1.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		title.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			h1.prototype.init.call(this);
		};  

	//*******************************************************************//
	//***																		
	//***		public accessors
	//***
	//*******************************************************************//

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
	//***		private methods (non-ovrrides)
	//***
	//*******************************************************************//
		
		title.prototype.h1InitOR = function()
		{
			this.titleInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		title.prototype.titleInit = function titleInit()
		{
			//console.log(this.kWLogCalled());
		};  
		
		return title;
		
	}
)		