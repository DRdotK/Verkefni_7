/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
const words = str.split(/\s+/);
let longestWord = '';
for  (const word of words) {
if (word.length > longestWord.length) {
  longestWord = word;
    }
  }
  return longestWord;
}

function shortest(str) {
const words = str.split(/\s+/);
let shortestword = words[0];
for  (let i = 1; i < words.length; i++) {
if (words[i].length < shortestword.length) {
  shortestword = words[i];
    }
  }
  return shortestword;
}

console.assert(
  reverse('halló') === 'óllah',
  'reverse: snýr við einföldum streng'
);
console.assert(
  reverse(false) === null,
  'reverse: ef ekki strengur, skila null'
);
console.assert(

)

function reverse(str) {
  // "halló" => false
  // "hah" => true
  // null / false/ 0 => false
const lowerWord = str.toLowerCase();
const reverseWord = lowerWord.split('').reverse().join('');
return lowerWord === reverseWord;
}

// 1. (ekki palindrome) "halló" => false
// 2. (palindrome) "hah" => true
// 3. (ólöguleft inntak) null / false 0 => false 
// 4. "" ??? => false
// 5. "Hah" ??? => true
function palindrome(str) {
  if (!isString(str) && str !=='') {
    const reversed = reverse(str)
   return str.toLowerCase() === reversed.toLowerCase()
    }
      return false;
    }
    console.assert(palindrome('halló') === false, 'palindrome: strengur, ekki')
    console.assert(palindrome('hah') === true, 'palindrome: strengur, er')
    console.assert(palindrome('') === false, 'palindrome: tómi strengur, ekki')

function vowels(str) {
  const VOWELS = 'aeiouyáéýúíóöæ'.split('');
  return str.split('').filter(char => VOWELS.includes(char)).join('');
}

function consonants(str) {
  const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');
  return str.split('').filter(char => CONSONANTS.includes(char)).join('');
}

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  // Útfæra
}
