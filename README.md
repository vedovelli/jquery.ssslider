**SSSlider - Super Simple Slider**

English version right after the portuguese one.

# Motivação

Mais um plugin de slider? Sim! A motivação para o desenvolvimento do SSSlider veio da dificuldade em encontrar um plugin simples, focado em mostrar conteúdo. Na web há muitos sliders feitos para imagens e adaptados para receber outro tipo de conteúdo. Neste caso, o SSSlider é apenas para conteúdo.

# Instruções para uso

## Informação importante e licença de uso

Este plugin está em ALPHA! Bugs podem ser encontrados e se vc corrigir algum, envie-nos uma mensagem. O ideal é fazer um fork no GitHub, corrigir e enviar um pull request.

Quanto à licença, **ela não existe**. Vc pode fazer o que quiser com o código. Nenhum crédito é necessário. Apenas faça bom uso e se chegar a colocar no ar, mande o link para darmos uma olhada e ver se vc fez direitinho! =D

## Aplicando o plugin ao markup

O plugin necessita de um markup HTML simples. Basta seguir o exemplo abaixo, estilizando de acordo com sua preferência.

	<div id="panel_container">
		<div><p>1</p></div>
		<div><p>2</p></div>
		<div><p>3</p></div>
		<div><p>4</p></div>
	</div>

No seu JavaScript, inclua a jQuery e o código do plugin.

	<script type="text/javascript" src="js/jquery-1.8.1.min.js"></script>
	<script type="text/javascript" src="js/jquery.ssslider.js"></script>

E finalmente, em um arquivo .js separado ou no seu código *inline*, inicie o plugin.

	jQuery(document).ready(function($){
		$('#panel_container').ssslider();
	});

Existem parâmetros opcionais a serem passados no contrutor do slider, que indicam a direção que ele deve seguir.

	$('#panel_container').ssslider({
		orientation: 'from_top'
	});

	$('#panel_container').ssslider({
		orientation: 'from_right'
	});

	$('#panel_container').ssslider({
		orientation: 'from_bottom'
	});

	$('#panel_container').ssslider({
		orientation: 'from_left'
	});

Caso nada seja passado, o padrão assumido é "from_left".

## Navegação

A navegação entre os painéis fica a sua escolha. Basta passar o índice do painel a ser mostrado e deixar o restante a cargo do plugin. Vale lembrar que o índice se inicia em 0 (zero).

	$('#panel_container').ssslider('navigate', 1) // Levará ao segundo painel

Além disso, pode-se ter uma navegação mais simples, com links de "próximo" e "anterior". Vejamos:

	$('#panel_container').ssslider('next') // próximo painel
	$('#panel_container').ssslider('prev') // painel anterior

A navegação é circular, ou seja, quando chegar ao último painel e o "próximo" for acionado, os painéis voltarão ao início.

## Redimensionar o container

Caso seja necessário redimensionar o container, é preciso executar um método no plugin, logo após a mudança das dimensões. Isso porque os painéis internos são redimensionados dinamicamente, herdando as dimensões do pai.

	resize.on('click', function(){
		container.css({
			'width':'200px',
			'height':'500px'
		});
		container.ssslider('resize'); // Apenas chamar o método 'resize' do plugin
	});

## Exemplo

Um exemplo pode ser encontrado na [seguinte URL](http://blog.vedovelli.com.br/ssslider).

## Colaboradores
- Fábio Vedovelli (@vedovelli)
- Marcos Junior (@marcosgugs)

**RIA Labs Desenvolvimento**

## Changelog

- [05/09/2012 - 10:16] Vedovelli - adicionado o retorno do próprio container nos métodos prev e next, visando manter encadeamento.

# English for the world domination! \o/

# Motivation

Another slider plugin? Yes! The motivation for the development of SSSlider came from the difficulty in finding a simple plugin, focused on showing content. On the web there are many sliders made for images and adapted to receive other content. In this case SSSlider is just for the content.

# Important information and user’s license

This plugin is in ALPHA! Bugs can be found and if you fix one, send us a message. The ideal is to make a fork on GitHub, correct and send a pull request.

As for the license, it does not exist. You can do whatever you want with the code. No credit is needed. Just make good use and get to put on the air, send me the link to take a look and see if you did right!

## Applying the plugin

The plugin requires a simple HTML markup. Just follow the example below, styling according to your preference.

	<div id="panel_container">
		<div><p>1</p></div>
		<div><p>2</p></div>
		<div><p>3</p></div>
		<div><p>4</p></div>
	</div>

In your JavaScript, include jQuery and the plugin code.

	<script type="text/javascript" src="js/jquery-1.8.1.min.js"></script><code>
	<script type="text/javascript" src="js/jquery.ssslider.js"></script></code>

And finally, in a separate .js file or inline in your code, start the plugin.

	jQuery(document).ready(function($){
		$('#panel_container').ssslider();
	});

There are optional parameters to be passed in the constructor of the slider, which indicate the direction it should take.

	$('#panel_container').ssslider({
		orientation: 'from_top'
	});

	$('#panel_container').ssslider({
		orientation: 'from_right'
	});

	$('#panel_container').ssslider({
		orientation: 'from_bottom'
	});

	$('#panel_container').ssslider({
		orientation: 'from_left'
	});

If nothing is passed, the default is “from_left.”

## Navigation

Navigation between panels is at your choice. Just pass the index of the panel to be shown and leave the rest by the plugin. Remember that the index starts at 0 (zero).

	$('#panel_container').ssslider('navigate', 1) // will take to the second panel

Moreover, one can have a simpler navigation, with links to “next” and “previous”. Consider:

	$('#panel_container').ssslider('next') // next panel
	$('#panel_container').ssslider('prev') // // previous panel

Navigation is circular, that is, when you get to the last panel and the “next” is triggered, the panels back to the beginning.

## Resize the container

If necessary resize the container, you need to execute a method in the plugin, just after the change of dimensions. This is because the internal panels are resized dynamically, inheriting dimensions of parent.

	resize.on('click', function(){
		container.css({
			'width':'200px',
			'height':'500px'
		});
		container.ssslider('resize'); // Apenas chamar o método 'resize' do plugin
	});

Example:

An example of this plugin may be [found here](http://blog.vedovelli.com.br/ssslider).

Collaborators
- Fábio Vedovelli (@vedovelli)
- Marcos Junior (@marcosgugs)

Translation to english courtesy of Ricardo Parente (http://ricardo.parente.us/ssslider-super-simple-slider/)