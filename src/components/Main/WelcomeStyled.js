import styled from 'styled-components';

const WelcomeSession = styled.div`
    align-items: center;
    background-attachment: fixed;
    background-image: url(${({ theme }) => theme.bg.main});
    background-position: top;
    background-size: cover;
    display: flex;
    height: 80vh;
    min-height: 80vh;
    padding: 0 120px;
    @media(max-width: 850px){
        padding: 0 65px;
    }
    @media(max-width: 650px){
        justify-content: center;
        padding: 0 20px;
        text-align: left;
        span{
            display: none;
        }
    }
`

export default WelcomeSession;