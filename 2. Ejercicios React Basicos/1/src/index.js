import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header';
import Body from './components/body';
import reportWebVitals from './reportWebVitals';

// 0. guardado de datos simple
const data = {
  title_1: "Plato de la semana",
  title_2: "Berenjenas fritas",
  paragraph_1: "Comensales: 4 personas",
  paragraph_2: "Tiempo de reparación: 10 minutos",
  paragraph_3: "Tiempo de cocción: 12 minutos"
}

const first_list = {
  name_list: 'Ingredientes:',
  list1: '4 berenjenas',
  list2: 'Sal',
  list3: 'Pimienta',
  list4: '4 cucharadas de harina y aceite.'
}

const second_list = {
  name_list2: 'Preparación:',
  list5: 'Lavar las berenjenas',
  list6: 'Cortalas en rodajas',
  list7: 'Espolvorearlas con sal',
  list8: 'Dejar que suleten el agua durante 30 minutos.',
  list9: 'Enharizarlas, ponerlas a freir durante 5 minutos en aceite bien caliente.'
}
const {title_1, title_2} = data

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header title_1={title_1} title_2={title_2} />
    <Body object_1={data} object_2={first_list} object_3={second_list} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
