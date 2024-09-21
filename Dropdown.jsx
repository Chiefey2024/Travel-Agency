import React, { useState } from 'react';
import './Dropdown.css';
import { Dropdown as BootstrapDropdown, Form } from 'react-bootstrap';

const Dropdown = ({ label, options }) => {
  const [value, setValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option) => {
    setSelectedOption(option);
    setValue(''); // Reset the filter input
  };

  return (
    <>
      <label className='item-search-label'>{label}</label>
      <BootstrapDropdown className='dropdown-custom' onSelect={handleSelect}>
        <BootstrapDropdown.Toggle  id="dropdown-custom-components">
          <span>{selectedOption || 'Select an option'}</span>
          
        </BootstrapDropdown.Toggle>
        <BootstrapDropdown.Menu>
          <Form.Control
            autoFocus
            className="my-1"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {options
              .filter(option => !value || option.toLowerCase().startsWith(value.toLowerCase()))
              .map(option => (
                <BootstrapDropdown.Item key={option} onClick={() => handleSelect(option)}
                
                >
                  {option}
                </BootstrapDropdown.Item>
              ))}
          </ul>
        </BootstrapDropdown.Menu>
      </BootstrapDropdown>
    </>
  );
};

export default Dropdown;
