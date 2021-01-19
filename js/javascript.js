'use strict'


$(function(){
	let modal = document.getElementById('my-call-popup');
	let btn = document.getElementById('call-popup');
	let span = document.getElementsByClassName("close-call-popup")[0];

	btn.onclick = function () {
		modal.style.display = "block";
	}

	span.onclick = function () {
		modal.style.display = "none";
	}

	window.onclick = function () {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
});


$(function(){
	let modal = document.getElementById('my-entrance-popup');
	let btn = document.getElementById('entrance-popup');
	let span = document.getElementsByClassName("close-entrance-popup")[0];

	btn.onclick = function () {
		modal.style.display = "block";
	}

	span.onclick = function () {
		modal.style.display = "none";
	}

	window.onclick = function () {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
});


$(function($){
   $("#popup-phone").mask("+38(099) 999-99-99");
});


$(document).ready(function(){
	var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
	var mail = $('#mail');
	
	mail.blur(function(){
		if(mail.val() != ''){
			if(mail.val().search(pattern) == 0){
				mail.removeClass('error').addClass('ok');
			}
			if(mail.val().search(pattern) != 0) {
				$('#valid').text('Не верный ввод');
				mail.addClass('error');
			}
			else { 
				$('#valid').text('');
				mail.removeClass('error').addClass('ok');		
			}	
		}else{
			$('#valid').text('Пустое поле');
			mail.addClass('error');
		}
	});
});


$(document).ready(function(){

	$("loginform").validate({

		rules:{

			password:{
				reqwired: true,
				minlength: 4,
				maxlength:16,
			},
		},

	});

}); 


