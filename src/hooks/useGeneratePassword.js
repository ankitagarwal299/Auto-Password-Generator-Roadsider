import React, { useState } from 'react';

function useGeneratePassword() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(4);

  function generatePassword(checkboxData, length) {
   

    let output = '';
    let charSet = '';

    let selectedOptions = checkboxData.filter((chk) => chk.checked);
    if (selectedOptions.length == 0) {
      setError('Select boxes');
      setPassword('');
      return;
    }

    for (let i = 0; i < checkboxData.length; i++) {
      const { type } = checkboxData[i];

      switch (type.toUpperCase()) {
        case 'NUMBER':
          charSet = charSet + '0123456789';
          break;
        case 'LowerCase':
          charSet = charSet + 'abcdefghijklmnopqrstuvwxyz';
          break;
        case 'UpperCase':
          charSet = charSet + 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
          break;
        case 'NUMBER':
          charSet = charSet + '!@#$%^&*()+_?>><"{}][;/.,';
          break;
        default:
          charSet = charSet + '!@#$%^&*()+_?>><"{}][;/.,';
          break;
      }
    }

    for (let i = 0; i < length; i++) {
      output = output + charSet[Math.floor(Math.random() * charSet.length)];
    }

    setPassword(output);
    setError('');
  }

  return { error, password, generatePassword };
}

export default useGeneratePassword;
