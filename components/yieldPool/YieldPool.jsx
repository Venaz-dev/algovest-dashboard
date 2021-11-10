import React, { useEffect } from "react";
import Icon from "../../components/common/Icons";
import { useTable, useSortBy } from "react-table";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        disableSortRemove: true,
        // initialState: {
        //     // sortBy: [
        //     //     {
        //     //         id: '',
        //     //         desc: false,
        //     //     },
        //     // ]
        // }
      },
      useSortBy
    );

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column, (i) => (
              // Add the sorting props to control sorting. For this example
              // we can add them into the header props
              <th
                key={i}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render("Header")}
                {/* Add a sort direction indicator */}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <Icon name="ChevronArrow1" size={13} color="#808080" />
                    ) : (
                      <Icon name="ChevronArrow" size={13} color="#000" />
                    )
                  ) : (
                    ""
                  )}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr key={i} {...row.getRowProps()}>
              {row.cells.map(cell, (i) => {
                return (
                  <td key={i} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function YieldTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Coin",
        accessor: "coin",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Est. APY",
        accessor: "est_apy",
      },
      {
        Header: "Lockup Period",
        accessor: "lockup_period",
      },
      {
        Header: "Cum. Interest",
        accessor: (c) => (
          <div className="wrapper">
            <div style={{ color: "green", fontSize: 20 }}>{c.cum_interest}</div>
            <div style={{ fontSize: 13 }}>Accrue days: {c.accrued_days}</div>
          </div>
        ),
      },
      {
        Header: "Status",
        accessor: (s) => (
          <span
            style={{
              fontSize: 12,
              padding: 7,
              borderRadius: 15,
              backgroundColor: `${
                s.statuss === "Active"
                  ? "yellow"
                  : null || s.statuss === "Done"
                  ? "rgb(212, 252, 212)"
                  : null
              }`,
              color: `${
                s.statuss === "Active"
                  ? "orange"
                  : null || s.statuss === "Done"
                  ? "green"
                  : null
              }`,
            }}
          >
            {s.statuss}
          </span>
        ),
      },
      {
        Header: " ",
        accessor: "position",
        Cell: (p) => (
          <span
            className={
              p.value === "Claim"
                ? "RedColor"
                : null || p.value === "Claimed"
                ? null
                : "GreenColor"
            }
          >
            {p.value}
          </span>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        id: 1,
        date: "21-09-2021",
        coin: "USDC",
        amount: "102.50435",
        est_apy: "40%",
        lockup_period: "8 Weeks",
        cum_interest: "0.51942",
        statuss: "Active",
        position: "Claim",
        accrued_days: "10 days",
        no_of_days: "",
      },
      {
        id: 2,
        date: "14-09-2021",
        coin: "USDC",
        amount: "76.50693",
        est_apy: "60%",
        lockup_period: "16 Weeks",
        cum_interest: "2.76403",
        statuss: "Done",
        position: "Claimed",
        accrued_days: "112 days",
      },
      {
        id: 3,
        date: "02-09-2021",
        coin: "USDC",
        amount: "78.9583",
        est_apy: "80%",
        lockup_period: "24 Weeks",
        cum_interest: "17.13092",
        statuss: "Done",
        position: "Claimed",
        accrued_days: "169 days",
      },
    ],
    []
  );

  return (
    <div className="yield_table">
      <Table columns={columns} data={data} />
    </div>
  );
}
