/**********************************************************************
 *
 * header.js
 *
 * author: Titleatrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"./title/obj",
		"./newToDo/obj",
		"kWHtml/impl/elmt/div/obj",
		"kWStat/validate"
	],
	function
	(
		title,
		newToDo,
		div,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function header()
		{
			this.m_sClass	= "header";
			this.m_sKWExt	= "header";
			
			this.m_title	= null;
			this.m_newToDo	= null;
		}

		header.prototype = new div();
		header.prototype.constructor = header;
		header.constructor = div.prototype.constructor;
		
		header.prototype.check = function check()
		{
			div.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		header.prototype.init = function init()
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
	//***		private methods (non-ovrrides)
	//***
	//*******************************************************************//
		
		header.prototype.divInitOR = function()
		{
			this.headerInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		header.prototype.headerCreateNewToDo = 
			function headerCreateNewToDo() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_newToDo)
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
			
			this.m_newToDo = new newToDo();
			
			this.m_newToDo.setKWIDParent(this.m_sKWID);
			this.m_newToDo.setKWViewParent(this.m_kWView);
			this.m_newToDo.setKWParent(this.m_kWDom);
			
			this.m_newToDo.check();
			this.m_newToDo.init();

			this.kWAddChild(this.m_newToDo);
		};
		
		header.prototype.headerCreateTitle = 
			function headerCreateTitle() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_title)
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
			
			this.m_title = new title();
			
			this.m_title.setKWIDParent(this.m_sKWID);
			this.m_title.setKWViewParent(this.m_kWView);
			this.m_title.setKWParent(this.m_kWDom);
			
			this.m_title.check();
			this.m_title.init();

			this.kWAddChild(this.m_title);
		};
		
		header.prototype.headerInit = function headerInit()
		{
			//console.log(this.kWLogCalled());
			this.headerCreateTitle();
			this.headerCreateNewToDo();
		};  
		
		return header;
		
	}
)		