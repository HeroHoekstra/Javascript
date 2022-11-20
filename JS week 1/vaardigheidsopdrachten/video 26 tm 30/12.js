//12. Schrijf onderstaande code om naar een “if-else statement”.
let sentence;
let emotion;
if (!sentence) {
    sentence = 'Whieee';
} else {
    sentence = 'Whaaa';
}
if (sentence.length > 5) {
    emotion = 'happy'
} else {
    emotion = 'not so happy';
}

console.log(`Hello, i shout out the sentence ${sentence} and I am ${emotion}`);