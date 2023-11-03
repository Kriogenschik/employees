import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 1000, increase: true, id: 1, rise: true },
        { name: "Mitchel J.", salary: 2000, increase: false, id: 2, rise: false },
        { name: "Homer S.", salary: 3500, increase: true, id: 3, rise: false },
      ],
      term: '',
      filter: 'all',
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter((item) => item.id !== id) };
    });
  };

  addEmployee = (name, salary) => {
    if (name && salary) {
      //new ID=====================================================
      const allIds = [];
      this.state.data.forEach((element) => {
        allIds.push(element.id);
      });
      const newId = Math.max.apply(null, allIds) + 1;
      //===========================================================
      const newEmployee = {
        name: name,
        salary: salary,
        id: newId,
        rise: false,
        increase: false,
      };
      this.setState(({ data }) => {
        return { data: [...data, newEmployee] };
      });
    }
  };

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  };

  onToggleRise = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, rise: !item.rise}
        }
        return item
      })
    }))
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
          return items.filter(item => item.rise);
      case 'moreThen': 
          return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render() {
    const {data, term, filter} = this.state
    const totalEmployees = this.state.data.length;
    const totalEmployeesIncrease = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo total={totalEmployees} increase={totalEmployeesIncrease} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addEmployee} />
      </div>
    );
  }
}

export default App;
