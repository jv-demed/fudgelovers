import styled from 'styled-components';
import { AiOutlineTrademarkCircle } from 'react-icons/ai';
import { IconWhatsapp, IconInstagram, IconFacebook } from '../Globals/SocialMedias';
import IconKyte from '../Globals/IconKyte';

const FooterCopyIconsStyled = styled.div`
    .icons{
        display: flex;
        gap: 10px;
        margin-top: 10px
    }
    @media(max-width: 650px){
        .icons{
            justify-content: center;
        }
    }
`

export default function FooterCopyIcons(){
    return(
        <FooterCopyIconsStyled>
            <span className='footer'>
                Desenvolvido por <b>Fudge Lovers</b>.
                <br />Todos os direitos reservados 
                <AiOutlineTrademarkCircle />
            </span>
            <div className='icons'>
                <IconWhatsapp size={18} />
                <IconInstagram size={18} />
                <IconFacebook size={18} />
                <IconKyte size={18} />
            </div>
        </FooterCopyIconsStyled>
    )
}