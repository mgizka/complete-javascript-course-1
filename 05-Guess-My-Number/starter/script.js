'use strict';

document.querySelector('.check').addEventListener('click', e => {
  const text = document.querySelector('.guess').value;
  document.querySelector('.guess').value = text + 1;
});

document.querySelector('body').style = 'background-color : #00b347  ';
