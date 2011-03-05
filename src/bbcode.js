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

/*
 * This is a Javascript Worker to parse BBCode into HTML
 *
 */
 
// Recieve message
self.onmessage = function(event) {
	var r = parseBBCode(event.data); 
	self.postMessage(r);
};


function parseBBCode(str) {
	search = new Array(
		  /\[b\](.*?)\[\/b\]/g,  
		  /\[i\](.*?)\[\/i\]/g,
		  /\[img\](.*?)\[\/img\]/g,
		  /\[url\="?(.*?)"?\](.*?)\[\/url\]/g,
		  /\[quote](.*?)\[\/quote\]/g,
		  /\[list\=(.*?)\](.*?)\[\/list\]/ig,
		  /\[list\]([\s\S]*?)\[\/list\]/ig,
		  /\[\*\]\s?(.*?)\n/g,
		  /\n/g);

	replace = new Array(
		  "<strong>$1</strong>",
		  "<em>$1</em>",
		  "<img src=\"$1\" alt=\"An image\">",
		  "<a href=\"$1\">$2</a>",
		  "<blockquote>$1</blockquote>",
		  "<ol>$2</ol>",
		  "<ul>$1</ul>",
		  "<li>$1</li>",
		  "<br />");

	for (i = 0; i < search.length; i++) {
		str = str.replace(search[i], replace[i]);
	}

	return str;
}

