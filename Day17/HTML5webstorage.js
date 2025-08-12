/* Web storage: browser based mini data base where you can store data directly on the user's device
    - localStorage: Data stays even after closing the browser
    - sessionstorage: data disappears when the tab/window closes.

Feature	       Cookies	Web Storage
Storage limit	~4 KB	~5 MB or more
Sent to server	Yes (on every request)	No
Performance	Slower (extra data in requests)	Faster
Access	Server & JS	Only JS
*/

/* Local storage: Shared between all tabs of the same site(same protocol + domain +port)
    sessionStorage -> only works for one tab, opening a new tab starts fresh

    common use cases:
    - storing user preferences (dark mode, language)

*/

/* 5 methods to work on local storage:
1. setItem(): store a value under a key
2. getItem(): Retrieve a value by key
3. removeItem(key): dalete a value by key 
4. clear(): remove all keys & values
5. key(index): Get the key name at a specific position
*/

localStorage.setItem("firstName", "Asabeneh");
localStorage.setItem("age", 200);

console.log(localStorage.getItem("firstName"));
console.log(localStorage.getItem("age"));

localStorage.clear();
