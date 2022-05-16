/**********************************************************************
 *
 * item.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"./edit/obj",
		"./view/obj",
		"stat/globals",
		"kWHtml/impl/elmt/li/obj",
		"kWStat/validate"
	],
	function
	(
		itemEdit,
		itemView,
		globals,
		li,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function item()
		{
			this.m_sKWClass		= "item";
			this.m_sKWExt		= "item";
			
			this.m_bKWHasModel	= true;
			
			this.m_itemEdit		= null;
			this.m_itemView		= null;
			
		}

		item.prototype = new li();
		item.prototype.constructor = item;
		item.constructor = li.prototype.constructor;
		
		item.prototype.check = function check()
		{
			li.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		item.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			li.prototype.init.call(this);
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

		item.prototype.htmlDeleteOR =
			function()
		{
			this.itemDelete();
		};

		item.prototype.liInitOR =
			function()
		{
			this.itemInit();
		};

		item.prototype.mvcHandleCBDefaultOR =
			function(sTopic, sID)
		{
			this.itemHandleCBDefault(sID);
		};

	//*******************************************************************//
	//***																		
	//***		private methods (non-ovrrides)
	//***
	//*******************************************************************//
		
	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		item.prototype.itemCreateEdit = 
			function itemCreateEdit() 
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_itemEdit))
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

			if(!validate.isNotNull(this.m_kWModel))
			{
				console.error(this.kWLogInvalid("m_kWModel"));
			} 

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sID"));
			} 
			
			if(!validate.isString(this.m_kWValueField))
			{
				console.error(this.kWLogInvalid("m_kWValueField"));
			} 
			
			this.m_itemEdit = new itemEdit();
			
			this.m_itemEdit.setKWIDParent(this.m_sKWID);
			this.m_itemEdit.setItemID(this.m_kWValueField);
			this.m_itemEdit.setKWViewParent(this.m_kWView);
			this.m_itemEdit.setKWParent(this.m_kWDom);
			this.m_itemEdit.setKWModel(this.m_kWModel);
			
			this.m_itemEdit.check();
			this.m_itemEdit.init();

			this.kWAddChild(this.m_itemEdit);
		};
		
		item.prototype.itemCreateView = 
			function itemCreateView() 
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_itemView))
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

			if(!validate.isNotNull(this.m_kWModel))
			{
				console.error(this.kWLogInvalid("m_kWModel"));
			} 

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sID"));
			} 
			
			if(!validate.isString(this.m_kWValueField))
			{
				console.error(this.kWLogInvalid("m_kWValueField"));
			} 
			
			this.m_itemView = new itemView();
			
			this.m_itemView.setKWIDParent(this.m_sKWID);
			this.m_itemView.setItemID(this.m_kWValueField);
			this.m_itemView.setKWViewParent(this.m_kWView);
			this.m_itemView.setKWParent(this.m_kWDom);
			this.m_itemView.setKWModel(this.m_kWModel);
			
			this.m_itemView.check();
			this.m_itemView.init();

			this.kWAddChild(this.m_itemView);
		};
		
		item.prototype.itemHandleCBDefault = 
			function itemHandleCBDefault(sID)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(sID))
			{
				console.error(this.kWLogInvalid("sID"));
			}
			
			if (!validate.isString(this.m_kWValueField))
			{
				console.error(this.kWLogInvalid("m_kWValueField"));
			}
			
			if (!validate.isNotNull(this.m_itemView))
			{
				console.error(this.kWLogInvalid("m_itemView"));
			}
			
			if (!validate.isNotNull(this.m_itemEdit))
			{
				console.error(this.kWLogInvalid("m_itemEdit"));
			}
			
			if (sID !== this.m_kWValueField)
			{
				return;
			}
			
			this.m_itemView.hideLabel();
			this.m_itemEdit.show();
			
			this.setClass("editing");
		};  
		
		item.prototype.itemInit = 
			function itemInit()
		{
			//console.log(this.kWLogCalled());

			this.kWEmpty();
			this.itemCreateEdit();
			this.itemCreateView();
			this.itemSetClass();
		};  
		
		item.prototype.itemSetClass = 
			function itemSetClass()
		{
			var sClass  = null;
            
            var nFilter = -1;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWModel))
			{
				console.error(this.kWLogInvalid(m_kWModel));
			}
			
			if (!validate.isNotNull(globals))
			{
				console.error(this.kWLogInvalid(globals));
			}
			
			if (!validate.isNotNull(globals.filter))
			{
				console.error(this.kWLogInvalid(filter));
			}
			
			sClass = "";
			
			if (this.m_kWModel.isCompleted())
			{
				sClass += "completed";
			}
            
            nFilter = globals.filter.get();
			
			switch(nFilter)
			{
				case globals.gnFilterActive:
				{
					if (this.m_kWModel.isCompleted())
					{
						sClass += " hidden";
					}
					break;
				}
				
				case globals.gnFilterAll:
				{
					break;
				}
				
				case globals.gnFilterCompleted:
				{
					if (!this.m_kWModel.isCompleted())
					{
						sClass += " hidden";
					}
					break;
				}
			}
			
			if (validate.isString(sClass))
			{
				this.setKWClass(sClass);
			}
			else
			{
				this.kWClearClass();
			}
		};  
		
		return item;
		
	}
)		