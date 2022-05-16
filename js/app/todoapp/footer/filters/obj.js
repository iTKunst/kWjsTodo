/**********************************************************************
 *
 * filters.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"./active/obj",
		"./all/obj",
		"./completed/obj",
		"kWHtml/impl/elmt/ul/obj",
		"kWStat/validate"
	],
	function
	(
		active,
		all,
		completed,
		ul,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function filters()
		{
			this.m_sKWExt	= "filters";
			
			this.m_active		= null;
			this.m_all			= null;
			this.m_completed	= null;
		}

		filters.prototype = new ul();
		filters.prototype.constructor = filters;
		filters.constructor = ul.prototype.constructor;
		
		filters.prototype.check = function check()
		{
			ul.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		filters.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			ul.prototype.init.call(this);
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
		
		filters.prototype.ulInitOR = function()
		{
			this.filtersInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		filters.prototype.filtersCreateActive = 
			function filtersCreateActive() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_active)
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
			
			this.m_active = new active();
			
			this.m_active.setKWIDParent(this.m_sKWID);
			this.m_active.setKWViewParent(this.m_kWView);
			this.m_active.setKWParent(this.m_kWDom);
			
			this.m_active.check();
			this.m_active.init();
		};
		
		filters.prototype.filtersCreateAll = 
			function filtersCreateAll() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_all)
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
			
			this.m_all = new all();
			
			this.m_all.setKWIDParent(this.m_sKWID);
			this.m_all.setKWViewParent(this.m_kWView);
			this.m_all.setKWParent(this.m_kWDom);
			
			this.m_all.check();
			this.m_all.init();
		};
		
		filters.prototype.filtersCreateCompleted = 
			function filtersCreateCompleted() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_completed)
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
			
			this.m_completed = new completed();
			
			this.m_completed.setKWIDParent(this.m_sKWID);
			this.m_completed.setKWViewParent(this.m_kWView);
			this.m_completed.setKWParent(this.m_kWDom);
			
			this.m_completed.check();
			this.m_completed.init();
		};
		
		filters.prototype.filtersInit = 
			function filtersInit()
		{
			//console.log(this.kWLogCalled());
			this.filtersCreateAll();
			this.filtersCreateActive();
			this.filtersCreateCompleted();
		};  
		
		return filters;
		
	}
)		