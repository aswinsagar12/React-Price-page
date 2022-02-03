import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Pricing = ({
  headerText,
  currency,
  price,
  duration,
  subtitle,
  priceText,
  buttonContent,
  contentText,
  priceDescription,
  data,
}) => {
  return (
    <div className="container">
      <Header>{headerText}</Header>
      <Content>{contentText}</Content>
      <PricingContainer>
        <PriceContainer>
          <CurrencyContainer>
            <span>{currency}</span>
          </CurrencyContainer>
          <Price>
            <span>{price}</span>
          </Price>
          <Duration>
            <span>{duration === "m" ? "/mo" : "/yr"}</span>
          </Duration>
        </PriceContainer>
        <SubTitle>
          <h4>{subtitle}</h4>
        </SubTitle>
        <PriceText>
          <h5>{priceText}</h5>
        </PriceText>
        <PriceDescription>{priceDescription}</PriceDescription>
      </PricingContainer>
      <ButtonContainer>
        <Button>{buttonContent}</Button>
      </ButtonContainer>
      {data&&(

      <DataContainer>
        <ul>
          {data.map((dt, index) => (
            <li key={index}>
              {dt.value ? (
                <FaCheck className="true" />
              ) : (
                <ImCross className="false" />
              )}
              {dt.text}
            </li>
          ))}
        </ul>
      </DataContainer>
      )}
    </div>
  );
};

const Header = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 0.1px;
  line-height: 44px;
  text-decoration: none solid rgb(0, 0, 0);
  text-align: left;
  word-spacing: 0px;
  height: 44px;
  width: 328px;
  margin: 40px 20px 0px 20px;
`;
const Content = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  letter-spacing: 0.1px;
  line-height: 24px;
  text-decoration: none solid rgb(99, 99, 99);
  text-align: left;
  word-spacing: 0px;
  color: #636363;
  margin: 20px;
  display: flex;
`;
const PricingContainer = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  margin-top: 5px;
  margin-left: 20px;
`;
const PriceContainer = styled.div`
  display: flex;
`;
const CurrencyContainer = styled.div`
margin-top:0.5rem;
margin-right0.2rem ;
span{
  font-family: Poppins, sans-serif;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.1px;
  line-height: 34px;
  text-decoration: none solid rgb(0, 0, 0);
  text-align: left;
  word-spacing: 0px;
}
`;

const Price = styled.div`
  span {
    font-family: Poppins, sans-serif;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 0.1px;
    line-height: 34px;
    text-decoration: none solid rgb(0, 0, 0);
    text-align: left;
    word-spacing: 0px;
  }
`;
const Duration = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.1px;
  line-height: 34px;
  text-decoration: none solid rgb(0, 0, 0);
  text-align: left;
  word-spacing: 0px;
`;
const SubTitle = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 0.1px;
  line-height: 30.4px;
  text-decoration: none solid rgb(0, 0, 0);
  text-align: left;
  word-spacing: 0px;
`;
const PriceText = styled.div`
  font-size: 14.4px;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.1px;
  line-height: 27.36px;
  text-decoration: none solid rgb(0, 0, 0);
  text-align: left;
  word-spacing: 0px;
`;
const PriceDescription = styled.div`
  font-size: 14.4px;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.1px;
  line-height: 27.36px;
  text-decoration: none solid rgb(0, 0, 0);
  text-align: left;
  word-spacing: 0px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  margin: 20px;
  height: 50px;
  width: 328px;
  background: #2c4bff;
  border-radius: 5px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  font-size: 1.2rem;
  cursor: pointer;
  color: white;
  margin-top: 10px;
`;

const DataContainer = styled.div`
 ul{
   list-style-type:none;
   margin-top:20px;
   li{
     display:flex;
     align-items:center;
     margin:20px 0px 20px 20px;
     svg{
       margin-right:0.5rem;
       font-size:0ch.8rem;

     }margin-bottom:1rem;

     }
   }
 }



  `;

export default Pricing;
