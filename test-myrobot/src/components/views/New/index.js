import React from 'react';

import { StyledNew } from './style';

const New = () => {
  return (
    <StyledNew>
      <h1 className="new-title">Titulo noticia</h1>
      <ul className="new-data-list">
        <li className="new-data-item new-data-item--author">Autor</li>
        <li className="new-data-item new-data-item--city">Ciudad</li>
        <li className="new-data-item new-data-item--category">Categoría</li>
      </ul>
      <img className="new-image" src="#" alt="imágen"/>      
      <p className="new-description">Descripción de la noticia</p>      
    </StyledNew>
  );
};

export default New;