/**********************************************************************
 *
 * archLink.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"./link/obj",
		"kWHtml/impl/elmt/p/obj",
		"kWStat/validate"
	],
	function
	(
		link,
		p,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function archLink() 
		{
			//console.log("archLink::constructor");
			this.m_sKWExt = "archLink";
			
			this.m_link	= null;
		}

		archLink.prototype = new p();
		archLink.prototype.constructor = archLink;
		archLink.constructor = p.prototype.constructor;
		
		archLink.prototype.check = 
			function check()
		{
			p.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		archLink.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			p.prototype.init.call(this);
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
		
		archLink.prototype.pInitOR = function()
		{
			this.alInit();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		archLink.prototype.alCreateLink = 
			function alCreateLink() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_link)
			{
			   console.error(this.kWLogRepeated());
			}

			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			} 

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			} 
			
			this.m_link = new link();
			
			this.m_link.setKWIDParent(this.m_sKWID);
			this.m_link.setKWViewParent(this.m_kWView);
			this.m_link.setKWParent(this.m_kWDom);
			
			this.m_link.check();
			this.m_link.init();
		};

		archLink.prototype.alInit = 
			function alInit() 
		{
			//console.log(this.kWLogCalled());
			this.alCreateLink();
		};

		return archLink;
		
	}
		
)