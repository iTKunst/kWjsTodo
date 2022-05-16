/**********************************************************************
 *
 * edit.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"kWHtml/impl/elmt/input/text/obj",
		"kWStat/validate"
	],
	function
	(
		text,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function edit()
		{
			this.m_sKWClass		= "edit";
			this.m_sKWExt		= "edit";
			
			this.m_bKWHasModel	= true;
			this.m_sItemID		= null;
		}

		edit.prototype = new text();
		edit.prototype.constructor = edit;
		edit.constructor = text.prototype.constructor;
		
		edit.prototype.check = function check()
		{
			text.prototype.check.call(this);
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sItemID))
			{
				console.error(this.logInvalid("m_sItemID"));
			}
		};

		edit.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			text.prototype.init.call(this);
		};  

	//*******************************************************************//
	//***																		
	//***		public accessors
	//***
	//*******************************************************************//

		edit.prototype.setItemID = function(sVal)
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

		edit.prototype.htmlDeleteOR = function()
		{
			this.editDelete();
		};

		edit.prototype.textHandleEnterOR = function()
		{
			this.editHandleEnter();
		};

		edit.prototype.textInitOR = function()
		{
			this.editInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		edit.prototype.editHandleEnter = 
			function editHandleEnter()
		{
			//console.log(this.kWLogCalled());
			this.editUpdateValue();
			this.editPublish();
		};  
		
		edit.prototype.editInit = 
			function editInit()
		{
			//console.log(this.kWLogCalled());
			this.editSetValue();
		};  
		
		edit.prototype.editPublish = 
			function editPublish()
		{
			var data = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWTopicPub))
			{
				console.error(this.kWLogInvalid("m_sKWTopicPub"));
			}
			
			data = {};
			
			this.publish(this.m_sKWTopicPub, data);
		};  
		
		edit.prototype.editRetrieveID = 
			function editRetrieveID()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sID))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWModel))
			{
				console.error(this.kWLogInvalid("m_kWModel"));
			}
			
			this.m_sID = this.m_kWModel.getID();
			if (validate.isString(this.m_sID))
			{
				console.error(this.kWLogErrRetrieve("m_sID"));
			}
		};  
		
		edit.prototype.editSetValue = 
			function editSetValue()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_kWValueField))
			{
				console.error(this.kWLogInvalid("m_kWValueField"));
			}
			
			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid("m_kWAttrs"));
			}
			
			this.m_kWAttrs.setKWValue(this.m_kWValueField);
		};  
		
		edit.prototype.editStoreValue = 
			function editStoreValue()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sID))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWModel))
			{
				console.error(this.kWLogInvalid("m_kWModel"));
			}
			
			this.m_sID = this.m_kWModel.getID();
			if (validate.isString(this.m_sID))
			{
				console.error(this.kWLogErrRetrieve("m_sID"));
			}
		};  
		
		edit.prototype.editUpdateValue = 
			function editUpdateValue()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sValue))
			{
				console.error(this.kWLogInvalid("m_sValue"));
			}
			
			if (!validate.isNotNull(this.m_kWModel))
			{
				console.error(this.kWLogInvalid("m_kWModel"));
			}
			
			this.m_kWModel.setValue(this.m_sValue);
		};  
		
		return edit;
		
	}
);		