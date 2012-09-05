jQuery(document).ready(function($){

	var 
		container 		= $('.panel_container'),
		btn_group 		= $('.btn-group'),
		nav_array 		= $('.navigation'),
		ori_array 		= $('.orientation'),
		prev 			= $('.prev'),
		next 			= $('.next'),
		resize 			= $('.container_btn_resize').find('button');
	;

	btn_group.on('click', '.navigation', function(){
		index = nav_array.index(this);
		container.ssslider('navigate', index);	
	});

	btn_group.on('click', '.orientation', function(){
		container.ssslider('change_orientation', {'orientation': $(this).text()});
	});

	prev.on('click', function(){
		container.ssslider('prev');
	});

	next.on('click', function(){
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
	container.ssslider({orientation:'from_right'});

	$('.btn-group').button();

});