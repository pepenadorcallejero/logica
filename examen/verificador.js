$(document).ready(function() {
	
  $('#form_510551').submit(function() {
		var puntos = verificar();
		var calificacion=puntos/4; // (puntos * 10)/40 
		var mensaje = 'Resultados: ' + verificar()+' puntos'+"\n";
		mensaje += 'Calificación: '+calificacion+"\n\n";
		if(calificacion >= 6)
		{
			mensaje += 'Felicidades amor pasaste!!'+"\n\n";
		}
		if(calificacion >= 8)
		{
			mensaje += 'Además sacaste '+calificacion+' que es una muy buena calificación ya ni repases mas, el miercoles te ira muy bien'+"\n\n";
		}
		else
		{
			mensaje += 'Mmmm... chale amor, dale un repaso y revisa las respuestas'+"\n\n";
		}
		mensaje+='Las respuestas estan pintadas en verde y los errores que cometiste en rojo'+"\n";
		mensaje+='Dale click al boton limpiar para quitar tus respuestas y volver a empezar.';
    alert(mensaje);
    return false;
  });
  
  $('#form_510551').on('reset',function(){
			$('label').css("color","#444444");
	});
  
  function checavalor(num,valor)
  {
		var selector = 'input:radio[name=element_'+num+']:checked';
		console.log(selector);
		if($(selector).val() === valor)
		{
			$(selector).next().css("color","green");
			return 1;
		}
		else
		{
			labelincorrecto = $(selector).next();
			labelcorrecto = $('input:radio[name=element_'+num+'][value='+valor+']').next();
			labelincorrecto.css("color","red");
			labelcorrecto.css("color","green");
			return 0;
		}
	}
  
  function verificar()
  {
		var puntos = 0;
		var labelincorrecto, labelcorrecto;
		$('label').css("color","#444444");
		
		puntos += checavalor('1','3');
		puntos += checavalor('2','2');
		puntos += checavalor('3','1');
		puntos += checavalor('4','3');
		puntos += checavalor('5','3');
		puntos += checavalor('6','2');
		puntos += checavalor('7','4');
		puntos += checavalor('8','1');
		puntos += checavalor('9','1');
		puntos += checavalor('10','4');
		puntos += checavalor('11','4');
		puntos += checavalor('12','1');
		puntos += checavalor('13','3');
		puntos += checavalor('14','2');
		puntos += checavalor('15','2');
		puntos += checavalor('16','1');
		puntos += checavalor('17','1');
		puntos += checavalor('18','2');
		puntos += checavalor('19','2');
		puntos += checavalor('20','2');
		puntos += checavalor('21','1');
		puntos += checavalor('22','4');
		puntos += checavalor('23','1');
		puntos += checavalor('24','2');
		puntos += checavalor('25','3');
		puntos += checavalor('26','1');
		puntos += checavalor('27','2');
		puntos += checavalor('28','2');
		puntos += checavalor('29','4');
		puntos += checavalor('30','5');
		puntos += checavalor('31','3');
		puntos += checavalor('32','3');
		puntos += checavalor('33','1');
		puntos += checavalor('34','3');
		puntos += checavalor('35','4');
		puntos += checavalor('36','4');
		puntos += checavalor('37','4');
		puntos += checavalor('38','2');
		puntos += checavalor('39','1');
		puntos += checavalor('40','1');
		puntos += checavalor('41','4');
		
		return puntos;
	}
});
