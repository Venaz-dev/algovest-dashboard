import React from "react";
import MaterialTable from "material-table";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import tableIcons from "../common/materialicons/tableIcons";
const YieldTable = () => {
  const tableColumns = [
    {
      title: "Date",
      field: "date",
      width: "12%",
    },
    {
      title: "Coin",
      field: "coin",
      width: "9%",
    },
    {
      title: "Amount",
      field: "amount",
      width: "12%",
    },
    {
      title: "Est. APY",
      field: "est_apy",
      width: "13%",
    },
    { title: "Lockup period", field: "lockup_period", width: "16%" },
    {
      title: "Cum. Interest",
      field: "cum_interest",
      width: "18%",
      render: (rowData) => (
        <div>
          <p style={{ color: "#06AA65" }}>{rowData.cum_interest}</p>
          <p style={{ color: "#06AA65", fontSize: 12, color: "#808080" }}>
            Accrue days: {rowData.accrue_days} days
          </p>
        </div>
      ),
    },
    {
      title: "Status",
      field: "status",
      width: "10%",

      render: (rowData) => (
        <p
          style={
            rowData.status.toLowerCase() === "active" ? activeStyle : doneStyle
          }
        >
          {rowData.status}
        </p>
      ),
    },
    {
      title: "",
      field: "state",
      width: "10%",
      render: (rowData) => (
        <p
          style={{
            color:
              rowData.state.toLowerCase() === "claim" ? "#FF4451" : "#808080",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          {rowData.state}
        </p>
      ),
    },
  ];
  const tableData = [
    {
      date: "21.09.2021",
      coin: "USDC",
      amount: "102.50435",
      est_apy: "40%",
      lockup_period: "8 Weeks",
      cum_interest: "0.51942",
      accrue_days: 10,
      status: "Active",
      state: "Claim",
    },
    {
      date: "14.09.2021",
      coin: "USDC",
      amount: "76.50693",
      est_apy: "60%",
      lockup_period: "16 Weeks",
      cum_interest: "2.76403",
      accrue_days: 112,
      status: "Done",
      state: "Claimed",
    },
    {
      date: "02.09.2021",
      coin: "USDC",
      amount: "78.50693",
      est_apy: "80%",
      lockup_period: "24 Weeks",
      cum_interest: "17.13092",
      accrue_days: 169,
      status: "Done",
      state: "Claimed",
    },
  ];

  const activeStyle = {
    color: "#F3A908",
    backgroundColor: "#FFF4DE",
    textAlign: "center",
    width: "fit-content",
    padding: "4px 8px",
    borderRadius: 50,
    fontSize: 12,
  };
  const doneStyle = {
    color: "#06AA65",
    backgroundColor: "#00ff9414",
    textAlign: "center",
    width: "fit-content",
    padding: "4px 8px",
    borderRadius: 50,
    fontSize: 12,
  };
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        icons={tableIcons}
        columns={tableColumns}
        data={tableData}
        options={{
          paging: tableData.length > 5 ? true : false,
          headerStyle: { fontSize: 14, color: "#808080" },
          rowStyle: {
            color: "#222222",
          },
          search: false,
          toolbar: false,
          pageSize: 5,
          emptyRowsWhenPaging: false,
        }}
      />
    </div>
  );
};

export default YieldTable;
