const strA = "Traingle";
const strB = "alteRing";

//To split,sort and join
if (strA.toLocaleLowerCase().split("").sort().join("") === strB.toLocaleLowerCase().split("").sort().join("")) {
    console.log("Anagram")
} else {
    console.log("Not anagram")
}