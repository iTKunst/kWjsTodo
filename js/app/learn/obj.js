/**********************************************************************
 *
 * learn.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"./header/obj",
		"stat/globals",
		"kWHtml/impl/elmt/aside/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		header,
		globals,
		aside,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function learn() 
		{
			//console.log("learn::constructor");
			
			this.m_sKWExt	= "learn";
			
			this.m_header	= null;
			this.m_resize   = null;
			this.m_header	= null;
		}

		learn.prototype = new aside();
		learn.prototype.constructor = learn;
		learn.constructor = aside.prototype.constructor;
		
		learn.prototype.check = 
			function check()
		{
			aside.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		learn.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			aside.prototype.init.call(this);
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
		
		learn.prototype.asideInitOR = function()
		{
			this.learnInit();
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

		learn.prototype.learnCreateHeader = 
			function learnCreateHeader() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_header)
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
			
			this.m_header = new header();
			
			this.m_header.setKWIDParent(this.m_sKWID);
			this.m_header.setKWViewParent(this.m_kWView);
			this.m_header.setKWParent(this.m_kWDom);
			
			this.m_header.check();
			this.m_header.init();
		};

		learn.prototype.learnInit = 
			function learnInit() 
		{
			//console.log(this.kWLogCalled());
			this.learnCreateHeader();
		};

		return learn;
		
	}
		
)