import React, { useState } from "react";
import "./App.css";
import my_restaurants from "./Data/restaurants.json";
import { Restaurant } from "./Interfaces/restaurant";
import { RestaurantList } from "./Components/RestaurantList";
import { Form } from "react-bootstrap";

const RESTAURANTS = my_restaurants.map(
    (theRest): Restaurant => ({
        ...theRest
    })
);

function App(): JSX.Element {
    const [restaurants] = useState<Restaurant[]>(RESTAURANTS);
    const [onlyAsian, setOnlyAsian] = useState<boolean>(false);
    const [onlySitdown, setOnlySitdown] = useState<boolean>(false);

    const asianRestaurants = restaurants.filter(
        (restaurant: Restaurant): boolean => restaurant.asian
    );

    const sitdownRestaurants = restaurants.filter(
        (restaurant: Restaurant): boolean => restaurant.sitdown
    );

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
            <div>
                <Form.Check
                    type="checkbox"
                    id="check-sitdown"
                    label="Sitdown"
                    name="sitdown"
                    checked={onlySitdown}
                    onClick={() => setOnlySitdown(!onlySitdown)}
                />
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="check-asian"
                    label="Asian"
                    name="asian"
                    checked={onlyAsian}
                    onClick={() => setOnlyAsian(!onlyAsian)}
                />
            </div>
            <RestaurantList
                restaurants={restaurants}
                asianRestaurants={asianRestaurants}
                onlyAsian={onlyAsian}
                sitdownRestaurants={sitdownRestaurants}
                onlySitdown={onlySitdown}
            ></RestaurantList>
        </div>
    );
}

export default App;
