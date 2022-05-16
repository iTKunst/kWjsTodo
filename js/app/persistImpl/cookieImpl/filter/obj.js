/**********************************************************************
 *
 * filter/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"kWApp/persist/cookie/num/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		num,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function filter() 
		{
			//console.log("filter::constructor");
            this.m_sKWKey = "filter";
 		}

		filter.prototype = new num();
		filter.prototype.constructor = filter;
		filter.constructor = num.prototype.constructor;
		
		filter.prototype.check = 
			function check()
		{
			num.prototype.check.call(this);
            //console.log(this.kWLogCalled());
		};

		filter.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			num.prototype.init.call(this);
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
		
		filter.prototype.numInitOR = function()
		{
			this.filterInit();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		filter.prototype.filterInit =
			function filterInit() 
		{
			//console.log(this.kWLogCalled());
		};

		return filter;
		
	}
);