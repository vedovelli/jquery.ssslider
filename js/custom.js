jQuery(document).ready(function($){

	var 
		container = $('.panel_container'),
		btn_container = $('.btn_container'),
		nav_array = $('.nav'),
		prev 			= $('.prev'),
		next 			= $('.next'),
		redimensionar = $('.container_btn_redimensionar').find('button');
	;

	btn_container.on('click', '.nav', function(event){
		event.preventDefault();
		index = nav_array.index(this);
		container.ssslider('navigate', index);	
	});

	prev.on('click', function(event){
		event.preventDefault();
		container.ssslider('prev');
	});

	next.on('click', function(event){
		event.preventDefault();
		container.ssslider('next');
	});

	redimensionar.on('click', function(){
		container.css({
			'width':'200px',
			'height':'500px'
		});
		container.ssslider('resize');
	});

	/* Caso nada seja passado no construtor, ele coloca horizontal como padrão */ 
	container.ssslider({
		orientation:'vertical'
	});

});