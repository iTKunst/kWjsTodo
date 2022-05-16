/**********************************************************************
 *
 * cookieImpl/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
        "./filter/obj",
        "./items/obj",
		"kWApp/persist/cookie/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
        filter,
        items,
        cookie,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function cookieImpl() 
		{
			//console.log("cookieImpl::constructor");
            
            this.m_filter   = null;
            this.m_items    = null;
  		}

		cookieImpl.prototype = new cookie();
		cookieImpl.prototype.constructor = cookieImpl;
		cookieImpl.constructor = cookie.prototype.constructor;
		
		cookieImpl.prototype.check = 
			function check()
		{
			cookie.prototype.check.call(this);
           //console.log(this.kWLogCalled());
		};

		cookieImpl.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			cookie.prototype.init.call(this);
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
		
		cookieImpl.prototype.cookieCreateOR = function()
		{
			this.ciCreate();
		};

		cookieImpl.prototype.cookieInitOR = function()
		{
			this.ciInit();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		cookieImpl.prototype.ciCreate =
			function ciCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.ciCreateFilter();
			this.ciCreateItems();
		};

		cookieImpl.prototype.ciCreateFilter =
			function ciCreateFilter() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_filter))
            {
                //console.error(this.kWLogRepeated());
            }
            
			if (!validate.isNotNull(this.m_kWOptions))
            {
                //console.error(this.kWLogInvalid("m_kWOptions"));
            }
            
 			if (!validate.isString(this.m_sKWID))
            {
                //console.error(this.kWLogInvalid("m_sKWID"));
            }
            
            this.m_filter = new filter();
            
            this.m_filter.setKWID(this.m_sKWID);
            this.m_filter.setKWOptions(this.m_kWOptions);
           
			this.m_filter.check();
			this.m_filter.init();
            
            this.kWAddChild(this.m_filter);
		};

		cookieImpl.prototype.ciCreateItems =
			function ciCreateItems() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_items))
            {
                //console.error(this.kWLogRepeated());
            }
            
			if (!validate.isNotNull(this.m_kWOptions))
            {
                //console.error(this.kWLogInvalid("m_options"));
            }
            
 			if (!validate.isString(this.m_sKWID))
            {
                //console.error(this.kWLogInvalid("m_sKWID"));
            }
            
            this.m_items = new items();
            
            this.m_items.setKWIDParent(this.m_sKWID);
            this.m_items.setKWOptions(this.m_kWOptions);
           
			this.m_items.check();
			this.m_items.init();
            
            this.kWAddChild(this.m_items);
		};

		cookieImpl.prototype.ciInit =
			function ciInit() 
		{
			//console.log(this.kWLogCalled());
		};

 		return cookieImpl;
		
	}
);