;(function($){

	var _container, _children, _slider, _index;

	var methods = {

		init: function(){
			_container = $(this); 
			_children = _container.children();
			_slider = $('<div class="$slider"></div>');
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
			_slider.css({
				'width': ( _container.css('width').replace('px','') * _children.length ) + 'px'
			});
			_children.css({
				'float': 'left',
				'overflow': 'auto',
				'width': _container.css('width'),
				'height': _container.css('height')
			});
			_slider.css({'left': -(_index*_container.css('width').replace('px',''))});
			return _container;
		},

		navigate: function(index){
			if(_container){
				if(index < 0 || index > _children.length){
					$.error( 'Index fora do range' );	
				} else {
					_index = index;
					_slider.animate({'left': -(_index*_container.css('width').replace('px',''))}, function(){
					});
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