import MaterialTable from "material-table";
import React, { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/KeyboardArrowDown";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const StakingTable = () => {
  const TableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };
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
      est_apy: "40%",
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
      est_apy: "60%",
      lockup_period: "16 Weeks",
      rewards_earned: "2.76403",
      accrue_days: 112,
      status: "Done",
      state: "Unstake",
    },
    {
      date: "02.09.2021",
      tokens: "AVS",
      staked_avs: "18,506.00",
      est_apy: "80%",
      lockup_period: "24 Weeks",
      rewards_earned: "17.13092",
      accrue_days: 16,
      status: "Done",
      state: "Unstake",
    },
    {
      date: "02.09.2021",
      tokens: "AVS",
      staked_avs: "38,506.00",
      est_apy: "80%",
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
      est_apy: "80%",
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
      est_apy: "80%",
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
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        icons={TableIcons}
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

export default StakingTable;
