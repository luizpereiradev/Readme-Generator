import React from 'react';
import PropTypes from 'prop-types';

import CreatableSelect from 'react-select/creatable';

function SelectLanguages({ setValue }) {
  const programationLanguagesObj = [
    {
      label: 'javascript',
      value: 'javascript',
    },
    {
      label: 'java',
      value: 'java',
    },
    {
      label: 'python',
      value: 'python',
    },
    {
      label: 'php',
      value: 'php',
    },
    {
      label: 'c',
      value: 'c',
    },
    {
      label: 'csharp',
      value: 'csharp',
    },
    {
      label: 'cplusplus',
      value: 'cplusplus',
    },
    {
      label: 'ruby',
      value: 'ruby',
    },
    {
      label: 'go',
      value: 'go',
    },
    {
      label: 'swift',
      value: 'swift',
    },
    {
      label: 'kotlin',
      value: 'kotlin',
    },
    {
      label: 'rust',
      value: 'rust',
    },
    {
      label: 'scala',
      value: 'scala',
    },
    {
      label: 'typescript',
      value: 'typescript',
    },
    {
      label: 'r',
      value: 'r',
    },
    {
      label: 'perl',
      value: 'perl',
    },
    {
      label: 'lua',
      value: 'lua',
    },
    {
      label: 'haskell',
      value: 'haskell',
    },
    {
      label: 'erlang',
      value: 'erlang',
    },
    {
      label: 'react',
      value: 'react',
    },
    {
      label: 'angular',
      value: 'angular',
    },
    {
      label: 'vue',
      value: 'vue',
    },
    {
      label: 'node',
      value: 'node',
    },
    {
      label: 'django',
      value: 'django',
    },
    {
      label: 'laravel',
      value: 'laravel',
    },
    {
      label: 'spring',
      value: 'spring',
    },
    {
      label: 'express',
      value: 'express',
    },
    {
      label: 'flask',
      value: 'flask',
    },
    {
      label: 'symfony',
      value: 'symfony',
    },
    {
      label: 'rails',
      value: 'rails',
    },
    {
      label: 'adonis',
      value: 'adonis',
    },
    {
      label: 'next',
      value: 'next',
    },
    {
      label: 'nuxt',
      value: 'nuxt',
    },
    {
      label: 'gatsby',
      value: 'gatsby',
    },
    {
      label: 'bootstrap',
      value: 'bootstrap',
    },
    {
      label: 'tailwind',
      value: 'tailwind',
    },
    {
      label: 'material',
      value: 'material',
    },
    {
      label: 'semantic',
      value: 'semantic',
    },
    {
      label: 'bulma',
      value: 'bulma',
    },
    {
      label: 'ant',
      value: 'ant',
    },
    {
      label: 'ionic',
      value: 'ionic',
    },
    {
      label: 'flutter',
      value: 'flutter',
    },
    {
      label: 'xamarin',
      value: 'xamarin',
    },
    {
      label: 'reactnative',
      value: 'reactnative',
    },
    {
      label: 'nativescript',
      value: 'nativescript',
    },
    {
      label: 'cordova',
      value: 'cordova',
    },
    {
      label: 'ionic',
      value: 'ionic',
    },
    {
      label: 'electron',
      value: 'electron',
    },
    {
      label: 'unity',
      value: 'unity',
    },
    {
      label: 'unreal',
      value: 'unreal',
    },
    {
      label: 'cocos',
      value: 'cocos',
    },
    {
      label: 'libgdx',
      value: 'libgdx',
    },
    {
      label: 'pygame',
      value: 'pygame',
    },
    {
      label: 'panda3d',
      value: 'panda3d',
    },
  ];
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
      Tecnologias usadas:
      <CreatableSelect
        name="tec"
        isMulti
        isRequired
        options={programationLanguagesObj}
        onChange={(e) => setValue((atual) => ({ ...atual, tec: e.map((lang) => lang.value) }))}
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: '#fff',
            color: '#000',
            borderColor: '#000',
            width: '101%',
          }),
          option: (base) => ({
            ...base,
            color: '#000',
          }),
          multiValue: (base) => ({
            ...base,
            backgroundColor: '#000',
          }),
          multiValueLabel: (base) => ({
            ...base,
            color: '#fff',
          }),
          multiValueRemove: (base) => ({
            ...base,
            color: '#fff',
          }),
        }}
      />
    </label>
  );
}

SelectLanguages.propTypes = {
  setValue: PropTypes.func.isRequired,
};
export default SelectLanguages;
