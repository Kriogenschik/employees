import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  return (
    <ul className="app-list list-group">
      {data.map((employ) => {
        const { id, ...employProps } = employ;
        return (
          <EmployeesListItem
            key={id}
            {...employProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
