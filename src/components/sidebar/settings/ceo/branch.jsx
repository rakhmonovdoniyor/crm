import * as React from "react";
import Table from "@mui/joy/Table";
// import { LeadCol } from "../leads/leadcolumn/ldcolumn";
import { Users } from "../../../../data/data";
import profil from "../../../../assets/leads/image 17.png";
// import PositionedMenu from '../leads/leadgridcolumn/menulist';

// import search from "../../../assets/leads/serach.png";
// import { GridCon } from "../leads/leadgridcolumn/gridstyle";
// import { InputTeachWrap } from "../teacher/style";
// import AddTeachModal from "../teacher/addteachmodal";
import { Link } from "react-router-dom";
import CustomizedMenus from "../../leads/leadcolumn/menulist";
import { LeadCol } from "../../budget/styles";
// import { LeadsCon } from "../../leads/style";
// import search from "../../../assets/leads/serach.png"
// import strelka from "../../../assets/leads/strelka.png";
// import reset from "../../../assets/leads/reset.png";
// import AddleadModal from "../leads/addleadmod";
// import CreateGroup from "../Grouppage/addgroup";
// import AddStudent from "./addStudent";
// import CreateGroup from './addgroup';

export default function Branch() {
  const data = Users.maindata.slice(0, 6);
  const dataLength = data.length;
  console.log("data:", data.length);
  return (
    <div>
      {/* </InputTeachWrap> */}

      <LeadCol>
        <Table hoverRow>
          <thead>
            <tr>
              <th
                style={{
                  width: "0.5%",
                }}
              ></th>
              <th
                style={{
                  width: "40%",
                  padding: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px" /* 116.667% */,
                  paddingLeft: "80px",
                }}
              >
                {" "}
                Full name
              </th>

              <th
                style={{
                  padding: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px" /* 116.667% */,
                }}
              >
                {" "}
                Phone number
              </th>
              {/* <th
                style={{
                  padding: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px",
                }}
              >
                Groups
              </th> */}
              {/* <th
                style={{
                  padding: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px",
                }}
              >
                Courses
              </th> */}
              <th
                style={{
                  padding: "20px",
                  width: "20%",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px",
                }}
              >
                Role
              </th>

              <th
                style={{
                  padding: "20px",
                  width: "8%",

                  textAlign: "center",
                  paddingRight: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px",
                }}
              ></th>

              {/* <th style={{width:'5%'}}></th> */}
            </tr>
          </thead>

          <tbody>
            {data.map((value, index, key) => (
              <Link to={`${value.id}`} style={{ display: "contents" }}>
                <tr key={key}>
                  <td
                    style={{
                      paddingBottom: "10px",
                      //   display: "flex",
                      //   justifyContent: "center",
                      //   alignItems: "center",
                    }}
                  >
                    {index + 1}
                  </td>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "30px",
                      gap: "10px",
                      color: "  #2C2669",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px",
                    }}
                  >
                    <img src={profil} alt="" />
                    {value.car.name}
                  </td>

                  <td
                    style={{
                      padding: "20px",
                      color: "  #6053B9",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "16px",
                    }}
                  >
                    99 436 89 42
                  </td>

                  {/* <td
                    style={{
                      color: " #6053B9",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px",
                    }}
                  >
                    New elementary
                  </td> */}
                  {/* 
                  <td
                    style={{
                      color: " #6053B9",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px",
                    }}
                  >
                    IT Bootcamp
                    <br />
                  </td> */}
                  <td
                    style={{
                      color: " #6053B9",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px",
                    }}
                  >
                    Shamsiddin 2
                  </td>
                  <td
                    style={{
                      color: " #6053B9",
                      fontFamily: "Public Sans",
                      paddingLeft: "20px",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px",
                    }}
                  >
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    >
                      {" "}
                      <CustomizedMenus />
                    </button>
                  </td>
                </tr>
              </Link>
            ))}
          </tbody>
        </Table>
      </LeadCol>
    </div>
  );
}
