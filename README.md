YAWECAPP
========

Yet Another WEb Client APP is a sample app for start new project with  jquery + underscore + backbone + bootstrap + markup.
Will work with awknet-commons (java backend)

Developer: Jefferson Campos - @foguinhoperuca

Previous Work
=============

This work is basead on JUMBABOOM (Jquery + UNderscore + BAckbone + BOOtstrap + Markup = JUNBABOOM! ), developed by @victorwpbastos.

License
=======

All this work is  basead in GNU GPLv3. See license file for more informartion.


MarionetteJS
============

ItemView
--------

No special problem.

CompositeView
-------------

The greatest problem with CompotiseView was integrate it with ItemView. The rewrite was necessary  (see app.js):

	Marionette.Renderer.render = function(template, data) { ... };

The technique using:

	$(this.el).html(page);

is obsolete, right now.

The MarionetteJS use templates of RequireJS. The template must be "compiled" in JS and UnderscoreJS act as template engine.
By the way, if you use a template in pure html and without spaces or tabs it can be compiled by MarionetteJS (underscore). Of course, there is a price: the snippet hasn't any indentation.

CollectionView
--------------

Same as CompositeView. Do not need implement it!
