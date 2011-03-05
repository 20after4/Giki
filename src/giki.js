/*
 * Giki - Dynamic JavaScript parsing library
 *
 *  Copyright (C) 2011  Guy Halford-Thompson
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


function Giki(args) {

	var func = this;

	this.div = document.getElementById(args.div);
	this.text_area = document.getElementById(args.text_area);
	this.parser = typeof args.parser === 'undefined' ? '../src/default.js' : args.parser;

	// Create worker
	this.worker = new Worker(this.parser);

	this.worker.onerror = function(event){
				throw new Error(event.message + " (" + event.filename + ":" + event.lineno + ")");
	};

	// Handle worker response
	this.worker.onmessage = function(event) {
		func.div.innerHTML = event.data;
	}

	// Register events
	this.text_area.onkeyup = function() { func.parse(); };
	
	// Trigger initial parse
	this.parse();
}


Giki.prototype = {

	parse : function() {
		this.worker.postMessage(this.text_area.value);
	}
};
