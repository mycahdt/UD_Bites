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
    asianRestaurants: Restaurant[];
    onlyAsian: boolean;
    sitdownRestaurants: Restaurant[];
    onlySitdown: boolean;
    filterList: string[];
}): JSX.Element {
    //const [finalRestaurants, setFinalRestaurants] = useState<Restaurant[]>([]);

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
            }
        }
        return currentRestaurants;
    }
    const finalRestaurants = allFilters();

    /*const [finalRestaurants, setFinalRestaurants] =
        useState<Restaurant[]>(restaurants);*/

    /*
    function please(){
        filterList.map((myFil: string) => (
        myFil === "asian" ?
            (const finalRestaurants = restaurants.filter(
                (restaurant: Restaurant): boolean => restaurant.asian
            )) : 
            (const finalRestaurants = restaurants.filter(
                (restaurant: Restaurant): Restaurant => restaurant
            ))
        ));
    }

    const finalRestaurants = restaurants.filter(
        (restaurant: Restaurant): boolean =>
            restaurant.asian && restaurant.sitdown
    );


    
    (currentList: Restaurant[], myFil: string) =>
            myFil === "asian"
                ? currentList.filter(
                      (restaurant: Restaurant): boolean => restaurant.asian
                  )
                : currentList.filter(
                    (restaurant: Restaurant): boolean => restaurant.asian
                )),
        restaurants
    );*/

    /*
    const asianRestaurants = restaurants.filter(
        (restaurant: Restaurant): boolean => restaurant.asian
    );*/

    /*
    void function allFiltered(oneFilter: string, newRestList: Restaurant[]) {
        if (oneFilter === "asian") {
            const filteredRestList = newRestList.filter(
                (restaurant: Restaurant): boolean => restaurant.asian
            );
        } else if (oneFilter === "sitdown") {
            const filteredRestList = newRestList.filter(
                (restaurant: Restaurant): boolean => restaurant.sitdown
            );
        setFinalRestaurants(filteredRestList);
        return 1;
    }

    setFinalRestaurants( filterList.map((myFilter: string) => (allFiltered(myFilter, restaurants))))*/

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

    /*
    onlyAsian ? (
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
    );*/
}
