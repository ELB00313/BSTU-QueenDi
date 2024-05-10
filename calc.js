var figmaText = document.getElementById("figmaText");
if (figmaText) {
  figmaText.addEventListener("click", function () {
    window.open("https://github.com/");
  });
}


var bbutton = document.getElementById("bbutton");
if (bbutton) {
  bbutton.addEventListener("click", function (e) {
    window.location.href = 'index.html';
  });
}


z
var gitHubText = document.getElementById("gitHubText");
if (gitHubText) {
  gitHubText.addEventListener("click", function () {
    window.open("https://github.com/");
  });
}

  var twitter = document.getElementById("tw");
  if (twitter) {
    twitter.addEventListener("click", function () {
      window.open("https://twitter.com/");
    });
  }

  var insta = document.getElementById("inst");
  if (insta) {
    insta.addEventListener("click", function () {
      window.open("https://www.instagram.com/");
    });
  }

  var pinterest = document.getElementById("pint");
  if (pinterest) {
    pinterest.addEventListener("click", function () {
      window.open("https://ru.pinterest.com/");
    });
  }







  //калькулятор
 var op;
 function min (event) {
   if (event.target.classList.contains('m')) {
        func();
    };
};

 function pl (event) {
   if (event.target.classList.contains('div4')) {
          func();
       };
     };
    
     const cmin = document.querySelectorAll(".minys");
     for (let i = 0; i < cmin.length; i++) {
       cmin[i].addEventListener("click", min);
     }

     const cpl = document.querySelectorAll(".plusik");
     for (let i = 0; i < cpl.length; i++) {
       cpl[i].addEventListener("click", pl);
     }

 function prover(cif,nom) {
   if (cif>=0){
     document.getElementById(nom).innerHTML = cif;
   } else{
     document.getElementById(nom).innerHTML = 0;
   }
 }

   function func() {
   var result;
   var num1 = Number(document.getElementById("result").textContent);
     switch (op) {
       case '+1001':
       var nomer="cf1";
       var cifra = Number(document.getElementById("cf1").textContent);
       cifra=cifra+1;
       prover(cifra,nomer);
       result = num1 + 1001;
         break;
       case '-1001':
       var nomer="cf1";
       var cifra = Number(document.getElementById("cf1").textContent);
       if (cifra!=0){
        cifra=cifra-1;
        prover(cifra,nomer);
        result = num1 - 1001;
       }
         break;
     case '+1002':
       var nomer="cf2";
       var cifra = Number(document.getElementById("cf2").textContent);
       cifra=cifra+1;
       prover(cifra,nomer);
       result = num1 + 1002;
         break;
       case '-1002':
       var nomer="cf2";
       var cifra = Number(document.getElementById("cf2").textContent);
       if (cifra!=0){
        cifra=cifra-1;
        prover(cifra,nomer);
        result = num1 - 1002;
       }
         break;
     case '+2000':
       var nomer="cf3";
       var cifra = Number(document.getElementById("cf3").textContent);
       cifra=cifra+1;
       prover(cifra,nomer);
       result = num1 + 2000;
         break;
       case '-2000':
       var nomer="cf3";
       var cifra = Number(document.getElementById("cf3").textContent);
       if (cifra!=0){
        cifra=cifra-1;
        prover(cifra,nomer);
        result = num1 - 2000;
       }
         break;
     case '+777':
       var nomer="cf4";
       var cifra = Number(document.getElementById("cf4").textContent);
       cifra=cifra+1;
       prover(cifra,nomer);
       result = num1 + 777;
         break;
       case '-777':
       var nomer="cf4";
       var cifra = Number(document.getElementById("cf4").textContent);
       if (cifra!=0){
        cifra=cifra-1;
        prover(cifra,nomer);
        result = num1 - 777;
       }
         break;

    case '+999':
       var nomer="cf5";
       var cifra = Number(document.getElementById("cf5").textContent);
       cifra=cifra+1;
       prover(cifra,nomer);
       result = num1 + 999;
         break;
       case '-999':
       var nomer="cf5";
       var cifra = Number(document.getElementById("cf5").textContent);
       if (cifra!=0){
        cifra=cifra-1;
        prover(cifra,nomer);
        result = num1 - 999;
       }
         break;

    case '+1000':
       var nomer="cf6";
       var cifra = Number(document.getElementById("cf6").textContent);
       cifra=cifra+1;
       prover(cifra,nomer);
       result = num1 + 1000;
         break;
       case '-1000':
       var nomer="cf6";
       var cifra = Number(document.getElementById("cf6").textContent);
       if (cifra!=0){
        cifra=cifra-1;
        prover(cifra,nomer);
        result = num1 - 1000;
       }
         break;

    case '+75':
       var nomer="cf7";
       var cifra = Number(document.getElementById("cf7").textContent);
       cifra=cifra+1;
       prover(cifra,nomer);
       result = num1 + 75;
         break;
       case '-75':
       var nomer="cf7";
       var cifra = Number(document.getElementById("cf7").textContent);
       if (cifra!=0){
        cifra=cifra-1;
        prover(cifra,nomer);
        result = num1 - 75;
       }
         break;

    case '+55':
       var nomer="cf8";
       var cifra = Number(document.getElementById("cf8").textContent);
       cifra=cifra+1;
       prover(cifra,nomer);
       result = num1 + 55;
         break;
       case '-55':
       var nomer="cf8";
       var cifra = Number(document.getElementById("cf8").textContent);
       if (cifra!=0){
        cifra=cifra-1;
        prover(cifra,nomer);
        result = num1 - 55;
       }
         break;

    case '+50':
       var nomer="cf9";
       var cifra = Number(document.getElementById("cf9").textContent);
       cifra=cifra+1;
       prover(cifra,nomer);
       result = num1 + 50;
         break;
       case '-50':
       var nomer="cf9";
       var cifra = Number(document.getElementById("cf9").textContent);
       if (cifra!=0){
        cifra=cifra-1;
        prover(cifra,nomer);
        result = num1 - 50;
       }
         break;

    case '+72':
       var nomer="cf10";
       var cifra = Number(document.getElementById("cf10").textContent);
       cifra=cifra+1;
       prover(cifra,nomer);
       result = num1 + 72;
         break;
       case '-72':
       var nomer="cf10";
       var cifra = Number(document.getElementById("cf10").textContent);
       if (cifra!=0){
        cifra=cifra-1;
        prover(cifra,nomer);
        result = num1 - 72;
       }
         break;
         
    case '+74':
       var nomer="cf11";
       var cifra = Number(document.getElementById("cf11").textContent);
       cifra=cifra+1;
       prover(cifra,nomer);
       result = num1 + 74;
         break;
       case '-74':
       var nomer="cf11";
       var cifra = Number(document.getElementById("cf11").textContent);
       if (cifra!=0){
        cifra=cifra-1;
        prover(cifra,nomer);
        result = num1 - 74;
       }
         break;

     case '+60':
       var nomer="cf12";
       var cifra = Number(document.getElementById("cf12").textContent);
       cifra=cifra+1;
       prover(cifra,nomer);
       result = num1 + 60;
         break;
       case '-60':
       var nomer="cf12";
       var cifra = Number(document.getElementById("cf12").textContent);
       if (cifra!=0){
        cifra=cifra-1;
        prover(cifra,nomer);
        result = num1 - 60;
       }
         break;

    case '+100':
       var nomer="cf13";
       var cifra = Number(document.getElementById("cf13").textContent);
       cifra=cifra+1;
       prover(cifra,nomer);
       result = num1 + 100;
         break;
       case '-100':
       var nomer="cf13";
       var cifra = Number(document.getElementById("cf13").textContent);
       if (cifra!=0){
        cifra=cifra-1;
        prover(cifra,nomer);
        result = num1 - 100;
       }
         break;
     }


   if (result>=0){
   document.getElementById("result").innerHTML = result;
   } 
   }