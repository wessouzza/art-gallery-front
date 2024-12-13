import React from "react";
import "./style.css";

const Contact = () => {
  
  return (
    <>
      <h1 className="title">Contato</h1>
      <div className="global-section">
        <p>Esta é uma seção disponibilizada para que você possa entrar em contato
          para dúvidas gerais sobre arte, e galerias. Basta preencher o formulário que
          em breve retornaremos seu e-mail.
        </p>

      </div>
      <div className="contact">
        <form className="contact-form">
          <input type="text" placeholder="Nome" id="nome" name="name" required/>
          <input type="email" placeholder="e-mail" id="email" name="email" required/>
          <input type="text" placeholder="Assunto" id="assunto" name="subject" required/>
          <label>Mensagem:</label>
          <textarea id="mensagem" name="mensagem" required/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
