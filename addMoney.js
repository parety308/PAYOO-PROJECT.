document.getElementById('addMoneyBtn').addEventListener('click', function (event) {
    event.preventDefault();

    //anlam
    let money = document.getElementById('totalMoney');
    const addMoney = document.getElementById('addMoney');

    //convert
    const addedMoney = parseInt(addMoney.value);
    let totalM = parseInt(money.innerText);
    totalM += addedMoney;
    money.innerText = totalM;

});
