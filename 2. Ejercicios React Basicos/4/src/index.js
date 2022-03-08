import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OrderList from './components/order_list';
//import reportWebVitals from './reportWebVitals';

// 0. guardado de datos simple
const data = {
  title: "Página inicial de Juan Tuesta",
  text_1: "Bienvenido a mi página personal. Soy un alumno de la Universidad de Deusto y esta es mi página inicial, con la lista de mis enlaces favoritos y otra información de interés",
  subtitle_1: "Enlaces favoritos",
  favorites_links: [{name: "Internet", url: "", childrens: ["chrome", "brave", "safari", "firefox"]}, {name: "Google", url: "google.com", childrens: []}, {name: "Aldea global", url: "", childrens: []}, {name: "Manual de HTML", url: "", childrens: []}],
  text_2: "Juan Tuesta, Universidad de Deusto, marzo 2002"
}

const {favorites_links} = data

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <h1 style={{color: "red"}}>PREGUNTAR COMO PODEMOS COLOCAR UNA CONDICION PARA QUE NO SE LE GENERE EL UL INTERNO A LOS QUE NO TIENEN CHILDRENS</h1>
    <h1>{data.title}</h1>
    <p>{data.text_1}</p>
    <h2>{data.subtitle_1}</h2>
    {/* {order_list(data.favorites_links)} */}
    <OrderList array_aux={favorites_links}/>
    <br/>
    <em>{data.text_2}</em>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
