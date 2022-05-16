/**********************************************************************
 *
 * mapItems/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"./item/obj",
		"stat/globals",
		"kWMVC/mapMVC/obj",
		"kWStat/validate"
	],
	function
	(
		item,
		globals,
		mapMVC,
		validate
	)
	{
		
	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function mapItems() 
		{
			//console.log("map constructor");
			
			this.m_sKWExt	= "items";
			
			this.m_nID		= 0;
		}

		mapItems.prototype = new mapMVC();
		mapItems.prototype.constructor = mapItems;
		mapItems.constructor = mapMVC.prototype.constructor;
		
		mapItems.prototype.check = function check()
		{
			mapMVC.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString("m_sKeyIsList"))
			{
				console.error(this.kWLogInvalid("m_sKeyIsList"));
			}
		};

		mapItems.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			mapMVC.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																		
	//***		public accessors
	//***
	//*******************************************************************//

		mapItems.prototype.getCompletedCount = function()
		{
			return this.miGetCompletedCount();
		}; 

		mapItems.prototype.isChecked = function(sID)
		{
			return this.miIsChecked(sID);
		}; 

	//*******************************************************************//
	//***																		
	//***		public methods
	//***
	//*******************************************************************//

		mapItems.prototype.addValue = function(sID, bIsCompleted)
		{
			return this.miAddValue(sID, bIsCompleted);
		}; 

		mapItems.prototype.addFromArray = function(array)
		{
			return this.miAddFromArray(array);
		}; 

		mapItems.prototype.addMultiple = function(sItems)
		{
			return this.miAddMultiple(sItems);
		}; 

		mapItems.prototype.deleteCompleted = function()
		{
			return this.miDeleteCompleted();
		}; 

		mapItems.prototype.markAllComplete = function()
		{
			this.miMarkAllComplete();
		};
		
		mapItems.prototype.toggle = function(sID)
		{
			this.miToggle(sID);
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
		
		mapItems.prototype.mmInitOR = function()
		{
			this.miInit();
		};
		
		mapItems.prototype.mmStoreOR = function()
		{
			this.miStore();
		};
		
	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		mapItems.prototype.miAddFromArray = 
			function miAddFromArray(array)
		{
			var sVal	= null;
			
			var nCount	= -1;
			var nIndex	= -1;
			
			//console.log(this.kWLogCalled());
			
			//console.log(this.kWLogCalled());

			nCount = array.length;
			
			for (nIndex=0; nIndex<nCount; nIndex++)
			{
				sVal = array[nIndex];
				if (!validate.isNotNull(item))
				{
					console.error(this.kWLogErrRetrieve("item"));
				}
				
				this.addValue(sVal);
			}
		};
				
		mapItems.prototype.miAddValue = 
			function miAddValue(sVal, bIsCompleted)
		{
			var item	= null;
			
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				console.error(this.kWLogInvalid("sVal"));
			}

			if (!validate.isBool(bIsCompleted))
			{
				bIsCompleted = false; 
			}

			//console.log(this.kWLogDisplay("sVal", sVal));
			
			item = this.miCreateValue(sVal);
			if (!validate.isNotNull(item))
			{
				console.error(this.kWLogErrCreate("item"));
			}

			sID = item.getKWID();
			if (!validate.isString(sID))
			{
				console.error(this.kWLogErrRetrieve("sID"));
			}
			
			item.setIsCompleted(bIsCompleted);
			
			this.kWAdd(sID, item);
			
			this.mmPublish();
		};

		mapItems.prototype.miAddMultiple = 
			function miAddMultiple(sItems)
		{
			var values			= null;
			
			var nCount			= -1;
			var nIndex			= -1;
			
			var sIsCompleted	= null;
			var sToDo			= null;
			
			var bIsCompleted		= null;
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_map))
			{
				console.error(this.kWLogInvalid("m_map"));
			}

			if (!validate.isString(sItems))
			{
				//console.error(this.kWLogInvalid("sItems"));
			}
            
            this.kWEmpty();

			values = sItems.split("|");
			
			nCount = values.length;
			
			for (nIndex=0; nIndex<nCount; nIndex++)
			{
				sValue = values[nIndex];
				if (!validate.isString(sValue))
				{
					continue;
				}
				
				//console.log(this.kWLogDisplay("sValue", sValue));
				
				sCompleted = sValue.substring(0,1);
				sToDo = sValue.substring(1);
				
				bIsCompleted = true;
				if (sCompleted == "0")
				{
					bIsCompleted = false;
				}
				
				this.kWAddValue(sToDo, bIsCompleted);
			}
		};

		mapItems.prototype.miBuildQuery = 
			function stateBuildQuery() 
		{
			var sRegions = null;
			
			//console.log(this.kWLogCalled());

			sRegions = this.stateToStringRegions();

			this.m_sQuery	= this.m_sectors.getAsStringIDOL() 
							+ "@" 
							+ sRegions 
							+ "@" 
							+ this.m_activities.getAsStringIDOL();

			//console.log(this.kWLogDisplay("m_sQuery", this.m_sQuery));
		};

		mapItems.prototype.miCreateValue = 
			function miCreateValue(sVal)
		{
			var theItem = null;
			
			var sID		= null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(sVal))
			{
				console.error(this.kWLogInvalid("sVal"));
			}
			
			if (!validate.isNotNull(globals))
			{
				console.error(this.kWLogInvalid("globals"));
			}
			
			if (!validate.isNotNull(globals.items))
			{
				console.error(this.kWLogInvalid("items"));
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			this.m_nID = this.m_nID + 1;
			
			if (!validate.isNumberNotNeg(this.m_nID))
			{
				console.error(this.kWLogInvalid("m_nID"));
			}
			
			sID = this.m_nID.toString();
			//console.debug(this.kWLogDisplay("sID", sID));
			
			theItem = new item();
			
			theItem.setKWID(sID);
			theItem.setKWViewParent(this.m_kWView);
			theItem.setValue(sVal);

			theItem.check();
			theItem.init();
			
			return theItem;
		};  
		
		mapItems.prototype.miDeleteCompleted = 
			function miDeleteCompleted()
		{
			var item	= null;
			
			var nCount	= -1;
			var nIndex	= -1;
			
			var temp	= null
			
			//console.log(this.kWLogCalled());
			
			//console.log(this.kWLogCalled());

			nCount = this.getKWLength();
			
			temp = [];
			
			for (nIndex=0; nIndex<nCount; nIndex++)
			{
				item = this.getKWValByIndex(nIndex);
				if (!validate.isNotNull(item))
				{
					console.error(this.kWLogErrRetrieve("item"));
				}
				
				if (!item.isCompleted())
				{
					temp.push(item.getValue());
				}
			}
			
			this.kWEmpty();
			
			this.miAddFromArray(temp);
		};
				
		mapItems.prototype.miGetCompletedCount = 
			function miGetCompletedCount()
		{
			var nCount		= -1;
			var nCompleted	= -1;
			var nIndex		= -1;
			
			var item		= null;
			
			//console.log(this.kWLogCalled());
			
			//console.log(this.kWLogCalled());

			nCount = this.getKWLength();
			
			nCompleted = 0
			
			for (nIndex=0; nIndex<nCount; nIndex++)
			{
				item = this.getKWValByIndex(nIndex);
				if (!validate.isNotNull(item))
				{
					console.error(this.kWLogErrRetrieve("item"));
				}
				
				if (item.isCompleted())
				{
					nCompleted++;
				}
			}
			
			return nCompleted;
		};
				
		mapItems.prototype.miGetQuery = 
			function miGetQuery()
		{
			//console.log(this.kWLogCalled());

			this.miBuildQuery();
			return this.m_sQuery;
		};

		mapItems.prototype.miInit =
			function miInit()
		{
			//console.log(this.kWLogCalled());
		};

		mapItems.prototype.miIsChecked = 
			function miIsChecked(sID)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(sID))
			{
				console.error(this.kWLogInvalid("sID"));
			}
			
			return this.iskWPresent(sID);
		};
		
		mapItems.prototype.miMarkAllComplete = 
			function miMarkAllComplete()
		{
			//console.log(this.kWLogCalled());
			
			var item	= null;
			
			var nCount	= -1;
			var nIndex	= -1;
			
			//console.log(this.kWLogCalled());

			nCount = this.getKWLength();
			
			for (nIndex=0; nIndex<nCount; nIndex++)
			{
				item = this.getKWValByIndex(nIndex);
				if (!validate.isNotNull(item))
				{
					console.error(this.kWLogErrRetrieve("item"));
				}
				
				item.setIsCompleted(true);
			}
		};
				
		mapItems.prototype.miStore = 
			function miStore()
		{
			//console.log(this.kWLogCalled());
		
			if (!validate.isNumberNotNeg(this.m_nID))
			{
				console.error(this.kWLogInvalid("m_nID"));
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			if (!validate.isNotNull(globals))
			{
				console.error(this.kWLogInvalid("globals"));
			}

			globals[this.m_sKWID] = this.m_nID;
		}; 
		
		mapItems.prototype.miToggle = 
			function miToggle(sID) 
		{
			var bIsValid = false;

			//console.log(this.kWLogCalled());

			if (!validate.isString(sID))
			{
				console.error(this.kWLogInvalid("sID"));
			}

			bIsValid = this.isKWPresent(sID);
			if (bIsValid)
			{
				this.remove(sID);
			}
			else
			{
				this.kWAddValue(sID);
			}
		};
		
		mapItems.prototype.miToString = 
			function miToString()
		{
			var sVal	= null;
			
			var nCount	= -1;
			var nIndex	= -1;
			
			//console.log(this.kWLogCalled());
			
			nCount = this.getKWLength();
			
			for (nIndex=0; nIndex<nCount; nIndex++)
			{
				item = this.getKWValByIndex(nIndex);
				if (!validate.isNotNull(item))
				{
					console.error(this.kWLogErrRetrieve("item"));
				}
				
				sVal = item.toString();
				if (!validate.isString(sVal))
				{
					console.error(this.kWLogErrRetrieve("sVal"));
				}
				
				console.debug(this.kWLogDisplay("sVal", sVal));
			}
		};
				
		return mapItems;
		
	}
)