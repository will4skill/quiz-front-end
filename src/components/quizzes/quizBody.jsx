import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const QuizBody = ({ quiz, current_quiz, index, category }) => {
  const btn = "btn-sm btn btn-";
  const fa = "fa fa-";
  const badge = "ml-1 badge badge-secondary";

  function getCSSClass(quiz, current_quiz) {
    return quiz === current_quiz ? "custom-show" : "custom-hide-2"
  }

  return (
    <div>
      <div className={getCSSClass(quiz, current_quiz)}>
        <div className="card-body">
          <h5 className="card-title">Description: </h5>
          <p className="card-text">{quiz.description}</p>
          <h5 className="card-title">Difficulty: </h5>
          <p className="card-text">{quiz.difficulty}</p>
          <h5 className="card-title">Category: </h5>
          <p className="card-text">{category}</p>
          <Link to={`/quizzes/${quiz.id}/show`} className={`${btn}success mx-1`}>
            See Questions
          </Link>
        </div>
      </div>
    </div>
  );
};

QuizBody.propTypes = {
  quiz: PropTypes.object.isRequired,
  current_quiz: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
};

export default QuizBody;