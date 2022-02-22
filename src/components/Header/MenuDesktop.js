import styled from 'styled-components';

const NavStyled = styled.nav`
    ul{
        display: flex;
        gap: 20px;
    }
    @media(max-width: 650px){
        display: none;
    }
`

export default function MenuDesktop(){
    return(
        <NavStyled>
            <ul>
                <li className='menuItem'>
                    <a href='#products'>Destaques</a>
                </li>
                <li className='menuItem'>
                    <a href='#about'>Sobre Nós</a>
                </li>
                <li className='menuItem'>
                    <a href='#contact'>Contato</a>
                </li>
            </ul>
        </NavStyled>
    )
}