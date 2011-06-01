# Documentation

## See it in action: 
[http://guyht.github.com/Giki/](http://guyht.github.com/Giki/)

## Welcome to GIKI

**GIKI** is a simple, real time, asynchronous parsing framework that suppors a wide variety of parsers.  Currently, BBCode and wiki text are supported, and it is very easy to customize and create new parsers.

The performance of the parsers is outstanding as they make use of webworkers via the [https://github.com/guyht/GWorker](GWorker) library.

## Installation

Simply add the following to your HEAD tag:

    <script src="giki.js" type="text/javascript"></script>

If you would like the script to be compatible with older browsers that do not support web workers, then also download and add the [https://github.com/guyht/GWorker](gworker.js) script to yoru HEAD tag.  This is recommended.

    <script src="gworker.js" type="text/javascript"></script>

NOTE: The gworker script must be included _before_ the giki script

## Usage

Add a text area to your page to receive input, and a div to receive the parsed data and make sure they have unique ids.

    <div id="giki_div"></div>
    <textarea id="giki_ta"></textarea>

Then simply invoke the giki object

    new Giki({
     'div' : 'giki_div',
     'text_area' : 'giki_ta',
     'parser' : 'bbcode.js'
    });

Et voila!

## Adding new parsers

Giki is designed with extensibility in mind.  Writing new parsers is very simple.  New parsers are written as web workers (they will also work in older browsers thanks to [https://github.com/guyht/GWorker](gworker)) and therefore only need to implement the onmessage function, and use the postMessage function to return the parsed data.

    self.onmessage = function(event) {
     var data = event.data;
     // ......
     // Do some parsing
     // .......
     self.postMessage(data);
    };