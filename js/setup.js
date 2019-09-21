'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
console.log('.setup remove hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтотон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [
  {
    name: WIZARD_NAMES[Math.floor(Math.random()*WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAME[Math.floor(Math.random()*WIZARD_SURNAME.length)],
    coatColor: COAT_COLOR[Math.floor(Math.random()*COAT_COLOR.length)],
    eyesColor: EYES_COLOR[Math.floor(Math.random()*EYES_COLOR.length)],
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random()*WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAME[Math.floor(Math.random()*WIZARD_SURNAME.length)],
    coatColor: COAT_COLOR[[Math.floor(Math.random()*COAT_COLOR.length)]],
    eyesColor: EYES_COLOR[[Math.floor(Math.random()*EYES_COLOR.length)]],
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random()*WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAME[Math.floor(Math.random()*WIZARD_SURNAME.length)],
    coatColor: COAT_COLOR[[Math.floor(Math.random()*COAT_COLOR.length)]],
    eyesColor: EYES_COLOR[[Math.floor(Math.random()*EYES_COLOR.length)]],
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random()*WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAME[Math.floor(Math.random()*WIZARD_SURNAME.length)],
    coatColor: COAT_COLOR[[Math.floor(Math.random()*COAT_COLOR.length)]],
    eyesColor: EYES_COLOR[[Math.floor(Math.random()*EYES_COLOR.length)]],
  }
];


for (var i = 0; i < wizards.length; i++) {
  console.log(i);
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  console.log('глаза ' + wizards[i].eyesColor);
  console.log('мантия ' + wizards[i].coatColor);
  similarListElement.appendChild(wizardElement);
}

userDialog.querySelector('.setup-similar').classList.remove('hidden');
console.log('.setup-similar remove hidden');

