document.querySelector("form").addEventListener('submit', function(event) {


    const email = document.getElementById('email').value;

    document.getElementById('emailError').innerHTML = '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = "Mail invalid";
    }
});