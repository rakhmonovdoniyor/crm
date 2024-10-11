import * as React from "react";
import Table from "@mui/joy/Table";
import { Users } from "../../../../data/data";
import profil from "../../../../assets/leads/image 17.png";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import { Link } from "react-router-dom";
import { EditDelete, EditDeleteBtn, LeadCol } from "../../budget/styles";

export default function Rooms() {
  const data = Users.maindata.slice(0, 2);
  const dataLength = data.length;
  console.log("data:", data.length);
  return (
    <div>
      <LeadCol>
        <Table hoverRow>
          <thead>
            <tr>
              <th style={{ width: "5%" }}></th>
              <th
                style={{
                  width: "30%",
                  padding: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px" /* 116.667% */,
                  paddingRight: "80px",
                }}
              >
                {" "}
                Room name
              </th>

              <th
                style={{
                  padding: "20px",
                  width: "10%",
                  //  display: 'flex', justifyContent:'center',
                  textAlign: "center",
                  paddingRight: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px" /* 116.667% */,
                }}
              ></th>

              {/* <th style={{width:'5%'}}></th> */}
            </tr>
          </thead>

          <tbody>
            {data.map((value, index, key) => (
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
                  Xona #1
                </td>

                <td
                  style={{
                    color: " #2C2669",
                    fontFamily: "Public Sans",
                    paddingLeft: "20px",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "16px",
                  }}
                >
                  <EditDeleteBtn>
                    <EditDelete $edit>
                      <CreateOutlinedIcon />
                    </EditDelete>
                    <EditDelete>
                      <DeleteForeverOutlinedIcon />
                    </EditDelete>
                  </EditDeleteBtn>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </LeadCol>
    </div>
  );
}
