/**********************************************************************
 *
 * greatapp.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

//*******************************************************************//
//***																	   
//***		public initializors
//***
//*******************************************************************//

define
(
	[
		"../app/obj",
		"jquery",
		"jQuery/jquery-cookie",
		"jQuery/jquery-pubsub"
	],
	function
	(
		app,
		$
	)
	{

		var start = function()
		{
			$(document).ready
			(
				function() 
				{
					//console.log("document.ready");
					document.main = new app();

					document.main.check();
					document.main.init();
				}
			);
				
			$(window).resize
			(
				function() 
				{
                    if (!document.main)
                    {
                        return;
                    }
					document.main.kWResize();
				}
			);
		}

		return {"start":start};
	}
)