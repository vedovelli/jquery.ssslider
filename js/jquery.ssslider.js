;(function($){

	var _container, _children, _slider, _index, _orientation = 'from_left';

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
			methods['resize'].apply();
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
				// reverter o array _children e iniciar do final com top positivo no tamanho do slider
				_children = $(_children.get().reverse());
				_slider.css({
					'height': ( _container.css('height').replace('px','') * _children.length ) + 'px',
					'top': -(_index*_container.css('height').replace('px',''))
				});
			} else if(_orientation === 'from_right'){
				// Iniciar do final com left positivo do tamanho do slides
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
			return _container;
		},

		navigate: function(index){
			if(_container){
				if(index < 0 || index > _children.length){
					$.error( 'Index fora do range' );	
				} else {
					_index = index;
					if(_orientation === 'from_top'){
						// reverter o array _children e iniciar do final com top positivo no tamanho do slider
					} else if(_orientation === 'from_right'){
						// Iniciar do final com left positivo do tamanho do slides
					} else if(_orientation === 'from_bottom'){
						_slider.animate({'top': -(_index*_container.css('height').replace('px',''))});
					} else if(_orientation === 'from_left'){
						_slider.animate({'left': -(_index*_container.css('width').replace('px',''))});
					} else {
						$.error( 'Informação de orientação desconhecida. Valores esperados: "from_top", "from_right", "from_bottom" ou "from_left".' );		
					}
					return _container;
				}
			} else {
				$.error( 'É preciso iniciar o plugin executando $(<selector>).vedovelli();' );
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