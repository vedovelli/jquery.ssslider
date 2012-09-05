**SSSlider - Super Simple Slider**

# Motivação

Mais um plugin de slider? Sim! A motivação para o desenvolvimento do SSSlider veio da dificuldade em encontrar um plugin simples, focado em mostrar conteúdo. Na web há muitos sliders feitos para imagens e adaptados para receber outro tipo de conteúdo. Neste caso, o SSSlider é apenas para conteúdo.

# Instruções para uso

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

	$('#panel_container').ssslider();

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