import './app-info.css'

const AppInfo = (props) => {
	const {total, increase} = props;
	return (
		<div className="app-info">
			<h1>All Employees in company N</h1>
			<h2>Total: {total}</h2>
			<h2>Receive a bonus: {increase}</h2>
		</div>
	)
}

export default AppInfo;