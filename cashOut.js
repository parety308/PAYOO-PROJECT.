document.getElementById('cashOutBtn').addEventListener('click', function (event) {
    event.preventDefault();

    //anlam
    let money = document.getElementById('totalMoney');
    const cashout = document.getElementById('cashoutMoney');

    const agentNumber = document.getElementById('agentNumber').value;
    let pinNumber = document.getElementById('pinNumber');
    pinNumber =parseInt(pinNumber.value);
    if (agentNumber.length != 10) {
        alert('Invalid Agent Number');
        return;
    }
     
    if(pinNumber!=2205){
        alert('Invalid Pin');
    }

    //convert
    const cashoutMoney = parseInt(cashout.value);
    let totalM = parseInt(money.innerText);
    totalM -= cashoutMoney;
    money.innerText = totalM;

});
