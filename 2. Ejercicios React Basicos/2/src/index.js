import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OrderList from './components/lista';
//import reportWebVitals from './reportWebVitals';

const data = {
  title: "Página inicial de Juan Tuesta",
  text_1: "Bienvenido a mi página personal. Soy un alumno de la Universidad de Deusto y esta es mi página inicial, con la lista de mis enlaces favoritos y otra información de interés",
  subtitle_1: "Enlaces favoritos",
  favorites_links: ["Internet", "Google", "Aldea global", "Manual de HTML"],
  text_2: "Juan Tuesta, Universidad de Deusto, marzo 2002"
}

const {favorites_links} = data

ReactDOM.render(
  <React.StrictMode>
    <h1>{data.title}</h1>
    <p>{data.text_1}</p>
    <h2>{data.subtitle_1}</h2>
    <OrderList lista={favorites_links}/>
    <br/>
    <em>{data.text_2}</em>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
