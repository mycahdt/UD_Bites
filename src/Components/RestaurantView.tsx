import React from "react";
import { Restaurant } from "../Interfaces/restaurant";
import { Table } from "react-bootstrap";

export function RestaurantView({
    restaurant
}: {
    restaurant: Restaurant;
}): JSX.Element {
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
                            <a href={restaurant.menu}>
                                Click here for the menu!
                            </a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
