import styled from 'styled-components';
import ProductBox from './ProductBox';
import { kyte, products } from '../../data/infos';

const ProductsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export default function Welcome(){
    return(
        <ProductsStyled>
            <ProductBox 
                img={products.product1Img} 
                title={products.product1}
                desc={products.product1Desc}
                link={kyte.linkFudges}
            />
            <ProductBox 
                img={products.product2Img} 
                title={products.product2}
                desc={products.product2Desc}
                link={kyte.linkBoxes}
            />
            <ProductBox 
                img={products.product3Img} 
                title={products.product3}
                desc={products.product3Desc}
                link={kyte.linkPies}
            />
        </ProductsStyled>
    )
}