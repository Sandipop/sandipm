
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxTdIJ0p1-aoQMP_BbLvcJEsEDCOn9QOduF-1gc6nTSHzo98M9DmDzuLLhRoAEgm8g7/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  const subbtn = document.querySelector(".subbtn")
  subbtn.onclick = function(){
    this.innerHTML = "<div class='loder'></div>"
    setTimeout(()=>{
        this.innerHTML= "Send Message"
    },3500)
  }

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent <i class='fa-solid fa-check fa-fade tick'></i>"
        setTimeout(function(){
            msg.innerHTML = "I will try to reply you asap"
            setTimeout(function(){
                msg.innerHTML= ""
            },3000)
            form.reset()
        },3000)
        
      })
      .catch(error => {
        msg.innerHTML = "Failed!!!"
      })
  })



