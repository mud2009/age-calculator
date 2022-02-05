import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/age.js';

$('#age').submit(function(event){
  event.preventDefault();
  let userAge = $('#age-input').val();

  let age = new Age(userAge);

  age.calcAge();
  $('#mercuryAge-out').text(age.mercAge);
  $('#venusAge-out').text(age.venAge);
  $('#marsAge-out').text(age.marsAge);
  $('#jupiterAge-out').text(age.jupAge);


});