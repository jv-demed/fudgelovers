import { useRouter } from 'next/router';
import styled from "styled-components";
import Logo from './Logo';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

const HeaderStyled = styled.div`
    align-items: center;  
    background-color: ${({ theme }) => theme.palette.primary};
    display: flex;
    height: 80px;
    justify-content: space-between;
`

export default function Header(){

    const router = useRouter();
    const resetUrl = ()=>{
        router.push('/');
    }

    return(
        <HeaderStyled id='header' className='container'>
            <Logo resetUrl={resetUrl} />
            <MenuDesktop />
            <MenuMobile />
        </HeaderStyled>
    )
}