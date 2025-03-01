const hotel = {
    name: "Marriott",
    totalRooms:325,
    roomsBooked: 189, 
    hasGym:true, 
    hasPool:true,

};

console.log(hotel);
console.log(hotel.totalRooms);
// dot notation
console.log(hotel.hasPool);
//bracket notation
console.log(hotel["name"])


let doYouHaveAGym = "hasGym";
console.log(hotel[doYouHaveAGym]);

console.log(hotel);
console.log(hotel.amenities);
hotel.amenities =["hote tub","free wifi" ]

console.log(hotel);
console.log(hotel.amenities);

hotel.hasPool = false; 
console.log(hotel);


const Hilton = Object.create(hotel);
console.log(Hilton);

// destructuring 
const {name, hasGym, totalRooms} = hotel;

console.log(hasGym);



const roomService = {
    {
        product:"towel", 
        price:0.0,
        quantity:2,
    }


};