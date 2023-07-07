import React from "react";
import { Restaurant } from "../Interfaces/restaurant";

export function RestaurantView({
    restaurant
}: {
    restaurant: Restaurant;
}): JSX.Element {
    return (
        <div>
            <h4 style={{ fontWeight: "bold" }}>{restaurant.name}</h4>
            <h5>Price: {restaurant.price}</h5>
        </div>
    );
}
