/*
 * https://github.com/vedovelli/jquery.ssslider
 */
;(function($){

	var _container, _children, _slider, _index = 0, _slider_top, _slider_left, _orientation = 'from_left';

	var methods = {

		init: function(orientation){
			_container = $(this); 
			_children = _container.children();
			_slider = $('<div class="$slider"></div>');
			if( typeof orientation === 'object' ){
				_orientation = orientation.orientation;
			}
			_slider.css({
				'position': 'absolute',
				'left': 0,
				'top': 0,
			});
			methods.resize();
			_container.html( _slider.html(_children) );
			return _container;
		},

		resize: function(){
			var 
				container_width = parseInt(_container.css('width').replace('px','')),
				container_height = parseInt(_container.css('height').replace('px',''))
			;
			_children.css({
				'float': 'left',
				'overflow': 'auto',
				'width': container_width,
				'height': container_height
			});
			switch(_orientation){
				case 'from_top':
					_children = $(_children.get().reverse());
					_slider.css({
						'height': ( container_height * _children.length ),
						'top': -( (container_height * _children.length) - _container.css('height').replace('px','') )
					});
					break;
				case 'from_right':
					_slider.css({
						'width': (container_width * _children.length),
						'left': -(container_width*_index) || 0
					});
					break;
				case 'from_bottom':
					_slider.css({
						'height': (container_height * _children.length),
						'top': -(_index * container_height) || 0
					});
					break;
				case 'from_left':
					_children = $(_children.get().reverse());
					_slider.css({
						'width': ( container_width * _children.length ),
						'left': -(( container_width * _children.length ) - container_width)
					});
					break;
				default:
					$.error( 'Orientation unknown. Possible values are "from_top", "from_right", "from_bottom" or "from_left"' );
					break;
			}
			_slider_top = parseInt(_slider.css('top').replace('px',''));
			_slider_left = parseInt(_slider.css('left').replace('px',''));
			return _container;
		},

		navigate: function(index){
			if(!_container){
				$.error( 'Initialization needed. Use $(<selector>).ssslider();' );
			}
			if(index < 0 || index > (_children.length-1)){
				$.error( 'Index out of range' );	
			} 
			var 
				container_width = parseInt(_container.css('width').replace('px','')),
				container_height = parseInt(_container.css('height').replace('px',''))
			;
			_index = index;
			switch(_orientation){
				case 'from_top':
					_slider.animate({'top': _slider_top + (_index * container_height)});
					break;
				case 'from_right':
					_slider.animate({'left': -(container_width*_index)});
					break;
				case 'from_bottom':
					_slider.animate({'top': -(_index * container_height)});
					break;
				case 'from_left':
					_slider.animate({'left': _slider_left + (_index * container_width)});
					break;
				default:
					$.error( 'Orientation unknown. Possible values are "from_top", "from_right", "from_bottom" or "from_left"' );
					break;
			}
			return _container;
		},
		
		next: function(){
			if(!_container && !_children) return false;
			if( _index > -1 && _index < (_children.length-1) ){
				methods.navigate(_index+1)
			} else {
				methods.navigate(0);
			}
			return _container;
		},

		prev: function(){
			if(!_container && !_children) return false;
			if(_index > 0 && _index < _children.length){
				methods.navigate(_index-1)
			} else {
				methods.navigate(_children.length-1);
			}
			return _container;
		}
	};

	$.fn.ssslider = function(method){
		if ( methods[method] ) { // Caso um metodo tenha sido passado, executa-o
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments ); // Caso contrário, executa o método init
		} else {
			$.error( 'Method ' +  method + ' unknown' );
		}    
	}

})(jQuery);