import React from 'react';

const MySelect = ({ options, defaultValue, value, onChangeSort }) => {
  return (
    <select onChange={e => onChangeSort(e.target.value)} value={value}>
      <option disabled={true} value="">
        {defaultValue}
      </option>
      {options.map(option => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
