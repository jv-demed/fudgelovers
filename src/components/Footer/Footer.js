import styled from 'styled-components';
import FooterCopyIcons from './FooterCopyIcons';
import FooterInfo from './FooterInfos';

const FooterStyled = styled.footer`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primaryDark};
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    padding-top: 20px;
    @media(max-width: 650px){
        flex-direction: column;
        gap: 20px;
    }
`

export default function Footer(){
    return(
        <FooterStyled className='container'>
            <FooterCopyIcons />
            <FooterInfo />
        </FooterStyled>
    )
}