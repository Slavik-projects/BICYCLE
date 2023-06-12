//SLIDER SETTINGS
$(document).ready(function(){
      $('.slider__body').slick({
			arrows: false,
			dots: true,
			accessibility: false,
			slidesToShow: 1,
			autoplaySpeed: 3000,
			adaptiveHeight: true,
			nextArrow: '<button type="button" class="slick-next"></button>',
			prevArrow: '<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 768,
				settings: {}
			}]

		});
});

//IBG FUNCTION

function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();

// ADAPTIVE MENU BURGER
const burger = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
burger.addEventListener('click', function ratateBurger(){
	burger.classList.toggle('active')
	menuBody.classList.toggle('active')
})

//VALIDATION FORM
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
mainForm.addEventListener("submit", function(event) {
	if(emailTest(mainFormInput)) {
		mainFormInput.parentElement.classList.add("err");
		mainForm.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="main-form__error">
			   Enter your email
			</div>`
		);
		event.preventDefault();
	}
});

mainFormInput.addEventListener("focus", function(event) {
	mainFormInput.placeholder = "";
	mainFormInput.classList.add("focus");
		if(mainForm.nextElementSibling) {
			mainForm.nextElementSibling.remove();
			mainFormInput.parentElement.classList.remove("err");
		}
});

mainFormInput.addEventListener("input", function addFocusRemove(event){
	mainFormInput.classList.add("focus");
	if(mainFormInput.value.length == 0){
		mainFormInput.classList.remove("focus");
	}
});

function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
};

