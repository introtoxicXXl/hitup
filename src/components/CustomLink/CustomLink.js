import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './CustomLink.css';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className='text-center mb-3'>
      <Link className={`custom-link ${match ? 'active' : ''}`}
        style={{
          color: match && '#4b31bf'
        }}
        to={to}>
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;