let event = {
    title : "Barbara Tour",
    date : "2023-11-09",
    location : "Lublin Serce"
}

console.log("Tytuł: ", event.title)
console.log("Data: ", event.date)
console.log("Miejsce: ", event.location)

let participant = {}
participant.name = "Martyna Kontkiewicz"
participant.email = "martyna.kontkiewicz2@gmail.com"

console.log("Imie: ", participant.name)
console.log("Email: ", participant.email)

let wydarzenia = [
    {
        title : "Barbara Tour",
        date : "2023-11-09",
        location : "Lublin Serce"
    },

    {
        title : "Wirtuoz Tour",
        date : "2023-10-26",
        location : "Katowice"
    },

    {
        title : "Sepuku",
        date : "2023-12-30",
        location : "Warszawa"
    }
]
let wydarzenie4 = {

    title : "Rusina",
    date : "2023-02-12",
    location : "Lublin Zgrzyt"
}

wydarzenia.push (wydarzenie4)
console.log ("Dlugosc tablicy: ", wydarzenia.length);
console.log(wydarzenia)

let wydarzenie2 = wydarzenia.slice(3,4);
console.log("Nowe wydarzenia: ", wydarzenie2);

wydarzenia.shift();
console.log ("Ilosc wydarzen po odwolaniu 1: ", wydarzenia.length);
console.log ("Wydarzenia po odwolaniu 1: ");
wydarzenia.forEach(wydarzenie => console.log(`${wydarzenie.title}`));
wydarzenia.forEach(wydarzenie => console.log(`${wydarzenie.date}`));

