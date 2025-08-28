function getInt(money) {
    return parseInt(document.getElementById(money).value);
}
function validity(ac, p) {
    const accountNumber = document.getElementById(ac).value;
    let pinNumber = document.getElementById(p);
    pinNumber = parseInt(pinNumber.value);
    if (accountNumber.length !== 10) {
        alert('Invalid Account Number');
        return;
    }
    if (pinNumber !== 2205) {
        alert('Invalid Pin');
        return;
    }
}
function addIntT(moneyT, money) {
    let addMoney = document.getElementById(moneyT);
    const availableMoney = parseInt(addMoney.innerText) + money;
    addMoney.innerText = availableMoney;
}

function subIntT(moneyT, money) {
    let subMoney = document.getElementById(moneyT);
    const availableMoney = parseInt(subMoney.innerText) - money;
    subMoney.innerText = availableMoney;
}
//Add Money Section
document.getElementById('addMoneyBtn').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney = getInt('addMoney')
    //validity
    validity('accountNumber', 'pinNumber');
    addIntT('totalMoney', addMoney);
});

//Cashout Section
document.getElementById('cashOutBtn').addEventListener('click', function (event) {
    event.preventDefault();
    const outMoney = getInt('cashoutMoney')

    //validity
    validity('agentNumber', 'pinNumber');
    subIntT('totalMoney', outMoney);
});

//Tansfer Money
document.getElementById('transferBtn').addEventListener('click', function (event) {
    event.preventDefault();

    //anlam
    const transferMoney = getInt('transferMoney');

    subIntT('totalMoney', transferMoney);
    validity('accountNumber', 'pinNumber');

});

//Get Bonus
document.getElementById('bonusBtn').addEventListener('click', function (event) {
    event.preventDefault();

    //anlam

    const Cupon = parseInt(document.getElementById('cupon').value);
    if (Cupon != 2205) {
        alert('Invalid Cupon');
        return;
    }
    addIntT('cupon', 1000);
});

//Pay Bill
document.getElementById('payBillBtn').addEventListener('click', function (event) {
    event.preventDefault();

    //anlam
    const payMoney = getInt('payMoney');
    //validity
    validity('accountNumber', 'pinNumber');
    subIntT('totalMoney', payMoney);

});

//Tractions
//Togoling Feature
document.getElementById('Add-Button')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const buttons = document.getElementsByClassName('Button');
        for (const button of buttons) {
            button.style.display = 'none';
        }
        document.getElementById('Add-Feature').style.display = "block";
        const cardButtons = document.getElementsByClassName('card-button');
        for (const btn of cardButtons) {
            btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
            btn.classList.add('border-gray-300')
        }
        document.getElementById('Add-Button').classList.remove('border-gray-300');
        document.getElementById('Add-Button').classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
        

    });
document.getElementById('Cash-Button')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const buttons = document.getElementsByClassName('Button');
        for (const button of buttons) {
            button.style.display = 'none';
        }
        document.getElementById('Cash-Feature').style.display = "block";
        const cardButtons = document.getElementsByClassName('card-button');
        for (const btn of cardButtons) {
            btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
            btn.classList.add('border-gray-300')
        }
        document.getElementById('Cash-Button').classList.remove('border-gray-300');
        document.getElementById('Cash-Button').classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
        
    });
document.getElementById('Transfer-Button')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const buttons = document.getElementsByClassName('Button');
        for (const button of buttons) {
            button.style.display = 'none';
        }
        document.getElementById('Transfer-Feature').style.display = "block";
        const cardButtons = document.getElementsByClassName('card-button');
        for (const btn of cardButtons) {
            btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
            btn.classList.add('border-gray-300')
        }
        document.getElementById('Transfer-Button').classList.remove('border-gray-300');
        document.getElementById('Transfer-Button').classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
        
    });
document.getElementById('Bonus-Button')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const buttons = document.getElementsByClassName('Button');
        for (const button of buttons) {
            button.style.display = 'none';
        }
        document.getElementById('Bonus-Feature').style.display = "block";
        const cardButtons = document.getElementsByClassName('card-button');
        for (const btn of cardButtons) {
            btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
            btn.classList.add('border-gray-300')
        }
         document.getElementById('Bonus-Button').classList.remove('border-gray-300');
        document.getElementById('Bonus-Button').classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
       
    });
document.getElementById('Pay-Button')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const buttons = document.getElementsByClassName('Button');
        for (const button of buttons) {
            button.style.display = 'none';
        }
        document.getElementById('Pay-Feature').style.display = "block";
        const cardButtons = document.getElementsByClassName('card-button');
        for (const btn of cardButtons) {
            btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
            btn.classList.add('border-gray-300')
        }
        document.getElementById('Pay-Button').classList.remove('border-gray-300');
        document.getElementById('Pay-Button').classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
        
    });