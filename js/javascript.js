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

$(function(){
    let menuElem = document.getElementById('onclickmenu');
    let titleElem = menuElem.querySelector('.top-menu__head__button');

    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };
});







$('.input-search__select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 350; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="input-search__select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('input-search__select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});

// tabs
$(function(){

	const tabBtn  = document.querySelectorAll('.tabs__nav-btn')
	const tabItem = document.querySelectorAll('.tabs__item')

	tabBtn.forEach(onTabClick)

	function onTabClick(item) {
		item.addEventListener( 'click', function() {
			let currentBtn = item
			let tabId = currentBtn.getAttribute('data-tab')
			let currentTab = document.querySelector(tabId)

			if ( ! currentBtn.classList.contains('active') ) {
				tabBtn.forEach(function(item) {
				item.classList.remove('active')
				})

				tabItem.forEach(function(item) {
					item.classList.remove('active')
				})

				currentBtn.classList.add('active')
				currentTab.classList.add('active')
			}
		})
	}

	document.querySelector('.tabs__nav-btn').click()
})

// select

function selectProg() {

	let selectHeader = document.querySelectorAll('.tabs__select__header')
	let selectItem = document.querySelectorAll('.select__item')
	
	selectHeader.forEach(item => {
		item.addEventListener('click', selectToggle)
	})

	selectItem.forEach(item => {
		item.addEventListener('click', selectChoose)
	})
	
	function selectToggle() {
		this.parentElement.classList.toggle('is-active')
	}

	function selectChoose() {
		let text = this.innerText
		let select = this.closest('.tabs__select')
		let currentText = select.querySelector('.select__current')

		currentText.innerText = text
		select.classList.remove('is-active')

	}

	


}

selectProg()