console.log('Hallo daar!');
import axios from "axios";

const API_KEY = 'https://restcountries.com/v2/all'



// naam, vlag, has a population of amount of people,

// const countryList = document.getElementById('country-list');
//
// const fetchCountries = async () => {
//     try {
//         const response = await axios.get (API_KEY);
//
//         console.log(response.data);
//
//         // console.log(response.data[0].name)
//
//         countryList.innerHTML = `
//         <li><p>${response.data[0].name}</p></li>
//         <li class="${response.data[0].region}">Has a population of ${response.data[0].population}.</li>
//         `
//
//     } catch (e) {
//
//     }
// }

// fetchCountries()

// Schrijf een aparte functie die één regio-naam verwacht, en op basis van deze regio de correcte kleur-naam als string teruggeeft. Gebruik deze, om de naam van het land in de juiste kleur weer te geven op de pagina. Tip: zorg ervoor dat je CSS-classes maakt voor alle regio-kleuren!

// const countryList2 = document.getElementById('country-list2');
//
// async function fetchCountries2 () {
//     try {
//         const response = await axios.get(API_KEY)
//         countryList2.innerHTML += `
//             <li class="${response.data[1].region}">
//                 <h4>${response.data[1].name}</h4>
//                 <p>Has a population of ${response.data[1].population} people.</p>
//             </li>
//             <li><img src="${response.data[1].flag}"</img></li>`
//
//
//         console.log(response.data)
//     } catch (e) {
//
//     }
// }
//
// fetchCountries2();

// Sc

const countryList2 = document.getElementById('country-list2');



async function fetchCountries2 (input) {
    try {
        let response = await axios.get(API_KEY)

        console.log(response);

        response.data.sort((a, b) => {
            return a.population - b.population
        })

        let mappedResponse = response.data.map ((input) =>  {
            return input.name;
        })

        for (let i = 0; i < mappedResponse.length; i++) {
            countryList2.innerHTML += `
            <li class="${response.data[i].region}">
                <h4>${response.data[i].name}</h4>
                <p>Has a population of ${response.data[i].population} people.</p>
                <img src="${response.data[i].flag}"</img>
            </li>         
            `
        }

        console.log(mappedResponse)
    } catch (e) {
    }
}

fetchCountries2();

