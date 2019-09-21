'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтотон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var randomElementArray = function (nameArray) {
  var number = Math.floor(Math.random() * nameArray.length);
  return number;
};

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

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards().length; i++) {
  fragment.appendChild(renderWizard(wizards()[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

