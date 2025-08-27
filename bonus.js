document.getElementById('bonusBtn').addEventListener('click', function (event) {
    event.preventDefault();

    //anlam
    let money = document.getElementById('totalMoney');
    const cupon= parseInt (document.getElementById('cupon').value);
    if(cupon!=2205){
        alert('Invalid Cupon');
        return;
    }

    //convert
    let totalM = parseInt(money.innerText);
    totalM += 1000;
    money.innerText = totalM;

});
