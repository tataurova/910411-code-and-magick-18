'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  var wizardCoatInput = document.getElementsByName('coat-color');
  var wizardEyesInput = document.getElementsByName('eyes-color');
  var wizardFireballInput = document.getElementsByName('fireball-color');
  var form = setup.querySelector('.setup-wizard-form');

  // Выбор случайного элемента из массива
  var randomElementArray = function (nameArray) {
    var number = Math.floor(Math.random() * nameArray.length);
    return number;
  };

  // Изменение цвета элемента
  var changeColor = function (element, colorArray, input) {
    element.addEventListener('click', function () {
      var color = colorArray[randomElementArray(colorArray)];
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      input[0].value = color;
    });
  };

  // Изменение параметров мага
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  setup.querySelector('.setup-similar').classList.remove('hidden');

  // Изменение цвета мантии по клику
  changeColor(wizardCoat, COAT_COLOR, wizardCoatInput);

  // Изменение цвета глаз по клику
  changeColor(wizardEyes, EYES_COLOR, wizardEyesInput);

  // Изменение цвета файрболла по клику
  changeColor(wizardFireball, FIREBALL_COLOR, wizardFireballInput);

  // Листенер на кнопку Сохранить
  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), function () {
      setup.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  });

  // Обработчик успешной загрузки магов с сервера
  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  // Обработчик ошибки соединения с сервером
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(successHandler, errorHandler);

})();
