/**********************************************************************
 *
 * globals.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2013 iTKunst Corporation
 *
**********************************************************************/

define
(
	[],
	function()
	{

		function globals()
		{
			// the text file 
			var gText;

		}
        
		globals.gnFilter        = -1;
        
        globals.gnFilterNone    = 1;
        globals.gnFilterAll     = 2;
        globals.gnFilterActive   = 3;
        globals.gnFilterCompleted   = 4;
        
		return globals;


	}
)