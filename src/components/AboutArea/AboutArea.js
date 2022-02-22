import styled from 'styled-components';
import SectionTitle from '../Globals/SectionTitle';
import AboutBox from './AboutBox';

const AboutAreaStyled = styled.div`
    background-attachment: fixed;
    background-image: url(${({ theme }) => theme.bg.main});
    background-position: top;
    background-size: cover;
    @media(max-width: 650px){
        background-attachment: scroll;
    }
`

export default function AboutArea(){
    return(
        <AboutAreaStyled id='about' className='container section'>
            <SectionTitle>SOBRE NÓS</SectionTitle>
            <AboutBox />
        </AboutAreaStyled>
    )
}