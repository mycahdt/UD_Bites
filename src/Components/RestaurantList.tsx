/* eslint-disable indent */
import React from "react";
import { Stack } from "react-bootstrap";
import { Restaurant } from "../Interfaces/restaurant";
import { RestaurantView } from "./RestaurantView";

export function RestaurantList({
    restaurants,
    filterList,
    chosenLocation,
    chosenService
}: {
    restaurants: Restaurant[];
    filterList: string[];
    chosenLocation: string;
    chosenService: string;
}): JSX.Element {
    function allFilters() {
        let currentRestaurants: Restaurant[] = restaurants;

        for (let i = 0; i < filterList.length; i++) {
            if (filterList[i] === "grubhub") {
                currentRestaurants = currentRestaurants.filter(
                    (restaurant: Restaurant): boolean => restaurant.grubhub
                );
            } else if (filterList[i] === "asian") {
                currentRestaurants = currentRestaurants.filter(
                    (restaurant: Restaurant): boolean => restaurant.asian
                );
            } else if (filterList[i] === "bar") {
                currentRestaurants = currentRestaurants.filter(
                    (restaurant: Restaurant): boolean => restaurant.bar
                );
            } else if (filterList[i] === "boba") {
                currentRestaurants = currentRestaurants.filter(
                    (restaurant: Restaurant): boolean => restaurant.boba
                );
            } else if (filterList[i] === "coffee") {
                currentRestaurants = currentRestaurants.filter(
                    (restaurant: Restaurant): boolean => restaurant.coffee
                );
            } else if (filterList[i] === "pizza") {
                currentRestaurants = currentRestaurants.filter(
                    (restaurant: Restaurant): boolean => restaurant.pizza
                );
            } else if (filterList[i] === "dessert") {
                currentRestaurants = currentRestaurants.filter(
                    (restaurant: Restaurant): boolean => restaurant.dessert
                );
            }
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
        chosenService !== "None" ? (
        <div>
            <Stack gap={3}>
                {finalRestaurants.map((restaurant: Restaurant) => (
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
        </div>
    ) : (
        <div>
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
        </div>
    );
}