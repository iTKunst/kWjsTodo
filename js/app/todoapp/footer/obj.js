/**********************************************************************
 *
 * footer.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"./button/obj",
		"./count/obj",
		"./filters/obj",
		"stat/globals",
		"kWHtml/impl/elmt/div/obj",
		"kWStat/validate"
	],
	function
	(
		button,
		count,
		filters,
		globals,
		div,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function footer()
		{
			this.m_sClass	= "footer";
			this.m_sKWExt	= "footer";
			
			this.m_button	= null;
			this.m_count	= null;
			this.m_filters	= null;
		}

		footer.prototype = new div();
		footer.prototype.constructor = footer;
		footer.constructor = div.prototype.constructor;
		
		footer.prototype.check = function check()
		{
			div.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		footer.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			div.prototype.init.call(this);
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
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
		
		footer.prototype.divInitOR = function()
		{
			this.footerInit();
		};

		footer.prototype.mvcHandleCBDefaultOR = function()
		{
			this.footerHandleCBDefault();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		footer.prototype.footerCreateButton = 
			function footerCreateButton() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_button)
			{
			   console.error(this.kWLogRepeated());
			}

			if(!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			} 

			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			} 

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			} 
			
			this.m_button = new button();
			
			this.m_button.setKWIDParent(this.m_sKWID);
			this.m_button.setKWViewParent(this.m_kWView);
			this.m_button.setKWParent(this.m_kWDom);
			
			this.m_button.check();
			this.m_button.init();
		};
		
		footer.prototype.footerCreateCount = 
			function footerCreateCount() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_count)
			{
			   console.error(this.kWLogRepeated());
			}

			if(!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			} 

			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			} 

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			} 
			
			this.m_count = new count();
			
			this.m_count.setKWIDParent(this.m_sKWID);
			this.m_count.setKWViewParent(this.m_kWView);
			this.m_count.setKWParent(this.m_kWDom);
			
			this.m_count.check();
			this.m_count.init();
		};
		
		footer.prototype.footerCreateFilters = 
			function footerCreateFilters() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_filters)
			{
			   console.error(this.kWLogRepeated());
			}

			if(!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			} 

			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			} 

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			} 
			
			this.m_filters = new filters();
			
			this.m_filters.setKWIDParent(this.m_sKWID);
			this.m_filters.setKWViewParent(this.m_kWView);
			this.m_filters.setKWParent(this.m_kWDom);
			
			this.m_filters.check();
			this.m_filters.init();
		};
		
		footer.prototype.footerHandleCBDefault = 
			function footerHandleCBDefault()
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
			
			this.m_nCount = globals.items.getKWLength();
			if (validate.isNumberPos(this.m_nCount))
			{
				//console.debug(this.kWLogDisplay("m_nCount", this.m_nCount));
			}
			
			if (this.m_nCount > 0)
			{
				this.kWShow();
			}
			else
			{
				this.kWHide();
			}
		};  
		
		footer.prototype.footerInit = function footerInit()
		{
			//console.log(this.kWLogCalled());
			this.footerCreateCount();
			this.footerCreateFilters();
			this.footerCreateButton();
		};  
		
		return footer;
		
	}
)		