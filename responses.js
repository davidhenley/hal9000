function processSpeech(msg, transcript = "") {

  msg.text = "";

  const sayHi = new RegExp(/^(hello|hey|hi)/i);
  const howAreYou = new RegExp(/how are you/i);
  const yourName = new RegExp(/your name/i);
  const censored = new RegExp(/(\*\*)/i);
  const myName = new RegExp(/^my name is \w+/i);
  const fireball = new RegExp(/top selling/);

  switch (true) {
    case sayHi.test(transcript):
      msg.text = "Hey!";
      break;
    case howAreYou.test(transcript):
      msg.text = "I'm doing great! What about you?";
      break;
    case yourName.test(transcript):
      msg.text = "My name is Hal. What is yours?";
      break;
    case myName.test(transcript):
      const name = transcript.split(' ').splice(-1)[0];
      msg.text = `Hey ${name}!`;
      break;
    case censored.test(transcript):
      msg.text = "That wasn't very nice.";
      break;
    case fireball.test(transcript):
      msg.text = "Fireball is our top selling product.";
      break;
    default:
      msg.text = "Sorry. I didn't understand that.";
  }

  console.log("Your Input:", transcript);
  console.log("Response:", msg.text);

  speechSynthesis.speak(msg);

}
