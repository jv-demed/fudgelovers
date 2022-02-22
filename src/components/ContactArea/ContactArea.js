import styled from 'styled-components';
import SectionTitle from '../Globals/SectionTitle';
import FormEmail from './FormEmail';
import SocialMediaBox from './SocialMediaBox';

const ContactAreaStyled = styled.div`
    background-color: ${({ theme }) => theme.palette.primary};
    .content{
        display: flex;
        gap: 15px;
    }
    @media(max-width: 650px){
        .content{
            flex-direction: column;
        }
    }
`

export default function ContactArea(){
    return(
        <ContactAreaStyled id='contact' className='container section'>
            <SectionTitle>CONTATO</SectionTitle>
            <div className='content'>
                <FormEmail />
                <SocialMediaBox />
            </div>
        </ContactAreaStyled>
    )
}