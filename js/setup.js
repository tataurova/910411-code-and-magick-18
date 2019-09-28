'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтотон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

var wizardCoatInput = document.getElementsByName('coat-color');
var wizardEyesInput = document.getElementsByName('eyes-color');
var wizardFireballInput = document.getElementsByName('fireball-color');

// Выбор случайного элемента из массива
var randomElementArray = function (nameArray) {
  var number = Math.floor(Math.random() * nameArray.length);
  return number;
};

// Закрытие окна setup по нажатию ESC
var onPopupEscPress = function(evt) {
  if (evt.keyCode == ESC_KEYCODE) {
      closePopup();
    }
};
// Открытие окна setup
var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress)
};

// Закрытие окна setup
var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// Открытие окна по клику мышки
setupOpen.addEventListener('click', function() {
  openPopup();
});

// Открытие окна по кнопке Enter
setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  };
});

// Закрытие окна по клику мышки
setupClose.addEventListener('click', function() {
  closePopup();
});

// Закрытие окна по кнопке ESC
setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Изменение цвета мантии по клику
wizardCoat.addEventListener('click', function() {
  wizardCoat.style.fill = COAT_COLOR[randomElementArray(COAT_COLOR)];
  wizardCoatInput[0].value = wizardCoat.style.fill;
});

// Изменение цвета глаз по клику
wizardEyes.addEventListener('click', function() {
  wizardEyes.style.fill = EYES_COLOR[randomElementArray(EYES_COLOR)];
  wizardEyesInput[0].value = wizardEyes.style.fill;
});

// Изменение цвета файрболла по клику
wizardFireball.addEventListener('click', function() {
  var color = FIREBALL_COLOR[randomElementArray(FIREBALL_COLOR)];
  wizardFireball.setAttribute('style', 'background: ' + color);
  wizardFireballInput[0].value = color;
});

// Создание массива магов
var wizards = function () {
  var wizardsList = [];
  for (var i = 0; i <= 3; i++) {
    var wizardObject = {
      name: WIZARD_NAMES[randomElementArray(WIZARD_NAMES)] + ' ' + WIZARD_SURNAME[randomElementArray(WIZARD_SURNAME)],
      coatColor: COAT_COLOR[randomElementArray(COAT_COLOR)],
      eyesColor: EYES_COLOR[randomElementArray(EYES_COLOR)],
    };
    wizardsList.push(wizardObject);
  }
  return wizardsList;
};

// Изменение параметров мага
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

// Создание фрагмента с готовыми магами
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards().length; i++) {
  fragment.appendChild(renderWizard(wizards()[i]));
}

// Вставка фрагмента с магами в разметку
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');

