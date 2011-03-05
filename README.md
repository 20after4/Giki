# Documentation

## What is it?
A simple to implement, easily extendible, **asynchronous** live parser for a variety of markup languages, for example, *wiki text, BB code, markdown, code blocks*.  As you type, the text is rendered on the page in real time.

## Installation
Simply add the following to your HEAD tag:

    <script src="giki.js" type="text/javascript"></script>

If you would like the script to be compatible with older browsers that do not support web workers, then also download and add the gworker.js script to yoru HEAD tag.  This is recommended.

    <script src="gworker.js" type="text/javascript"></script>

NOTE: The gworker script must be included **before** the giki script

## Usage
Add a text area to your page to receive input, and a div to received the parsed data and make sure they have unique ids.

    <div id="giki_div"></div>
    <textarea id="giki_ta"></textarea>

Then simply invoke the giki object

    new giki({
     'div' : 'giki_div',
     'text_area' : 'giki_ta',
     'parser' : 'default.js'
    });

Et voila!

## Adding new parsers
Giki is designed with extensibility in mind.  Writing new parsers is very simple.  New parsers are written as web workers (they will also work in older browsers thanks to gworker) and therefore only need to implement the onmessage function, and use the postMessage function to return the parsed data.

    self.onmessage = function(event) {
     var data = event.data;
     // ......
     // Do some parsing
     // .......
     self.postMessage(data);
    };
