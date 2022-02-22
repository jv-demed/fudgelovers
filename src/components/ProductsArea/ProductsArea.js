import styled from 'styled-components';
import SectionTitle from '../Globals/SectionTitle';
import Products from './Products';

const ProductsAreaStyled = styled.div`
    background-color: ${({ theme }) => theme.palette.secondary};
`

export default function ProductsArea(){
    return(
        <ProductsAreaStyled id='products' className='container section'>
            <SectionTitle>DESTAQUES</SectionTitle>
            <Products />
        </ProductsAreaStyled>
    )
}