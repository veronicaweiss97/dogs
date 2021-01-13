'use strict';

const smooth = document.querySelector('.main__content-circle-first'),
      wire = document.querySelector('.main__content-circle-sec'),
      long = document.querySelector('.main__content-circle-thrd'),
      cardOne = document.querySelector('.card_one'),
      cardTwo = document.querySelector('.card_two'),
      cardThree = document.querySelector('.card_three');


      function showCard(dog, clazz, card, img) {
          dog.addEventListener('mouseover', () => {
            card.classList.add(clazz);
            document.querySelector(img).style.opacity = '0';
          });
          dog.addEventListener('mouseout', () => {
            card.classList.remove(clazz);
            document.querySelector(img).style.opacity = '';
          });
      }
showCard(smooth, 'card_one-show', cardOne, '.smooth');
showCard(wire, 'card_two-show', cardTwo, '.wire');
showCard(long, 'card_three-show', cardThree, '.long');