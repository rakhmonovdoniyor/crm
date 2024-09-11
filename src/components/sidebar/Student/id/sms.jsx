import * as React from "react";
import Table from "@mui/joy/Table";
import { LeadCol, Thtag } from "../../leads/leadcolumn/ldcolumn";
import { Users } from "../../../../data/data";
import profil from "../../../../assets/leads/image 17.png";
// import PositionedMenu from '../leads/leadgridcolumn/menulist';
import CustomizedMenus from "../../leads/leadcolumn/menulist";
import {
  InputContainer,
  InputStyledIcon,
  LeadsCon,
  LeadsCon2,
  ResetButton,
  SearchIcon,
} from "../../leads/style";

import { Link } from "react-router-dom";
import { GrouptableCon, GrouptableCon2 } from "./Stuentdetailstyle";
// import search from "../../../assets/leads/serach.png"

// import CreateGroup from './addgroup';

export default function SMS() {
  const data = Users.maindata.slice(0, 2);
  const dataLength = data.length;
  console.log("data:", data.length);
  return (
    <GrouptableCon>
      <GrouptableCon2>
        <Table hoverRow>
          <thead>
            <tr>
              <th style={{ width: "0.5%" }}></th>
              <th
                style={{
                  width: "60%",
                  padding: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px",
                  paddingLeft: "80px",
                }}
              >
                {" "}
                Date
              </th>

              <th
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
                Receiver
              </th>
              <th
                style={{
                  padding: "20px",
                  width: "12%",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px",
                }}
              >
                Teachers
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
            </tr>
          </thead>

          <tbody>
            {data.map((value, index, key) => (
              <Link to={`${value.id}`} style={{ display: "contents" }}>
                <tr key={key}>
                  <td> {index + 1}</td>
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
                      lineHeight: "16px" /* 116.667% */,
                    }}
                  >
                    {/* <img src={profil} alt="" /> */}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </td>

                  <td
                    style={{
                      color: "var(--500, #6053B9)",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px" /* 116.667% */,
                    }}
                  >
                    New elementary
                  </td>

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
                    Shamsiddin 2
                  </td> */}
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
                    <CustomizedMenus />
                  </td>
                </tr>
              </Link>
            ))}
          </tbody>
        </Table>
      </GrouptableCon2>
    </GrouptableCon>
  );
}
