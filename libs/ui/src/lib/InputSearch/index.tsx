import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './InputSearch.scss';

export interface InputSearchOption<T> {
  value: string | number | null;
  label: string;
  link?: string;
  model: T;
}

interface InputSearchProps<T> {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: InputSearchOption<T>[];
}

export function InputSearch<T>({
  placeholder,
  onChange,
  options,
}: InputSearchProps<T>) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [options]);

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    switch (event.which) {
      case 13: // Enter key
        if (options.length) {
          const activeOption = options[activeIndex];
          if (activeOption && activeOption.link) {
            navigate(activeOption.link);
          }
          event.preventDefault();
        }
        break;
      case 38: // Up arrow
        setActiveIndex(activeIndex >= 1 ? activeIndex - 1 : 0);
        break;
      case 40: // Down arrow
        setActiveIndex(
          activeIndex < options.length - 1
            ? activeIndex + 1
            : options.length - 1
        );
        break;
    }
  }

  function updateQuery(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e);
  }

  return (
    <div
      className={clsx('input_search dropdown', {
        'is-active': options.length > 0,
      })}
    >
      <div className="input_search_trigger dropdown-trigger">
        <input
          type="text"
          className="input"
          onChange={updateQuery}
          onKeyDown={handleKeyPress}
          placeholder={placeholder}
        />
      </div>
      <div className="dropdown-menu">
        {options.length > 0 && (
          <div className="dropdown-content">
            {options.map((opt, index) => (
              <a
                className={`dropdown-item ${
                  index === activeIndex ? 'is-active' : ''
                }`}
                href={opt.link}
                key={opt.value}
              >
                {opt.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
