import React from "react";
import { Restaurant } from "../Interfaces/restaurant";

export function RestaurantView({
    restaurant
}: {
    restaurant: Restaurant;
}): JSX.Element {
    return (
        <div>
            <h3>Name: {restaurant.name}</h3>
            <h4>Price: {restaurant.price}</h4>
        </div>
    );
}
