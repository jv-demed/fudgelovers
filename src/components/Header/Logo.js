import styled from 'styled-components';
import { logos } from '../../data/images';

const LogoStyled = styled.img`
    cursor: pointer;
    width: 120px;
`

export default function Logo(props){
    return(
        <LogoStyled 
            src={logos.logo} 
            onClick={props.resetUrl}
        />
    )
}