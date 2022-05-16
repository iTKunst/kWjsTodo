/**********************************************************************
 *
 * btn.js
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
		simple,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function btn()
		{
			this.m_sKWExt			= "btn";
			
			this.m_sKKCompleted		= "keyCompleted";

			this.m_sCompleted		= null;	
			this.m_sKeyCompleted	= null;
			
			this.m_sText			= null;
			
			this.m_nCount			= -1;
		}

		btn.prototype = new simple();
		btn.prototype.constructor = btn;
		btn.constructor = simple.prototype.constructor;
		
		btn.prototype.check = function check()
		{
			simple.prototype.check.call(this);
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKKCompleted))
			{
				console.error(this.kWLogInvalid("m_sKKCompleted"));
			}
			
		};

		btn.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			simple.prototype.init.call(this);
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
		
		btn.prototype.elmtHandleClickOR = function()
		{
			this.btnHandleClick(); 
		};
		
		btn.prototype.mvcHandleCBDefaultOR = function()
		{
			this.btnHandleCBDefault();
		};

		btn.prototype.simpleInitOR = function()
		{
			this.btnInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		btn.prototype.btnDeleteCompleted = 
			function btnDeleteCompleted()
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
			
			globals.items.deleteCompleted();
		};

		btn.prototype.btnDisplay = 
			function btnDisplay()
		{
			//console.log(this.kWLogCalled());
			
			this.btnRetrieveNumber();
			
			this.kWHide();
			if (this.m_nCount <= 0)
			{
				return;
			}
			
			this.kWShow();
			
			this.btnSetHtml();
		};  
		
		btn.prototype.btnHandleClick = 
			function btnHandleClick()
		{
			//console.log(this.kWLogCalled());
			
			this.btnDeleteCompleted();	
			this.kWPublishDefault();
		};  
		
		btn.prototype.btnHandleCBDefault = 
			function btnHandleCBDefault()
		{
			//console.log(this.kWLogCalled());
			this.btnDisplay();	
		};  
		
		btn.prototype.btnInit = 
			function btnInit()
		{
			//console.log(this.kWLogCalled());
			this.btnRetrieveKeyCompleted();	
			this.btnRetrieveCompleted();	
		};  
		
		btn.prototype.btnRetrieveKeyCompleted = 
			function btnRetrieveKeyCompleted()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKeyCompleted))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKKCompleted))
			{
				console.error(this.kWLogInvalid("m_sKKCompleted"));
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			this.m_sKeyCompleted = this.m_kWView.getKWAsText(this.m_sKKCompleted);
			if (!validate.isString(this.m_sKeyCompleted))
			{
				console.error(this.kWLogErrRetrieve("m_sKeyCompleted"));
			}
			
			//console.debug(this.kWLogDisplay("m_sKeyCompleted", this.m_sKeyCompleted));
		};

		btn.prototype.btnRetrieveCompleted = 
			function btnRetrieveCompleted()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sCompleted))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKeyCompleted))
			{
				console.error(this.kWLogInvalid("m_sKeyCompleted"));
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			this.m_sCompleted = this.getKWText(this.m_sKeyCompleted);
			if (!validate.isString(this.m_sCompleted))
			{
				console.error(this.kWLogErrRetrieve("m_sCompleted"));
			}
			
			//console.debug(this.kWLogDisplay("m_sCompleted", this.m_sCompleted));
		};

		btn.prototype.btnRetrieveNumber =
			function btnRetrieveNumber()
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
			
			this.m_nCount = globals.items.getCompletedCount();
			if (validate.isNumberPos(this.m_nCount))
			{
				//console.debug(this.kWLogDisplay("m_nCount", this.m_nCount));
			}
		}; 

		btn.prototype.btnSetHtml= 
			function btnSetHtml()
		{
			var sText = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sCompleted))
			{
				console.error(this.kWLogInvalid("m_sCompleted"));
			}
			
			if (!validate.isNumberPos(this.m_nCount))
			{
				console.error(this.kWLogInvalid("m_nCount"));
			}
			
			sText = this.m_sCompleted;
			
			this.m_sText = sText.replace("?", this.m_nCount);
			
			this.setKWHtml(this.m_sText);
		};  
		
		return btn;
		
	}
)		