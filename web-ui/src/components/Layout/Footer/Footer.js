import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="mt-auto footer p-2 text-center">
      <span>
        {year} - Dayenne Souza
        <a
          aria-label="My Github"
          rel="noopener noreferrer"
          href="https://github.com/dayesouza"
          target="_blank"
        >
          <FontAwesomeIcon className="mx-2" icon={['fab', 'github']} />
        </a>
        <a
          aria-label="My Website"
          rel="noopener noreferrer"
          href="http://dayesouza.github.io/"
          target="_blank"
        >
          <FontAwesomeIcon className="mx-2" icon="globe" />
        </a>
      </span>
    </div>
  );
}
