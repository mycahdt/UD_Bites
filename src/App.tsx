import React, { useState } from "react";
import "./App.css";
import my_restaurants from "./Data/restaurants.json";
import { Restaurant } from "./Interfaces/restaurant";
import { RestaurantList } from "./Components/RestaurantList";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FavoriteRestaurants } from "./Components/FavoriteRestaurants";

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
const meals = ["No Meal Selected", "Brunch", "Lunch", "Dinner"];
const cuisines = ["No Cuisine Selected", "Asian", "Mexican", "Other"];
const foodChoices = ["No Food Selected", "Bowls", "Pizza", "Dessert"];
const drinks = ["No Drink Selected", "Bar", "Boba", "Coffee"];

function App(): JSX.Element {
    // restaurants - an array of all restaurants
    const [restaurants, setRestaurants] = useState<Restaurant[]>(RESTAURANTS);

    // Favorite restaurants
    const [favoriteRestaurants, setFavoriteRestaurants] = useState<
        Restaurant[]
    >([]);

    // State for displaying and hiding the favorites
    const [visible, setVisible] = useState<boolean>(false);

    // Initialize the state for all filters

    // Location filters
    const [chosenLocation, setLocation] = useState<string>(locations[0]);

    // Price filters
    const [lowPrice, setLowPrice] = useState<boolean>(false);
    const [midPrice, setMidPrice] = useState<boolean>(false);
    const [highPrice, setHighPrice] = useState<boolean>(false);

    // Service filters
    const [chosenService, setService] = useState<string>(services[0]);
    const [onlyGrubhub, setOnlyGrubhub] = useState<boolean>(false);

    // Meal filters
    const [chosenMeal, setMeal] = useState<string>(meals[0]);

    // Cuisine filters
    const [chosenCuisine, setCuisine] = useState<string>(cuisines[0]);

    // Food filters
    const [chosenFood, setFood] = useState<string>(foodChoices[0]);

    // Drink filters
    const [chosenDrink, setDrink] = useState<string>(drinks[0]);

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

    function updateLocation(event: React.ChangeEvent<HTMLSelectElement>) {
        setLocation(event.target.value);
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

    function updateService(event: React.ChangeEvent<HTMLInputElement>) {
        setService(event.target.value);
    }

    function grubhubFn(event: React.ChangeEvent<HTMLInputElement>) {
        setOnlyGrubhub(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);
    }

    function updateMeal(event: React.ChangeEvent<HTMLInputElement>) {
        setMeal(event.target.value);
    }

    function updateCuisine(event: React.ChangeEvent<HTMLInputElement>) {
        console.log("The event was: " + event.target.value);
        setCuisine(event.target.value);
    }

    function updateFood(event: React.ChangeEvent<HTMLInputElement>) {
        console.log("The event was: " + event.target.value);
        setFood(event.target.value);
    }

    function updateDrinks(event: React.ChangeEvent<HTMLInputElement>) {
        console.log("The event was: " + event.target.value);
        setDrink(event.target.value);
    }

    function clearFilters() {
        setLocation(locations[0]);
        setLowPrice(false);
        setMidPrice(false);
        setHighPrice(false);
        setService(services[0]);
        setOnlyGrubhub(false);
        setMeal(meals[0]);
        setCuisine(cuisines[0]);
        setFood(foodChoices[0]);
        setDrink(drinks[0]);
        setFilterList([]);
    }

    function addToFavs(restaurantName: string) {
        const newFav = restaurants.find(
            (restaurant: Restaurant): boolean =>
                restaurant.name === restaurantName
        );
        if (newFav !== undefined) {
            if (!favoriteRestaurants.includes(newFav)) {
                setFavoriteRestaurants([...favoriteRestaurants, newFav]);
            }
        }
    }

    function deleteFavs(restaurantName: string) {
        setFavoriteRestaurants(
            favoriteRestaurants.filter(
                (rest: Restaurant): boolean => rest.name !== restaurantName
            )
        );
    }

    function updateSwitchOff(restaurantName: string) {
        const myRest = restaurants.find(
            (restaurant: Restaurant): boolean =>
                restaurant.name === restaurantName
        );
        if (myRest !== undefined) {
            myRest.liked = !myRest.liked;
            setRestaurants(
                restaurants.map(
                    (rest: Restaurant): Restaurant =>
                        rest.name !== restaurantName ? rest : myRest
                )
            );
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-header-title">UD Bites</h1>
                <h4 className="App-header-subtitle">
                    Find all restaurants at the University of Delaware!
                </h4>
            </header>
            <Row>
                <div>
                    <Button
                        style={{
                            marginBottom: "20px",
                            backgroundColor: "#dcc9b5",
                            color: "black",
                            fontWeight: "bold",
                            borderLeftColor: "black",
                            borderTopColor: "black",
                            borderRightColor: "black",
                            borderBottomColor: "black"
                        }}
                        onClick={() => setVisible(!visible)}
                    >
                        Show/Hide Favorite Restaurants
                    </Button>
                    {visible && (
                        <div style={{ marginBottom: "10px" }}>
                            <FavoriteRestaurants
                                favoriteRestaurants={favoriteRestaurants}
                                deleteFavs={deleteFavs}
                                updateSwitchOff={updateSwitchOff}
                            ></FavoriteRestaurants>
                        </div>
                    )}
                </div>
            </Row>
            <Row>
                <Col xs={4}>
                    <div
                        className="App-filters border border-dark border-2"
                        style={{
                            position: "sticky",
                            top: "20px"
                        }}
                    >
                        <h2
                            className="App-filter-title"
                            style={{ paddingTop: "10px" }}
                        >
                            Filters
                        </h2>
                        <Row>
                            <Col>
                                <div className="Location-filter border border-secondary">
                                    <h5
                                        className="App-filter-subtitles"
                                        style={{
                                            paddingTop: "7px",
                                            paddingLeft: "11.5px"
                                        }}
                                    >
                                        Location:
                                    </h5>
                                    <Form.Select
                                        value={chosenLocation}
                                        onChange={updateLocation}
                                        style={{
                                            width: "95%",
                                            marginLeft: "2.5%",
                                            marginRight: "2.5%"
                                        }}
                                    >
                                        {locations.map((location: string) => (
                                            <option
                                                key={location}
                                                id={location}
                                                label={location}
                                                value={location}
                                            />
                                        ))}
                                    </Form.Select>
                                </div>
                            </Col>
                        </Row>
                        <Row className="Price-filter border border-secondary">
                            <Col xs={2}>
                                <div>
                                    <h5 className="App-filter-subtitles">
                                        Price:
                                    </h5>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Form.Check
                                        type="checkbox"
                                        inline
                                        id="check-lowprice"
                                        label="Low: $"
                                        name="lowprice"
                                        value="lowprice"
                                        checked={lowPrice}
                                        onChange={lowPriceFn}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        inline
                                        id="check-midprice"
                                        label="Mid: $$"
                                        name="midprice"
                                        value="midprice"
                                        checked={midPrice}
                                        onChange={midPriceFn}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        inline
                                        id="check-highprice"
                                        label="High: $$$"
                                        name="highprice"
                                        value="highprice"
                                        checked={highPrice}
                                        onChange={highPriceFn}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row className="Service-filter border border-secondary">
                            <Col>
                                <div>
                                    <h5 className="App-filter-subtitles">
                                        Service Options:
                                    </h5>
                                    {services.map((service: string) => (
                                        <Form.Check
                                            key={service}
                                            type="radio"
                                            inline
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
                                        inline
                                        id="check-grubhub"
                                        label="Must order via Grubhub"
                                        name="grubhub"
                                        value="grubhub"
                                        checked={onlyGrubhub}
                                        onChange={grubhubFn}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="Meal-filter border border-secondary">
                                <div>
                                    <h5 className="App-filter-subtitles">
                                        Meal:
                                    </h5>
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
                            <Col className="Cuisine-filter border border-secondary">
                                <div>
                                    <h5 className="App-filter-subtitles">
                                        Cuisine Type:
                                    </h5>
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
                            <Col className="Food-filter border border-secondary">
                                <div>
                                    <h5 className="App-filter-subtitles">
                                        Food:
                                    </h5>
                                    {foodChoices.map((food: string) => (
                                        <Form.Check
                                            key={food}
                                            type="radio"
                                            name={food}
                                            id={food}
                                            label={food}
                                            value={food}
                                            onChange={updateFood}
                                            checked={chosenFood === food}
                                        />
                                    ))}
                                </div>
                            </Col>
                            <Col className="Drink-filter border border-secondary">
                                <div>
                                    <h5 className="App-filter-subtitles">
                                        Drinks:
                                    </h5>
                                    {drinks.map((drink: string) => (
                                        <Form.Check
                                            key={drink}
                                            type="radio"
                                            name={drink}
                                            id={drink}
                                            label={drink}
                                            value={drink}
                                            onChange={updateDrinks}
                                            checked={chosenDrink === drink}
                                        />
                                    ))}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <div style={{ marginTop: "2%" }}>
                                <Button
                                    style={{
                                        backgroundColor: "#bccde1",
                                        color: "black",
                                        fontWeight: "bold",
                                        borderLeftColor: "black",
                                        borderTopColor: "black",
                                        borderRightColor: "black",
                                        borderBottomColor: "black"
                                    }}
                                    onClick={clearFilters}
                                >
                                    Clear All Filters
                                </Button>
                            </div>
                        </Row>
                    </div>
                </Col>
                <Col xs={8}>
                    <div className="App-restaurants border border-dark border-2">
                        <h2
                            className="App-rest-title"
                            style={{ paddingTop: "10px" }}
                        >
                            Restaurants
                        </h2>
                        <RestaurantList
                            restaurants={restaurants}
                            filterList={filterList}
                            chosenLocation={chosenLocation}
                            chosenService={chosenService}
                            chosenCuisine={chosenCuisine}
                            chosenMeal={chosenMeal}
                            chosenFood={chosenFood}
                            chosenDrink={chosenDrink}
                            addToFavs={addToFavs}
                            deleteFavs={deleteFavs}
                            favoriteRestaurants={favoriteRestaurants}
                        ></RestaurantList>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default App;
