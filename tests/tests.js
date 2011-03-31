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
 * Giki Testing Suite
 *
 */


var testCase = new YAHOO.tool.TestCase({

	name : "Giki Test Case",

	setUp : function() {
		this.div = 'giki_div';
		this.textarea = 'giki_ta';
		this.parser = new Giki({'div' : this.div, 'text_area' : this.textarea});
	},

	tearDown : function() {
		delete this.div;
		delete this.textarea;
	},

	testElementsExist : function() {
		var Assert = YAHOO.util.Assert;

		Assert.isNotNull(document.getElementById(this.div, 'Div should no be null'));
		Assert.isNotNull(document.getElementById(this.textarea, 'Textarea should no be null'));
	},

	testCanGetText : function() {
		var Assert = YAHOO.util.Assert,
		text_area = document.getElementById(this.textarea);

		Assert.areEqual(text_area.value, '= Header = *bold* _italic_', 'Unexpected textarea text');
	},

	testParserExists : function() {
		var Assert = YAHOO.util.Assert;

		Assert.isObject(this.parser, 'Parser should be an object');
	},

	testSendToParser : function() {
		var Assert = YAHOO.util.Assert,
			func = this;

		// Trigger parser
		document.getElementById(this.textarea).onkeyup();

		// Wait
		this.wait(function() {
				Assert.areEqual(
					'<h1> Header </h1> <b>bold</b> <i>italic</i>',
					document.getElementById(func.div).innerHTML,
					'Expected parsed div innerHTML'
				);},
				1000);
	}

});

var oLogger = new YAHOO.tool.TestLogger('giki_logger');
YAHOO.tool.TestRunner.add(testCase);
YAHOO.tool.TestRunner.run();
