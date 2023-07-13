console.log("person1: shows ticket");
console.log('person2: showa ticket');
const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('ticket');}, 3000)
});
const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
const getCandy = new Promise((resolve, reject) => resolve('Candy'));
const getCake = new Promise((resolve, reject) => resolve('cake'));
let ticket = await promiseWifeBringingTicks;

console.log('wife: i have the ${ticket}');
console.log('husband: we should go in');
console.log('wife: no i am hungry');

let [popcorn, candy, cake] = await Promise.all([ getPopcorn, getCandy, getcake]);
console.log(${popcorn}, ${candy}, ${cake});
console.log('husband: i got some ${popcorn} ');
console.log('husband: we should go in');
console.log('wife: i need butter on my popcorn');
console.log('husband: thank you for the reminder *grins*');
return ticket;
}
preMovie().then((m) => console.log('person3: shows ${m}'));

console.log('person4: shows ticket');
console.log("person5: shows ticket");
