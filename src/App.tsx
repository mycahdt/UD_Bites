import React, { useState } from "react";
import "./App.css";
import my_restaurants from "./Data/restaurants.json";
import { Restaurant } from "./Interfaces/restaurant";
import { RestaurantList } from "./Components/RestaurantList";
import { Form, Stack } from "react-bootstrap";

const RESTAURANTS = my_restaurants.map(
    (theRest): Restaurant => ({
        ...theRest
    })
);

function App(): JSX.Element {
    const [restaurants] = useState<Restaurant[]>(RESTAURANTS);
    const [onlyAsian, setOnlyAsian] = useState<boolean>(false);
    const [onlySitdown, setOnlySitdown] = useState<boolean>(false);
    const [onlyBar, setOnlyBar] = useState<boolean>(false);
    const [onlyBoba, setOnlyBoba] = useState<boolean>(false);
    const [onlyCoffee, setOnlyCoffee] = useState<boolean>(false);
    const [onlyPizza, setOnlyPizza] = useState<boolean>(false);
    const [onlyDessert, setOnlyDessert] = useState<boolean>(false);
    const [filterList, setFilterList] = useState<string[]>([]);

    function updateFilters(event: React.ChangeEvent<HTMLInputElement>) {
        const myFilter = event.target.value;
        if (filterList.includes(myFilter)) {
            setFilterList(filterList.filter((myFil) => myFil !== myFilter));
        } else {
            setFilterList([...filterList, myFilter]);
        }
    }

    /*
    const asianRestaurants = restaurants.filter(
        (restaurant: Restaurant): boolean => restaurant.asian
    );*/

    function asianFn(event: React.ChangeEvent<HTMLInputElement>) {
        setOnlyAsian(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }

    /*
    const sitdownRestaurants = restaurants.filter(
        (restaurant: Restaurant): boolean => restaurant.sitdown
    );*/

    function sitdownFn(event: React.ChangeEvent<HTMLInputElement>) {
        setOnlySitdown(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }

    function barFn(event: React.ChangeEvent<HTMLInputElement>) {
        setOnlyBar(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }

    function bobaFn(event: React.ChangeEvent<HTMLInputElement>) {
        setOnlyBoba(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }

    function coffeeFn(event: React.ChangeEvent<HTMLInputElement>) {
        setOnlyCoffee(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }

    function pizzaFn(event: React.ChangeEvent<HTMLInputElement>) {
        setOnlyPizza(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }

    function dessertFn(event: React.ChangeEvent<HTMLInputElement>) {
        setOnlyDessert(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }

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
                    value="sitdown"
                    checked={onlySitdown}
                    onChange={sitdownFn}
                />
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="check-asian"
                    label="Asian"
                    name="asian"
                    value="asian"
                    checked={onlyAsian}
                    onChange={asianFn}
                />
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="check-bar"
                    label="Bar"
                    name="bar"
                    value="bar"
                    checked={onlyBar}
                    onChange={barFn}
                />
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="check-boba"
                    label="Boba"
                    name="boba"
                    value="boba"
                    checked={onlyBoba}
                    onChange={bobaFn}
                />
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="check-coffee"
                    label="Coffee"
                    name="coffee"
                    value="coffee"
                    checked={onlyCoffee}
                    onChange={coffeeFn}
                />
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="check-pizza"
                    label="Pizza"
                    name="pizza"
                    value="pizza"
                    checked={onlyPizza}
                    onChange={pizzaFn}
                />
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="check-dessert"
                    label="Dessert"
                    name="dessert"
                    value="dessert"
                    checked={onlyDessert}
                    onChange={dessertFn}
                />
            </div>
            <div>
                <Stack>
                    {filterList.map((myFilter: string) => (
                        <div key={myFilter} className="bg-light border m-2 p-2">
                            {myFilter}
                        </div>
                    ))}
                </Stack>
            </div>
            <hr></hr>
            <br></br>
            <RestaurantList
                restaurants={restaurants}
                //asianRestaurants={asianRestaurants}
                //onlyAsian={onlyAsian}
                //sitdownRestaurants={sitdownRestaurants}
                //onlySitdown={onlySitdown}
                filterList={filterList}
            ></RestaurantList>
        </div>
    );
}

export default App;
