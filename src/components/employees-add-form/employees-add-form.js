import {Component} from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name && this.state.salary) {
            this.setState({
                name: '',
                salary: ''
            })
        }
    }
    render() {
        const {name, salary,} = this.state;
        const {onAdd} = this.props;

        return (
            <div className="app-add-form">
                <h3>Add New Employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Name"
                        name='name'
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary"
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange} />
                    <button type="submit"
                        className="btn btn-outline-light"
                        onClick={() => onAdd(name, salary)}>Add</button>
                </form>
            </div>
        )
    }
    
}

export default EmployeesAddForm;