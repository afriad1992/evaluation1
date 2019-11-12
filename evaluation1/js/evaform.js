//declaration de variable pour récupérer les valeurs dans les input

var formValid=document.getElementById("envoyer");
var nom=document.getElementById("nom");
var oublinom=document.getElementById("oublinom");

var pre=document.getElementById("pre");
var oublipre=document.getElementById("oublipre"); 

var adr=document.getElementById("adr");
var oubliadr=document.getElementById("oubliadr");

var ddn=document.getElementById("ddn");
var oubliddn=document.getElementById("oubliddn");

var city=document.getElementById("city");
var oublicit=document.getElementById("oublicit");

var cd=document.getElementById("cd");
var oublicd=document.getElementById("oublicd");

var mail=document.getElementById("mail");
var oubliemail=document.getElementById("oublimail");

formValid.addEventListener('click', validation);
 nomsValid=/^[A-Z]([_a-zéè~¨-]*\s*)*$/;
 cdvalid=/^\d{5}$/;
 emailvalid=/^[-a-z_éè~¨0-9]+(\.[-a-z_éè~¨0-9]*)*@[a-z]+\.[a-z]{2,3}$/; 
 adrvalid=/^\d+(\s[-A-z_éè~¨0-9]+)+\s*$/;

function validation(event){
   //si le champ est vide
    if(nom.validity.valueMissing){
       event.preventDefault();
       oublinom.textContent="vous avez oubliez le nom";
       oublinom.style.color="red";
    }else if(nomsValid.test(nom.value)==false){
    event.preventDefault();
    oublinom.textContent="format incorrect commencer par majuscule svp";
    oublinom.style.color="orange";
    }else{oublinom.textContent="OK";
    oublinom.style.color="green";
   }
   if(pre.validity.valueMissing){
       event.preventDefault();
       oublipre.textContent="vous avez oubliez le prenom";
       oublipre.style.color="red";
    }else if(nomsValid.test((pre.value))==false){
      event.preventDefault();
      oublipre.textContent="format incorect commencer par majuscule svp";
      oublipre.style.color="orange";
   }else{oublipre.textContent="OK";
   oublipre.style.color="green";
  }
    
    if(adr.validity.valueMissing){
      event.preventDefault();
      oubliadr.textContent="vous avez oubliez l'adresse";
      oubliadr.style.color="red";
   }else if(adrvalid.test((adr.value))==false){
     event.preventDefault();
     oubliadr.textContent="format incorect";
     oubliadr.style.color="orange";
   }else{oubliadr.textContent="OK";
   oubliadr.style.color="green";
  }  
    if(city.validity.valueMissing){
       event.preventDefault();
       oublicit.textContent="vous avez oubliez la ville ";
       oublicit.style.color="red";
    }else if(nomsValid.test((city.value))==false){
      event.preventDefault();
      oublicit.textContent="format incoreect commencer par majuscule";
      oublicit.style.color="orange";
   }else{oublicit.textContent="OK";
   oublicit.style.color="green";
  }
   
    if(cd.validity.valueMissing){
       event.preventDefault();
       oublicd.textContent="vous avez oubliez le code postal";
       oublicd.style.color="red";
    }else if(cdvalid.test(cd.value)==false){
        event.preventDefault();
        oublicd.textContent="entrer le code postale sur 5 chiffre s.v.p";
        oublicd.style.color="orange";  
      }else{oublicd.textContent="OK";
      oublicd.style.color="green";
     }
    if(ddn.validity.valueMissing){
      event.preventDefault();
      oubliddn.textContent="vous avez oubliez la date de naissance";
      oubliddn.style.color="red";
   }else{oubliddn.textContent="OK";
   oubliddn.style.color="green";
  }
     
    if(mail.validity.valueMissing){
       event.preventDefault();
       oublimail.textContent="vous avez oubliez l'email";
       oublimail.style.color="red";
    }else if(emailvalid.test(mail.value)==false){
       event.preventDefault();
       oublimail.textContent="veuillez entrer un email valide";
       oublimail.style.color="orange";
        
      }else{oublimail.textContent="OK";
      oublimail.style.color="green";
     }
   }
   

