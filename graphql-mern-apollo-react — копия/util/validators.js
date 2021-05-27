module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Нікнейм має бути не порожнім';
  }
  if (email.trim() === '') {
    errors.email = 'Email має бути не порожнім';
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = 'Email must be a valid email address';
    }
  }
  if (password === '') {
    errors.password = 'Пароль має бути не порожнім';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Неправильний пароль';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Нікнейм має бути не порожнім';
  }
  if (password.trim() === '') {
    errors.password = 'Пароль має бути не порожнім';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};
