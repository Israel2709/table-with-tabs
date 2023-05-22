import TableFilterForm from "../tableFilterForm";

const DataTable = ({ columns, dataSource, hasFilter, filterHandler }) => {
  //console.log(filterHandler);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th scope="col">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((item) => {
            const { first, last, handle } = item;
            return (
              <tr>
                <td>{first}</td>
                <td>{last}</td>
                <td>{handle}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {hasFilter && <TableFilterForm filterHandler={filterHandler} />}
    </>
  );
};

export default DataTable;
