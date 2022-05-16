/**********************************************************************
 *
 * view.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"./itemBtn/obj",
		"./itemCheckBox/obj",
		"./itemLabel/obj",
		"kWHtml/impl/elmt/div/obj",
		"kWStat/validate"
	],
	function
	(
		btn,
		checkbox,
		label,
		div,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function view()
		{
			this.m_sKWClass		= "view";
			this.m_sKWExt		= "view";
			
			this.m_bKWHasModel	= true;
			
			this.m_btn			= null;
			this.m_checkbox		= null;
			this.m_label		= null;
			
			this.m_sItemID		= null;
		}

		view.prototype = new div();
		view.prototype.constructor = view;
		view.constructor = div.prototype.constructor;
		
		view.prototype.check = function check()
		{
			div.prototype.check.call(this);
			//console.log(this.kWLogCalled());

			if (!validate.isString(this.m_sItemID))
			{
				console.error(this.kWLogInvalid("m_sItemID"));
			}
		};

		view.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			div.prototype.init.call(this);
		};  

	//*******************************************************************//
	//***																		
	//***		public accessors
	//***
	//*******************************************************************//

		view.prototype.setItemID = function(sVal)
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

		view.prototype.hideLabel = function()
		{
			this.viewHideLabel();
		};  

	//*******************************************************************//
	//***																		
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		view.prototype.htmlDeleteOR = function()
		{
			this.viewDelete();
		};

		view.prototype.divInitOR = function()
		{
			this.viewInit();
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

		view.prototype.viewCreateBtn = 
			function viewCreateBtn() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_btn)
			{
			   console.error(this.kWLogRepeated());
			}

			if(!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			} 

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sID"));
			} 
			
			if(!validate.isString(this.m_sItemID))
			{
				console.error(this.kWLogInvalid("m_sItemID"));
			} 
			
			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			} 
			
			if(!validate.isNotNull(this.m_kWModel))
			{
				console.error(this.kWLogInvalid("m_kWModel"));
			} 
			
			this.m_btn = new btn();
			
			this.m_btn.setKWIDParent(this.m_sKWID);
			this.m_btn.setItemID(this.m_sItemID);
			this.m_btn.setKWViewParent(this.m_kWView);
			this.m_btn.setKWParent(this.m_kWDom);
			this.m_btn.setKWModel(this.m_kWModel);
			
			this.m_btn.check();
			this.m_btn.init();

			this.kWAddChild(this.m_btn);
		};
		
		view.prototype.viewCreateCheckBox = 
			function viewCreateCheckBox() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_checkbox)
			{
			   console.error(this.kWLogRepeated());
			}

			if(!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			} 

			if(!validate.isNotNull(this.m_kWModel))
			{
				console.error(this.kWLogInvalid("m_kWModel"));
			} 
			
			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			} 
			
			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sID"));
			} 
			
			if(!validate.isString(this.m_sItemID))
			{
				console.error(this.kWLogInvalid("m_sItemID"));
			} 
			
			this.m_checkbox = new checkbox();
			
			this.m_checkbox.setKWIDParent(this.m_sKWID);
			this.m_checkbox.setItemID(this.m_sItemID);
			this.m_checkbox.setKWViewParent(this.m_kWView);
			this.m_checkbox.setKWParent(this.m_kWDom);
			this.m_checkbox.setKWModel(this.m_kWModel);
			
			this.m_checkbox.check();
			this.m_checkbox.init();

			this.kWAddChild(this.m_checkbox);
		};
		
		view.prototype.viewCreateLabel = 
			function viewCreateLabel() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_label)
			{
			   console.error(this.kWLogRepeated());
			}

			if(!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			} 

			if(!validate.isNotNull(this.m_kWModel))
			{
				console.error(this.kWLogInvalid("m_kWModel"));
			} 
			
			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			} 

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sID"));
			} 
			
			if(!validate.isString(this.m_sItemID))
			{
				console.error(this.kWLogInvalid("m_sItemID"));
			} 
			
			this.m_label = new label();
			
			this.m_label.setKWIDParent(this.m_sKWID);
			this.m_label.setItemID(this.m_sItemID);
			this.m_label.setKWViewParent(this.m_kWView);
			this.m_label.setKWParent(this.m_kWDom);
			this.m_label.setKWModel(this.m_kWModel);
			
			this.m_label.check();
			this.m_label.init();

			this.kWAddChild(this.m_label);
		};
		
		view.prototype.viewHideLabel = 
			function viewHideLabel() 
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_label))
			{
				console.error(this.kWLogInvalid("m_label"));
			}

			this.m_label.hide();
		};
		
		view.prototype.viewInit = 
			function viewInit()
		{
			//console.log(this.kWLogCalled());
			
			this.viewCreateBtn();
			this.viewCreateCheckBox();
			this.viewCreateLabel();
		};  
		
		return view;
		
	}
)		