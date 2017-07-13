function processSpeech(msg, transcript = "") {

  msg.text = "";

  // Saying hello
  if (transcript.match(/^(hello|hey|hi)/i)) {
    msg.text = "Hey ";
  }

  if (transcript.match(/how are you/i)) {
    msg.text = "I'm doing great! What about you? ";
  }

  if (transcript.match(/your name/i)) {
    msg.text = "My name is Hal. What is yours? ";
  }

  if (transcript.match(/(f\*\*\*|suck)/i)) {
    msg.text = "That wasn't very nice ";
  }

  speechSynthesis.speak(msg || "I didn't understand that.");

  console.log("Your Input:", transcript);
  console.log("Response:", msg.text);

}
