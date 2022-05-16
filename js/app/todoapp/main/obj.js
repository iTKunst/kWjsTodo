/**********************************************************************
 *
 * main.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"./labelTA/obj",
		"./toggleAll/obj",
		"./toDoList/obj",
		"kWHtml/impl/elmt/div/obj",
		"kWStat/validate"
	],
	function
	(
		labelTA,
		toggleAll,
		todoList,
		div,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function main()
		{
			this.m_sClass		= "main";
			this.m_sKWExt		= "main";
			
			this.m_toggleAll	= null;
			this.m_labelTA		= null;
			this.m_todoList		= null;
		}

		main.prototype = new div();
		main.prototype.constructor = main;
		main.constructor = div.prototype.constructor;
		
		main.prototype.check = function check()
		{
			div.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		main.prototype.init = function init()
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
		
		main.prototype.divInitOR = function()
		{
			this.mainInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		main.prototype.mainCreateLabelTA = 
			function mainCreateLabelTA() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_labelTA)
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
			
			this.m_labelTA = new labelTA();
			
			this.m_labelTA.setKWIDParent(this.m_sKWID);
			this.m_labelTA.setKWViewParent(this.m_kWView);
			this.m_labelTA.setKWParent(this.m_kWDom);
			
			this.m_labelTA.check();
			this.m_labelTA.init();
		};
		
		main.prototype.mainCreateToggleAll = 
			function mainCreateToggleAll() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_toggleAll)
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
			
			this.m_toggleAll = new toggleAll();
			
			this.m_toggleAll.setKWIDParent(this.m_sKWID);
			this.m_toggleAll.setKWViewParent(this.m_kWView);
			this.m_toggleAll.setKWParent(this.m_kWDom);
			
			this.m_toggleAll.check();
			this.m_toggleAll.init();
		};
		
		main.prototype.mainCreateToDoList = 
			function mainCreateToDoList() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_todoList)
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
			
			this.m_todoList = new todoList();
			
			this.m_todoList.setKWIDParent(this.m_sKWID);
			this.m_todoList.setKWViewParent(this.m_kWView);
			this.m_todoList.setKWParent(this.m_kWDom);
			
			this.m_todoList.check();
			this.m_todoList.init();
		};
		
		main.prototype.mainInit = 
			function mainInit()
		{
			//console.log(this.kWLogCalled());
			this.mainCreateToggleAll();
			this.mainCreateLabelTA();
			this.mainCreateToDoList();
		};  
		
		return main;
		
	}
)		