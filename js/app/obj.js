/**********************************************************************
 *
 * appToDo.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

//*******************************************************************//
//***																	   
//***		public initializors
//***
//*******************************************************************//

define
(
	[
		"./learn/obj",
		"./persistImpl/obj",
		"./state/obj",
		"./todoapp/obj",
		"stat/globals",
		"kWApp/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
 		learn,
		persist,
		state,
		todoapp,
		globals,
		app,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function appToDo() 
		{
			//console.log("appToDo::constructor");
			
			this.m_sKeyFilter	= "filter";
			
			this.m_learn	    = null;
			this.m_persist		= null;
			this.m_resize	    = null;
			this.m_state		= null;
			this.m_todoapp		= null;
			
			this.m_nFilter		= -1;
		}

		appToDo.prototype = new app();
		appToDo.prototype.constructor = appToDo;
		appToDo.constructor = app.prototype.constructor;
		
		appToDo.prototype.check = 
			function check()
		{
			app.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKeyFilter))
			{
				console.error(this.kWLogInvalid("m_sKeyFilter"));
			}
		};

		appToDo.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			app.prototype.init.call(this);
		}; 
		
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
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
		
		appToDo.prototype.appCreatePersistOR  = function()
		{
			return this.atdCreatePersist();
		};

		appToDo.prototype.appCreateStateOR  = function()
		{
			return this.atdCreateState();
		};

		appToDo.prototype.appInitOR = function()
		{
			this.atdInit();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		appToDo.prototype.atdCreateLearn = 
			function atdCreateLearn() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_learn)
			{
			   console.error(this.kWLogRepeated());
			}

			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			} 

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			} 
			
			this.m_learn = new learn();
			
			this.m_learn.setKWIDParent(this.m_sKWID);
			this.m_learn.setKWViewParent(this.m_kWView);
			this.m_learn.setKWParent(this.m_kWDom);
			
			this.m_learn.check();
			this.m_learn.init();

			this.kWAddChild(this.m_learn);
		};

		appToDo.prototype.atdCreatePersist = 
			function atdCreatePersist() 
		{
			//console.log(this.kWLogCalled());
			return new persist();
		};
		
		appToDo.prototype.atdCreateState =
			function atdCreateState() 
		{
			//console.log(this.kWLogCalled());

			return new state();
		};

		appToDo.prototype.atdCreateToDoApp = 
			function atdCreateToDoApp() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_todoapp)
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
			
			this.m_todoapp = new todoapp();
			
			this.m_todoapp.setKWIDParent(this.m_sKWID);
			this.m_todoapp.setKWViewParent(this.m_kWView);
			this.m_todoapp.setKWParent(this.m_kWDom);
			
			this.m_todoapp.check();
			this.m_todoapp.init();

			this.kWAddChild(this.m_todoapp);
		};

		appToDo.prototype.atdInit = 
			function atdInit() 
		{
			//console.log(this.kWLogCalled());
            
			this.atdCreateState();
			this.atdRetrieveFilter();
			this.atdCreateLearn();
			this.atdCreateToDoApp();
		};

		appToDo.prototype.atdRetrieveFilter = 
			function atdRetrieveFilter() 
		{
			
			var sVal = null;
			
			var nVal = -1;
			
			//console.log(this.kWLogCalled());

			if(!validate.isNotNull(globals))
			{
				console.error(this.kWLogInvalid("globals"));
			} 
			
			if (validate.isNumberPos(this.m_nFilter))
			{
			   console.error(this.kWLogRepeated());
			}

			if(!validate.isString(this.m_sKeyFilter))
			{
				console.error(this.kWLogInvalid("m_sKeyFilter"));
			} 

			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			} 
			
			sVal = this.m_kWView.getKWAsText(this.m_sKeyFilter);
			if (!validate.isString(sVal))
			{
				console.error(this.kWLogErrRetrieve("sVal"));
			}
			
			nVal = globals[sVal];
			if (!validate.isNumberPos(nVal))
			{
				console.error(this.kWLogErrRetrieve("nVal"));
			}
			
			this.m_nFilter = nVal;
			
			globals.gnFilter = nVal;
		};

		return appToDo;
		
	}
		
)