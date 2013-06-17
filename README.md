YAWECAPP
==========

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
========

(PT-BR)

ItemView
--------

No special problem.

CompositeView
-------------

O maior problema com o composite view foi fazer funcionar com o item view. Foi necessário reescrever o método Marionette.Renderer.render = function(template, data) (ver app.js) para que ele retornasse somente o template. Na definição da var do template é necessário chamar a função do markup para que ela seja corretamente preenchida. A sistemática com o 

	$(this.el).html(page);

dentro do render ficou obsoleta.

A saber, o Marionette utiliza por padrão a sistemática de templates do requirejs. Ele espera que o template, por padrão venha "compilado" em js. Neste caso, o underscore faz o papel da engine de template. Por curiosidade, se for criado um template com o html puro e sem nenhum tab ou espaço no começo de cada linha (quebra de linha funciona normalmente - só no final da linha, lógico - e espaço na mesma linha ok) a engine padrão do Marionette renderiza. O problema disso é a perca da indentação do snippet html.

CollectionView
--------------

Layout
------

TODO.

Regions
-------

TODO.
