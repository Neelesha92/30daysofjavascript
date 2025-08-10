/* set: collection of elements.
    -only contains unique elements.     
*/

// empty set
const companies = new Set();
console.log(companies);

// creating set from array
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

// Set is an iterable object and we can iterate through each elements.

for (const languages of setOfLanguages) {
  console.log(languages);
}

// adding an element to a set: add

companies.add("Google");
companies.add("Facebook");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Microsoft");
console.log(companies.size); // 5 elements in the set
console.log(companies);

// use loop to add element

const companiesList = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
const setOfCompanies = new Set();
for (const company of companiesList) {
  setOfCompanies.add(company);
}
console.log(setOfCompanies);

// deleting an element to a set: delete
companies.delete("Google");
console.log(companies);

// checking an element in the set : has method

console.log(companies.has("Apple"));
console.log(companies.has("Amazon"));

// clearing the set

companies.clear();
console.log(companies);

//Union of sets
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(c);

// Map
//creating an empty map
const map = new Map();
console.log(map);

// creating an Map from array

countries = [
  ["Finland", "Helsinki"],
  ["sweden", "stockholm"],
  ["Norway", "Oslo"],
];
const mapCountries = new Map(countries);
console.log(mapCountries);
console.log(mapCountries.size);

//adding values to the map

const countriesMap = new Map();
countriesMap.set("Finland", "Helsinki");
countriesMap.set("Sweden", "Stockholm");
countriesMap.set("Norway", "Oslo");
console.log(countriesMap);
console.log(countriesMap.size);

// getting a value from map
console.log(countriesMap.get("Finland"));

// checking key in map
console.log(countriesMap.has("Finland"));

// getting all values from map using loop

for (const country of countriesMap) {
  console.log(country);
}

for (const [country, city] of countriesMap) {
  console.log(country, city);
}

// Intersection of sets

let set1 = [1, 2, 3, 4, 5];
let set2 = [3, 4, 5, 6];

// Convert arrays to Sets
let setOne = new Set(set1);
let setTwo = new Set(set2);

// Filter set1 elements that are also in set2
let set3 = set1.filter((num) => setTwo.has(num));

// Convert result to a Set to remove duplicates
let setThree = new Set(set3);

console.log(setThree); // Output: Set(3) { 3, 4, 5 }

let set4 = set1.filter((num) => !setTwo.has(num));
let setFour = new Set(set4);
console.log(setFour);
