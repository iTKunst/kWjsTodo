/**********************************************************************
 *
 * toDoList.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"./filter/obj",
		"./items/obj",
		"stat/globals",
		"kWHtml/impl/elmt/div/obj",
		"kWStat/validate"
	],
	function
	(
        filter,
        items,
		globals,
		div,
		validate
	)
	{

	//*******************************************************************//
	//***
	//***		public initializors
	//***
	//*******************************************************************//

		function toDoList()
		{
			this.m_sKWExt	= "toDoList";

			this.m_filter	= null;
			this.m_items	= null;
		}

		toDoList.prototype = new div();
		toDoList.prototype.constructor = toDoList;
		toDoList.constructor = div.prototype.constructor;

		toDoList.prototype.check = function check()
		{
			div.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		toDoList.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			div.prototype.init.call(this);
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

		toDoList.prototype.mvcHandleCBDefaultOR =
			function(sTopic, data)
		{
			this.tdlHandleCBSub(data);
		};

		toDoList.prototype.divInitOR =
			function()
		{
			this.tdlInit();
		};

	//*******************************************************************//
	//***
	//***		private methods
	//***
	//*******************************************************************//

		toDoList.prototype.tdlClear =
			function tdlClear()
		{
			//console.log(this.kWLogCalled());

			this.m_items = null;
			this.kWEmpty();
		};

		toDoList.prototype.tdlCreateFilter = 
			function tdlCreateFilter()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_filter))
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
			
			this.m_filter = new filter();
			
			this.m_filter.setKWID(this.m_sKWID);
			this.m_filter.setKWViewParent(this.m_kWView);
			
			this.m_filter.check();
			this.m_filter.init();
		};  
		
		toDoList.prototype.tdlCreateItems =
			function tdlCreateItems()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_items))
				{
					console.error(this.kWLogRepeated());
				}

				if(!validate.isNotNull(this.m_kWView))
				{
					console.error(this.kWLogInvalid("m_kWView"));
				}

				if(!validate.isDom(this.m_kWDom))
				{
					console.error(this.kWLogInvalid("m_kWDom"));
				}

				if(!validate.isString(this.m_sKWID))
				{
					console.error(this.kWLogInvalid("m_sKWID"));
				}

				this.m_items = new items();

				this.m_items.setKWIDParent(this.m_sKWID);
				this.m_items.setKWParent(this.m_kWDom);
				this.m_items.setKWViewParent(this.m_kWView);

				this.m_items.check();
				this.m_items.init();

				this.kWAddChild(this.m_items);
			};

		toDoList.prototype.tdlHandleCBSub =
			function tdlHandleCBSub()
		{
			//console.log(this.kWLogCalled());

			this.tdlClear();
			this.tdlCreateItems();
		};

		toDoList.prototype.tdlInit =
			function tdlInit()
		{
			//console.log(this.kWLogCalled());

			this.tdlCreateFilter();
			this.tdlCreateItems();
		};

		toDoList.prototype.tdlPublish =
			function tdlPublish()
		{
			var datdl = null;

			//console.log(this.kWLogCalled());

			if (!validate.isString(this.m_sTopicPub))
			{
				console.error(this.kWLogInvalid("m_sTopicPub"));
			}

			data = {};

			this.publish(this.m_sTopicPub, data);
		};

		return toDoList;
		
	}
)		