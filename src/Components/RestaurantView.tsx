import React, { useState } from "react";
import { Restaurant } from "../Interfaces/restaurant";
import { Form, Table } from "react-bootstrap";

export function RestaurantView({
    restaurant,
    addToFavs,
    deleteFavs,
    favoriteRestaurants
}: {
    restaurant: Restaurant;
    addToFavs: (restaurantName: string) => void;
    deleteFavs: (restaurantName: string) => void;
    favoriteRestaurants: Restaurant[];
}): JSX.Element {
    const [isLiked, setLiked] = useState<boolean>(restaurant.liked);
    function updateToggle() {
        setLiked(!isLiked);
    }
    if (!favoriteRestaurants.includes(restaurant) && isLiked === true) {
        updateToggle();
    }
    function updateLiked(event: React.ChangeEvent<HTMLInputElement>) {
        setLiked(event.target.checked);
        console.log("Like status: " + event.target.checked);
        restaurant.liked = !restaurant.liked;
        if (event.target.checked === true) {
            addToFavs(restaurant.name);
            console.log("reached inside, it was true!");
        } else {
            deleteFavs(restaurant.name);
            console.log(restaurant.name + " : the rest was deleted from favs!");
        }
    }
    return (
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
                            <h5 style={{ fontWeight: "bold" }}>Location: </h5>
                        </td>
                        <td>
                            <h5>{restaurant.location}</h5>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5 style={{ fontWeight: "bold" }}>Address: </h5>
                        </td>
                        <td>
                            <h5>{restaurant.address}</h5>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5 style={{ fontWeight: "bold" }}>Price: </h5>
                        </td>
                        <td>
                            <h5>{restaurant.price}</h5>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5 style={{ fontWeight: "bold" }}>Menu: </h5>
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
            <div
                className="border border-secondary"
                style={{
                    backgroundColor: "#dcc9b5",
                    borderRadius: "4px",
                    fontSize: "80%",
                    paddingTop: "7px",
                    alignItems: "center"
                }}
            >
                <Form.Check
                    type="switch"
                    inline
                    id="is-liked"
                    label="Add/Remove from Favorites!"
                    checked={isLiked}
                    onChange={updateLiked}
                />
            </div>
        </div>
    );
}
