/**********************************************************************
 *
 * all.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"widgets/filter/obj",
		"kWStat/validate"
	],
	function
	(
		filter,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initiafilterzors
	//***
	//*******************************************************************//

		function all()
		{
			this.m_sKWExt	= "all";
		}

		all.prototype = new filter();
		all.prototype.constructor = all;
		all.constructor = filter.prototype.constructor;
		
		all.prototype.check = function check()
		{
			filter.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		all.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			filter.prototype.init.call(this);
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
		
	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		return all;
		
	}
)		