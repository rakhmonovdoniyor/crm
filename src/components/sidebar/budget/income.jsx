import React from "react";
import { TotalButton, Totaldivh1, Totaldivh2, TotalWrapdiv } from "./styles";
import GroupCom from "../Grouppage/table";
import IncomeTable from "./tabledetail/incometable";

const Income = () => {
  return (
    <div>
      <TotalWrapdiv>
        <TotalButton>
          <Totaldivh1>Total income</Totaldivh1>
          <Totaldivh2>70.000 UZS</Totaldivh2>
        </TotalButton>
      </TotalWrapdiv>
      <IncomeTable />
    </div>
  );
};

export default Income;
