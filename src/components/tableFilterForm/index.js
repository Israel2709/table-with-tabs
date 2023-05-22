const TableFilterForm = ({ filterHandler }) => {
  //console.log(filterHandler);
  return (
    <form action="">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="filtrar por nombre"
          onChange={(event) => {
            console.log(event.target.value);
            filterHandler(event);
          }}
        />
      </div>
    </form>
  );
};

export default TableFilterForm;
