export const SelectTravelList = [
    {
        id: 1,
        title: "Just Me",
        description: "A solo travels in exploration",
        icon: "✈️",
        people: "1 People"
    },
    {
        id: 2,
        title: "A Couple",
        description: "Two travel in tandem",
        icon: "🥂",
        people: "2 People"
    },
    {
        id: 3,
        title: "Family",
        description: "A group of fun loving adventurers",
        icon: "👨‍👩‍👧‍👦",
        people: "3 to 5 People"
    },
    {
        id: 4,
        title: "Friends",
        description: "A bunch of thrill-seekers",
        icon: "🎉",
        people: "5 to 10 People"
    }
]

export const SelectBudgetOptions =[
    {
        id:1,
        title:"Cheap",
        description:"Stay conscious of costs",
        icon:"💸",
    },
    {
        id:2,
        title:"Moderate",
        description:"Keep the cost on the average side",
        icon:"💵",
    },
    {
        id:3,
        title:"Luxury",
        description:"Don't worry about cost",
        icon:"💰",
    }
]

export const  AI_PROMPT ="Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list with hotelName, hotelAddress, price, hotel, image url, geo-coordinates, rating, descriptions and suggest itinerary with placeName, place details, place image url , geo-coordinates, tickets pricing, time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format"