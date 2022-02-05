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

  $('#mercury-out').text(age.mercAge);

  console.log(age.mercAge);
});