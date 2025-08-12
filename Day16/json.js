/* JSON : Javascript Obaject Notation.
    - universal way to write down data so that different systems can understand it 
    - light weight data format for storing and transporting.
    - JSON is mostly used when data is sent from a server to a client.
    -key value pairs: key should be in double quotes

example: 
    {
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}
*/

/* Converting JSON to javascript Object:
methods:
- parse(): turns JSON text into javaScript object
-stringify(): 

*/
// parse: JSON -> obj
/* 
reviver function: 
JSON.parse(json,(key,value)=>{
    
    })
*/
const jsonData = '{"name": "Alex", "age":25, "city": "London"}';
const obj = JSON.parse(jsonData, (key, value) => {
  return typeof value == "string" ? value.toUpperCase() : value;
});
console.log(obj);

// stringify(): turns javascript object into JSON text

const objString = { name: "Alex", age: 25 };
const jsonText = JSON.stringify(objString);
console.log(jsonText);

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const txt = JSON.stringify(users, undefined, 4);
console.log(txt); // text means JSON- because json is a string form of an object.

// JSON.stringify(value,replacer,space);

/* Why do we care about JSON:
- every time your frontend talks to a backend(like getting data from a server)
JSON is the messenger
- APIs love JSON bacause every programming language can understand it
- Databases like MongoDB store data in a JSON-like format

*/
