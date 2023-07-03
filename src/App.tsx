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

const locations = [
    "None",
    "Main Street",
    "Trabant",
    "Perkins",
    "S Main Street",
    "Newark Shopping Center",
    "Other Locations"
];

const services = ["No Service Selected", "Sitdown", "Takeout"];

function App(): JSX.Element {
    // restaurants - an array of all restaurants
    const [restaurants] = useState<Restaurant[]>(RESTAURANTS);

    // state for all filters
    const [chosenService, setService] = useState<string>(services[0]);
    const [onlyGrubhub, setOnlyGrubhub] = useState<boolean>(false);

    const [onlyBar, setOnlyBar] = useState<boolean>(false);
    const [onlyBoba, setOnlyBoba] = useState<boolean>(false);
    const [onlyCoffee, setOnlyCoffee] = useState<boolean>(false);

    const [onlyBowls, setOnlyBowls] = useState<boolean>(false);
    const [onlyPizza, setOnlyPizza] = useState<boolean>(false);
    const [onlyDessert, setOnlyDessert] = useState<boolean>(false);

    const [onlyAsian, setOnlyAsian] = useState<boolean>(false);
    const [lowPrice, setLowPrice] = useState<boolean>(false);
    const [midPrice, setMidPrice] = useState<boolean>(false);
    const [highPrice, setHighPrice] = useState<boolean>(false);
    const [chosenLocation, setLocation] = useState<string>(locations[0]);

    // filterList - an array of filters
    const [filterList, setFilterList] = useState<string[]>([]);

    // When a filter is selected, it is added to the array of filters called filterList
    function updateFilters(event: React.ChangeEvent<HTMLInputElement>) {
        const myFilter = event.target.value;
        if (filterList.includes(myFilter)) {
            setFilterList(filterList.filter((myFil) => myFil !== myFilter));
        } else {
            setFilterList([...filterList, myFilter]);
        }
    }

    function updateService(event: React.ChangeEvent<HTMLInputElement>) {
        setService(event.target.value);
    }

    function grubhubFn(event: React.ChangeEvent<HTMLInputElement>) {
        setOnlyGrubhub(event.target.checked);
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

    function bowlsFn(event: React.ChangeEvent<HTMLInputElement>) {
        setOnlyBowls(event.target.checked);
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

    function asianFn(event: React.ChangeEvent<HTMLInputElement>) {
        setOnlyAsian(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }

    function lowPriceFn(event: React.ChangeEvent<HTMLInputElement>) {
        setLowPrice(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }

    function midPriceFn(event: React.ChangeEvent<HTMLInputElement>) {
        setMidPrice(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }

    function highPriceFn(event: React.ChangeEvent<HTMLInputElement>) {
        setHighPrice(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }

    function updateLocation(event: React.ChangeEvent<HTMLInputElement>) {
        setLocation(event.target.value);
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
                <h4>Service Options:</h4>
                {services.map((service: string) => (
                    <Form.Check
                        key={service}
                        type="radio"
                        name={service}
                        id={service}
                        label={service}
                        value={service}
                        onChange={updateService}
                        checked={chosenService === service}
                    />
                ))}
                <Form.Check
                    type="checkbox"
                    id="check-grubhub"
                    label="Must order with Grubhub"
                    name="grubhub"
                    value="grubhub"
                    checked={onlyGrubhub}
                    onChange={grubhubFn}
                />
            </div>
            <br></br>
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
            <br></br>
            <div>
                <Form.Check
                    type="checkbox"
                    id="check-bowls"
                    label="Bowls"
                    name="bowls"
                    value="bowls"
                    checked={onlyBowls}
                    onChange={bowlsFn}
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
            <br></br>
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
                    id="check-lowprice"
                    label="Low Price: $"
                    name="lowprice"
                    value="lowprice"
                    checked={lowPrice}
                    onChange={lowPriceFn}
                />
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="check-midprice"
                    label="Mid Price: $$"
                    name="midprice"
                    value="midprice"
                    checked={midPrice}
                    onChange={midPriceFn}
                />
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="check-highprice"
                    label="High Price: $$$"
                    name="highprice"
                    value="highprice"
                    checked={highPrice}
                    onChange={highPriceFn}
                />
            </div>
            <br></br>
            <div>
                {locations.map((location: string) => (
                    <Form.Check
                        key={location}
                        type="radio"
                        name={location}
                        id={location}
                        label={location}
                        value={location}
                        onChange={updateLocation}
                        checked={chosenLocation === location}
                    />
                ))}
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
                filterList={filterList}
                chosenLocation={chosenLocation}
                chosenService={chosenService}
            ></RestaurantList>
        </div>
    );
}

/*
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
*/

export default App;
