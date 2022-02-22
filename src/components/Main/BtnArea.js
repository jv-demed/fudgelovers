import styled from "styled-components";
import { kyte } from '../../data/infos';
import { BiShoppingBag } from 'react-icons/bi';
import Btn from '../Globals/Btn';

const BtnAreaStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

export default function BtnArea(){
    return(
        <BtnAreaStyled>
            <a href={kyte.link} target='_blank'>
                <Btn>
                    FAZER PEDIDO 
                    <BiShoppingBag 
                        className='icon-right' 
                        size={25} 
                    />
                </Btn>
            </a>
        </BtnAreaStyled>
    )
}