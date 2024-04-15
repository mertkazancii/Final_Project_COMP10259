document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('textName');
  const lastName = document.getElementById('textLname');
  const email = document.getElementById('textMail');
  const date = document.getElementById('textDate');
  const phone = document.getElementById('textPhone');
  const message = document.getElementById('textMessage');

  if (firstName.value.length < 5) {
    alert('First name should be at least 5 characters.');
    return;
  }

  if (lastName.value.length < 5) {
    alert('Last name should be at least 5 characters.');
    return;
  }

  if (!email.value.includes('@')) {
    alert('Email should contain the domain name (with ‘@’).');
    return;
  }

  const dateParts = date.value.split('/');
  if (dateParts.length!== 3 || dateParts[0].length!== 2 || dateParts[1].length!== 2 || dateParts[2].length!== 4) {
    alert('Date must have the appropriate format (dd/mm/yy).');
    return;
  }

  if (phone.value.length!== 10) {
    alert('Phone must contain 10 digits.');
    return;
  }

  if (message.value.length < 50) {
    alert('Message must be of at least 50 alphabets.');
    return;
  }

  document.getElementById('contactForm').submit();
});
$(document).ready(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('.header').addClass('fixed');
      } else {
          $('.header').removeClass('fixed');
      }
  });
});
