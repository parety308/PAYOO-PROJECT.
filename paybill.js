document.getElementById('payBillBtn').addEventListener('click', function (event) {
    event.preventDefault();

    //anlam
    let money = document.getElementById('totalMoney');
    const pay = document.getElementById('payMoney');

    const accountNumber = document.getElementById('accountNumber').value;
    let pinNumber = document.getElementById('pinNumber');
    pinNumber = parseInt(pinNumber.value);
    if (accountNumber.length != 10) {
        alert('Invalid Account Number');
        return;
    }

    if (pinNumber != 2205) {
        alert('Invalid Pin');
    }

    //convert
    const payMoney = parseInt(pay.value);
    let totalM = parseInt(money.innerText);
    totalM -= payMoney;
    money.innerText = totalM;

});
