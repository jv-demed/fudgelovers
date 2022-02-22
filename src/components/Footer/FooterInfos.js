import styled from 'styled-components';
import { BsPhone, BsHouseDoor } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { RiSuitcaseLine } from 'react-icons/ri';
import { whatsapp, email, infos } from '../../data/infos';

const FooterInfosStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    span{
        align-items: center;
        display: flex;
        gap: 8px;
        justify-content: right;
    }
    @media(max-width: 650px){
        padding-left: 20px;
        span{
            flex-direction: row-reverse;
            justify-content: left;
        }
    }
`

export default function FooterInfos(){
    return(
        <FooterInfosStyled>
            <span className='footer'>
                {whatsapp.whatsappNumberMask}
                <BsPhone size={20} />
            </span>
            <span className='footer'>
                {email.gmail}
                <HiOutlineMail size={20} />
            </span>
            <span className='footer'>
                {infos.cnpj}
                <RiSuitcaseLine size={20} />
            </span>
            <span className='footer'>
                {infos.address}
                <BsHouseDoor size={20} />
            </span>
        </FooterInfosStyled>
    )
}