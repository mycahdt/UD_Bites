import React, { useState } from "react";
import "./App.css";
import my_restaurants from "./Data/restaurants.json";
import { Restaurant } from "./Interfaces/restaurant";
import { RestaurantList } from "./Components/RestaurantList";
import { Col, Form, Row, Stack } from "react-bootstrap";

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

const cuisines = ["No Cuisine Selected", "Asian", "Mexican"];

const meals = ["No Meal Selected", "Brunch", "Lunch and Dinner"];

function App(): JSX.Element {
    // restaurants - an array of all restaurants
    const [restaurants] = useState<Restaurant[]>(RESTAURANTS);

    // Initialize the state for all filters

    // Service filters
    const [chosenService, setService] = useState<string>(services[0]);
    const [onlyGrubhub, setOnlyGrubhub] = useState<boolean>(false);

    // Drink filters
    const [onlyBar, setOnlyBar] = useState<boolean>(false);
    const [onlyBoba, setOnlyBoba] = useState<boolean>(false);
    const [onlyCoffee, setOnlyCoffee] = useState<boolean>(false);

    // Food filters
    const [onlyBowls, setOnlyBowls] = useState<boolean>(false);
    const [onlyPizza, setOnlyPizza] = useState<boolean>(false);
    const [onlyDessert, setOnlyDessert] = useState<boolean>(false);

    // Cuisine filters
    const [chosenCuisine, setCuisine] = useState<string>(cuisines[0]);

    // Price filters
    const [lowPrice, setLowPrice] = useState<boolean>(false);
    const [midPrice, setMidPrice] = useState<boolean>(false);
    const [highPrice, setHighPrice] = useState<boolean>(false);

    // Location filters
    const [chosenLocation, setLocation] = useState<string>(locations[0]);

    // Meal filters
    const [chosenMeal, setMeal] = useState<string>(meals[0]);

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

    function updateCuisine(event: React.ChangeEvent<HTMLInputElement>) {
        console.log("The event was: " + event.target.value);
        setCuisine(event.target.value);
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

    function updateMeal(event: React.ChangeEvent<HTMLInputElement>) {
        setMeal(event.target.value);
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
            <Row>
                <Col xs={6} md={4}>
                    <div style={{ position: "sticky", top: "18px" }}>
                        <Row>
                            <Col>
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
                            </Col>
                            <Col>
                                <div>
                                    <h4>Drinks:</h4>
                                    <Form.Check
                                        type="checkbox"
                                        id="check-bar"
                                        label="Bar"
                                        name="bar"
                                        value="bar"
                                        checked={onlyBar}
                                        onChange={barFn}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        id="check-boba"
                                        label="Boba"
                                        name="boba"
                                        value="boba"
                                        checked={onlyBoba}
                                        onChange={bobaFn}
                                    />
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
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h4>Food Options:</h4>
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
                                    <Form.Check
                                        type="checkbox"
                                        id="check-pizza"
                                        label="Pizza"
                                        name="pizza"
                                        value="pizza"
                                        checked={onlyPizza}
                                        onChange={pizzaFn}
                                    />
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
                            </Col>
                            <Col>
                                <div>
                                    <h4>Cuisine Type:</h4>
                                    {cuisines.map((cuisine: string) => (
                                        <Form.Check
                                            key={cuisine}
                                            type="radio"
                                            name={cuisine}
                                            id={cuisine}
                                            label={cuisine}
                                            value={cuisine}
                                            onChange={updateCuisine}
                                            checked={chosenCuisine === cuisine}
                                        />
                                    ))}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <h4>Prices:</h4>
                                    <Form.Check
                                        type="checkbox"
                                        id="check-lowprice"
                                        label="Low Price: $"
                                        name="lowprice"
                                        value="lowprice"
                                        checked={lowPrice}
                                        onChange={lowPriceFn}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        id="check-midprice"
                                        label="Mid Price: $$"
                                        name="midprice"
                                        value="midprice"
                                        checked={midPrice}
                                        onChange={midPriceFn}
                                    />
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
                            </Col>
                            <Col>
                                <div>
                                    <h4>Location:</h4>
                                    {locations.map((location: string) => (
                                        <Form.Check
                                            key={location}
                                            type="radio"
                                            name={location}
                                            id={location}
                                            label={location}
                                            value={location}
                                            onChange={updateLocation}
                                            checked={
                                                chosenLocation === location
                                            }
                                        />
                                    ))}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <h4>Meal:</h4>
                                    {meals.map((meal: string) => (
                                        <Form.Check
                                            key={meal}
                                            type="radio"
                                            name={meal}
                                            id={meal}
                                            label={meal}
                                            value={meal}
                                            onChange={updateMeal}
                                            checked={chosenMeal === meal}
                                        />
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={8}>
                    <RestaurantList
                        restaurants={restaurants}
                        filterList={filterList}
                        chosenLocation={chosenLocation}
                        chosenService={chosenService}
                        chosenCuisine={chosenCuisine}
                        chosenMeal={chosenMeal}
                    ></RestaurantList>
                    <div>
                        <Stack>
                            {filterList.map((myFilter: string) => (
                                <div
                                    key={myFilter}
                                    className="bg-light border m-2 p-2"
                                >
                                    {myFilter}
                                </div>
                            ))}
                        </Stack>
                    </div>
                </Col>
            </Row>
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
