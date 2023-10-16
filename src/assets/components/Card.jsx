import styled from "styled-components";

const Container = styled.div`
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 30% 60% 10%;
padding: 10px;
gap: 5px;
width: 50%;
height:100%;
box-shadow: 2px 2px 10px 1px;
border-radius: 10px;
margin: 0 auto;
background-color: lightgrey;
box-sizing:border-box;


`;

const Image = styled.img`
width: 100%;
height: 100%;
grid-area: 1 / 1 / 3 / 2;
border-radius: 10px;
box-shadow: 0px 0px 5px 0px;
`;

const Title = styled.h1`
height: 20vh;
margin: 0;
font-size: 2.5rem;
text-align: center;
font-family: Verdana;

`;

const Description = styled.p`
grid-area: 2/2/3/3;
text-align: center;
font-size: 1.2rem;
margin: auto;
width: auto;
height:100% ;
`;

const Bouton = styled.button`
grid-area: 3/1/4/3;
margin-bottom: 5px;
border-radius: 10px;
background-color: grey;
color: white
`;

const clickToBuy = () => {alert("Tu ne peux pas acheter cette chienne, car c'est le mienne :)!")}
const Card = () => {
    return (
        <Container>
            <Image src="https://cdn.pixabay.com/photo/2020/02/17/11/53/dog-4856266_1280.jpg" alt="Husky sibérien" />
       
            <Title>Husky Sibérien</Title>
            <Description>De taille moyenne, le Husky Sibérien est un chien à l’allure élégante et souple. Hyperactif, il sert traditionnellement de chien de traîneau. C’est un chien qui sait se montrer indépendant, mais il n’apprécie pas la solitude pour autant.</Description>
            <Bouton onClick={clickToBuy}>Acheter</Bouton>
        
        </Container>
    );
};

export default Card;