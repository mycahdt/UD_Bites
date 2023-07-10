/* eslint-disable indent */
import React from "react";
import { Container } from "react-bootstrap";
import { Restaurant } from "../Interfaces/restaurant";
import "../Styles/restaurantsTable.css";

export function FavoriteRestaurants({
    favoriteRestaurants
}: {
    favoriteRestaurants: Restaurant[];
}): JSX.Element {
    /*
    function getFavorites() {
        let favRestaurants: Restaurant[] = restaurants;

        favRestaurants = favRestaurants.filter(
            (restaurant: Restaurant): boolean => restaurant.liked
        );

        return favRestaurants;
    }
    const finalRestaurants = getFavorites();*/

    return (
        <div>
            <Container>
                <div className="container">
                    {favoriteRestaurants.map((restaurant: Restaurant) => (
                        <div
                            key={restaurant.name}
                            className="border border-secondary m-1 p-3"
                            style={{
                                borderRadius: "4px",
                                backgroundColor: "#fffbf7"
                            }}
                        >
                            <h2>{restaurant.name}</h2>
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
