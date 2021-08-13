import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";

//Connect the smurfs and loading state values to the SmurfList component.
const SmurfList = (props) => {
	const { smurfs, isLoading, setError } = props;


	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className="listContainer">
			{smurfs.map((smurf, id) => {
				return <Smurf key={id} smurf={smurf} />;
			})}
		</div>
	);
};

const mapStateToProps = (state) => ({
	smurfs: state.smurfs,
	isLoading: state.isLoading,
});

export default connect(mapStateToProps)(SmurfList);
