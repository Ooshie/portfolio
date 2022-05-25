//Initializes all controllers
const initControllers = function () {
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', submitEvent); 
}

//Submit event -- set HTTP attributes for the contact form
const submitEvent = function () {
    const formData = new Object();
    formData[entry1] = document.getElementById('name').value;
    formData[entry2] = document.getElementById('email').value;
    formData[entry3] = document.getElementById('subject').value;
    formData[entry4] = document.getElementById('message').value;
    postToGoogleDB(formData);
}

initControllers(); //Must be last line of code 