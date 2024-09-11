import React from "react";
import {
  CreateNewM,
  TotalButton,
  Totaldivh1,
  Totaldivh2,
  TotalWrapdiv,
} from "../styles";
import IncomeTable from "./incometable";
import CategoryModal from "../modalcategory";
import CreateExpense from "../createecpensemodal";

const ExpenseTable = () => {
  return (
    <div>
      <TotalWrapdiv $expense>
        <TotalButton>
          <Totaldivh1>Total income</Totaldivh1>
          <Totaldivh2>70.000 UZS</Totaldivh2>
        </TotalButton>

        <CreateExpense />
      </TotalWrapdiv>
      <IncomeTable />
    </div>
  );
};

export default ExpenseTable;
