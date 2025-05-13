function campoPreenchido(objId) {
	var retorno = true;
	var campo = document.getElementById(objId);
	if (campo.value.replace(/ /g, '') == '') {
		retorno = false;
	
	} else {
		retorno = true;
		
		if (!isNaN(parseFloat(campo.value))) {
			if (campo.value < 0)
				retorno = false;
		
		}
	}
	return retorno;
}

function valorNumerico(obj) {
	if (isNaN(parseFloat(obj.value)) || !campoPreenchido(obj.id))
		return false;		
	else
		return true;
}
document.addEventListener("keydown", function (evt) {
	if ((evt.which || evt.keyCode) == 27) {
		fechaJanelas();
	}
});
function fechaJanelas() {
	var parar = false;
	if (carregaObjeto('alerta')!=null) {
		hideMsgm();
		parar = true;
	}
	if (!parar) {
		var subs = document.getElementsByClassName('sub-modal');
		if (subs.length > 0) {
			for (var i = 0; i < subs.length; i++) {
				if (subs[i].style.opacity!='0' && subs[i].style.opacity!='') {
					fechaSubModal();
					parar = true;
					break;
				}
			}
		}
	}
	if (!parar) {
		var fixmods = document.getElementsByClassName('fixed-modal');
		if (fixmods.length > 0) {
			for (var i = 0; i < fixmods.length; i++) {
				if (fixmods[i].style.opacity!='0' && fixmods[i].style.opacity!='') {
					fechaFixedModal();
					parar = true;
					break;
				}
			}
		}
	}
	if (!parar) {
		var mods = document.getElementsByClassName('modal');
		if (mods.length > 0) {
			for (var i = 0; i < mods.length; i++) {
				if (mods[i].style.opacity!='0' && mods[i].style.opacity!='') {
					fechaModal();
					parar = true;
					break;
				}
			}
		}
	}
	if (!parar) {
		fechaMenuPopup();
	}
	parar = false;
}
function fechaMenuPopup(popupId) {
	if (popupId!=null) {
		carregaObjeto(popupId).style.display='none';
	} else {
		var ms = document.getElementsByClassName('menu-popup');
		for (var i = 0; i < ms.length; i++) {
			ms[i].style.display='none';
		}
	}
}
function abreMenuPopup(popupId) {
	var sty;
	if (popupId!=null) {
		sty = carregaObjeto(popupId).style.display;
		if (sty=='none' || sty=='')
				carregaObjeto(popupId).style.display='block';
			else
				fechaMenuPopup();
	} else {
		var pops = document.getElementsByClassName('menu-popup');
		if (pops.length > 0) {
			var sty = pops[0].style.display;
			if (sty=='none' || sty=='')
				pops[0].style.display='block';
			else
				fechaMenuPopup();
		}
	}
		
}
function fechaModal() {
	var modals = document.getElementsByClassName('modal');
	for (var i = 0; i < modals.length; i++) {
		modals[i].style.opacity='0';
		modals[i].style.left='-5000px';
		modals[i].style.top='-5000px';
		if (modals[i].className.indexOf('fixed-modal')<0) {
			modals[i].style.height='auto';
			if (modals[i].children[0]!=null)
				modals[i].children[0].style.marginTop='0';
		}
	}
}
function fechaFixedModal() {
	var modals = document.getElementsByClassName('fixed-modal');
	for (var i = 0; i < modals.length; i++) {
		modals[i].style.opacity='0';
		modals[i].style.left='-5000px';
		modals[i].style.top='-5000px';
	}
}
function fechaSubModal() {
	var modals = document.getElementsByClassName('sub-modal');
	for (var i = 0; i < modals.length; i++) {
		modals[i].style.opacity='0';
		modals[i].style.left='-5000px';
		modals[i].style.top='-5000px';
		if (modals[i].className.indexOf('fixed-modal')<0) {
			modals[i].style.height='auto';
			if (modals[i].children[0]!=null)
				modals[i].children[0].style.marginTop='0';
		}
	}
}
function abreModal(modalId) {
	var modal = document.getElementById(modalId);
	var inputs = modal.getElementsByTagName('input');
	for (var i =0; i < inputs.length; i++) {
		var type = inputs[i].type;
		if ((type == 'text' || type == 'textarea' || type == 'password') && !inputs[i].disabled) {
			setTimeout(function(){inputs[i].focus();},500);
            break;
        }
	}
	if (modal.className.indexOf('fixed-modal')<0) {
		var tamanhoDaPagina = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
		modal.style.height=tamanhoDaPagina+'px';
		if (modal.children[0]!=null)
			modal.children[0].style.marginTop=(document.documentElement.scrollTop+20)+'px';
	}
	
	modal.style.top='0';
	modal.style.left='0';
	modal.style.opacity='1';
}
function carregaObjeto(objId) {
	return document.getElementById(objId);
}
