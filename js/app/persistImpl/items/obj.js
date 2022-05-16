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

		function items() 
		{
			//console.log("items::constructor");
			
			this.m_sKWExt	= "items";
		}

		items.prototype = new listener();
		items.prototype.constructor = items;
		items.constructor = listener.prototype.constructor;
		
		return items;
	}
);