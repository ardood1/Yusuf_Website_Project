// Website Project

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let score = 0;
  let answer1 = +document.getElementById("ans-1").value;
  let answer2 = document.getElementById("ans-2").value.toLowerCase();
  let answer3 = document.getElementById("ans-3").value.toLowerCase();
  let answer4 = document.getElementById("ans-4").value.toLowerCase();

  if (answer1 == 5) {
    document.getElementById("feedback-1").innerHTML = `
    <p class='purple'>Correct<p>`;
    score = score += 1;
    document.getElementById("output").innerHTML = score;
  } else {
    document.getElementById(
      "feedback-1"
    ).innerHTML = `<p class='purple'>Incorrect<p>`;
  }

  if (answer2 === "nba" || answer2 === "national basketball association") {
    document.getElementById("feedback-2").innerHTML = `
  <p class='purple'>Correct<p>`;
    score = score += 1;
    document.getElementById("output").innerHTML = score;
  } else {
    document.getElementById("feedback-2").innerHTML = `
  <p class='purple'>Incorrect<p>`;
  }

  if (answer3 === "the game goes into overtime" || answer3 === "overtime") {
    document.getElementById("feedback-3").innerHTML = `
      <p class='purple'>Correct<p>`;
    score = score += 1;
    document.getElementById("output").innerHTML = score;
  } else {
    document.getElementById(
      "feedback-3"
    ).innerHTML = `<p class='purple'>Incorrect<p>`;
  }

  if (
    answer4 === "there are 30 teams in the nba" ||
    answer4 === "30" ||
    answer4 === "thirty" ||
    answer4 === "there are thirty teams in the nba"
  ) {
    document.getElementById("feedback-4").innerHTML = `
  <p class='purple'>Correct<p>`;
    score = score += 1;
    document.getElementById("output").innerHTML = score;
  } else {
    document.getElementById("feedback-4").innerHTML = `
  <p class='purple'>Incorrect<p>`;
  }

  if (score === 0) {
    document.getElementById("output3").innerHTML =
      "You didn't solve any of the questions correctly, Try again";
  } else if (score === 1) {
    document.getElementById("output3").innerHTML = "Better luck next time";
  } else if (score === 2) {
    document.getElementById("output3").innerHTML = "You passed";
  } else if (score === 3) {
    document.getElementById("output3").innerHTML = "Well done";
  } else {
    document.getElementById("output3").innerHTML = "Excellent, you got 4/4";
  }

  if (score === 0) {
    document.getElementById("output2").innerHTML = "0%";
  } else if (score === 1) {
    document.getElementById("output2").innerHTML = "25%";
  } else if (score === 2) {
    document.getElementById("output2").innerHTML = "50%";
  } else if (score === 3) {
    document.getElementById("output2").innerHTML = "75%";
  } else {
    document.getElementById("output2").innerHTML = "100%";
  }
}
