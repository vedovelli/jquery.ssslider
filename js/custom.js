jQuery(document).ready(function($){

	var App = {

		componentCache: function(){
			this.$container 	= $('.panel_container');
			this.$btn_group 	= $('.btn-group');
			this.$nav_array 	= $('.navigation');
			this.$prev 			= $('.prev');
			this.$next 			= $('.next');
			this.$resize 		= $('.container_btn_resize').find('button');
		},

		listeners: function(){
			this.$btn_group.on('click', '.navigation', this.navigate);
			this.$prev.on('click', this.doprev);
			this.$next.on('click', this.donext);
			this.$resize.on('click', this.doresize);
		},

		navigate: function(){
			index = App.$nav_array.index(this);
			App.$container.ssslider('navigate', index);
		},

		donext: function(){
			App.$container.ssslider('next');
		},

		doprev: function(){
			App.$container.ssslider('prev');
		},

		doresize: function(){
			App.$container.css({
				'width':'200px',
				'height':'500px'
			});
			App.$container.ssslider('resize');
		},

		init: function(){
			this.componentCache();
			this.listeners();
			this.$btn_group.button();

			/* Slider initialization.
			 *
			 * Default orientation is "from_left".
			 * Try the other 3 possible values: "from_right", "from_top" and "from_bottom"
			 * Ex.: container.ssslider({orientation:'from_right'});
			 *
			 * Default behaviour is animated. Other possible value is static. If a wrong value
			 * is passed, then aninated will be used.
			 * Ex.: container.ssslider({behaviour:'static'});
			 */ 
			this.$container.ssslider({
				behaviour:'static',
				orientation: 'from_right' // Has no effect since there will be no animation. Here only for ilustrational purpose.
			});
		}

	};

	App.init();

});