/**********************************************************************
 *
 * links.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"./archLink/obj",
		"./archTitle/obj",
		"kWHtml/impl/elmt/span/obj",
		"kWStat/validate"
	],
	function
	(
		link,
		title,
		span,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function links() 
		{
			//console.log("links::constructor");
			this.m_sKWExt	= "links";
			
			this.m_link		= null;
			this.m_title	= null;
		}

		links.prototype = new span();
		links.prototype.constructor = links;
		links.constructor = span.prototype.constructor;
		
		links.prototype.check = 
			function check()
		{
			span.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		links.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			span.prototype.init.call(this);
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
		
		links.prototype.spanInitOR = function()
		{
			this.linksInit();
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

		links.prototype.linksCreateLink = 
			function linksCreateLink() 
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

		links.prototype.linksCreateTitle = 
			function linksCreateTitle() 
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

		links.prototype.linksInit = 
			function linksInit() 
		{
			//console.log(this.kWLogCalled());
			this.linksCreateTitle();
			this.linksCreateLink();
		};

		return links;
		
	}
		
)