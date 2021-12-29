import React from "react";
import MaterialTable from "material-table";

import tableIcons from "../common/materialicons/tableIcons";
const StakingTable = () => {
  const tableColumns = [
    {
      title: "Date",
      field: "date",
      width: "13%",
    },
    {
      title: "Tokens",
      field: "tokens",
      width: "9%",
    },
    {
      title: "Staked AVS",
      field: "staked_avs",
      width: "12%",
    },
    {
      title: "Rewards Earned",
      field: "rewards_earned",
      width: "12%",
      render: (rowData) => (
        <div>
          <p style={{ color: "#06AA65" }}>{rowData.rewards_earned}</p>
          <p style={{ color: "#06AA65", fontSize: 12, color: "#808080" }}>
            Accrue days: {rowData.accrue_days} days
          </p>
        </div>
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
              rowData.state.toLowerCase() === "unstake" ? "#FF4451" : "#808080",
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
      tokens: "AVS",
      staked_avs: "1,740.00",
      est_apr: "40%",
      lockup_period: "8 Weeks",
      rewards_earned: "0.51942",
      accrue_days: 10,
      status: "Active",
      state: "Unstake",
    },
    {
      date: "14.09.2021",
      tokens: "AVS",
      staked_avs: "25,620.00",
      est_apr: "60%",
      lockup_period: "16 Weeks",
      rewards_earned: "2.76403",
      accrue_days: 112,
      status: "Done",
      state: "Unstake",
    },

    {
      date: "02.09.2021",
      tokens: "AVS",
      staked_avs: "38,506.00",
      est_apr: "80%",
      lockup_period: "24 Weeks",
      rewards_earned: "17.13092",
      accrue_days: 69,
      status: "Done",
      state: "Paid out",
    },
    {
      date: "02.09.2021",
      tokens: "AVS",
      staked_avs: "98,506.00",
      est_apr: "80%",
      lockup_period: "24 Weeks",
      rewards_earned: "17.13092",
      accrue_days: 169,
      status: "Done",
      state: "Paid out",
    },
    {
      date: "02.09.2021",
      tokens: "AVS",
      staked_avs: "77,506.00",
      est_apr: "80%",
      lockup_period: "24 Weeks",
      rewards_earned: "17.13092",
      accrue_days: 169,
      status: "Done",
      state: "Paid out",
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
    <React.StrictMode>
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
            searchFieldStyle: {
              borderRadius: 50,
            },
            search: true,
            searchFieldAlignment: "left",
            searchAutoFocus: false,
            searchFieldVariant: "outlined",
            showTitle: false,
            pageSize: 5,
            emptyRowsWhenPaging: false,
            exportButton: true,
          }}
          localization={{
            toolbar: {
              searchPlaceholder: "Search for amount, APR or rewards",
              // exportTitle: "Export",
              // exportAriaLabel: "Export",
              exportName: "Expo",
            },
          }}
        />
      </div>
    </React.StrictMode>
  );
};

export default StakingTable;
