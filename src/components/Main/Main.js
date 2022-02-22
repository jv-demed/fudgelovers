import styled from 'styled-components';
import WelcomeText from './WelcomeText';
import BtnArea from './BtnArea';
import { backgrounds } from '../../data/images';

const MainStyled = styled.div`
    background-attachment: fixed;
    background-image: url(${backgrounds.main});
    background-position: top;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;
    @media(max-width: 650px){
        background-attachment: scroll;
    }
`

export default function Main(){
    return(
        <MainStyled className='container'>
                <WelcomeText />
                <BtnArea />
        </MainStyled>
    )
}