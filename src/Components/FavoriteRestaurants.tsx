/* eslint-disable indent */
import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Restaurant } from "../Interfaces/restaurant";
import "../Styles/restaurantsTable.css";

export function FavoriteRestaurants({
    favoriteRestaurants,
    deleteFavs,
    updateSwitchOff
}: {
    favoriteRestaurants: Restaurant[];
    deleteFavs: (restaurantName: string) => void;
    updateSwitchOff: (restaurantName: string) => void;
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
    function updateFavs(restaurantName: string) {
        deleteFavs(restaurantName);
        updateSwitchOff(restaurantName);
    }

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
                            <div>
                                <h4
                                    className="border border-secondary"
                                    style={{
                                        fontWeight: "bold",
                                        backgroundColor: "#f3bc58",
                                        padding: "7px",
                                        borderRadius: "4px"
                                    }}
                                >
                                    {restaurant.name}
                                </h4>
                                <Table style={{ textAlign: "left" }}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h5
                                                    style={{
                                                        fontWeight: "bold"
                                                    }}
                                                >
                                                    Location:{" "}
                                                </h5>
                                            </td>
                                            <td>
                                                <h5>{restaurant.location}</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5
                                                    style={{
                                                        fontWeight: "bold"
                                                    }}
                                                >
                                                    Address:{" "}
                                                </h5>
                                            </td>
                                            <td>
                                                <h5>{restaurant.address}</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5
                                                    style={{
                                                        fontWeight: "bold"
                                                    }}
                                                >
                                                    Price:{" "}
                                                </h5>
                                            </td>
                                            <td>
                                                <h5>{restaurant.price}</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5
                                                    style={{
                                                        fontWeight: "bold"
                                                    }}
                                                >
                                                    Menu:{" "}
                                                </h5>
                                            </td>
                                            <td>
                                                <a
                                                    href={restaurant.menu}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Click for menu!
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
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
                                    onClick={() => updateFavs(restaurant.name)}
                                >
                                    Delete from Favorites
                                </Button>
                            </div>
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
