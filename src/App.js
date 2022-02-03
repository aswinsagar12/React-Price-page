import Nav from "./components/Nav";
import "./App.css";
import styled from "styled-components";
import Pricing from "./components/Pricing";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Nav />
      <Title text="Publish Flawlessly. Analyze Effortlessly. Engage Authentically." />
      <MainContainer>
        <Pricing
          headerText={"Free"}
          contentText={
            "Publishing tools for individuals getting started with social media"
          }
          currency="$"
          duration="m"
          price={0}
          subtitle="per social channel"
          priceText="Build"
          priceDescription="Manage up to three channels"
          buttonContent="Get started"
          data={[
            { value: true, text: "Basic publishing tools" },
            { value: true, text: "Landing page builder" },

          ]}
        />
        <Pricing
          headerText={"Essentials"}
          contentText={
            "Publishing, analytics & engagement tools for social media geeks."
          }
          currency="$"
          duration="m"
          price={6}
          subtitle="per social channel"
          priceText="Build"
          priceDescription="Add unlimited channels ($6/mo/each)"
          buttonContent="Try free for 14-days"
          data={[
            { value: true, text: "Planning & publishing tools" },
            { value: true, text: "Analytics tools" },
            { value: true, text: "Engagement tools" },
            { value: true, text: "Landing page builder" },

          ]}
        />
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
`;
export default App;
