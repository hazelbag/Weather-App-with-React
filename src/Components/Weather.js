import React from "react";
import './Styles.css'

// Below is a stateless component with an implicit return

const Weather = (props) => (
	<div className="weather__info">
		{
			// Render the location once the city has been found
			props.city && <p className="weather__key"> Location:
			<br />
				<span className="weather__value"><strong>{props.city}</strong></span>
			</p>
		}
		{
			// Render temps, current, min and max temp once the city has been found and display them
			props.temperature && props.temperatureMin && props.temperatureMax &&
			<p className="weather__key">Temperature:
			<br />
				<span
					className="weather__value">
					<strong>
						Current Temp: {props.temperature}&#8451;
						<br />
						Min Temp: {props.temperatureMin}&#8451;
						<br />
						Max Temp: {props.temperatureMax}&#8451;
					</strong>
				</span>
			</p>
		}
		{
			// Display humidity once the city has been located
			props.humidity && <p className="weather__key"> Humidity:
			<br />
				<span className="weather__value"><strong>{props.humidity}&#37;</strong></span>
			</p>
		}
		{
			// Display the weather condition and the icon relating to the current conditions
			props.description && props.icon &&
			<p className="weather__key">Conditions:
			<br />
				<span
					className="weather__value">
					<strong>
						{props.description}
						<img
							src={`http://openweathermap.org/img/w/${props.icon}.png`}
							alt="wthr img"
						/>
					</strong>
				</span>
			</p>
		}
		{
			// If there is an error, display the error as set in the WeekContainer file
			props.error && <p className="weather__error">{props.error}</p>
		}
	</div>
);

export default Weather;