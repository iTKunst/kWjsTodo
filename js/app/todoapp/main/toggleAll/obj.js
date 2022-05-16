/**********************************************************************
 *
 * toggleAll.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"stat/globals",
		"kWHtml/impl/elmt/input/checkbox/obj",
		"kWStat/validate"
	],
	function
	(
		globals,
		checkbox,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function toggleAll()
		{
			this.m_sClass	= "toggleAll";
			this.m_sKWExt	= "toggleAll";
		}

		toggleAll.prototype = new checkbox();
		toggleAll.prototype.constructor = toggleAll;
		toggleAll.constructor = checkbox.prototype.constructor;
		
		toggleAll.prototype.check = function check()
		{
			checkbox.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		toggleAll.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			checkbox.prototype.init.call(this);
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
		
		toggleAll.prototype.cbInitOR = function()
		{
			this.taInit();
		};

		toggleAll.prototype.elmtHandleClickOR = function()
		{
			this.taHandleClick(); 
		};
		
	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		toggleAll.prototype.taInit = 
			function taInit()
		{
			//console.log(this.kWLogCalled());
		};  
		
		toggleAll.prototype.taHandleClick = 
			function taHandleClick()
		{
			//console.log(this.kWLogCalled());
			
			this.taMarkAllComplete();
			this.kWPublishDefault();
		};  
		
		toggleAll.prototype.taMarkAllComplete = 
			function taMarkAllComplete()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(globals))
			{
				console.error(this.kWLogInvalid("globals"));
			}
			
			if (!validate.isNotNull(globals.items))
			{
				console.error(this.kWLogInvalid("items"));
			}
			
			globals.items.markAllComplete();
		};  
		
		return toggleAll;
		
	}
)		