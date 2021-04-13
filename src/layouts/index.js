import { useState } from 'react';
import styles from './index.css';
var CryptoJS = require("crypto-js");

function encrypt(text, password) {
  // Encrypt
  let ciphertext = CryptoJS.AES.encrypt(text, password).toString();
  return ciphertext;
}

function decrypt(text, password) {
  // Decrypt
  let bytes = CryptoJS.AES.decrypt(text, password);
  let originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}

function BasicLayout(props) {
  const [inputValue, setInputValue] = useState();
  const [outputValue, setOutputValue] = useState();
  const [password, setPassword] = useState();
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>AES tools made by molin</h1>
      <h3>加密前/解密后:</h3>
      <textarea value={inputValue} onChange={e => setInputValue(e.target.value)} rows="10" cols="100" />
      <h3>Input Password:</h3>
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
      <button style={{ marginLeft: "20px" }} onClick={()=>{
        let ret = encrypt(inputValue, password);
        setOutputValue(ret);
      }}>加密↓</button>
      <button style={{ marginLeft: "20px" }} onClick={()=>{
        let ret = decrypt(outputValue, password);
        setInputValue(ret);
      }}>解密↑</button>
      <h3>加密后/解密前:</h3>
      <textarea value={outputValue} onChange={e => setOutputValue(e.target.value)} rows="10" cols="100" />
    </div>
  );
}

export default BasicLayout;
