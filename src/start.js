import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from './background.jpg';

function Start() {
  const navigate = useNavigate();

  const handleQuestionClick = () => {
    navigate('/question');
  };

  const handleRelationshipClick = () => {
    navigate('/relationship');
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <button
        className="btn btn-primary m-2"
        style={{ width: '250px', fontSize: '18px', borderRadius: '30px' }}
        onClick={handleQuestionClick}
      >
        Aklımda Bir Soru Var!
      </button>
      <button
        className="btn btn-success m-2"
        style={{ width: '250px', fontSize: '18px', borderRadius: '30px' }}
        onClick={handleRelationshipClick}
      >
        İlişki Tahmini!
      </button>
    </div>
  );
}

export default Start;
