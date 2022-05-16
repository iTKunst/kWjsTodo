/**********************************************************************
 *
 * labelTA.js
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

		function labelTA()
		{
			this.m_sClass	= "labelTA";
			this.m_sKWExt	= "labelTA";
		}

		labelTA.prototype = new label();
		labelTA.prototype.constructor = labelTA;
		labelTA.constructor = label.prototype.constructor;
		
		labelTA.prototype.check = function check()
		{
			label.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		labelTA.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			label.prototype.init.call(this);
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
		
		labelTA.prototype.labelInitOR = function()
		{
			this.labelTAInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		labelTA.prototype.labelTAInit = function labelTAInit()
		{
			//console.log(this.kWLogCalled());
		};  
		
		return labelTA;
		
	}
)		