import React, { useState } from 'react';

function Relationship() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [compatibility, setCompatibility] = useState(null);
  const [specialMessage, setSpecialMessage] = useState('');

  const getNameValue = (name) => {
    return name
      .normalize('NFD') // Türkçe karakter uyumunu sağlamak için normalize et
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase()
      .split('')
      .reduce((acc, char) => acc + (char.charCodeAt(0) - 64), 0);
  };

  const calculateCompatibility = (e) => {
    e.preventDefault();

    const specialPairs = [
      { name1: 'Şefik', name2: 'Meryem' },
      { name1: 'İbrahim', name2: 'İrem' },
      { name1: 'Elif', name2: 'Emre' },
    ];

    const isSpecialPair = specialPairs.some(
        (pair) =>
          (pair.name1.localeCompare(name1, 'tr', { sensitivity: 'base' }) === 0 &&
            pair.name2.localeCompare(name2, 'tr', { sensitivity: 'base' }) === 0) ||
          (pair.name1.localeCompare(name2, 'tr', { sensitivity: 'base' }) === 0 &&
            pair.name2.localeCompare(name1, 'tr', { sensitivity: 'base' }) === 0)
      );
      

    if (isSpecialPair) {
      setSpecialMessage('Evleneceksiniz!');
      setCompatibility(null);
      return;
    } else {
      setSpecialMessage('');
    }

    const value1 = getNameValue(name1);
    const value2 = getNameValue(name2);
    const totalValue = value1 + value2;

    const compatibility = Math.min(
      100,
      Math.floor((Math.abs(value1 - value2) / totalValue) * 100)
    );
    setCompatibility(compatibility);
  };

  const handleNameChange = (setter) => (e) => {
    setter(e.target.value);
    setCompatibility(null);
    setSpecialMessage('');
  };

  return (
    <div
      className="container text-center"
      style={{
        marginTop: '100px',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h1>İlişki Tahmini</h1>
      <form
        onSubmit={calculateCompatibility}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <input
          type="text"
          placeholder="İsim 1"
          value={name1}
          onChange={handleNameChange(setName1)}
          style={{
            width: '150px',
            fontSize: '16px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd',
          }}
          required
        />
        <input
          type="text"
          placeholder="İsim 2"
          value={name2}
          onChange={handleNameChange(setName2)}
          style={{
            width: '150px',
            fontSize: '16px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd',
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: '10px 15px',
            fontSize: '16px',
            borderRadius: '5px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Tahmin Et
        </button>
      </form>

      {specialMessage && (
        <h4 style={{ marginTop: '20px', color: '#28a745' }}>{specialMessage}</h4>
      )}

      {compatibility !== null && (
        <h4 style={{ marginTop: '20px', color: '#333' }}>
          {name1} ve {name2} arasındaki uyumluluk: <span style={{ fontWeight: 'bold' }}>% {compatibility}</span>
        </h4>
      )}
    </div>
  );
}

export default Relationship;
