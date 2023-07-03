// modal

document.getElementById("openModal").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "block";
  });
  
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
  });
  
  window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  });

  //Formulario script 
  
 // Contato

  let information = document.querySelector('#infomation');
  
  function CONTACT(){
    form.style.display = 'none'
    information.style.display = 'flex'
  };
  
  function CONTACT_back(){
    form.style.display = 'flex'
    information.style.display = 'none'
  }

  // Formulario validado
  function SEND_OF_MSG() {
    let nome = document.getElementById('name');
    let email = document.getElementById('email');
    let mensagem = document.getElementById('mgsSend')
    let marcacaoDamensagem = document.getElementById ('marcationmensagem') 
    let marcacaoDoemail = document.getElementById ('marcationemail') 
    let marcacaoDonome = document.getElementById ('marcationnome') 
    
    if(nome.value == "" || email.value == "" || mensagem.value == ""){

    if(email.value =='' && mensagem.value ==''){
      marcacaoDamensagem.style.opacity='1'
      marcacaoDoemail.style.opacity='1'
    }
    if(nome.value =='' && mensagem.value ==''){
      marcacaoDonome.style.opacity = '1'
      marcacaoDamensagem.style.opacity='1'
    }
    if (email.value == '' && nome.value == ''){
       marcacaoDoemail.style.opacity = '1'
       marcacaoDonome.style.opacity = '1'
    }
    if(mensagem.value==''){
       marcacaoDamensagem.style.opacity='1'
  
    }
    if(nome.value==''){
       marcacaoDonome.style.opacity = '1'
    
    
    }
    if(email.value == ''){
       marcacaoDoemail.style.opacity='1'
    }
  
    }
    else {
      send.style.display='flex'
      form.style.display = 'none'
      nome.value = ""
      email.value = ""
      mensagem.value = ""
      marcacaoDoemail.style.opacity = '0'
      marcacaoDonome.style.opacity = '0'
      marcacaoDamensagem.style.opacity = '0'

    } 
  }
  let send = document.querySelector('#SendFeeback');
  let form = document.querySelector('#Form');
  
  function SEND_OF_MSG_back(){
    send.style.display='none'
    form.style.display = 'flex'
  };