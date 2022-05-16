/**********************************************************************
 *
 * items/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"kWApp/persist/cookie/text/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		text,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function items() 
		{
			//console.log("items::constructor");
            this.m_sKWExt = "items";
			this.m_sKWKey = "items";
 		}

		items.prototype = new text();
		items.prototype.constructor = items;
		items.constructor = text.prototype.constructor;
		
		items.prototype.check = 
			function check()
		{
			text.prototype.check.call(this);
            //console.log(this.kWLogCalled());
		};

		items.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			text.prototype.init.call(this);
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
		
		items.prototype.textInitOR = function()
		{
			this.bcInit();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		items.prototype.bcInit =
			function bcInit() 
		{
			//console.log(this.kWLogCalled());
		};

		return items;
		
	}
);