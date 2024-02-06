import React, { useState } from 'react';
import './style.css';
import useGeneratePassword from './hooks/useGeneratePassword';
import Button from './component/Button';
import Checkboxes from './component/Checkboxes';

export default function App() {
  const [length, setLength] = useState(4);
  const [copyStatus, setCopyStatus] = useState(false);

  const [checkboxData, setCheckboxData] = useState([
    { title: 'af', checked: false, type: 'Number' },
    { title: 'bsakjfdnvlsfd', checked: false, type: 'LowerCase' },
    { title: 'csakjfdnvlsfd', checked: false, type: 'UpperCase' },
    { title: 'dsakjfdnvlsfd', checked: false, type: 'Symbol' },
  ]);

  function handleCheckboxClick(e, index) {
    let newCheckboxes = [...checkboxData];
    newCheckboxes[index].checked = !newCheckboxes[index].checked;

    setCheckboxData(newCheckboxes);
  }

  const { error, password, generatePassword } = useGeneratePassword();

  function handleCopy() {
    navigator.clipboard.writeText(password).then(() => {
      console.log('successfully copied');
      alert('successfully copied');
    });

    setCopyStatus((prev) => !prev);

    setTimeout(() => {
      setCopyStatus(false);
    }, 1000);
  }

  return (
    <div className="container">
      <h1>Auto Password Generator | Roadsider</h1>

      <div className="header">
        <div className="title">{password}</div>
        {/* <button className="copy__btn" onClick={() => handleCopy()}>
          {copyStatus ? 'Copied' : 'Copy'}
        </button> */}
        <Button
          title={copyStatus ? 'Copied' : 'Copy'}
          className="copy__btn"
          onClick={() => handleCopy()}
        />
      </div>

      <div className="character__length">
        <p>
          <label>Character length</label>
          <label>{length}</label>
        </p>
        <input
          type="range"
          min="0"
          max="10"
          value={length}
          onChange={(e) => setLength(parseFloat(e.target.value))}
        />
      </div>

      <hr />

      <div className="checkboxes">
        {checkboxData.map((chk, index) => {
          return (
            <Checkboxes
              title={chk.title}
              status={chk.checked}
              onChange={(e) => handleCheckboxClick(e, index)}
            />
          );
        })}
      </div>

      <div className="generate_btn">
        <Button
          className="generate_btn"
          title="Generate Password"
          onClick={() => generatePassword(checkboxData, length)}
        />
      </div>

      {error?.length > 0 && <p className="errMsg">{error}</p>}
    </div>
  );
}
