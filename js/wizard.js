'use strict';
(function () {
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoatInput = document.getElementsByName('coat-color');
  var wizardEyesInput = document.getElementsByName('eyes-color');
  var wizardFireballInput = document.getElementsByName('fireball-color');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  // Выбор случайного элемента из массива
  var randomElementArray = function (nameArray) {
    var number = Math.floor(Math.random() * nameArray.length);
    return number;
  };

  document.querySelector('.setup-similar').classList.remove('hidden');

  wizardCoat.addEventListener('click', function () {
    var newColor = COAT_COLOR[randomElementArray(COAT_COLOR)];
    if (wizardCoat.tagName.toLowerCase() === 'div') {
      wizardCoat.style.backgroundColor = newColor;
    } else {
      wizardCoat.style.fill = newColor;
    }
    wizardCoatInput[0].value = newColor;
    window.wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = EYES_COLOR[randomElementArray(EYES_COLOR)];
    if (wizardEyes.tagName.toLowerCase() === 'div') {
      wizardEyes.style.backgroundColor = newColor;
    } else {
      wizardEyes.style.fill = newColor;
    }
    wizardEyesInput[0].value = newColor;
    window.wizard.onEyesChange(newColor);
  });

  wizardFireball.addEventListener('click', function () {
    var newColor = FIREBALL_COLOR[randomElementArray(FIREBALL_COLOR)];
    if (wizardFireball.tagName.toLowerCase() === 'div') {
      wizardFireball.style.backgroundColor = newColor;
    } else {
      wizardFireball.style.fill = newColor;
    }
    wizardFireballInput[0].value = newColor;
  });

})();
