import React, { useReducer } from "react";
import "./style.css";

const initialState = { name: "", email: "", subject: "", message: "" };

const formReducer = (state, action) => {
  switch (action.type) {
    case "setName": {
      return { ...state, name: action.nextName };
    }
    case "setEmail": {
      return { ...state, email: action.nextEmail };
    }
    case "setSubject": {
      return { ...state, subject: action.nextSubject };
    }
    case "setMessage": {
      return {...state, message: action.nextMessage};
    }
    case "resetForm": {
      return initialState;
    }
    default:
      return state;
  }
};


const Contact = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  
  const onSubmitForm =(e)=>{
    e.preventDefault();
    dispatch({type: 'resetForm', initialState});

    console.log("Enviando...");
  };


  return (
    <>
      <h1 className="title">Contato</h1>
      <div className="global-section">
        <p>
          Esta é uma seção disponibilizada para que você possa entrar em contato
          para dúvidas gerais sobre arte, e galerias. Basta preencher o
          formulário que em breve retornaremos seu e-mail.
        </p>
      </div>
      <div className="contact">
        <form onSubmit={onSubmitForm} className="contact-form">
          <input
            value={state.name}
            onChange={(e)=> dispatch({type: 'setName', nextName: e.target.value})}
            type="text"
            placeholder="Nome"
            id="nome"
            name="name"
            required
          />
          <input
            value={state.email}
            onChange={(e)=> dispatch({type: 'setEmail', nextEmail: e.target.value})}
            type="email"
            placeholder="e-mail"
            id="email"
            name="email"
            required
          />
          <input
            value={state.subject}
            onChange={(e)=> dispatch({type: 'setSubject', nextSubject: e.target.value})}
            type="text"
            placeholder="Assunto"
            id="assunto"
            name="subject"
            required
          />
          <label>Mensagem:</label>
          <textarea 
            value={state.message} 
            onChange={(e)=> dispatch({type: 'setMessage', nextMessage: e.target.value})} 
            id="mensagem" 
            name="mensagem" 
            required 
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
