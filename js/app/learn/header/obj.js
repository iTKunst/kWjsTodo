/**********************************************************************
 *
 * headerImpl.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"./links/obj",
		"./title/obj",
		"stat/globals",
		"kWHtml/impl/elmt/header/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		links,
		title,
		globals,
		header,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function headerImpl() 
		{
			//console.log("headerImpl::constructor");
			
			this.m_sKWExt = "header";
			
			this.m_links	= null;
			this.m_title	= null;
		}

		headerImpl.prototype = new header();
		headerImpl.prototype.constructor = headerImpl;
		headerImpl.constructor = header.prototype.constructor;
		
		headerImpl.prototype.check = 
			function check()
		{
			header.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		headerImpl.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			header.prototype.init.call(this);
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
		
		headerImpl.prototype.headerInitOR = function()
		{
			this.hiInit();
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

		headerImpl.prototype.hiCreateLinks = 
			function hiCreateLinks() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_links)
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
			
			this.m_links = new links();
			
			this.m_links.setKWIDParent(this.m_sKWID);
			this.m_links.setKWViewParent(this.m_kWView);
			this.m_links.setKWParent(this.m_kWDom);
			
			this.m_links.check();
			this.m_links.init();
		};

		headerImpl.prototype.hiCreateTitle = 
			function hiCreateTitle() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_title)
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
			
			this.m_title = new title();
			
			this.m_title.setKWIDParent(this.m_sKWID);
			this.m_title.setKWViewParent(this.m_kWView);
			this.m_title.setKWParent(this.m_kWDom);
			
			this.m_title.check();
			this.m_title.init();
		};

		headerImpl.prototype.hiInit = 
			function hiInit() 
		{
			//console.log(this.kWLogCalled());
			this.hiCreateTitle();
			this.hiCreateLinks();
		};

		return headerImpl;
		
	}
		
)