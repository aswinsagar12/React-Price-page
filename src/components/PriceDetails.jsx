import React from "react";
import "../App.css";

const PriceDetails = () => {
  return (
    <div className="py-12 px-6">
      <h1 className="heading">Compare our plans side-by-side</h1>

      {/*Table*/}

      <table
        cellSpacing="15px"
        cellPadding="20px"
        className="table text-base ml-60 mt-20 "
      >
        <thead className=" text-base ">
          <tr key="">
            <th
              className="baseheading text-left font-[Poppins]
                font-2xl
                font-[600]"
            >
              <span className="basespan">Basic</span>
            </th>

            {/* Free section */}

            <th className="freeheading px-4 py-4    text-center ">
              <div className="freediv font-[Poppins]">Free</div>
              <div className="mt-3">
                <span className="text-base">$0 </span>
                <span className="font-base ml-1">per social channel</span>
              </div>
              <div className="mt-3">
                <a
                  href="."
                  className="bg-blue-500 hover:bg-blue-700 text-white font-[Poppins] inline-block rounded w-80 h-12 py-3 "
                >
                  Get Started
                </a>
              </div>
            </th>

            {/* Essenstail section*/}

            <th className="essenstailheading px-4 py-4    text-center ">
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "600",
                }}
                className="font-[Poppins]"
              >
                Essentials
              </div>
              <div className="mt-3">
                <span className="text-base">$5/mo</span>
                <span className="font-base ml-1">per social channel</span>
              </div>
              <div className="mt-3">
                <a
                  href="."
                  className="bg-blue-500 hover:bg-blue-700 text-white inline-block font-[Poppins] rounded  w-80 h-12 py-3"
                >
                  Try free for 14 days
                </a>
              </div>
            </th>
          </tr>
        </thead>

        {/*body section*/}

        <tbody>
          <tr key="1">
            <td className="tabledetails">
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Roboto",
                }}
              >
                Monthly Price
              </span>
            </td>
            <td className=" text-center px-4 py-6">
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "16px",
                }}
              >
                Always $0/mo
              </span>
            </td>
            <td className=" text-center px-4 py-6">
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "16px",
                }}
              >
                Starts at $5/mo
              </span>{" "}
              <br />
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  color: " #636363",
                }}
              >
                (Billed at $60/year/channel)
              </span>
            </td>
          </tr>

          <tr key="">
            <td
              style={{
                height: "45px",
                width: "400px",
                padding: "20px 20px 20px 20px",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Roboto",
                }}
              >
                Social Channels
              </span>{" "}
              <br />
              <span style={{ color: "#636363" }}>
                Example: 5 Twitter profiles and 3 Facebook pages counts as 8
                social channels.
              </span>
            </td>
            <td className=" text-center px-4 py-6">
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "16px",
                }}
              >
                Up to 3
              </span>
            </td>
            <td className=" text-center px-4 py-6">
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "16px",
                }}
              >
                Unlimited, $5/mo per channel
              </span>{" "}
              <br />
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  color: " #636363",
                }}
              >
                (Billed at $60/year/channel)
              </span>
            </td>
          </tr>
          <tr key="">
            <td
              style={{
                height: "45px",
                width: "336.663px",
                padding: "20px 20px 20px 20px",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Roboto",
                }}
              >
                Scheduled Posts Per Social Channel
              </span>{" "}
              <br />
              <span style={{ color: "#636363" }}>
                The number of posts you can store in your queue (per channel).
                There is no monthly, or yearly limit.
              </span>
            </td>
            <td className=" text-center px-4 py-6">
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "16px",
                }}
              >
                10 per social channel
              </span>
            </td>
            <td className=" text-center px-4 py-6">
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "16px",
                }}
              >
                2,000
              </span>{" "}
              <br />
            </td>
          </tr>
          <tr key="">
            <td
              style={{
                height: "45px",
                width: "336.663px",
                padding: "20px 20px 20px 20px",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Roboto",
                }}
              >
                Included Users
              </span>
              <br />
              <span style={{ color: "#636363" }}>
                The number of users who can access and contribute content to
                your Buffer account.
              </span>
            </td>
            <td className=" text-center px-4 py-6">
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "16px",
                }}
              >
                1
              </span>
            </td>
            <td className=" text-center px-4 py-6">
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "16px",
                }}
              >
                1
              </span>{" "}
              <br />
            </td>
          </tr>
          <tr key="">
            <td
              style={{
                height: "45px",
                width: "336.663px",
                padding: "20px 20px 20px 20px",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Roboto",
                }}
              >
                Invite Additional Users{" "}
                <span
                  style={{
                    background: "yellow",
                    height: "14px",
                    width: "53.2px",
                    margin: "00 0 5px 8px",
                    padding: "4px 8px 4px 8px",
                  }}
                >
                  ADD ON
                </span>
              </span>
              <br />
              <span style={{ color: "#636363" }}>
                Invite Additional Team members or clients to collaborate with
                you
              </span>
            </td>
            <td className=" text-center px-4 py-6">
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "16px",
                }}
              >
                Always $0/mo
              </span>
            </td>
            <td className=" text-center px-4 py-6">
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "16px",
                }}
              >
                Unlimited with Team Pack Add-on
              </span>{" "}
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PriceDetails;
