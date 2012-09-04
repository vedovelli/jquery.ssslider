;(function($){

	var _container, _children, _slider, _index = 0, _orientation = 'horizontal';

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
			if(_orientation === 'horizontal'){
				_slider.css({
					'width': ( _container.css('width').replace('px','') * _children.length ) + 'px',
					'left': -(_index*_container.css('width').replace('px',''))
				});
			} else if(_orientation === 'vertical'){
				_slider.css({
					'height': ( _container.css('height').replace('px','') * _children.length ) + 'px',
					'top': -(_index*_container.css('height').replace('px',''))
				});
			} else {
				$.error( 'Informação de orientação desconhecida. Valores esperados: horizontal ou vertical.' );		
			}
			_children.css({
				'float': 'left',
				'overflow': 'auto',
				'width': _container.css('width'),
				'height': _container.css('height')
			});
			return _container;
		},

		navigate: function(index){
			if(_container){
				if(index < 0 || index > (_children.length-1)){
					$.error( 'Index fora do range' );	
				} else {
					_index = index;
					if(_orientation === 'horizontal'){
						_slider.animate({'left': -(_index*_container.css('width').replace('px',''))}, function(){
						});
					} else if(_orientation === 'vertical'){
						_slider.animate({'top': -(_index*_container.css('height').replace('px',''))}, function(){
						});
					} else {
						$.error( 'Informação de orientação desconhecida. Valores esperados: horizontal ou vertical.' );		
					}
					return _container;
				}
			} else {
				$.error( 'É preciso iniciar o plugin executando $(<selector>).vedovelli();' );
			}
		},
		
		next: function()
		{
			if(!_container && !_children) return false;

			if( _index > -1 && _index < (_children.length-1) )
			{
				methods.navigate(_index+1)
			}
			else
			{
				methods.navigate(0);
			}
		},

		prev: function()
		{
			if(!_container && !_children) return false;

			if( _index > 0 && _index < (_children.length-1) )
			{
				methods.navigate(_index-1)
			}
			else
			{
				methods.navigate((_children.length-1));
			}
		}
	}
	;

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