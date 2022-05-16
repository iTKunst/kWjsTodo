/**********************************************************************
 *
 * filter.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"stat/globals",
		"kWMVC/obj",
		"kWStat/validate"
	],
	function
	(
		globals,
		mvc,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function filter()
		{
			this.m_sKWExt	= "filter";
            
            this.m_nFilter  = 1;
		}

		filter.prototype = new mvc();
		filter.prototype.constructor = filter;
		filter.constructor = mvc.prototype.constructor;
		
		filter.prototype.check = function check()
		{
			mvc.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		filter.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			mvc.prototype.init.call(this);
		};  

	//*******************************************************************//
	//***																		
	//***		public accessors
	//***
	//*******************************************************************//

		filter.prototype.get =
            function()
		{
			//console.log(this.kWLogCalled());
			return this.m_nFilter;
		};  

		filter.prototype.set =
            function(nVal)
		{
			//console.log(this.kWLogCalled());
			this.filterSetFilter(nVal);
		};  

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
		
		filter.prototype.mvcInitOR = function()
		{
			this.filterInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		filter.prototype.filterInit = function filterInit()
		{
			//console.log(this.kWLogCalled());
		};  
		
		filter.prototype.filterSetFilter =
			function filterSetFilter(nVal) 
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
			   console.error(this.kWLogInvalid("nVal"));
			}

            if (nVal === this.m_nFilter)
            {
                return;
            }
            
			this.m_nFilter = nVal;
            
            this.kWPublishDefault();
		};
		
		return filter;
		
	}
);		