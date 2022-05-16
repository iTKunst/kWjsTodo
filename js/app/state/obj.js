/**********************************************************************
 *
 * state.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"./filter/obj",
		"./mapItems/obj",
		"stat/globals",
		"kWMVC/obj",
		"kWStat/validate"
	],
	function
	(
        filter,
		map,
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

		function state()
		{
			this.m_sKWExt	= "state";
			
			this.m_filter	= null;
			this.m_map		= null;
		}

		state.prototype = new mvc();
		state.prototype.constructor = state;
		state.constructor = mvc.prototype.constructor;
		
		state.prototype.check = function check()
		{
			mvc.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		state.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			mvc.prototype.init.call(this);
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
		
		state.prototype.mvcInitOR = function()
		{
			this.stateInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		state.prototype.stateCreateFilter = 
			function stateCreateFilter() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_filter)
			{
			   console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(globals))
			{
			   console.error(this.kWLogInvalid());
			}

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			} 
			
			this.m_filter = new filter();
			
			this.m_filter.setKWIDParent(this.m_sKWID);
			this.m_filter.setKWViewParent(this.m_kWView);
			
			this.m_filter.check();
			this.m_filter.init();
		
			globals.filter = this.m_filter;
		};
        
		state.prototype.stateCreateMap = 
			function stateCreateMap() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_map)
			{
			   console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(globals))
			{
			   console.error(this.kWLogInvalid());
			}

			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			} 

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			} 
			
			this.m_map = new map();
			
			this.m_map.setKWIDParent(this.m_sKWID);
			this.m_map.setKWViewParent(this.m_kWView);
			
			this.m_map.check();
			this.m_map.init();
		
			globals.items = this.m_map;
		};
		
		state.prototype.stateInit = function stateInit()
		{
			//console.log(this.kWLogCalled());
			this.stateCreateFilter();
			this.stateCreateMap();
		};  
		
		return state;
		
	}
)		