import React from "react";
import "./PriceDetails.css";

const PriceDetails = () => {
  return (
    <>
    <h1>Compare our plans side-by-side</h1>
    <div className="price-container">
      <table className="detail-table">
        {/*Head*/}

        <thead>
          <tr>
            <th>Basic</th>
            <th className="heading">
              <div className="title-div" style={{ textAlign: "center" ,marginBottom:'10px' }}>
                Free
              </div>

              <div style={{ textAlign: "center", fontSize:'16px' }}>
                $0 per social channel
              </div>
              <br />

                <a
                  href="."
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "48px",
                    width: "336.663px",
                    background: ' #2C4BFF',
                    borderRadius:'15px',
                    color:'white'
                  }}
                >
                  <span   style={{ fontSize: "16px", fontWeight:'normal'}} >Get Started</span>
                </a>

            </th>
            <th className="heading">
              <div className="title-div" style={{ textAlign: "center" ,marginBottom:'10px' }}>
                Essentials
              </div>

              <div style={{ textAlign: "center", fontSize:'16px' }}>
                $5/mo per social channel
              </div>
              <br />

                <a
                  href="."
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "48px",
                    width: "336.663px",
                    background: ' #2C4BFF',
                    borderRadius:'15px',
                    color:'white'
                  }}
                >
                  <span   style={{ fontSize: "16px", fontWeight:'normal'}} >Get Started</span>
                </a>

            </th>
          </tr>
        </thead>

        {/*body*/}

        <tbody>
          <tr key="1">
            <td>
            Monthly Price <br />
              <span></span>
            </td>
            <td style={{textAlign:'center'}}>Always $0/mo</td>

            <td style={{textAlign:'center'}}>Starts at $5/mo
              <br/>
              <span >(Billed at $72 $60/year/channel)</span>

            </td>
          </tr>
          <tr key="2">
            <td>
            Social Channels <br />
              <span>Example: 5 Twitter profiles and 3 Facebook pages counts as 8 social channels.</span>
            </td>
            <td style={{textAlign:'center'}}>Up to 3</td>

            <td style={{textAlign:'center'}}>Unlimited, $5/mo per channel
              <br/>
              <span>(Billed at $72 $60/year/channel)</span>
            </td>
          </tr>
          <tr key="3">
            <td>
            Scheduled Posts Per Social Channel <br />
              <span >The number of posts you can store in your queue (per channel). There is no monthly, or yearly limit.</span>
            </td>
            <td style={{textAlign:'center'}}>10 per social channel</td>

            <td style={{textAlign:'center'}}>2,000</td>
          </tr>
          <tr key="4">
            <td>
            Included Users<br />
              <span>The number of users who can access and contribute content to your Buffer account.</span>
            </td>
            <td style={{textAlign:'center'}}>1</td>

            <td style={{textAlign:'center'}}>1</td>
          </tr>
          <tr key="5">
            <td>
            Invite Additional Users<br />
              <span>Invite Additional Team members or clients to collaborate with you</span>
            </td>
            <td style={{textAlign:'center'}}>x</td>

            <td style={{textAlign:'center'}}>Unlimited with Team Pack Add-on</td>
          </tr>




        </tbody>
      </table>
    </div>
    </>
  );
};

export default PriceDetails;
