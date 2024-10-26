import React, { useState, useEffect } from 'react';
import answers from './answers'; // Cevapları içeren diziyi buradan import et

const Questions = () => {
  const [countdown, setCountdown] = useState(5);
  const [randomAnswer, setRandomAnswer] = useState('');
  const [showThinking, setShowThinking] = useState(true);

  useEffect(() => {
    // Geri sayım için bir zamanlayıcı başlat
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          // Rastgele bir cevap seç
          const randomIndex = Math.floor(Math.random() * answers.length);
          setRandomAnswer(answers[randomIndex]);
          setShowThinking(false); // "Düşünüyorum..." mesajını kaldır
          return 0; // Son durumda geri sayımı sıfırla
        }
        return prev - 1; // Sayacı bir azalt
      });
    }, 1000); // Her saniye bir güncelle

    return () => clearInterval(timer); // Temizleme işlemi
  }, []);

  return (
    <div className="container text-center" style={{ marginTop: '100px' }}>
      {showThinking ? (
      <h3 style={{ textAlign: 'center' }}>Düşünüyorum... {countdown}</h3>
      ) : (
        <h4>{randomAnswer}</h4>
      )}
    </div>
  );
};

export default Questions;
