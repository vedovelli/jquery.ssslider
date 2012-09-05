jQuery(document).ready(function($){

	var 
		container 		= $('.panel_container'),
		btn_container 	= $('.btn_container'),
		nav_array 		= $('.nav'),
		prev 			= $('.prev'),
		next 			= $('.next'),
		resize 			= $('.container_btn_resize').find('button');
	;

	btn_container.on('click', '.nav', function(event){
		event.preventDefault();
		index = nav_array.index(this); // Obtem o index do <li> clicado
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

	resize.on('click', function(){
		container.css({
			'width':'200px',
			'height':'500px'
		});
		container.ssslider('resize');
	});

	/* Slider initialization.
	 * Default orientation is "from_left".
	 * Try the other 3 possible values: "from_right", "from_top" and "from_bottom"
	 * Ex.: container.ssslider({orientation:'from_right'});
	 */ 
	container.ssslider({orientation:'from_bottom'});

});