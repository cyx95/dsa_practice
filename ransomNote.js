// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.


function ransomNote (ransomNote, magazine) {
    if (ransomNote == "") {
        return true
    }

    ransomNote = ransomNote.split("").sort() 
    // console.log (ransomNote)

    magazine = magazine.split("").sort()

    let count = 0;

    for (let i = 0; i < ransomNote.length; i++) {
        if (ransomNote[i] == magazine[i]) {
            count++
        }
    }
    return count == ransomNote.length;
}

console.log(ransomNote("aa", "ab"))
console.log(ransomNote("a", "b"))
console.log(ransomNote("aa", "aab"))
console.log(ransomNote("aa", "aba"))

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 
// Example 3:
// Input: ransomNote = "aa", magazine = "aba"
// Output: true