/**********************************************************************
 *
 * panelState.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		
		"stat/globals",
        "kWMVC/obj",
		"kWStat/validate"
	],
	function
	(
        globals,
		mvc,
		validate
	)
	{
		
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function panelState()
		{
			//console.log("panelState::constructor")
			
			this.m_sKWExt				= "panelState";
			
			this.m_sKeyPanel			= "panel";

			this.m_sPanel				= null;
			
			this.m_nPanel				= -1;
		}

		panelState.prototype = new mvc();
		panelState.prototype.constructor = panelState;
		panelState.constructor = mvc.prototype.constructor;
		
		panelState.prototype.check = 
			function check()
		{
			mvc.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		
			if(!validate.isString(this.m_sKeyPanel))
			{
				console.error(this.kWLogInvalid("m_sKeyPanel"));
			} 
		};

		panelState.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			mvc.prototype.init.call(this);
		}; 

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		panelState.prototype.getPanel = function()
		{
		   return this.m_nPanel;
		};

		panelState.prototype.setPanel = function(nVal)
		{
		   this.psSetPanel(nVal);
		};

	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
		
		panelState.prototype.mvcInitOR = function()
		{
			this.psInit();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		panelState.prototype.psInit = 
			function psInit()
		{
			//console.log(this.kWLogCalled());
            
			this.psRetrievePanel();
			this.psStorePanel();
		};
		
		panelState.prototype.psPublish = 
			function psPublish()
		{
			//console.log(this.kWLogCalled());

			if(!validate.isString(this.m_sKWTopicPub))
			{
				console.error(this.kWLogInvalid("m_sKWTopicPub"));
			} 
			
			if(!validate.isNumberPos(this.m_nPanel))
			{
				console.error(this.kWLogInvalid(this.m_nPanel));
			} 
			
			//console.log(this.kWLogDisplay("m_sKWTopicPub", this.m_sKWTopicPub));
			
			this.mvcPublish(this.m_sKWTopicPub, this.m_nPanel);
		}; 
		
		panelState.prototype.psRetrievePanel = 
			function psRetrievePanel()
		{
			//console.log(this.kWLogCalled());
	
			if(validate.isString(this.m_sPanel))
			{
				console.error(this.kWLogRepeated());
			} 
			
			if(!validate.isString(this.m_sKeyPanel))
			{
				console.error(this.kWLogInvalid("m_sKeyPanel"));
			} 
			
			this.m_sPanel = this.getKWViewText(this.m_sKeyPanel);
			if(!validate.isString(this.m_sPanel))
			{
				console.error(this.kWLogErrRetrieve("m_sPanel"));
			} 
		};	
			
		panelState.prototype.psSetPanel = 
			function psSetPanel(nPanel)
		{
            var nCurrent = -1;
            
			//console.log(this.kWLogCalled());
	
			if(!validate.isNumberPos(nPanel))
			{
				console.error(this.kWLogInvalid(nPanel));
			} 
            
            nCurrent = this.getPanel();
            if (!validate.isNumberPos(nCurrent))
            {
                console.error(this.kWLogErrRetrieve("nCurrent"));
            }
			
            if (nCurrent === nPanel)
            {
                //return;
            }
            
			this.m_nPanel = nPanel;
			
			this.psPublish();
		};
		
		panelState.prototype.psStorePanel = 
			function psStorePanel()
		{
			//console.log(this.kWLogCalled());
	
			if(validate.isNumberPos(this.m_nPanel))
			{
				console.error(this.kWLogRepeated());
			} 
			
			if(!validate.isString(this.m_sPanel))
			{
				console.error(this.kWLogInvalid("m_sPanel"));
			} 
			
			if(!validate.isNotNull(globals))
			{
				console.error(this.kWLogInvalid("globals"));
			} 
			
			this.m_nPanel = globals[this.m_sPanel];
			if(!validate.isNumberPos(this.m_nPanel))
			{
				console.error(this.kWLogErrRetrieve("m_nPanel"));
			} 
		};
		
		return panelState;
	}
);