document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var constraints = {
    creditCard: {
      format: {
        pattern: /^\d{10}$/, // 10-digit number pattern for credit card
        message: "Invalid credit card number. Please enter a 10-digit number."
      }
    },
    cvv: {
      format: {
        pattern: /^\d{3}$/, // 3-digit number pattern for CVV
        message: "Invalid CVV. Please enter a 3-digit number."
      }
    }
  };  

  // Validation using HTML5 attributes
  document.getElementById('school-form').addEventListener('submit', function (event) {
    if (!event.target.checkValidity()) {
      event.preventDefault();
    }
  });

  document.getElementById('personal-form').addEventListener('submit', function (event) {
    if (!event.target.checkValidity()) {
      event.preventDefault();
    }
  });

  document.getElementById('payment-form').addEventListener('submit', function (event) {
    if (!event.target.checkValidity()) {
      event.preventDefault();
    }
  });

  // Validation using Validate.js
  var schoolValidation = new Validate(document.getElementById('school-form'));
  var personalValidation = new Validate(document.getElementById('personal-form'));
  var paymentValidation = new Validate(document.getElementById('payment-form'));
});
