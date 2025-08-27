
//Add Money Section
document.getElementById('addMoneyBtn').addEventListener('click', function (event) {
    event.preventDefault();

    //anlam
    let money = document.getElementById('totalMoney');
    const addMoney = document.getElementById('addMoney');

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
    const addedMoney = parseInt(addMoney.value);
    let totalM = parseInt(money.innerText);
    totalM += addedMoney;
    money.innerText = totalM;

});

//Cashout Section
document.getElementById('cashOutBtn').addEventListener('click', function (event) {
    event.preventDefault();

    //anlam
    let money = document.getElementById('totalMoney');
    const cashout = document.getElementById('cashoutMoney');

    const agentNumber = document.getElementById('agentNumber').value;
    let pinNumber = document.getElementById('pinNumber');
    pinNumber = parseInt(pinNumber.value);
    if (agentNumber.length != 10) {
        alert('Invalid Agent Number');
        return;
    }

    if (pinNumber != 2205) {
        alert('Invalid Pin');
    }

    //convert
    const cashoutMoney = parseInt(cashout.value);
    let totalM = parseInt(money.innerText);
    totalM -= cashoutMoney;
    money.innerText = totalM;

});

//Tansfer Money
document.getElementById('transferBtn').addEventListener('click', function (event) {
    event.preventDefault();

    //anlam
    let money = document.getElementById('totalMoney');
    const transfer = document.getElementById('transferMoney');

    const accountNumber = document.getElementById('accountNumber').value;
    let pinNumber = document.getElementById('pinNumber');
    pinNumber = parseInt(pinNumber.value);
    if (accountNumber.length != 10) {
        alert('Invalid Agent Number');
        return;
    }

    if (pinNumber != 2205) {
        alert('Invalid Pin');
    }

    //convert
    const transferMoney = parseInt(transfer.value);
    let totalM = parseInt(money.innerText);
    totalM -= transferMoney;
    money.innerText = totalM;

});

//Get Bonus
document.getElementById('bonusBtn').addEventListener('click', function (event) {
    event.preventDefault();

    //anlam
    let money = document.getElementById('totalMoney');
    const cupon = parseInt(document.getElementById('cupon').value);
    if (cupon != 2205) {
        alert('Invalid Cupon');
        return;
    }

    //convert
    let totalM = parseInt(money.innerText);
    totalM += 1000;
    money.innerText = totalM;

});

//Pay Bill
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

//Tractions
//Togoling Feature
document.getElementById('Add-Button')
    .addEventListener('click', function (event) {
        event.preventDefault();

        document.getElementById('Add-Feature').style.display = "block";
        document.getElementById('Cash-Feature').style.display = "none";
        document.getElementById('Pay-Feature').style.display = "none";
        document.getElementById('Transfer-Feature').style.display = "none";
        document.getElementById('Transaction-Feature').style.display = "none";
        document.getElementById('Bonus-Feature').style.display = "none";
    });
document.getElementById('Cash-Button')
    .addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('Add-Feature').style.display = "none";
        document.getElementById('Cash-Feature').style.display = "block";
        document.getElementById('Pay-Feature').style.display = "none";
        document.getElementById('Transfer-Feature').style.display = "none";
        document.getElementById('Transaction-Feature').style.display = "none";
        document.getElementById('Bonus-Feature').style.display = "none";
    });
document.getElementById('Transfer-Button')
    .addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('Add-Feature').style.display = "none";
        document.getElementById('Cash-Feature').style.display = "none";
        document.getElementById('Pay-Feature').style.display = "none";
        document.getElementById('Transfer-Feature').style.display = "block";
        document.getElementById('Transaction-Feature').style.display = "none";
        document.getElementById('Bonus-Feature').style.display = "none";
    });
document.getElementById('Bonus-Button')
    .addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('Add-Feature').style.display = "none";
        document.getElementById('Cash-Feature').style.display = "none";
        document.getElementById('Pay-Feature').style.display = "none";
        document.getElementById('Transfer-Feature').style.display = "none";
        document.getElementById('Transaction-Feature').style.display = "none";
        document.getElementById('Bonus-Feature').style.display = "block";
    });
document.getElementById('Pay-Button')
    .addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('Add-Feature').style.display = "none";
        document.getElementById('Cash-Feature').style.display = "none";
        document.getElementById('Pay-Feature').style.display = "block";
        document.getElementById('Transfer-Feature').style.display = "none";
        document.getElementById('Transaction-Feature').style.display = "none";
        document.getElementById('Bonus-Feature').style.display = "none";
    });


