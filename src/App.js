import Nav from "./components/Nav";
import "./App.css";
import styled from "styled-components";
import Pricing from "./components/Pricing";
import Title from "./components/Title";
import PriceDetails from "./components/PriceDetails";
import TotalPlan from "./components/TotalPlan";

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
      {/* <PriceDetails/> */}
      <TotalPlan
        header="Social Network"
        text1="Instagram"
        subText1="Business profiles required."
        dataFree1={[{ value: true }]}
        dataEss1={[{ value: true }]}
        text2="Facebook"
        subText2="Pages and Groups."
        dataFree2={[{ value: true }]}
        dataEss2={[{ value: true }]}
        text3={"Twitter"}
        subText3="Profiles."
        dataFree3={[{ value: true }]}
        dataEss3={[{ value: true }]}
        text4={"TikTok"}
        subText4="Send reminders. Mobile only."
        dataFree4={[{ value: true }]}
        dataEss4={[{ value: true }]}
        text5={"LinkedIn"}
        subText5="Profiles and pages."
        dataFree5={[{ value: true }]}
        dataEss5={[{ value: true }]}
        text6={"Pinterest"}
        subText6="Boards."
        dataFree6={[{ value: true }]}
        dataEss6={[{ value: true }]}
      />
      <TotalPlan
        header="
      Planning and Scheduling"
        text1="
        Planning and Scheduling"
        subText1="Create posts and schedule their release for each social network."
        dataFree1={[{ value: true }]}
        dataEss1={[{ value: true }]}
        text2="Set Posting Schedule"
        subText2="Set time slots throughout each week for your content to be released.."
        dataFree2={[{ value: true }]}
        dataEss2={[{ value: true }]}
        text3={"Tailored Posts for Each Channel"}
        subText3="Seamlessly iterate on content to customize posts for each channel."
        dataFree3={[{ value: true }]}
        dataEss3={[{ value: true }]}
        text4={"buff.ly link shortener"}
        subText4="Links automatically shortened to buff.ly links"
        dataFree4={[{ value: true }]}
        dataEss4={[{ value: true }]}
        text5={"bit.ly and j.mp link shorteners"}
        subText5="Links automatically shortened to bit.ly or j.mp links"
        dataFree5={[{ value: false }]}
        dataEss5={[{ value: true }]}
        text6={"Custom Link Shortener"}
        subText6="Links automatically shortened to your own custom link (if registered with Bit.ly)"
        dataFree6={[{ value: false }]}
        dataEss6={[{ value: true }]}
      />
      <TotalPlan
        header="Analytics, Insights & Reporting"
        text1="Performance Overview"
        subText1="See an overview of key metrics (impressions, engagements and new followers, etc)."
        dataFree1={[{ value: false }]}
        dataEss1={[{ value: true }]}
        text2="Individual Post Analytics"
        subText2="See a history of all of your published posts, iterate, and evolve."
        dataFree2={[{ value: false }]}
        dataEss2={[{ value: true }]}
        text3={"Historical Data Access"}
        subText3="Backfill data from the past 6 months for all channels except Twitter (28-day limit)."
        dataFree3={[{ value: false }]}
        dataEss3={[{ value: true }]}
        text4={"Data Storage"}
        subText4="Store, analyze, and export up to two years of data."
        dataFree4={[{ value: false }]}
        dataEss4={[{ value: true }]}
        text5={"Campaign Analysis"}
        subText5="Automate reports from multi-channel campaigns. No manual switching between channels."
        dataFree5={[{ value: false }]}
        dataEss5={[{ value: true }]}
        text6={"Hashtag Performance"}
        subText6="Get insight into how your hashtags could be affecting your reach and engagement rates."
        dataFree6={[{ value: false }]}
        dataEss6={[{ value: true }]}
      />
      <TotalPlan
        header="Engagement"
        text1="Grid view"
        subText1="See which posts have unanswered comments and quickly jump in."
        dataFree1={[{ value: false }]}
        dataEss1={[{ value: true }]}
        text2="Important Comment Detection"
        subText2="Machine-learning-powered alerts highlight open questions & comments on sales or unhappiness.
        "
        dataFree2={[{ value: false }]}
        dataEss2={[{ value: true }]}
        text3={"Hotkeys"}
        subText3="Get through comments quickly without taking your hands off the keyboard."
        dataFree3={[{ value: false }]}
        dataEss3={[{ value: true }]}
        text4={"Easy Account Switching"}
        subText4="Seamlessly switch between multiple accounts and channels. No more logging in and out."
        dataFree4={[{ value: false }]}
        dataEss4={[{ value: true }]}
      />
      <TotalPlan
        header="
      Integrations and Apps"
        text1="Browser Extension"
        subText1="Browser Extension"
        dataFree1={[{ value: true }]}
        dataEss1={[{ value: true }]}
        text2="Content-in Integrations"
        subText2="Use Canva, OneDrive, Google Drive and Dropbox to upload, manage, and edit your media assets"
        dataFree2={[{ value: true }]}
        dataEss2={[{ value: true }]}
        text3={"iOS and Android Apps"}
        subText3="Publish is available on iOS and Android."
        dataFree3={[{ value: true }]}
        dataEss3={[{ value: true }]}
        text4={"30+ Third-Party Integrations"}
        subText4="Use Buffer with your favorite apps like Zapier, IFTTT, Quuu, Pocket, Feedly, and more."
        dataFree4={[{ value: true }]}
        dataEss4={[{ value: true }]}
        text5={"Google Analytics integration"}
        subText5="Find in-depth insights on your posts and campaigns in Google Analytics"
        dataFree5={[{ value: true }]}
        dataEss5={[{ value: true }]}
        text6={"Custom UTM parameters"}
        subText6="Track the effectiveness of your posts and campaigns using custom UTM parameters"
        dataFree6={[{ value: true }]}
        dataEss6={[{ value: true }]}
      />
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
