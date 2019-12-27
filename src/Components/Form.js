/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
// Import external style sheet
import './Styles.css'

// Create a heading and a form section to allow the user to input the area he would like to search for
const Form = (props) => (
	<>
		<div className="container">
			<br />
			<h1 className="pageTitle">Weather Forecast</h1>
			<br />
			<h4 className="pageSubHeading">Wherever you go, no matter what the weather, always bring your own sunshine 🌞</h4>
		</div>
		<br />
		{/* Added a for onSubmitto allow the desire location to be entered, and used to find the city to be rendered */}
		<form onSubmit={props.getWeather}>
			<input type="text" name="city" placeholder="City..." required />
			<br />
			<br />
			<button>Check Weather</button>
		</form>
	</>
);

export default Form;