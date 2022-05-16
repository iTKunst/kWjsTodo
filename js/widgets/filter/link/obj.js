/**********************************************************************
 *
 * link.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"stat/globals",
		"kWHtml/impl/elmt/a/obj",
		"kWStat/validate"
	],
	function
	(
		globals,
		a,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function link()
		{
			this.m_sKWExt		= "link";
			
			this.m_sKeyFilter	= "filter";
			
			this.m_nFilter		= -1;
		}

		link.prototype = new a();
		link.prototype.constructor = link;
		link.constructor = a.prototype.constructor;
		
		link.prototype.check = function check()
		{
			a.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		link.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			a.prototype.init.call(this);
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
		
		link.prototype.aClickOR = function()
		{
			this.linkClick();
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
		
		link.prototype.mvcHandleCBDefaultOR = function()
		{
			this.linkHandleCBDefault();
		};

		link.prototype.aInitOR = function()
		{
			this.linkInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		link.prototype.linkClick = 
			function linkClick()
		{
			//console.log(this.kWLogCalled());
			this.linkSetFilter();
		};  
		
		link.prototype.linkHandleCBDefault = 
			function linkHandleCBDefault()
		{
			//console.log(this.kWLogCalled());
			this.linkSetClass();
		};  
		
		link.prototype.linkInit = 
			function linkInit()
		{
			//console.log(this.kWLogCalled());
			
			this.linkRetrieveFilter();
			this.linkSetClass();
		};  
		
		link.prototype.linkPublish = 
			function linkPublish()
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
		
		link.prototype.linkRetrieveFilter = 
			function linkRetrieveFilter() 
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
		};

		link.prototype.linkSetClass =
			function linkSetClass() 
		{
            var nFilter = -1;
            
			//console.log(this.kWLogCalled());

			if(!validate.isNotNull(globals))
			{
				console.error(this.kWLogInvalid("globals"));
			} 
			
			if (!validate.isNotNull(globals.filter))
			{
				console.error(this.kWLogInvalid("filter"));
			}

			if (!validate.isNumberPos(this.m_nFilter))
			{
				console.error(this.kWLogInvalid("m_nFilter"));
			}
            
            nFilter = globals.filter.get();
			if (!validate.isNumberPos(nFilter))
			{
				console.error(this.kWLogErrRetrieve("nFilter"));
			}
  
			if (this.m_nFilter === nFilter)
			{
				this.setKWClass("selected");
			}
			else
			{
				this.kWClearClass();
			}
		};

		link.prototype.linkSetFilter =
			function linkSetFilter()
			{
				//console.log(this.kWLogCalled());

				if(!validate.isNotNull(globals))
				{
					console.error(this.kWLogInvalid("globals"));
				}

				if (!validate.isNotNull(globals.filter))
				{
					console.error(this.kWLogInvalid("filter"));
				}

				if (!validate.isNumberPos(this.m_nFilter))
				{
					console.error(this.kWLogInvalid("m_nFilter"));
				}

				globals.filter.set(this.m_nFilter);
			};

		return link;
		
	}
);	