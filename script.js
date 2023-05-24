  
      var gitHub = document.getElementById("gitHub");
      if (gitHub) {
        gitHub.addEventListener("click", function () {
          window.open("https://github.com/");
        });
      }
      
      var figma = document.getElementById("figma");
      if (figma) {
        figma.addEventListener("click", function () {

          window.open(
            "https://www.figma.com/file/6jXiABmjgn53fdaehdAwfE/C%D0%B0%D0%B9%D1%82?node-id=164%3A73&t=eLvVmq0eZARfq0b7-1"
          );
        });
      }
      
      var korzinabutton = document.getElementById("korzinabutton");
      if (korzinabutton) {
        korzinabutton.addEventListener("click", function (e) {
          window.location.href = 'calc.html';
        });
      }

      var korzinabutton2 = document.getElementById("buttontextpereiti");
      if (korzinabutton2) {
        korzinabutton2.addEventListener("click", function (e) {
          window.location.href = 'calc.html';
        });
      }
      
      var onasbutton = document.getElementById("onasbutton");
      if (onasbutton) {
        onasbutton.addEventListener("click", function () {
          var anchor = document.querySelector(
            "[data-scroll-to='frameOnasContainer']"
          );
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
      
      var catalogebutton = document.getElementById("catalogebutton");
      if (catalogebutton) {
        catalogebutton.addEventListener("click", function () {
          var anchor = document.querySelector(
            "[data-scroll-to='frameGoodsContainer']"
          );
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
      
      var videobutton = document.getElementById("videobutton");
      if (videobutton) {
        videobutton.addEventListener("click", function () {
          var anchor = document.querySelector(
            "[data-scroll-to='frameVideoContainer']"
          );
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }

      //бургер меню

      (function () {
        const burgerItem = document.querySelector('.burger');
        const crest = document.querySelector('.header_nav-close');
        const menu = document.querySelector('.header');
        burgerItem.addEventListener('click', () => {
          crest.classList.add('close_active');
        });
        burgerItem.addEventListener('click', () => {
          menu.classList.add('header_active');
        });
        crest.addEventListener('click', () => {
          menu.classList.remove('header_active');
        });
        crest.addEventListener('click', () => {
          crest.classList.remove('close_active');
        });
      }());

      (function () {
        const korzina = document.querySelector('.korzinabutton');
        const onas = document.querySelector('.onasbutton');
        const video = document.querySelector('.videobutton');
        const katalog = document.querySelector('.catalogebutton');
        const menu = document.querySelector('.header');
        const crest = document.querySelector('.header_nav-close');
        korzina.addEventListener('click', () => {
          menu.classList.remove('header_active');
        });
        onas.addEventListener('click', () => {
          menu.classList.remove('header_active');
        });
        video.addEventListener('click', () => {
          menu.classList.remove('header_active');
        });
        katalog.addEventListener('click', () => {
          menu.classList.remove('header_active');
        });
        korzina.addEventListener('click', () => {
            crest.classList.remove('header_active');
        });
        onas.addEventListener('click', () => {
          crest.classList.remove('header_active');
        });
        video.addEventListener('click', () => {
          crest.classList.remove('header_active');
        });
        katalog.addEventListener('click', () => {
          crest.classList.remove('header_active');
        });
      }());

      const seasons = {
        winter: [
          './assets/jpg/frame-12@2x.jpg',
          './assets/jpg/frame-11@2x.jpg',
          './assets/jpg/frame-10@2x.jpg',
          './assets/jpg/frame-9@2x.jpg',
          './assets/jpg/frame-8@2x.jpg' ,
          './assets/jpg/frame-7@2x.jpg'
        ],
        spring: [
          './assets/png/атрибутика7.png',
          './assets/png/Frame 1.png',
          './assets/png/Frame 2.png',
          './assets/png/Frame 3.png',
          './assets/png/Frame 4.png',
          './assets/png/Frame 5.png'
        ],
        summer: [
          './assets/jpg/фата.jpg',
          './assets/jpg/фата2.jpg',
          './assets/jpg/фата3.jpg',
          './assets/jpg/фата4.jpg',
          './assets/jpg/фата5.jpg',
          './assets/jpg/фата6.jpg',
        ],
      }

      const imagesLeft = Array.from(document.querySelector('.slider_left').children);
      const imagesCenter = Array.from(document.querySelector('.slider_center').children);
      const imagesRight = Array.from(document.querySelector('.slider_right').children);

      let season = 'winter';

      function redrawPhoto(arr) {
        arr.forEach((image, index) => image.src = seasons[season][index]);
      }

      function changeImage (event) {
        season = event.target.dataset.season;
        redrawPhoto(imagesCenter);
        // Array.from(imagesCenter).forEach((image, index) => image.src = './assets/seasons/' + season + '/' + (index + 1) + '.jpg');
        
        const buttons = document.querySelector('.photo__buttons').children;
        Array.from(buttons).forEach(button => {
          if (button.dataset.season == season) {
            button.classList.add('button_color');
          } else {
            button.classList.remove('button_color');
          };
        });
        
      };

      function buttonClick (event) {
        if (event.target.classList.contains('button')) {
          changeImage (event);
        };
      };

      document.querySelector('.photo__buttons').addEventListener('click', buttonClick);

      //slider
      function shiftPhoto(arrow) {
        const w = window.innerWidth >= 768 ? 2 : 1;
        if (arrow == 'left') {
          seasons[season] = seasons[season].slice(w).concat(seasons[season].slice(0, w));
        } else if (arrow == 'right') {
          seasons[season] = seasons[season].slice(-w).concat(seasons[season].slice(0, -w));
        }
      }

      const slider = document.querySelector('.slider');

      const buttonLeft = document.querySelector('.button_slider_left');
      const buttonRight = document.querySelector('.button_slider_right');

      function sliderLeft() {
        buttonLeft.removeEventListener('click', sliderRight);
        buttonRight.removeEventListener('click', sliderLeft);
        slider.classList.add('move_left');
        shiftPhoto('left');
        redrawPhoto(imagesRight);
      };

      function sliderRight() {
        buttonLeft.removeEventListener('click', sliderRight);
        buttonRight.removeEventListener('click', sliderLeft);
        slider.classList.add('move_right');
        shiftPhoto('right');
        redrawPhoto(imagesLeft);
      };

      slider.addEventListener('animationend', () => {
        redrawPhoto(imagesCenter);
        slider.classList.remove('move_left');
        slider.classList.remove('move_right');
        buttonLeft.addEventListener('click', sliderRight);
        buttonRight.addEventListener('click', sliderLeft);
      });


      buttonLeft.addEventListener('click', sliderRight);
      buttonRight.addEventListener('click', sliderLeft);