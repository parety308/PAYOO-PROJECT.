
//for log in button
document.getElementById('login')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const phoneNumber = 1773412116;
        const pinNumber = 2205;
        let number = document.getElementById('number').value;
        let pin = document.getElementById('pin').value;
        const num = parseInt(number);
        const pi = parseInt(pin);

        if (pi === pinNumber && num === phoneNumber) {
            console.log('logged in');
            window.location.href = "homePage.html";
        }
        else {
            alert('invalid number and pin number')
        }
    });
    