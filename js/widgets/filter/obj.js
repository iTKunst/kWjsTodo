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
		"./link/obj",
		"kWHtml/impl/elmt/li/obj",
		"kWStat/validate"
	],
	function
	(
		link,
		li,
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
			this.m_link	= null;
		}

		filter.prototype = new li();
		filter.prototype.constructor = filter;
		filter.constructor = li.prototype.constructor;
		
		filter.prototype.check = function check()
		{
			li.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		filter.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			li.prototype.init.call(this);
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
		
		filter.prototype.liInitOR = function()
		{
			this.filterInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		filter.prototype.filterCreateLink = 
			function filterCreateLink() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_link)
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
				console.error(this.kWLogInvalid("m_sID"));
			} 
			
			this.m_link = new link();
			
			this.m_link.setKWIDParent(this.m_sKWID);
			this.m_link.setKWViewParent(this.m_kWView);
			this.m_link.setKWParent(this.m_kWDom);
			
			this.m_link.check();
			this.m_link.init();
		};
		
		filter.prototype.filterInit = 
			function filterInit()
		{
			//console.log(this.kWLogCalled());
			this.filterCreateLink();
		};  
		
		return filter;
		
	}
);		