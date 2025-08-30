export const FilterButtons = ({ setFilterStatus }) => {
  const buttons = ["All", "Active", "Completed"];
  const handleFilter = (status) => {
    setFilterStatus(status);
  };
  return (
    <div className="flex">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => {
            handleFilter(button);
          }}
          className="p-2 bg-blue-300 rounded-md"
        >
          {button}
        </button>
      ))}
    </div>
  );
};
