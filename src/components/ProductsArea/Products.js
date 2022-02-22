import styled from 'styled-components';
import ProductBox from './ProductBox';

const ProductsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export default function Welcome(){
    return(
        <ProductsStyled>
            <ProductBox 
                img='https://i.imgur.com/PW1HkWv.jpg' 
                title='Fudges'
                desc='lorem isds sdsjdiso sjdiaojd ijsdijsij isjdioajsd jsdiosaj'
            />
            <ProductBox 
                className='alternative'
                img='https://i.imgur.com/fr1n69V.jpg' 
                title='Caixas Presente'
                desc='lorem isds sdsjdiso sjdiaojd ijsdijsij isjdioajsd jsdiosaj'
            />
            <ProductBox 
                img='https://i.imgur.com/W3Rruwm.jpg' 
                title='Tortas de Sorvete'
                desc='lorem isds sdsjdiso sjdiaojd ijsdijsij isjdioajsd jsdiosaj'
            />
        </ProductsStyled>
    )
}