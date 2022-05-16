/**********************************************************************
 *
 * count.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"stat/globals",
		"kWHtml/impl/elmt/span/obj",
		"kWStat/validate"
	],
	function
	(
		globals,
		span,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function count()
		{
			this.m_sKWExt		= "count";
			
			this.m_sKKMultiple	= "keyMultiple";
			this.m_sKKSingle	= "keySingle";
			
			this.m_sKeyMultiple	= null;
			this.m_sKeySingle	= null;
			this.m_sMultiple	= null;	
			this.m_sSingle		= null;
			
			this.m_sText		= null;
			
			this.m_nCount		= -1;
		}

		count.prototype = new span();
		count.prototype.constructor = count;
		count.constructor = span.prototype.constructor;
		
		count.prototype.check = function check()
		{
			span.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKKMultiple))
			{
				console.error(this.kWLogInvalid("m_sKKMultiple"));
			}
			
			if (!validate.isString(this.m_sKKSingle))
			{
				console.error(this.kWLogInvalid("m_sKKSingle"));
			}
		};

		count.prototype.init = function init()
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
		
		count.prototype.mvcHandleCBDefaultOR = function()
		{
			this.countHandleCBDefault();
		};

		count.prototype.spanInitOR = function()
		{
			this.countInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		count.prototype.countDisplay = 
			function countDisplay()
		{
			//console.log(this.kWLogCalled());
			
			this.countRetrieveNumber();
			
			if (this.m_nCount <= 0)
			{
				return;
			}
			
			this.countSetHtml();
		};  
		
		count.prototype.countHandleCBDefault = 
			function countHandleCBDefault()
		{
			//console.log(this.kWLogCalled());
			this.countDisplay();	
		};  
		
		count.prototype.countInit = 
			function countInit()
		{
			//console.log(this.kWLogCalled());
			this.countRetrieveMultiple();	
			this.countRetrieveSingle();	
		};  
		
		count.prototype.countRetrieveMultiple = 
			function countRetrieveMultiple()
		{
			//console.log(this.kWLogCalled());
			this.countRetrieveMultipleKey();
			this.countRetrieveMultipleText();
		};

		count.prototype.countRetrieveMultipleKey = 
			function countRetrieveMultipleKey()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKeyMultiple))
			{
				console.error(this.m_sKeyMultiple());
			}
			
			if (!validate.isString(this.m_sKKMultiple))
			{
				console.error(this.kWLogInvalid("m_sKKMultiple"));
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			this.m_sKeyMultiple = this.m_kWView.getKWAsText(this.m_sKKMultiple);
			if (!validate.isString(this.m_sKeyMultiple))
			{
				console.error(this.kWLogErrRetrieve("m_sKeyMultiple"));
			}
			
			//console.debug(this.kWLogDisplay("m_sKeyMultiple", this.m_sKeyMultiple));
		};

		count.prototype.countRetrieveMultipleText = 
			function countRetrieveMultipleText()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sMultiple))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKeyMultiple))
			{
				console.error(this.kWLogInvalid("m_sKeyMultiple"));
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			this.m_sMultiple = this.getKWText(this.m_sKeyMultiple);
			if (!validate.isString(this.m_sMultiple))
			{
				console.error(this.kWLogErrRetrieve("m_sMultiple"));
			}
			
			//console.debug(this.kWLogDisplay("m_sMultiple", this.m_sMultiple));
		};

		count.prototype.countRetrieveNumber = 
			function countRetrieveNumber()
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
			
			this.m_nCount = globals.items.getKWLength();
			if (validate.isNumberPos(this.m_nCount))
			{
				//console.debug(this.kWLogDisplay("m_nCount", this.m_nCount));
			}
		}; 
		
		count.prototype.countRetrieveSingle = 
			function countRetrieveSingle()
		{
			//console.log(this.kWLogCalled());
			this.countRetrieveSingleKey();
			this.countRetrieveSingleText();
		};

		count.prototype.countRetrieveSingleKey = 
			function countRetrieveSingleKey()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKeySingle))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKKSingle))
			{
				console.error(this.kWLogInvalid("m_sKKSingle"));
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			this.m_sKeySingle = this.m_kWView.getKWAsText(this.m_sKKSingle);
			if (!validate.isString(this.m_sKeySingle))
			{
				console.error(this.kWLogErrRetrieve("m_sKeySingle"));
			}
			
			//console.debug(this.kWLogDisplay("m_sKeySingle", this.m_sKeySingle));
		};

		count.prototype.countRetrieveSingleText = 
			function countRetrieveSingleText()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sSingle))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKeySingle))
			{
				console.error(this.kWLogInvalid("m_sKeySingle"));
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			this.m_sSingle = this.getKWText(this.m_sKeySingle);
			if (!validate.isString(this.m_sSingle))
			{
				console.error(this.kWLogErrRetrieve("m_sSingle"));
			}
			
			//console.debug(this.kWLogDisplay("m_sSingle", this.m_sSingle));
		};

		count.prototype.countSetHtml= 
			function countSetHtml()
		{
			var sText = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sMultiple))
			{
				console.error(this.kWLogInvalid("m_sMultiple"));
			}
			
			if (!validate.isString(this.m_sSingle))
			{
				console.error(this.kWLogInvalid("m_sSingle"));
			}
			
			if (!validate.isNumberPos(this.m_nCount))
			{
				console.error(this.kWLogInvalid("m_nCount"));
			}
			
			if (this.m_nCount == 1)
			{
				sText = this.m_sSingle;
			}
			else
			{
				sText = this.m_sMultiple;
			}
			
			this.m_sText = sText.replace("?", this.m_nCount);
			
			this.setKWHtml(this.m_sText);
		};  
		
		return count;
		
	}
)		