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
    const [filterList, setFilterList] = useState<string[]>([]);

    function updateFilters(event: React.ChangeEvent<HTMLInputElement>) {
        const myFilter = event.target.value;
        // Check if the emotion is already present
        if (filterList.includes(myFilter)) {
            // Remove the given value
            setFilterList(filterList.filter((myFil) => myFil !== myFilter));
        } else {
            // Append the given value
            setFilterList([...filterList, myFilter]);
        }
    }

    const asianRestaurants = restaurants.filter(
        (restaurant: Restaurant): boolean => restaurant.asian
    );

    function asianFn(event: React.ChangeEvent<HTMLInputElement>) {
        setOnlyAsian(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);

        /*
        const flag = filterList.indexOf("asian");
        if (onlyAsian) {
            if (flag < 0) {
                setFilterList((prevFilters) => [...prevFilters, "asian"]);
            }
        } else {
            if (flag >= 0) {
                filterList.filter(
                    (myFilter: string): boolean => myFilter !== "asian"
                );
            }
        }*/
    }

    /*
    function asianFn2() {
        const flag = filterList.indexOf("asian");
        if (onlyAsian && flag === -1) {
            setFilterList((prevFilters) => [...prevFilters, "asian"]);
        } else if (!onlySitdown) {
            setFilterList(
                filterList.filter(
                    (myFilter: string): boolean => myFilter !== "asian"
                )
            );
        }
    }*/

    const sitdownRestaurants = restaurants.filter(
        (restaurant: Restaurant): boolean => restaurant.sitdown
    );

    function sitdownFn(event: React.ChangeEvent<HTMLInputElement>) {
        setOnlySitdown(event.target.checked);
        console.log(event.target.checked);
        updateFilters(event);

        /*
        const flag = filterList.indexOf("sitdown");
        if (onlySitdown) {
            if (flag < 0) {
                setFilterList((prevFilters) => [...prevFilters, "sitdown"]);
            }
        } else {
            if (flag >= 0) {
                filterList.filter(
                    (myFilter: string): boolean => myFilter !== "sitdown"
                );
            }
        }*/
        /*
        if (onlySitdown && flag === -1) {
            setFilterList((prevFilters) => [...prevFilters, "sitdown"]);
            console.log("sitdown was clicked");
        } else if (!onlySitdown) {
            setFilterList(
                filterList.filter(
                    (myFilter: string): boolean => myFilter !== "sitdown"
                )
            );
        }*/
    }

    /*
    function sitdownFn2() {
        const flag = filterList.indexOf("sitdown");
        if (onlySitdown && flag === -1) {
            setFilterList((prevFilters) => [...prevFilters, "sitdown"]);
            console.log("sitdown was clicked");
        } else if (!onlySitdown) {
            setFilterList(
                filterList.filter(
                    (myFilter: string): boolean => myFilter !== "sitdown"
                )
            );
        }
    }*/

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
                    //onChange={() => sitdownFn()}
                    //onClick={() => sitdownFn2()}
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
                    //onClick={() => asianFn2()}
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
                asianRestaurants={asianRestaurants}
                onlyAsian={onlyAsian}
                sitdownRestaurants={sitdownRestaurants}
                onlySitdown={onlySitdown}
                filterList={filterList}
            ></RestaurantList>
        </div>
    );
}

export default App;
