/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

function SelectLanguages({ setValue }) {
  const options = [
    { value: 'english', label: 'English' },
    { value: 'portuguese', label: 'Português' },
    { value: 'spanish', label: 'Español' },
    { value: 'french', label: 'Français' },
    { value: 'italian', label: 'Italiano' },
  ];

  return (
    <div className="flex flex-col gap-2">
      <label>
        <p className="pt-3 pb-1 m-0">Select the language of your Readme:</p>
        <Select
          className="w-full rounded-xl h-8"
          options={options}
          defaultValue={options[0]}
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: '#fff',
              color: '#000',
              borderColor: '#000',
              width: '27rem',
            }),
            option: (base) => ({
              ...base,
              color: '#000',
            }),
          }}
          onChange={(e) => setValue((atual) => ({ ...atual, lang: e.value }))}
        />
      </label>
    </div>
  );
}

SelectLanguages.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default SelectLanguages;
