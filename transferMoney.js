document.getElementById('transferBtn').addEventListener('click', function (event) {
    event.preventDefault();

    //anlam
    let money = document.getElementById('totalMoney');
    const transfer = document.getElementById('transferMoney');

    const accountNumber = document.getElementById('accountNumber').value;
    let pinNumber = document.getElementById('pinNumber');
    pinNumber =parseInt(pinNumber.value);
    if (accountNumber.length != 10) {
        alert('Invalid Agent Number');
        return;
    }
     
    if(pinNumber!=2205){
        alert('Invalid Pin');
    }

    //convert
    const transferMoney = parseInt(transfer.value);
    let totalM = parseInt(money.innerText);
    totalM -= transferMoney;
    money.innerText = totalM;

});
