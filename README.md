# grunt-init-yawecaap

> Yet Another WEb Client APP is a sample app for start new project with  jquery + underscore + backbone + bootstrap + markup. . Will work with awknet-commons (java backend). You can create it using [grunt-init][].

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```
git clone git@github.com:gruntjs/grunt-init-yawecapp.git ~/.grunt-init/yawecapp
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init yawecapp
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._

## Folders Layout

All files of app are in app folder.

	repos root
	|
	|-- app/ - all app files are here.
	|---- css - css files. No big deal;
	|---- data - .json files that is used as test for model/collection communication with backend;
	|---- img - all image files. No big deal;
	|---- js - the heart of app. All scripts are here;
	|------ collections - contain all BackboneJS collections;
	|------ controllers - contain all BackboneJS routers. They act like as "controller" in MVC model;
	|------ libs - all static libs of third-party;
	|------ models - contain all backbone models;
	|------ views - contain all BackboneJS and MarionetteJS views;
	|------ app.js - main file of app. Act as main function in C, Java, etc;
	|------ config.js - contain all configuration of app (backend url, etc);
	|------ main.js - used by RequireJS to start app. Contain the first method called by require, instanciate all routers and start BackboneJS;
	|---- templates - all html snippets live here. The template engine use theses files;
	|-- index.html - main html file of app. All files will be rendered here;
	|-- package.json - bower (future);
	|-- todo.org - all tasks to work;

## Libraries

### RequireJS

RequireJS use main.js file to configure all libs that will be used in app and a special method to start app. All js file need use

	define([
		'marionette'
		, 'app'
		, 'text!../../templates/about.tpl'
		], function (Marionette, App, Template)  {

(Of course, replace libs for appropriate ones)

And that's it. Simple to use it. ;)

### MarionetteJS

#### ItemView

No special problem.

#### CompositeView

The greatest problem with CompotiseView was integrate it with ItemView. The rewrite was necessary  (see app.js):

	Marionette.Renderer.render = function(template, data) { ... };

The technique using:

	$(this.el).html(page);

is obsolete, right now.

The MarionetteJS use templates of RequireJS. The template must be "compiled" in JS and UnderscoreJS act as template engine.
By the way, if you use a template in pure html and without spaces or tabs it can be compiled by MarionetteJS (underscore). Of course, there is a price: the snippet hasn't any indentation.

#### CollectionView

Same as CompositeView. Do not need implement it!

# Credits

Copyright (c) 2013 Jefferson Campos - @foguinhoperuca. Licensed under the GPLv3 license.
YAWECAPP is basead on JUMBABOOM (Jquery + UNderscore + BAckbone + BOOtstrap + Markup = JUNBABOOM! ), developed by @victorwpbastos.
Basead in project grunt-commonjs (https://npmjs.org/package/grunt-commonjs).

# License

All this work is  basead in GNU GPLv3. See License file for more informartion.
