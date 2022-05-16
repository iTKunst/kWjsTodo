/**********************************************************************
 *
 * persistImpl/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"./bcImpl/obj",
		"./cookieImpl/obj",
		"./filter/obj",
		"./items/obj",
		"stat/globals",
		"kWApp/persist/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
        breadCrumbs,
        cookie,
		filter,
		items,
 		globals,
		persist,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function persistImpl() 
		{
			//console.log("persistImpl::constructor");
			this.m_items		= null;
			this.m_filter	= null;
		}

		persistImpl.prototype = new persist();
		persistImpl.prototype.constructor = persistImpl;
		persistImpl.constructor = persist.prototype.constructor;
		
		persistImpl.prototype.check = 
			function check()
		{
			persist.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		persistImpl.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			persist.prototype.init.call(this);
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
		
		persistImpl.prototype.persistCreateBCOR = function()
		{
			return this.piCreateBC();
		};

		persistImpl.prototype.persistCreateCookieOR = function()
		{
			return this.piCreateCookie();
		};

		persistImpl.prototype.persistInitOR = function()
		{
			this.piInit();
		};

		persistImpl.prototype.persistPackStateOR = function()
		{
			this.piPackState();
		};

		persistImpl.prototype.persistUnPackStateOR = function()
		{
			this.piUnPackState();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		persistImpl.prototype.piCreateBC = 
			function piCreateBC() 
		{
			////console.log(this.kWLogCalled());
			return new breadCrumbs();
        };
        
		persistImpl.prototype.piCreateCookie = 
			function piCreateCookie() 
		{
			////console.log(this.kWLogCalled());
			return new cookie();
        };
        
		persistImpl.prototype.piCreateFilter = 
			function piCreateFilter() 
		{
			////console.log(this.kWLogCalled());

			if (this.m_filter)
			{
				console.error(this.kWLogRepeated());
			}

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			} 
			
			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			} 
			
			this.m_filter = new filter();
			
			this.m_filter.setKWIDParent(this.m_sKWID);
			this.m_filter.setKWViewParent(this.m_kWView);
			
			this.m_filter.check();
			this.m_filter.init();

			this.kWAddChild(this.m_filter);
		};
		
		persistImpl.prototype.piCreateItems = 
			function piCreateItems() 
		{
			////console.log(this.kWLogCalled());

			if (this.m_items)
			{
				console.error(this.kWLogRepeated());
			}

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			} 
			
			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			} 
			
			this.m_items = new items();
			
			this.m_items.setKWIDParent(this.m_sKWID);
			this.m_items.setKWViewParent(this.m_kWView);
			
			this.m_items.check();
			this.m_items.init();

			this.kWAddChild(this.m_items);
		};
		
		persistImpl.prototype.piInit =
			function piInit() 
		{
			//console.log(this.kWLogCalled());
			
			this.piCreateItems();
			this.piCreateFilter();
		};

		persistImpl.prototype.piPackFilter = 
			function piPackFilter() 
		{
            var nFilter = -1;
            
			////console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_state))
			{
				console.error(this.kWLogInvalid("m_state"));
			}

			if (!validate.isNotNull(globals))
			{
				console.error(this.kWLogInvalid("globals"));
			}

			if (!validate.isNotNull(globals.filter))
			{
				console.error(this.kWLogInvalid("gFilter"));
			}

			nFilter = globals.filter.get();
			if (!validate.isNumberNotNeg(nFilter))
			{
				console.error(this.kWLogErrRetrieve("nFilter"));
			}
			//console.debug(this.kWLogDisplay("nFilter", nFilter));
		
			this.m_state["filter"] = nFilter;
		};
		
		persistImpl.prototype.piPackItems = 
			function piPackItems() 
		{
			var sItems = null;
			
			////console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_state))
			{
				console.error(this.kWLogInvalid("m_state"));
			}

			if (!validate.isNotNull(globals))
			{
				console.error(this.kWLogInvalid("globals"));
			}

			if (!validate.isNotNull(globals.items))
			{
				console.error(this.kWLogInvalid("items"));
			}

			sItems = globals.items.toString();
			if (!validate.isString(sItems))
			{
				//console.error(this.kWLogErrRetrieve("sItems"));
			}
			
            //console.debug(this.kWLogDisplay("sItems", sItems));
		
			this.m_state["items"] = sItems;
		};
		
		persistImpl.prototype.piPackState =
			function piPackState() 
		{
			//console.log(this.kWLogCalled());
			
            this.m_state = {};
            
			this.piPackItems();
            this.piPackFilter();
 		};

		persistImpl.prototype.piUnPackFilter = 
			function piUnPackFilter() 
		{
			var sFilter = null;
            
            var nFilter = -1;
			
			//console.log(this.kWLogCalled());

			if(!validate.isNotNull(this.m_state))
			{
				console.error(this.kWLogInvalid("m_state"));
			}

			if(!validate.isNotNull(globals.filter))
			{
				console.error(this.kWLogInvalid("filter"));
			}

			sFilter = this.m_state["filter"];
            if (!validate.isString(sFilter))
            {
                nFilter = 1;
            }
            else
            {
                nFilter = parseInt(sFilter, 10);
            }
            
            if (!validate.isNumberPos(nFilter))
            {
 				console.error(this.kWLogErrRetrieve("nFilter"));
            }
            
			//console.debug(this.kWLogDisplay("nFilter", nFilter));
            
			globals.filter.set(nFilter);
		};
        
		persistImpl.prototype.piUnPackItems = 
			function piUnPackItems() 
		{
			var sItems = null;
			
			//console.log(this.kWLogCalled());

			if(!validate.isNotNull(this.m_state))
			{
				console.error(this.kWLogInvalid("m_state"));
			}

			if(!validate.isNotNull(globals.items))
			{
				console.error(this.kWLogInvalid("gItems"));
			}

			sItems = this.m_state["items"];
            if (!validate.isString(sItems))
            {
                sItems = "";
            }
            
			//console.debug(this.kWLogDisplay("sItems", sItems));
            
			globals.items.addMultiple(sItems);
		};
        
		persistImpl.prototype.piUnPackState =
			function piUnPackState() 
		{
			//console.log(this.kWLogCalled());
			
            this.piUnPackFilter();
			this.piUnPackItems();
		};

		return persistImpl;
		
	}
)