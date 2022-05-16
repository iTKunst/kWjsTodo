/**********************************************************************
 *
 * itemCheckBox.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"kWHtml/impl/elmt/input/checkbox/obj",
		"kWStat/validate"
	],
	function
	(
		checkbox,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function itemCheckBox()
		{
			this.m_sKWClass		= "itemCheckBox";
			this.m_sKWExt		= "checkbox";
			
			this.m_bKWHasModel	= true;
			
			this.m_sItemID		= null;
		}

		itemCheckBox.prototype = new checkbox();
		itemCheckBox.prototype.constructor = itemCheckBox;
		itemCheckBox.constructor = checkbox.prototype.constructor;
		
		itemCheckBox.prototype.check = function check()
		{
			checkbox.prototype.check.call(this);
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sItemID))
			{
				console.error(this.kWLogInvalid("m_sItemID"));
			}
		};

		itemCheckBox.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			checkbox.prototype.init.call(this);
		};  

	//*******************************************************************//
	//***																		
	//***		public accessors
	//***
	//*******************************************************************//

		itemCheckBox.prototype.setItemID = function(sVal)
		{
			this.m_sItemID = sVal;
		};  

	//*******************************************************************//
	//***																		
	//***		public callbacks
	//***
	//*******************************************************************//
	
		itemCheckBox.prototype.cbHandleClickOR = function()
		{
			this.icbHandleClick();
		};
		
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
		
		itemCheckBox.prototype.cbInitOR = function()
		{
			this.icbInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		itemCheckBox.prototype.icbHandleClick = 
			function icbHandleClick()
		{
			//console.log(this.kWLogCalled());
			
			this.icbSetStatus();
			this.kWPublishDefault();
		};  
		
		itemCheckBox.prototype.icbInit = 
			function icbInit()
		{
			//console.log(this.kWLogCalled());
			this.icbStoreField();
		};  
		
		itemCheckBox.prototype.icbSetStatus =
			function icbSetStatus()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWModel))
			{
				console.error(this.kWLogInvalid("m_kWModel"));
			}
			
			if (!validate.isBool(this.m_bKWChecked))
			{
				console.error(this.kWLogInvalid("m_bKWChecked"));
			}
			
			if (this.m_bKWChecked)
			{
				this.m_kWModel.setIsCompleted(true);
			}
			else
			{
				this.m_kWModel.setIsCompleted(false);
			}
		};
		
		itemCheckBox.prototype.icbStoreField = 
			function icbStoreField()
		{
			//console.log(this.kWLogCalled());
			
		};  
		
		return itemCheckBox;
		
	}
)		