import React from 'react';
import Form from './Form';
import Weather from './Weather';
import Container from 'react-bootstrap/Container'

class WeekContainer extends React.Component {
    // Property state added below for the items listed
    state = {
        temperature: "",
        city: "",
        humidity: "",
        description: "",
        icon: "",
        error: "",
    }
    // onSubmit button get the desired city from below function
    getWeather = async (e) => {
        // City target set to get the value the user typed in
        const city = e.target.elements.city.value;
        // Prevent the page from reloading
        e.preventDefault();
        // Call the api in a fetch function. The API url and the key has been added to the .env file in the root directory
        const api_call =
            await
                fetch(
                    `${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
                );
        // Response set to await the api call
        const response =
            await api_call.json();
        console.log(response);
        // console.log("Data List Loaded");
        // If the city is found, the items to be rendered is set below, the tempratures has been set to fixed with 0 decimal numbers
        if (city) {
            this.setState({
                temperature: response.main.temp.toFixed(0),
                temperatureMin: response.main.temp_min.toFixed(0),
                temperatureMax: response.main.temp_max.toFixed(0),
                city: response.name,
                humidity: response.main.humidity,
                description: response.weather[0].description.toUpperCase(),
                icon: response.weather[0].icon,
                error: ""
            })
            // Else if the city can't be located the data is set to be empty and an error to be shown stating Please check the spelling or try again...
        } else {
            this.setState({
                temperature: "",
                city: "",
                humidity: "",
                description: "",
                icon: "",
                error: "Please check the spelling or try again..."
            })
        };
    }
    // Render the app
    render() {
        // Return the items to the page as: 
        return (
            <>
                {/* Import bootstrap from the CDN link */}
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
                {/* Added a container to keep items together */}
                <Container className="main">
                    {/* Imported the form and set this.getWeather promise to find the city */}
                    <Form className="userInput"
                        getWeather={this.getWeather}
                    />
                    <br />
                    {/* Add all elements to the page as per the defined method on the Weather.js file */}
                    <Weather className="weatherInfo"
                        temperature={this.state.temperature}
                        temperatureMin={this.state.temperatureMin}
                        temperatureMax={this.state.temperatureMax}
                        humidity={this.state.humidity}
                        city={this.state.city}
                        description={this.state.description}
                        icon={this.state.icon}
                        error={this.state.error}
                    />
                </Container>
            </>
        )
    }
}

export default WeekContainer;