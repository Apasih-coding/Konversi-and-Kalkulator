const dropList = document.querySelectorAll(".from-list select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button");
for (let index = 0; index < dropList.length; index++) {
    for(currency_code in country_code){
        let selected;
        if(index == 0){
            selected = currency_code == "USD" ? "selected" : "";
        }else if(index == 1){
            selected = currency_code == "IDR" ? "selected" : "";
        }
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[index].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[index].addEventListener("change", event =>{
        loadFlag(event.target);
    });
}
function loadFlag(element){
    for(code in country_code){
        if(code == element.value){
            let imageTag = element.parentElement.querySelector("img");
            imageTag.src = `https://countryflagsapi.com/png/${country_code[code]}`;
        }
    }
}

window.addEventListener("load", () =>{
    getResult();
});
getButton.addEventListener("click", event =>{
    event.preventDefault();
    getResult();
});
const exchangeIcon = document.querySelector(".from-list i");
exchangeIcon.addEventListener("click", ()=>{
    let temporaryCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temporaryCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getResult();
});

function getResult(){
    const amount = document.querySelector(".input-amount input"),
    exchangerateTxt = document.querySelector(".results");
    let amountValue = amount.value;
    if(amountValue == "" || amountValue == "0"){
        amount.value = "1";
        amountValue = 1;
    }
    exchangerateTxt.innerText = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/00eacaeec707be11ed81dccb/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result =>{
        let exchangerate = result.conversion_rates[toCurrency.value];
        let totalExchangeRate = (amountValue * exchangerate).toFixed(2);
        exchangerateTxt.innerText = `${amountValue} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
    })
}