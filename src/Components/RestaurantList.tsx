/* eslint-disable indent */
import React from "react";
import { Container } from "react-bootstrap";
import { Restaurant } from "../Interfaces/restaurant";
import { RestaurantView } from "./RestaurantView";
import "../Styles/restaurantsTable.css";

export function RestaurantList({
    restaurants,
    filterList,
    chosenLocation,
    chosenService,
    chosenCuisine,
    chosenMeal,
    chosenFood,
    chosenDrink
}: {
    restaurants: Restaurant[];
    filterList: string[];
    chosenLocation: string;
    chosenService: string;
    chosenCuisine: string;
    chosenMeal: string;
    chosenFood: string;
    chosenDrink: string;
}): JSX.Element {
    function allFilters() {
        let currentRestaurants: Restaurant[] = restaurants;

        for (let i = 0; i < filterList.length; i++) {
            if (filterList[i] === "grubhub") {
                currentRestaurants = currentRestaurants.filter(
                    (restaurant: Restaurant): boolean => restaurant.grubhub
                );
            }
        }

        if (chosenDrink === "Bar") {
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean => restaurant.bar
            );
        } else if (chosenDrink === "Boba") {
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean => restaurant.boba
            );
        } else if (chosenDrink === "Coffee") {
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean => restaurant.coffee
            );
        }

        if (chosenFood === "Bowls") {
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean => restaurant.bowls
            );
        } else if (chosenFood === "Pizza") {
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean => restaurant.pizza
            );
        } else if (chosenFood === "Dessert") {
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean => restaurant.dessert
            );
        }

        if (chosenMeal === "Brunch") {
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean => restaurant.brunch
            );
        } else if (chosenMeal === "Lunch" || chosenMeal === "Dinner") {
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean => restaurant.lunchdinner
            );
        }

        if (chosenCuisine === "Asian") {
            //console.log("Mexican was chosen");
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean => restaurant.asian
            );
        } else if (chosenCuisine === "Mexican") {
            //console.log("Asian was chosen");
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean => restaurant.mexican
            );
        } else if (chosenCuisine === "Other") {
            //console.log("Asian was chosen");
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean =>
                    !restaurant.asian && !restaurant.mexican
            );
        }

        if (chosenService === "Sitdown") {
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean => restaurant.sitdown
            );
        } else if (chosenService === "Takeout") {
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean => !restaurant.sitdown
            );
        }

        if (chosenLocation !== "None" && chosenLocation !== "Other Locations") {
            console.log("It is not non and not other locations!!!!");
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean =>
                    restaurant.location === chosenLocation
            );
        } else if (chosenLocation === "Other Locations") {
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean =>
                    restaurant.location !== "Main Street" &&
                    restaurant.location !== "Trabant" &&
                    restaurant.location !== "Perkins" &&
                    restaurant.location !== "S Main Street" &&
                    restaurant.location !== "Newark Shopping Center"
            );
        }

        if (
            filterList.includes("lowprice") &&
            filterList.includes("midprice") &&
            filterList.includes("highprice")
        ) {
            console.log("All prices");
            return currentRestaurants;
        } else if (
            filterList.includes("lowprice") &&
            filterList.includes("midprice")
        ) {
            console.log("$ and $$");
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean =>
                    restaurant.price === "$" || restaurant.price === "$$"
            );
        } else if (
            filterList.includes("lowprice") &&
            filterList.includes("highprice")
        ) {
            console.log("$ and $$$");
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean =>
                    restaurant.price === "$" || restaurant.price === "$$$"
            );
        } else if (
            filterList.includes("midprice") &&
            filterList.includes("highprice")
        ) {
            console.log("$$ and $$$");
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean =>
                    restaurant.price === "$$" || restaurant.price === "$$$"
            );
        } else if (filterList.includes("lowprice")) {
            console.log("Just $");
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean => restaurant.price === "$"
            );
        } else if (filterList.includes("midprice")) {
            console.log("Just $$");
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean => restaurant.price === "$$"
            );
        } else if (filterList.includes("highprice")) {
            console.log("Just $$$");
            currentRestaurants = currentRestaurants.filter(
                (restaurant: Restaurant): boolean => restaurant.price === "$$$"
            );
        }

        return currentRestaurants;
    }
    const finalRestaurants = allFilters();

    return filterList.length > 0 ||
        chosenLocation !== "None" ||
        chosenService !== "No Service Selected" ||
        chosenCuisine !== "No Cuisine Selected" ||
        chosenMeal !== "No Meal Selected" ||
        chosenFood !== "No Food Selected" ||
        chosenDrink !== "No Drink Selected" ? (
        <div>
            <Container>
                <div className="container">
                    {finalRestaurants.map((restaurant: Restaurant) => (
                        <div
                            key={restaurant.name}
                            className="border border-secondary m-1 p-3"
                            style={{
                                borderRadius: "4px",
                                backgroundColor: "#fffbf7"
                            }}
                        >
                            <RestaurantView
                                restaurant={restaurant}
                            ></RestaurantView>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    ) : (
        <div>
            <Container>
                <div className="container">
                    {restaurants.map((restaurant: Restaurant) => (
                        <div
                            key={restaurant.name}
                            className="border border-secondary m-1 p-3"
                            style={{
                                borderRadius: "4px",
                                backgroundColor: "#fffbf7"
                            }}
                        >
                            <RestaurantView
                                restaurant={restaurant}
                            ></RestaurantView>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

/*
            <Stack gap={3}>
                {restaurants.map((restaurant: Restaurant) => (
                    <div
                        key={restaurant.name}
                        className="bg-light border m-2 p-2"
                    >
                        <RestaurantView
                            restaurant={restaurant}
                        ></RestaurantView>
                    </div>
                ))}
            </Stack>
*/
