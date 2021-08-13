import React, { Component } from "react";
import { connect } from "react-redux";
import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";
import { fetchSmurfs } from "./actions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Connect the fetchSmurfs actions to the App component then all the fetchSmurfs action when the component first loads.
class App extends Component {
	componentDidMount() {
		this.props.dispatch(fetchSmurfs());
	}

	render() {
		return (
			<div className="App">
				<Header />

				<main>
					<SmurfList />
					<AddForm />
				</main>
			</div>
		);
	}
}

export default connect(null)(App);
