const form = document.querySelector(`.login-form`);
form.addEventListener(`submit`, onFormSubmit);
function onFormSubmit(event){
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const mail = formElements.email.value;
	const password = formElements.password.value;
	const formDate = {
		mail,
		password,
	};

	console.log(formElements);
	console.log(`це submit форми`);
	console.log(formDate);

}
