import React from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../store/GlobalStorage';

function Input({ label, id, length }) {
  const { newProject: [project, setProject] } = React.useContext(GlobalContext);

  const onChange = (e) => {
    setProject({ ...project, [id]: e.target.value });
  };
  return (
    <label htmlFor={id}>
      <p className="pt-3 pb-1 m-0">{label}</p>
      <input
        className="w-full rounded-xl h-8"
        type="text"
        value={project[id]}
        id={id}
        onChange={onChange}
        maxLength={length}
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
};

export default Input;
