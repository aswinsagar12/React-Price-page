import React from "react";
import "../App.css";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const TotalPlan = ({
  header,
  text1,
  subText1,
  text2,
  text3,
  text4,
  text5,
  text6,
  subText2,
  subText3,
  subText4,
  subText5,
  subText6,
  dataFree1,
  dataFree2,
  dataFree3,
  dataFree4,
  dataFree5,
  dataFree6,
  dataEss1,
  dataEss2,
  dataEss3,
  dataEss4,
  dataEss5,
  dataEss6,

  text7,
  subText7,
  dataFree7,
  dataEss7,
  text8,
  subText8,
  dataFree8,
  dataEss8,
  text9,
  subText9,
  dataFree9,
  dataEss9,
  text10,
  subText10,
  dataFree10,
  dataEss10,
  text11,
  subText11,
  dataFree11,
  dataEss11,
  text12,
  subText12,
  dataFree12,
  dataEss12,
}) => {
  return (
    <div className="table-container">
      <table className="detail-table">
        {/*Head*/}

        <thead>
          <tr>
            <th>{header}</th>
            <th style={{ textAlign: "center" }}>Free</th>
            <th style={{ textAlign: "center" }}>Essentials</th>
          </tr>
        </thead>

        {/*body*/}

        <tbody>
          <tr key="1">
            <td>
              {text1} <br />
              <span>{subText1}</span>
            </td>
            <td>
              {dataFree1 && (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  {dataFree1.map((dt, index) => (
                    <span key={index}>
                      {dt.value ? (
                        <FaCheck className="true" style={{ color: "black" }} />
                      ) : (
                        <ImCross className="false" />
                      )}
                      {dt.text}
                    </span>
                  ))}
                </span>
              )}
            </td>

            <td>
              {dataEss1 && (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  {dataEss1.map((dt, index) => (
                    <span key={index}>
                      {dt.value ? (
                        <FaCheck className="true" style={{ color: "black" }} />
                      ) : (
                        <ImCross className="false" />
                      )}
                      {dt.text}
                    </span>
                  ))}
                </span>
              )}
            </td>
          </tr>
          <tr key="2">
            <td>
              {text2} <br />
              <span>{subText2}</span>
            </td>
            <td>
              {dataFree2 && (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  {dataFree2.map((dt, index) => (
                    <span key={index}>
                      {dt.value ? (
                        <FaCheck className="true" style={{ color: "black" }} />
                      ) : (
                        <ImCross className="false" />
                      )}
                      {dt.text}
                    </span>
                  ))}
                </span>
              )}
            </td>
            <td>
              {dataEss2 && (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  {dataEss2.map((dt, index) => (
                    <span key={index}>
                      {dt.value ? (
                        <FaCheck className="true" style={{ color: "black" }} />
                      ) : (
                        <ImCross className="false" />
                      )}
                      {dt.text}
                    </span>
                  ))}
                </span>
              )}
            </td>
          </tr>

          <tr key="3">
            <td>
              {text3} <br />
              <span>{subText3}</span>
            </td>
            <td>
              {dataFree3 && (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  {dataFree3.map((dt, index) => (
                    <span key={index}>
                      {dt.value ? (
                        <FaCheck className="true" style={{ color: "black" }} />
                      ) : (
                        <ImCross className="false" />
                      )}
                      {dt.text}
                    </span>
                  ))}
                </span>
              )}
            </td>
            <td>
              {dataEss3 && (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  {dataEss3.map((dt, index) => (
                    <span key={index}>
                      {dt.value ? (
                        <FaCheck className="true" style={{ color: "black" }} />
                      ) : (
                        <ImCross className="false" />
                      )}
                      {dt.text}
                    </span>
                  ))}
                </span>
              )}
            </td>
          </tr>
          <tr key="4">
            <td>
              {text4} <br />
              <span>{subText4}</span>
            </td>
            <td>
              {dataFree4 && (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  {dataFree4.map((dt, index) => (
                    <span key={index}>
                      {dt.value ? (
                        <FaCheck className="true" style={{ color: "black" }} />
                      ) : (
                        <ImCross className="false" />
                      )}
                      {dt.text}
                    </span>
                  ))}
                </span>
              )}
            </td>
            <td>
              {dataEss4 && (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  {dataEss4.map((dt, index) => (
                    <span key={index}>
                      {dt.value ? (
                        <FaCheck className="true" style={{ color: "black" }} />
                      ) : (
                        <ImCross className="false" />
                      )}
                      {dt.text}
                    </span>
                  ))}
                </span>
              )}
            </td>
          </tr>
          <tr key="5">
            <td>
              {text5} <br />
              <span>{subText5}</span>
            </td>
            <td>
              {dataFree5 && (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  {dataFree5.map((dt, index) => (
                    <span key={index}>
                      {dt.value ? (
                        <FaCheck className="true" style={{ color: "black" }} />
                      ) : (
                        <ImCross className="false" />
                      )}
                      {dt.text}
                    </span>
                  ))}
                </span>
              )}
            </td>
            <td>
              {dataEss5 && (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  {dataEss5.map((dt, index) => (
                    <span key={index}>
                      {dt.value ? (
                        <FaCheck className="true" style={{ color: "black" }} />
                      ) : (
                        <ImCross className="false" />
                      )}
                      {dt.text}
                    </span>
                  ))}
                </span>
              )}
            </td>
          </tr>
          <tr key="6">
            <td>
              {text6} <br />
              <span>{subText6}</span>
            </td>
            <td>
              {dataFree6 && (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  {dataFree6.map((dt, index) => (
                    <span key={index}>
                      {dt.value ? (
                        <FaCheck className="true" style={{ color: "black" }} />
                      ) : (
                        <ImCross className="false" />
                      )}
                      {dt.text}
                    </span>
                  ))}
                </span>
              )}
            </td>
            <td>
              {dataEss6 && (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  {dataEss6.map((dt, index) => (
                    <span key={index}>
                      {dt.value ? (
                        <FaCheck className="true" style={{ color: "black" }} />
                      ) : (
                        <ImCross className="false" />
                      )}
                      {dt.text}
                    </span>
                  ))}
                </span>
              )}
            </td>
          </tr>




        </tbody>
      </table>
    </div>
  );
};

export default TotalPlan;
