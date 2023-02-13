

document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");
  //get the previous deposit total by ID
  const previousDepositTotal = getElementValueById("deposit-total");
  //calculate new deposit total
  const newDepositTotal = newDepositAmount + previousDepositTotal;
  //set deposit total value
  setTextElementValueByID("deposit-total", newDepositTotal);

  const previousBalanceTotal=getElementValueById('balance-total')
  const newBalanceTotal=newDepositAmount+previousBalanceTotal;
  setTextElementValueByID('balance-total',newBalanceTotal);
});
