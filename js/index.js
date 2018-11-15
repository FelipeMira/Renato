var menu = document.querySelector('.nav__list');
var burger = document.querySelector('.burger');
var doc = $(document);
var l = $('.scrolly');
var panel = $('.panel');
var vh = $(window).height();

var openMenu = function() {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('nav__list--active');
};

// revela o conteudo do primeiro painel por default
panel.eq(0).find('.panel__content').addClass('panel__content--active');

var scrollFx = function() {
  var ds = doc.scrollTop();
  var of = vh / 4;
  
  // se o painel estiver no viewport, revela o contaudo, se nao, esconde o mesmo.
  for (var i = 0; i < panel.length; i++) {
    if (panel.eq(i).offset().top < ds+of) {
      panel
      .eq(i)
      .find('.panel__content')
      .addClass('panel__content--active');
    } else {
      panel
      .eq(i)
      .find('.panel__content')
      .removeClass('panel__content--active')
    }
  }
};

var scrolly = function(e) {
  e.preventDefault();
  var target = this.hash;
  console.log(target);
  var $target = $(target);
  console.log($target);
  
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 300, 'swing', function () {
    window.location.hash = target;
  });
}

var init = function() {
  burger.addEventListener('click', openMenu, false);
  window.addEventListener('scroll', scrollFx, false);
  window.addEventListener('load', scrollFx, false);
  $('a[href^="#"]').on('click',scrolly);
};

$('#cpf').mask('999.999.999-99');

function ValidaCPF(){	
	var RegraValida=document.getElementById("cpf").value; 
	var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;	 
	if (cpfValido.test(RegraValida) == true)	{
    console.log("CPF Válido");	
	} else	{	 
    console.log("CPF Inválido");	
	}
}
function fMasc(objeto,mascara) {
  obj=objeto
  masc=mascara
  setTimeout("fMascEx()",1)
}

function fMascEx() {
  obj.value=masc(obj.value)
}

function mCPF(cpf){
  cpf=cpf.replace(/\D/g,"")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return cpf
}

doc.on('ready', init);