import DataTable from "../dataTable";
import { useState } from "react";

const DataTableWrapper = ({
  tabs,
  columns,
  dataSource,
  hasFilter,
  filterHandler,
}) => {
  const [selectedTab, setSelectedTab] = useState("tab 1");
  //console.log(filterHandler);
  const data2 = [
    {
      first: "Leonor",
      last: "Peralta",
      handle: "x",
    },
  ];

  const data3 = [
    {
      first: "Tonatiuh",
      last: "Torres",
      handle: "x",
    },
  ];
  const createTable = () => {
    let content = null;
    switch (selectedTab) {
      case "tab 1":
        content = (
          <DataTable
            columns={columns}
            dataSource={dataSource}
            hasFilter={hasFilter}
            filterHandler={filterHandler}
          />
        );
        break;
      case "tab 2":
        content = (
          <DataTable
            columns={columns}
            dataSource={data2}
            hasFilter={hasFilter}
            filterHandler={filterHandler}
          />
        );
        break;
      case "tab 3":
        content = (
          <DataTable
            columns={columns}
            dataSource={data3}
            hasFilter={hasFilter}
            filterHandler={filterHandler}
          />
        );
        break;
    }
    return content;
  };
  return (
    <>
      {tabs && (
        <ul class="nav nav-tabs">
          {tabs.map((tab) => {
            return (
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    setSelectedTab(tab);
                  }}
                >
                  {tab}
                </a>
              </li>
            );
          })}
        </ul>
      )}
      {createTable()}
    </>
  );
};

export default DataTableWrapper;
