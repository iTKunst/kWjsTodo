/**********************************************************************
 *
 * todoapp.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

//*******************************************************************//
//***																	   
//***		public initializors
//***
//*******************************************************************//

define
(
	[
		"./footer/obj",
		"./header/obj",
		"./main/obj",
		"stat/globals",
		"kWHtml/impl/elmt/section/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		footer,
		header,
		main,
		globals,
		section,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function todoapp() 
		{
			//console.log("todoapp::constructor");
			
			this.m_sKWExt = "todoapp";
			
			this.m_footer	= null;
			this.m_header	= null;
			this.m_main		= null;
		}

		todoapp.prototype = new section();
		todoapp.prototype.constructor = todoapp;
		todoapp.constructor = section.prototype.constructor;
		
		todoapp.prototype.check = 
			function check()
		{
			section.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		todoapp.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			section.prototype.init.call(this);
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
		
		todoapp.prototype.sectionInitOR = function()
		{
			this.tdaInit();
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

		todoapp.prototype.tdaCreateFooter = 
			function tdaCreateFooter() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_footer)
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
			
			this.m_footer = new footer();
			
			this.m_footer.setKWIDParent(this.m_sKWID);
			this.m_footer.setKWViewParent(this.m_kWView);
			this.m_footer.setKWParent(this.m_kWDom);
			
			this.m_footer.check();
			this.m_footer.init();
		};

		todoapp.prototype.tdaCreateHeader = 
			function tdaCreateHeader() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_header)
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
			
			this.m_header = new header();
			
			this.m_header.setKWIDParent(this.m_sKWID);
			this.m_header.setKWViewParent(this.m_kWView);
			this.m_header.setKWParent(this.m_kWDom);
			
			this.m_header.check();
			this.m_header.init();
		};

		todoapp.prototype.tdaCreateMain = 
			function tdaCreateMain() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_main)
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
			
			this.m_main = new main();
			
			this.m_main.setKWIDParent(this.m_sKWID);
			this.m_main.setKWViewParent(this.m_kWView);
			this.m_main.setKWParent(this.m_kWDom);
			
			this.m_main.check();
			this.m_main.init();
		};

		todoapp.prototype.tdaInit = 
			function tdaInit() 
		{
			//console.log(this.kWLogCalled());
			this.tdaCreateHeader();
			this.tdaCreateMain();
			this.tdaCreateFooter();
		};

		return todoapp;
		
	}
		
)