import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = {
  title_1: "El Noticiero Next University",
  title_2: "Programas de Tecnología",
  sub_title_1: "Desarrollador Web",
  text_1: "<b><em>University</em></b> lanza su programa de formularios <b>'desarrollador web'</b> con la facilidad de capacitar a personas en etc....",
  sub_title_1: "Lorem ipsum",
  text_1: "Lorem Ipsum <b><em>University</em></b> text of the printing and typesetting industry. Lorem Ipsum has <b>'desarrollador web'</b> the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
}

ReactDOM.render(
  <React.StrictMode>
    <h1>{data.title_1}</h1>
    <h2>{data.title_2}</h2>
    <h3>{data.title_2}</h3>
    <div dangerouslySetInnerHTML={{ __html: data.text_1 }} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
