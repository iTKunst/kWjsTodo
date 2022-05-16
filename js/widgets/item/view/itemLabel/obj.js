/**********************************************************************
 *
 * itemLabel.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"kWHtml/impl/elmt/label/obj",
		"kWStat/validate"
	],
	function
	(
		label,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function itemLabel()
		{
			this.m_sKWExt		= "label";
			
			this.m_bKWHasModel	= true;
			
			this.m_sItemID		= null;
		}

		itemLabel.prototype = new label();
		itemLabel.prototype.constructor = itemLabel;
		itemLabel.constructor = label.prototype.constructor;
		
		itemLabel.prototype.check = function check()
		{
			label.prototype.check.call(this);
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sItemID))
			{
				console.error(this.kWLogInvalid("m_sItemID"));
			}
		};

		itemLabel.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			label.prototype.init.call(this);
		};  

	//*******************************************************************//
	//***																		
	//***		public accessors
	//***
	//*******************************************************************//

		itemLabel.prototype.setItemID = function(sVal)
		{
			this.m_sItemID = sVal;
		};  

	//*******************************************************************//
	//***																		
	//***		public callbacks
	//***
	//*******************************************************************//
	
		itemLabel.prototype.callbackDoubleClick = function()
		{
			this.ilHandleDoubleClick();
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
		
		itemLabel.prototype.elmtHandleDoubleClickOR = function()
		{
			this.ilHandleDoubleClick();
		};

		itemLabel.prototype.labelInitOR = function()
		{
			this.ilInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		itemLabel.prototype.ilHandleDoubleClick = 
			function ilHandleDoubleClick()
		{
			//console.log(this.kWLogCalled());
			
			this.hide();
			this.ilPublish();
		}; 
		
		itemLabel.prototype.ilInit = 
			function ilInit()
		{
			//console.log(this.kWLogCalled());
			this.kWSubscribeDoubleClick();
		};  
		
		itemLabel.prototype.ilPublish = 
			function ilPublish()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWTopicPub))
			{
				console.error(this.kWLogInvalid("m_sKWTopicPub"));
			}
			
			if (!validate.isString(this.m_sItemID))
			{
				console.error(this.kWLogInvalid("m_sItemID"));
			}
			
			//console.debug(this.logDisplay("m_sKWTopicPub", this.m_sKWTopicPub));
			
			this.publish(this.m_sKWTopicPub, this.m_sItemID);
		};  
		
		return itemLabel;
		
	}
)		