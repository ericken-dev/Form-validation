
    const form = document.getElementById('validationForm');
    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('phone-error');
    const emailError = document.getElementById('Email-error');
    const messageError = document.getElementById('message-error');
    const subError = document.getElementById('sub-error');

    function validName() {
      const name = document.getElementById('cont-name').value.trim();
      if (name.length === 0) {
        nameError.textContent = 'Name is required';
        return false;
      }
      if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        nameError.textContent = 'Please enter your full name';
        return false;
      }
      nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
      nameError.className = 'success';
      return true;
    }

    function validPhone() {
      const phone = document.getElementById('cont-phone').value.trim();
      if (phone.length === 0) {
        phoneError.textContent = 'Phone number is required';
        return false;
      }
      if (!phone.match(/^\d{10}$/)) {
        phoneError.textContent = 'Please enter a valid 10-digit phone number';
        return false;
      }
      phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
      phoneError.className = 'success';
      return true;
    }

    function validEmail() {
      const email = document.getElementById('cont-email').value.trim();
      if (email.length === 0) {
        emailError.textContent = 'Email is required';
        return false;
      }
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
      }
      emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
      emailError.className = 'success';
      return true;
    }

    function validMessage() {
      const message = document.getElementById('cont-message').value.trim();
      const required = 30;
      const left = required - message.length;
      if (left > 0) {
        messageError.textContent = `${left} more characters required`;
        return false;
      }
      messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
      messageError.className = 'success';
      return true;
    }

    function validForm(e) {
      e.preventDefault();
      const isNameValid = validName();
      const isPhoneValid = validPhone();
      const isEmailValid = validEmail();
      const isMessageValid = validMessage();

      if (isNameValid && isPhoneValid && isEmailValid && isMessageValid) {
        alert('Form submitted successfully!');
        form.reset();
        [nameError, phoneError, emailError, messageError].forEach(error => {
          error.textContent = '';
          error.className = 'error';
        });
      } else {
        subError.textContent = 'Please fix the errors to submit';
        setTimeout(() => {
          subError.textContent = '';
        }, 3000);
      }
    }

    form.addEventListener('submit', validForm);
    document.getElementById('cont-name').addEventListener('input', validName);
    document.getElementById('cont-phone').addEventListener('input', validPhone);
    document.getElementById('cont-email').addEventListener('input', validEmail);
    document.getElementById('cont-message').addEventListener('input', validMessage);
  

