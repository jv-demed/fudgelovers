import styled from "styled-components";
import { IconFacebook, IconInstagram, IconWhatsapp } from '../Globals/SocialMedias';

const SocialMediaBoxStyled = styled.div`
    padding: 5px;
    width: 50%;
    .boxMedias{
        display: flex;
        gap: 20px;
        justify-content: center;
        margin-top: 10px;
    }
    @media(max-width: 650px){
        margin-top: 10px;
        width: 100%;
        .boxMedias{
            margin-top: 20px;
        }
    }
`

export default function SocialMediaBox(){
    return(
        <SocialMediaBoxStyled>
            <h5>Você também pode entrar em contato através das nossas redes e pelo WhatsApp.</h5>
            <div className='boxMedias'>
                <IconFacebook size={45} />
                <IconInstagram size={45} />
                <IconWhatsapp size={45} />
            </div>
        </SocialMediaBoxStyled>
    )
}