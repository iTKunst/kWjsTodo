/**********************************************************************
 *
 * itemBtn.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"stat/globals",
		"kWHtml/impl/elmt/button/simple/obj",
		"kWStat/validate"
	],
	function
	(
		globals,
		button,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function itemBtn()
		{
			this.m_sKWClass		= "itemBtn";
			this.m_sKWExt		= "btn";
			
			this.m_bKWHasModel	= true;
			
			this.m_sItemID		= null;
		}

		itemBtn.prototype = new button();
		itemBtn.prototype.constructor = itemBtn;
		itemBtn.constructor = button.prototype.constructor;
		
		itemBtn.prototype.check = function check()
		{
			button.prototype.check.call(this);
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sItemID))
			{
				console.error(this.kWLogInvalid("m_sItemID"));
			}
		};

		itemBtn.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			button.prototype.init.call(this);
		};  

	//*******************************************************************//
	//***																		
	//***		public accessors
	//***
	//*******************************************************************//

		itemBtn.prototype.setItemID = function(sVal)
		{
			this.m_sItemID = sVal;
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

	//*******************************************************************//
	//***																		
	//***		private methods (non-ovrrides)
	//***
	//*******************************************************************//
		
		itemBtn.prototype.elmtHandleClickOR = function()
		{
			this.ibHandleClick(); 
		};
		
		itemBtn.prototype.simpleInitOR = function()
		{
			this.ibInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		itemBtn.prototype.ibDeleteItem = 
			function ibDeleteItem()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sItemID))
			{
				console.error(this.kWLogInvalid("m_sItemID"));
			}
			
			if (!validate.isNotNull(globals))
			{
				console.error(this.kWLogInvalid("globals"));
			}
			
			if (!validate.isNotNull(globals.items))
			{
				console.error(this.kWLogInvalid("items"));
			}
			
			globals.items.kWRemove(this.m_sItemID);
		};  
		
		itemBtn.prototype.ibInit = 
			function ibInit()
		{
			//console.log(this.kWLogCalled());
		};  
		
		itemBtn.prototype.ibHandleClick = 
			function ibHandleClick()
		{
			//console.log(this.kWLogCalled());
			
			this.ibDeleteItem();
			this.kWPublishDefault();
			
		};  
		
		return itemBtn;
		
	}
)		