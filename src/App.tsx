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

function App(): JSX.Element {
    // restaurants - an array of all restaurants
    const [restaurants] = useState<Restaurant[]>(RESTAURANTS);

    // state for all filters
    const [onlyAsian, setOnlyAsian] = useState<boolean>(false);
    const [onlySitdown, setOnlySitdown] = useState<boolean>(false);
    const [onlyBar, setOnlyBar] = useState<boolean>(false);
    const [onlyBoba, setOnlyBoba] = useState<boolean>(false);
    const [onlyCoffee, setOnlyCoffee] = useState<boolean>(false);
    const [onlyPizza, setOnlyPizza] = useState<boolean>(false);
    const [onlyDessert, setOnlyDessert] = useState<boolean>(false);
    const [lowPrice, setLowPrice] = useState<boolean>(false);
    const [midPrice, setMidPrice] = useState<boolean>(false);
    const [highPrice, setHighPrice] = useState<boolean>(false);
    //const [main, setMain] = useState<boolean>(false);
    //const [trabant, setTrabant] = useState<boolean>(false);
    //const [perkins, setPerkins] = useState<boolean>(false);
    //const [south, setSouth] = useState<boolean>(false);
    //const [newark, setNewark] = useState<boolean>(false);
    //const [otherLocation, setOtherLocation] = useState<boolean>(false);
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

    function asianFn(event: React.ChangeEvent<HTMLInputElement>) {
        setOnlyAsian(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }

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
    /*
    function mainFn(event: React.ChangeEvent<HTMLInputElement>) {
        setMain(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }
    function trabantFn(event: React.ChangeEvent<HTMLInputElement>) {
        setTrabant(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }
    function perkinsFn(event: React.ChangeEvent<HTMLInputElement>) {
        setPerkins(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }
    function southFn(event: React.ChangeEvent<HTMLInputElement>) {
        setSouth(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }
    function newarkFn(event: React.ChangeEvent<HTMLInputElement>) {
        setNewark(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }
    function otherLocationFn(event: React.ChangeEvent<HTMLInputElement>) {
        setOtherLocation(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    } */

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
            ></RestaurantList>
        </div>
    );
}

/*
<div>
                <Form.Check
                    type="checkbox"
                    id="check-main"
                    label="Main Street"
                    name="main"
                    value="main"
                    checked={main}
                    onChange={mainFn}
                />
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="check-trabant"
                    label="Trabant"
                    name="trabant"
                    value="trabant"
                    checked={trabant}
                    onChange={trabantFn}
                />
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="check-perkins"
                    label="Perkins"
                    name="perkins"
                    value="perkins"
                    checked={perkins}
                    onChange={perkinsFn}
                />
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="check-south"
                    label="S Main Street"
                    name="south"
                    value="south"
                    checked={south}
                    onChange={southFn}
                />
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="check-newark"
                    label="Newark Shopping Center"
                    name="newark"
                    value="newark"
                    checked={newark}
                    onChange={newarkFn}
                />
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="check-otherlocation"
                    label="Other Locations"
                    name="otherlocation"
                    value="otherlocation"
                    checked={otherLocation}
                    onChange={otherLocationFn}
                />
            </div>
*/

export default App;
