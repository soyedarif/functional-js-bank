function getInputFieldValueById(inputFieldID) {
    const inputField = document.getElementById(inputFieldID);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = "";
    return inputFieldValue;
  }
  function getElementValueById(elementID) {
    const element = document.getElementById(elementID);
    const elementValueString = element.innerText;
    const elementValueAmount = parseFloat(elementValueString);
    return elementValueAmount;
  }
  function setTextElementValueByID(elementID, newValue) {
    const textELement = document.getElementById(elementID);
    textELement.innerText = newValue;
  }