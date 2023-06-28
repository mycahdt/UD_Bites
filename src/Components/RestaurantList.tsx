import React from "react";
import { Stack } from "react-bootstrap";
import { Restaurant } from "../Interfaces/restaurant";
import { RestaurantView } from "./RestaurantView";

export function RestaurantList({
    restaurants,
    //asianRestaurants,
    //onlyAsian,
    //sitdownRestaurants,
    //onlySitdown,
    filterList
}: {
    restaurants: Restaurant[];
    //asianRestaurants: Restaurant[];
    //onlyAsian: boolean;
    //sitdownRestaurants: Restaurant[];
    //onlySitdown: boolean;
    filterList: string[];
}): JSX.Element {
    function allFilters() {
        let currentRestaurants: Restaurant[] = restaurants;
        for (let i = 0; i < filterList.length; i++) {
            if (filterList[i] === "asian") {
                currentRestaurants = currentRestaurants.filter(
                    (restaurant: Restaurant): boolean => restaurant.asian
                );
            } else if (filterList[i] === "sitdown") {
                currentRestaurants = currentRestaurants.filter(
                    (restaurant: Restaurant): boolean => restaurant.sitdown
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
        return currentRestaurants;
    }
    const finalRestaurants = allFilters();

    return filterList.length > 0 ? (
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
