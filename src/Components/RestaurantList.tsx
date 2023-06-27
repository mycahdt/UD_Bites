import React from "react";
import { Stack } from "react-bootstrap";
import { Restaurant } from "../Interfaces/restaurant";
import { RestaurantView } from "./RestaurantView";

export function RestaurantList({
    restaurants,
    asianRestaurants,
    onlyAsian,
    sitdownRestaurants,
    onlySitdown
}: {
    restaurants: Restaurant[];
    asianRestaurants: Restaurant[];
    onlyAsian: boolean;
    sitdownRestaurants: Restaurant[];
    onlySitdown: boolean;
}): JSX.Element {
    return onlyAsian ? (
        <div>
            <Stack gap={3}>
                {asianRestaurants.map((restaurant: Restaurant) => (
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
    ) : onlySitdown ? (
        <div>
            <Stack gap={3}>
                {sitdownRestaurants.map((restaurant: Restaurant) => (
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
