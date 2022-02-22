import styled from 'styled-components';
import { about } from '../../data/infos';
import { logos } from '../../data/images';

const AboutBoxStyled = styled.div`
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    border-radius: 5px;
    display: flex;
    gap: 20px;
    padding: 20px;
    img{
        width: 200px;
    }
    @media(max-width: 650px){
        flex-direction: column-reverse;
        img{
            margin: 15px 0;
        }
    }
`

export default function AboutBox(){
    return(
        <AboutBoxStyled>
            <span>{about.about}</span>
            <img src={logos.logoFull} />
        </AboutBoxStyled>
    )
}