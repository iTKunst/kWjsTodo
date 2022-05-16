/**********************************************************************
 *
 * filter.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"kWMVC/listener/obj"
	],
	function
	(
		listener
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function filter()
		{
			this.m_sKWExt	= "filter";
		}

		filter.prototype = new listener();
		filter.prototype.constructor = filter;
		filter.constructor = listener.prototype.constructor;
		
		return filter;
		
	}
);	