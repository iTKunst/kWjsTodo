/**********************************************************************
 *
 * item.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"kWMVC/obj",
		"kWStat/validate"
	],
	function
	(
		mvc,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function item()
		{
			this.m_sKWExt		= "item";
			
			this.m_sValue		= null;
			
			this.m_bIsCompleted	= false;
		}

		item.prototype = new mvc();
		item.prototype.constructor = item;
		item.constructor = mvc.prototype.constructor;
		
		item.prototype.check = function check()
		{
			mvc.prototype.check.call(this);
			//console.mvc(this.mvcCalled());
		};

		item.prototype.init = function init()
		{
			//console.mvc(this.mvcCalled());
			mvc.prototype.init.call(this);
		};  

	//*******************************************************************//
	//***																		
	//***		public accessors
	//***
	//*******************************************************************//

		item.prototype.getValue = function()
		{
			return this.m_sValue;
		};  

		item.prototype.isCompleted = function()
		{
			return this.m_bIsCompleted;
		};  

		item.prototype.setValue = function(sVal)
		{
			this.m_sValue = sVal;
		};  

		item.prototype.setIsCompleted = function(bVal)
		{
			this.m_bIsCompleted = bVal;
		};  

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

		item.prototype.toString = function()
		{
			return this.itemToString();
		};  

	//*******************************************************************//
	//***																		
	//***		private methods (non-ovrrides)
	//***
	//*******************************************************************//

		item.prototype.mvcDeleteOR = function()
		{
			this.itemDelete();
		};

		item.prototype.mvcInitOR = function()
		{
			this.itemInit();
		};

		//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		item.prototype.itemDelete =
			function itemDelete()
		{
			//console.log(this.kWLogCalled());
		};

		item.prototype.itemInit =
			function itemInit()
		{
			//console.log(this.kWLogCalled());
		};

		item.prototype.itemToString =
			function itemToString()
		{
			var sVal = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sValue))
			{
				console.error(this.kWLogInvalid("m_sValue"));
			}
			
			if (this.m_bIsCompleted)
			{
				sVal = "1";
			}
			else
			{
				sVal = "0";
			}
			
			sVal += this.m_sValue;
			
			return sVal;
		};  
		
		
		return item;
		
	}
)		