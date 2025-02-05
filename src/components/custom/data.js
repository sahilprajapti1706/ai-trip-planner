const trip = {
    "userSelection": {
        "budget": "Moderate",
        "traveler": "2 People",
        "location": {
            "value": {
                "types": [
                    "political",
                    "locality",
                    "geocode"
                ],
                "reference": "ChIJ0ZfAkQ6VQAwRZbo4U6y1Nqs",
                "place_id": "ChIJ0ZfAkQ6VQAwRZbo4U6y1Nqs",
                "description": "Las Palmas de Gran Canaria, Spain",
                "terms": [
                    {
                        "offset": 0,
                        "value": "Las Palmas de Gran Canaria"
                    },
                    {
                        "value": "Spain",
                        "offset": 28
                    }
                ],
                "structured_formatting": {
                    "main_text_matched_substrings": [
                        {
                            "offset": 0,
                            "length": 3
                        }
                    ],
                    "secondary_text": "Spain",
                    "main_text": "Las Palmas de Gran Canaria"
                },
                "matched_substrings": [
                    {
                        "length": 3,
                        "offset": 0
                    }
                ]
            },
            "label": "Las Palmas de Gran Canaria, Spain"
        },
        "numberOfDays": "2"
    },
    "userEmail": "sahilprajapati11121@gmail.com",
    "tripData": {
        "travelPlan": {
            "travelers": "2 People",
            "budget": "Moderate",
            "duration": "2 Days",
            "hotels": [
                {
                    "hotelName": "Hotel Cristina Las Palmas",
                    "hotelAddress": "Calle Gomera, 6, 35008 Las Palmas de Gran Canaria, Spain",
                    "rating": 4.3,
                    "geoCoordinates": {
                        "latitude": 28.1387,
                        "longitude": -15.4258
                    },
                    "price": "€100-€180 per night",
                    "description": "A modern hotel with sea views, a rooftop pool, and close proximity to Las Canteras Beach.",
                    "imageUrl": "https://example.com/cristina_laspalmas.jpg"
                },
                {
                    "price": "€90-€160 per night",
                    "hotelAddress": "Paseo de las Canteras, 2, 35008 Las Palmas de Gran Canaria, Spain",
                    "description": "Located directly on Las Canteras Beach, this hotel offers comfortable rooms and a great location.",
                    "geoCoordinates": {
                        "longitude": -15.4307,
                        "latitude": 28.1384
                    },
                    "hotelName": "Hotel Concorde",
                    "rating": 4.1,
                    "imageUrl": "https://example.com/concorde_hotel.jpg"
                },
                {
                    "imageUrl": "https://example.com/ac_hotel_grancanaria.jpg",
                    "description": "A stylish hotel with modern amenities, situated in a central location, close to shopping areas.",
                    "hotelName": "AC Hotel Gran Canaria",
                    "hotelAddress": "Eduardo Benot, 3, 35007 Las Palmas de Gran Canaria, Spain",
                    "price": "€80-€150 per night",
                    "rating": 4,
                    "geoCoordinates": {
                        "longitude": -15.4177,
                        "latitude": 28.1419
                    }
                }
            ],
            "location": "Las Palmas de Gran Canaria, Spain",
            "itinerary": {
                "day2": {
                    "theme": "Parks and Shopping",
                    "plan": [
                        {
                            "bestTimeToVisit": "Morning",
                            "imageUrl": "https://example.com/doramas_park.jpg",
                            "placeName": "Doramas Park",
                            "placeDetails": "A beautiful park with fountains, gardens, sculptures, and the Pueblo Canario. A perfect spot for a relaxed stroll.",
                            "timeTravel": "20 mins from Santa Ana Cathedral by bus or taxi",
                            "geoCoordinates": {
                                "longitude": -15.424,
                                "latitude": 28.127
                            },
                            "ticketsPricing": "Free"
                        },
                        {
                            "bestTimeToVisit": "Morning",
                            "timeTravel": "Within Doramas Park",
                            "placeDetails": "A traditional Canarian village replica inside Doramas park, showcasing local architecture and culture.",
                            "ticketsPricing": "Free entry, some shops might be paid",
                            "geoCoordinates": {
                                "latitude": 28.1273,
                                "longitude": -15.4258
                            },
                            "imageUrl": "https://example.com/pueblo_canario.jpg",
                            "placeName": "Pueblo Canario"
                        },
                        {
                            "bestTimeToVisit": "Afternoon",
                            "ticketsPricing": "Free entry, cost depends on shopping",
                            "placeDetails": "A modern shopping center close to the beach, with a wide range of stores, restaurants, and entertainment options.",
                            "geoCoordinates": {
                                "longitude": -15.4381,
                                "latitude": 28.1322
                            },
                            "imageUrl": "https://example.com/lasarenas_shopping.jpg",
                            "placeName": "Las Arenas Shopping Centre",
                            "timeTravel": "20 mins from Doramas Park by bus or taxi"
                        },
                        {
                            "placeName": "Return and Departure",
                            "bestTimeToVisit": "Late afternoon/Evening",
                            "ticketsPricing": "Depends on mode of travel",
                            "timeTravel": "Depends on mode of transport",
                            "imageUrl": "https://example.com/departure.jpg",
                            "placeDetails": "Head back to your hotel to collect your luggage, before heading to the airport or your next destination.",
                            "geoCoordinates": {
                                "latitude": 28.1068,
                                "longitude": -15.386
                            }
                        }
                    ]
                },
                "day1": {
                    "theme": "Beaches and Old Town",
                    "plan": [
                        {
                            "imageUrl": "https://example.com/lascanteras_beach.jpg",
                            "placeName": "Las Canteras Beach",
                            "geoCoordinates": {
                                "longitude": -15.4331,
                                "latitude": 28.1396
                            },
                            "bestTimeToVisit": "Morning to afternoon",
                            "timeTravel": "Morning exploration",
                            "placeDetails": "A long, golden sand beach perfect for swimming, sunbathing, and enjoying the promenade. One of the best city beaches in the world.",
                            "ticketsPricing": "Free"
                        },
                        {
                            "placeName": "Vegueta Old Town",
                            "geoCoordinates": {
                                "latitude": 28.108,
                                "longitude": -15.4147
                            },
                            "timeTravel": "30 mins from Las Canteras Beach by bus or taxi",
                            "placeDetails": "The historic heart of Las Palmas, with charming cobblestone streets, colonial architecture, and the Cathedral of Santa Ana.",
                            "ticketsPricing": "Free",
                            "bestTimeToVisit": "Afternoon",
                            "imageUrl": "https://example.com/vegueta_oldtown.jpg"
                        },
                        {
                            "bestTimeToVisit": "Afternoon",
                            "placeName": "Casa de Colón",
                            "placeDetails": "A museum dedicated to Christopher Columbus's voyages and relationship with the Canary Islands, housed in a beautiful historic building.",
                            "imageUrl": "https://example.com/casadecolon.jpg",
                            "ticketsPricing": "€4 per person",
                            "geoCoordinates": {
                                "longitude": -15.4138,
                                "latitude": 28.1078
                            },
                            "timeTravel": "5 mins walk from Vegueta"
                        },
                        {
                            "ticketsPricing": "Free entry, donations welcome",
                            "placeName": "Santa Ana Cathedral",
                            "bestTimeToVisit": "Late afternoon before closing time.",
                            "imageUrl": "https://example.com/santa_ana_cathedral.jpg",
                            "placeDetails": "A majestic cathedral located in Vegueta, offering great views of the city.",
                            "geoCoordinates": {
                                "latitude": 28.108,
                                "longitude": -15.415
                            },
                            "timeTravel": "2 mins walk from Casa de Colon"
                        }
                    ]
                }
            }
        }
    },
    "id": "1737526554014"
}

// Object.keys(trip.tripData?.travelPlan.itinerary).map((day)=>(
//     console.log(day)
// ))