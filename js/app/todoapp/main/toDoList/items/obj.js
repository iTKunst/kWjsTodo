/**********************************************************************
 *
 * items/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"stat/globals",
		"widgets/item/obj",
		"kWHtml/impl/elmt/ul/obj",
		"kWStat/validate"
	],
	function
	(
		globals,
		item,
		ul,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function items()
		{
			this.m_sKWExt	= "items";
		}

		items.prototype = new ul();
		items.prototype.constructor = items;
		items.constructor = ul.prototype.constructor;
		
		items.prototype.check = function check()
		{
			ul.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		items.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			ul.prototype.init.call(this);
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

		items.prototype.htmlDeleteOR = function()
		{
			this.tdlDelete();
		};

		items.prototype.ulInitOR = function()
		{
			this.tdlInit();
		};

		items.prototype.htmlRefreshOR = function()
		{
			this.tdlRefresh();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		items.prototype.tdlDelete =
			function tdlDelete()
		{
			console.log(this.kWLogCalled());
		};
		
		items.prototype.tdlCreateItem =
			function tdlCreateItem(nIndex)
		{
			var model	= null;
			var theItem	= null;
			
			var sID		= null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNumberNotNeg(nIndex))
			{
				console.error(this.kWLogInvalid("nIndex"));
			}
			
			if (!validate.isNotNull(globals))
			{
				console.error(this.kWLogDuplicated("globals"));
			}
			
			if (!validate.isNotNull(globals.items))
			{
				console.error(this.kWLogDuplicated("items"));
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
			
			model = globals.items.getKWValByIndex(nIndex);
			if(!validate.isNotNull(model))
			{
				console.error(this.kWLogErrRetrieve("model"));
			} 
			
			sID = model.getKWID();
			if(!validate.isString(sID))
			{
				console.error(this.kWLogErrRetrieve(sID));
			} 
			
			theItem = new item();
			
			theItem.setKWID(this.m_sKWID + "_item_" + sID);
			theItem.setKWViewParent(this.m_kWView);
			theItem.setKWParent(this.m_kWDom);
			theItem.setKWModel(model);
			
			theItem.check();
			theItem.init();
			
			this.kWAddChild(theItem);
		};  
		
		items.prototype.tdlCreateItems = 
			function tdlCreateItems()
		{
			var nCount	= -1;
			var nIndex	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(globals))
			{
				console.error(this.kWLogDuplicated("globals"));
			}
			
			if (!validate.isNotNull(globals.items))
			{
				console.error(this.kWLogDuplicated("items"));
			}
			
			nCount = globals.items.getKWLength();
			
			for (nIndex=0; nIndex<nCount; nIndex++)
			{
				this.tdlCreateItem(nIndex);
			}
		};  
		
		items.prototype.tdlInit =
			function tdlInit()
		{
			//console.log(this.kWLogCalled());
			
			this.tdlCreateItems();
		};  
		
		return items;
		
	}
)		