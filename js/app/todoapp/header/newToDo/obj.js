/**********************************************************************
 *
 * newToDo.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"kWHtml/impl/elmt/input/text/obj",
		"stat/globals",
		"kWStat/validate"
	],
	function
	(
		input,
		globals,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function newToDo()
		{
			this.m_sKWExt	= "newToDo";
			
		}

		newToDo.prototype = new input();
		newToDo.prototype.constructor = newToDo;
		newToDo.constructor = input.prototype.constructor;
		
		newToDo.prototype.check = function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		newToDo.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			input.prototype.init.call(this);
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

		newToDo.prototype.textHandleEnterOR =
			function()
		{
			this.ntdHandleEnter();
		};

		newToDo.prototype.textHandleFocusOR =
			function()
		{
			this.ntdHandleFocus();
		};

		newToDo.prototype.textHandleFocusOutOR =
			function()
		{
			this.ntdHandleFocusOut();
		};

		newToDo.prototype.textHandleEnterOR =
			function()
		{
			this.ntdHandleEnter();
		};

		newToDo.prototype.textHandleKeyUpOR =
			function()
		{
			this.ntdHandleKeyUp();
		};

		newToDo.prototype.textInitOR = function()
		{
			this.ntdInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		newToDo.prototype.ntdAddItem = 
			function ntdAddItem()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(globals))
			{
				console.error(this.kWLogInvalid("globals"));
			}
			
			if (!validate.isNotNull(globals.items))
			{
				console.error(this.kWLogInvalid("items"));
			}
			
			if (!validate.isString(this.m_sKWValue))
			{
				console.error(this.kWLogInvalid("m_sKWValue"));
			}
			
			globals.items.addValue(this.m_sKWValue);
		};  
		
		newToDo.prototype.ntdClear = 
			function ntdClear()
		{
			//console.log(this.kWLogCalled());
			this.kWClear();
		};

		newToDo.prototype.ntdHandleEnter =
			function ntdHandleEnter()
		{
			//console.log(this.kWLogCalled());

			this.ntdAddItem();
			this.ntdClear();
		};

		newToDo.prototype.ntdHandleFocus =
			function ntdHandleFocus()
		{
			//console.log(this.kWLogCalled());
		};

		newToDo.prototype.ntdHandleFocusOut =
			function ntdHandleFocusOut()
		{
			//console.log(this.kWLogCalled());
		};

		newToDo.prototype.ntdHandleKeyUp =
			function ntdHandleKeyUp()
		{
			//console.log(this.kWLogCalled());
		};

		newToDo.prototype.ntdInit =
			function ntdInit()
		{
			//console.log(this.kWLogCalled());
		};  
		
		newToDo.prototype.ntdPublish =
			function ntdPublish()
		{
			var data = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sTopicPub))
			{
				console.error(this.kWLogInvalid("m_sTopicPub"));
			}
			
			data = {};
			
			this.publish(this.m_sTopicPub, data);
		};  
		
		return newToDo;
		
	}
)		