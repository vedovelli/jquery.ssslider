;(function($){

	var _container, _children, _slider, _index, _slider_top, _slider_left, _orientation = 'from_left';

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
			_children.css({
				'float': 'left',
				'overflow': 'auto',
				'width': _container.css('width'),
				'height': _container.css('height')
			});
			if(_orientation === 'from_top'){
				_children = $(_children.get().reverse());
				_slider.css({
					'height': ( _container.css('height').replace('px','') * _children.length ) + 'px',
					'top': -( (_container.css('height').replace('px','') * _children.length) - _container.css('height').replace('px','') ) + 'px'
				});
			} else if(_orientation === 'from_right'){
				_children = $(_children.get().reverse());
				_slider.css({
					'width': ( _container.css('width').replace('px','') * _children.length ) + 'px',
					'left': -( (_container.css('width').replace('px','') * _children.length) - _container.css('width').replace('px','') ) + 'px'
				});
			} else if(_orientation === 'from_bottom'){
				_slider.css({
					'height': ( _container.css('height').replace('px','') * _children.length ) + 'px',
					'top': -(_index*_container.css('height').replace('px',''))
				});
			} else if(_orientation === 'from_left'){
				_slider.css({
					'width': ( _container.css('width').replace('px','') * _children.length ) + 'px',
					'left': -(_index*_container.css('width').replace('px',''))
				});
			} else {
				$.error( 'Informação de orientação desconhecida. Valores esperados: "from_top", "from_right", "from_bottom" ou "from_left".' );		
			}
			_slider_top = parseInt(_slider.css('top').replace('px',''));
			_slider_left = parseInt(_slider.css('left').replace('px',''));
			return _container;
		},

		navigate: function(index){
			var container_width, container_height, slider_top;
			if(_container){
				if(index < 0 || index > (_children.length-1)){
					$.error( 'Index fora do range' );	
				} else {
					_index = index;
					container_width = parseInt(_container.css('width').replace('px',''));
					container_height = parseInt(_container.css('height').replace('px',''));
					if(_orientation === 'from_top'){
						_slider.animate({'top': _slider_top + (_index * container_height)});
					} else if(_orientation === 'from_right'){
						_slider.animate({'left': _slider_left + (_index * container_width)});
					} else if(_orientation === 'from_bottom'){
						_slider.animate({'top': -(_index*container_height)});
					} else if(_orientation === 'from_left'){
						_slider.animate({'left': -(_index*container_width)});
					} else {
						$.error( 'Informação de orientação desconhecida. Valores esperados: "from_top", "from_right", "from_bottom" ou "from_left".' );		
					}
					return _container;
				}
			} else {
				$.error( 'É preciso iniciar o plugin executando $(<selector>).vedovelli();' );
			}
		},
		
		next: function(){
			if(!_container && !_children) return false;
			if( _index > -1 && _index < (_children.length-1) ){
				methods.navigate(_index+1)
			} else {
				methods.navigate(0);
			}
		},

		prev: function(){
			if(!_container && !_children) return false;
			if(_index > 0 && _index < _children.length){
				methods.navigate(_index-1)
			} else {
				methods.navigate(_children.length-1);
			}
		}
	};

	$.fn.ssslider = function(method){
		if ( methods[method] ) { // Caso um metodo tenha sido passado, executa-o
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments ); // Caso contrário, executa o método init
		} else {
			$.error( 'Método ' +  method + ' não existe no plugin' );
		}    
	}

})(jQuery);