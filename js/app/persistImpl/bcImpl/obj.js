/**********************************************************************
 *
 * bcImpl/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"stat/globals",
		"kWApp/persist/breadCrumbs/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		globals,
		breadCrumbs,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function bcImpl() 
		{
			//console.log("bcImpl::constructor");
		}

		bcImpl.prototype = new breadCrumbs();
		bcImpl.prototype.constructor = bcImpl;
		bcImpl.constructor = breadCrumbs.prototype.constructor;
		
		bcImpl.prototype.check = 
			function check()
		{
			breadCrumbs.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		bcImpl.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			breadCrumbs.prototype.init.call(this);
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
		
		bcImpl.prototype.bcInitOR = function()
		{
			this.bciInit();
		};

		bcImpl.prototype.bcPackStateOR = function()
		{
			this.bciPackState();
		};

		bcImpl.prototype.bcUnPackStateOR = function()
		{
			this.bciUnPackState();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		bcImpl.prototype.bciInit =
			function bciInit() 
		{
			//console.log(this.kWLogCalled());
		};

		bcImpl.prototype.bciPackState =
			function bciPackState() 
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(globals))
			{
				console.errro(this.kWLogInvalid("globals"));
			}

			if (!validate.isNotNull(globals.items))
			{
				console.error(this.kWLogInvalid("items"));
			}
			
			this.m_sState = globals.items.toString();
		};

		bcImpl.prototype.bciUnPackState =
			function bciUnPackState() 
		{
			//console.log(this.kWLogCalled());
		};

		return bcImpl;
		
	}
);