document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount=getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal=getElementValueById('withdraw-total');
    const newWithdrawTotal=newWithdrawAmount+previousWithdrawTotal;
    setTextElementValueByID('withdraw-total',newWithdrawTotal);

    const previousBalanceTotal=getElementValueById('balance-total');
    const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
    setTextElementValueByID('balance-total',newBalanceTotal);
})