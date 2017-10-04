// Initialize Firebase
var config = {
    apiKey: "AIzaSyD1niFIHm8IcqtcXhDspQYyiUQjXI6pUk8",
    authDomain: "contactformdata-cc281.firebaseapp.com",
    databaseURL: "https://contactformdata-cc281.firebaseio.com",
    projectId: "contactformdata-cc281",
    storageBucket: "",
    messagingSenderId: "952438979607"
};
firebase.initializeApp(config);

var messageRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getInputval('name');
    var company = getInputval('company');
    var email = getInputval('email');
    var phone = getInputval('phone');
    var message = getInputval('message');

    saveMessage(name, company, email, phone, message);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    document.getElementById('contactForm').reset();
    
}
function getInputval(id){
    return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}