import React from 'react';
import propTypes from 'prop-types';

function ToggleEditor({ toggle, page, setPage }) {
  return (
    <>
      {toggle && (
        <button
          type="button"
          className="absolute top-2 left-[45%] transform -translate-x-1/2 font-bold font-display text-lg h-7 w-24 bg-blue-500 text-center flex justify-center"
          onClick={() => setPage(page === 'editor' ? 'preview' : 'editor')}
        >
          {page === 'editor' ? 'Preview' : 'Editor'}
        </button>
      )}
      <div />
    </>
  );
}

ToggleEditor.propTypes = {
  toggle: propTypes.bool.isRequired,
  page: propTypes.string.isRequired,
  setPage: propTypes.func.isRequired,
};

export default ToggleEditor;
