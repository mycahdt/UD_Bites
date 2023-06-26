import React, { useState } from "react";
import "./App.css";
import my_restaurants from "./Data/restaurants.json";
import { Restaurant } from "./Interfaces/restaurant";
import { RestaurantList } from "./Components/RestaurantList";

const RESTAURANTS = my_restaurants.map(
    (theRest): Restaurant => ({
        ...theRest
    })
);

function App(): JSX.Element {
    const [restaurants] = useState<Restaurant[]>(RESTAURANTS);

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Mycahs first commit</p>
            <p>testing branch out</p>
            <RestaurantList restaurants={restaurants}></RestaurantList>
        </div>
    );
}

export default App;
