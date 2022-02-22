import styled from "styled-components";
import { slogans } from '../../data/infos';
 
const WelcomeTextStyled = styled.div`
    h2{
        margin-bottom: 15px;
    }
    @media(max-width: 650px){
        span{
            display: none;
        }
    }
`

export default function WelcomeText(){
    return(
        <WelcomeTextStyled>
            <h2>{slogans.title}</h2>
            <span>{slogans.subtitle}</span>
        </WelcomeTextStyled>
    )
}