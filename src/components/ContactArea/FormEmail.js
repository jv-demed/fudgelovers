import { useRef } from 'react';
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { emailJsData } from '../../data/infos';
import Btn from '../Globals/Btn';

const FormEmailStyled = styled.form`
    background-color: rgba(0,0,0,0.2);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    width: 50%;
    input{
        border: none;
        border-radius: 100px;
        height: 32px;
        padding: 0 15px;
    }
    textarea{
        border: none;
        border-radius: 15px;
        height: 150px;
        padding: 5px 15px;
        resize: none;
    }
    @media(max-width: 650px){
        width: 100%;
        .submit{
            width: 100%;
        }
    }
`

export default function FormEmail(){

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();    
        emailjs.sendForm(emailJsData.serviceId, emailJsData.templateId, 
                        form.current, emailJsData.userId)
            .then((result) => {
              console.log(result.text);
              alert(emailJsData.successMessage);
            }, (error) => {
              console.log(error.text);
              alert(emailJsData.failedMessage);
            });
            e.target.reset();
    };

    return(
        <FormEmailStyled ref={form} onSubmit={sendEmail}>
            <input type='text' placeholder='Nome*' name='name' required />
            <input type='email' placeholder='E-Mail*' name='email' required />
            <input type='text' placeholder='Whatsapp' name='whatsapp' />
            <input type='text' placeholder='Assunto' name='subject'/>
            <textarea placeholder='Sua mensagem*' name='message' required />
            <Btn className='submit'>Enviar</Btn>
        </FormEmailStyled>
    )
}