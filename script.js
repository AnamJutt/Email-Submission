const scriptURL = 'https://script.google.com/macros/s/AKfycbxMkeBfmzeBYdVovLGZZyZhFDeCLjn4iRNWGYGGlem2oW2GOLKaKXA_PBgdke2npZpv_A/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.querySelector("#msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML = "Thank You for Subscribing!";
        setTimeout(function(){
            msg. innerHTML = "";
        }, 5000)
        form.reset()
  })
    .catch(error => console.error('Error!', error.message))
})