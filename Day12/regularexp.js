// regular expression
/*  RegExp is a small programming language that helps to find pattern in data. */

// constructor:

// literal notation:
/* /pattern/flags 
common flags:
g- global
i-case-insensitive
m-multiline
*/

/* common regular expression methods:


1. test(): checks if a match exists
         - returns true or false

2. match(): returns match results which is array/null
    - if we donot use a global falg, match() returns an array containing:
    the pattern, index , input and group

3. search(): returns index of match or -1 

4. replace(): replaces match with a new string 

*/

const str = "I love javascript";
const pattern = /love/;
const result = pattern.test(str);
console.log(result);

// array containing all of the match
const str1 = "I love JavaScript";
const pattern1 = /love/;
const result1 = str1.match(pattern1);
console.log(result1);

// with global flag

const strg = "I love JavaScript";
const patterng = /love/;
const resultg = strg.match(patterng);
console.log(resultg);

// search - returns index if there is else -1

const strS = "I love JavaScript";
const patternS = /love/;
const resultS = strS.search(patternS);
console.log(resultS);

// replace- replaces the matched substring with a replacement substring
const txt =
  "Python is the most beautiful language that a human being has ever created.\
I recommend python for a first programming language";

matchReplaced = txt.replace(/Python|python/, "JavaScript");
console.log(matchReplaced);

matchReplaced = txt.replace(/Python|python/g, "JavaScript");
console.log(matchReplaced);

matchReplaced = txt.replace(/Python/gi, "JavaScript");
console.log(matchReplaced);

/* []: A set of characters
        [a-c]: a or b or c
        [A-Z]: any char A to Z
        [0-3]: 0,1,2,3
        [A-za-z0-9]
    
    \: uses to escape special characters
        - \d : match where the string contains digits (numbers from 0-9)
        - \D : match where the string does not contain digits

    . - any character except new line character (\n)

    ^ - starts with
      - r'^substring' : eg: r'^love' a sentence which starts with a word love
      - r'[^abc] : not a, not b, not c

    $ : ends with 
        eg: r'love$' - sentence ends with a word love
    
    * : zero or more times
        r'[a]*': means optional or it can occur many times
    
    + : one or more time

    ? : 0 or 1

    {2}: exactly 2

    {2,5}: between 2 and 5

    {2,} : 2 or more

    \b: word bounder, matches with the beginning or ending of a word

    | : either or

regular expression Groups
    {...} : capturing group 
    {?....}: Non-capturing group
    
*/

// square bracket

const textPattern = /[Aa]pple/g;
const text =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matchTxt = text.match(textPattern);
console.log(matchTxt);

const patternTwo = /[Aa]pple| [Bb]anana/g;
const matchTwo = text.match(patternTwo);
console.log(matchTwo);

// escape character (\) in regExp
const escapePattern = /\d/g;
const escapeText =
  "This regular expression example was made in January 12,  2020.";
const escapeMatch = escapeText.match(escapePattern);
console.log(escapeMatch);

// one more more times (+)

const escapeOne = /d+/g;
const escapeOneMatch = escapeText.match(escapeOne);
console.log(escapeOneMatch);

// period (.)
const patternPeriod = /[a].+/g;
const matchPeriod = escapeText.match(patternPeriod);
console.log(matchPeriod);

// Zero or more times (*)

// Quantifier in regexp

const txtQuant =
  "This regular expression example was made in December 6,  2019.";
const patternQuant = /\\b\w{4}\b/g; //  exactly four character words
const matchesQuant = txt.match(patternQuant);
console.log(matchesQuant); //['This', 'made', '2019']
