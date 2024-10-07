import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonComponent from '../Button/BAButton';

export default function Card(props) {

  const { title, description, icon, imageURL, showButton } = props

  return (
    <div className="card">
      <div className="card-header fs-1">
        {imageURL && <img src={imageURL} alt="" />}
        {icon && <FontAwesomeIcon icon={icon} />}
      </div>
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {description && <p className="card-discription">{description}</p>}
        {showButton && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonComponent
            buttonText="Learn More"
            buttonType="contained"
            buttonLink="#"
          />
        </div>
        )}
      </div>
    </div>
  );
};

