import styled from 'styled-components';

function PizzaCard(props) {

    const Card = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding:3px;
    margin-left:2rem;
  `;

    const CardHeader = styled.div`
    background-image: url(${props.image});
    height:150px;
    background-size:cover;
  `;

    const CardBody = styled.div`
    padding: 0 0.5rem; 
    text-align:left;
  `;

    const CardBodyTitle = styled.h1`
    font-size:20px;
    margin-top: 1rem;
    margin-bottom 0;
    padding: 0;
    `;

    const CardBodySubTitle = styled.h2`
    font-size:15px;
    margin: 0;
    padding: 0;
    color:#959595;
    font-weight: normal;
  `;

    const CardBodyDesc = styled.p`
    font-size: 15px;
    width: 30ch;
    font-style: italic;
  `;

    const CardBodyBuy = styled.button`
    width: 100%;
    padding: 0.5rem;
    background-color: #9ebd6c;
    border: 1px #8ea16f solid;
    font-weight: bold;
    margin-top: 1rem;
    font-size: 14px;
    color: #0c4a11;
  `;



    return (
        <Card>
            <CardHeader>
            </CardHeader>
            <CardBody>
                <CardBodyTitle>Pizza napolitaine</CardBodyTitle>
                <CardBodySubTitle>13.50€</CardBodySubTitle>
                <CardBodyDesc>
                    La pizza napoletana est le nom d'une spécialité culinaire traditionnelle de la ville de Naples. La pizza napoletana est constituée de tomates, mozzarella, anchois, basilic et d'oignons
                </CardBodyDesc>
                <CardBodyBuy>Acheter</CardBodyBuy>
            </CardBody>
        </Card>
    );
}

export default PizzaCard;