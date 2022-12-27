// escribir rafc + tab para crear el react functional component
import React from 'react';
import PropTypes from 'prop-types';

//si la funciones es async da error porque regresa una Promise
const getNombre = () => {
    return "Mario";
};

const newMessage = {
    message: "Error",
    detail: "An error has happen!!"
}

export const FirstApp = ({title, subtitle, name}) => {
    //la funcion getNombre() podria estar aqui, pero al colocarse por fuera,
    //solo se carga en memoria la primera vez.
  // if (!title) {
  //   throw new Error('El title no existe.');
  // }
  return (
    // <Fragment></Fragment>
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{ subtitle }</p>
      <p>{name}</p>
      <div>{name}</div>
      
    </>
    
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  // title: 'No hay título',
  subtitle: 1234,
  name: 'No hay nombre'
}