const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter countdown seconds: ", (sec) => {
  let time = Number(sec);

  const timer = setInterval(() => {
    console.log(time);
    time--;

    if (time < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      process.exit();
    }
  }, 1000);

  setTimeout(() => {
    console.log("Press 's' to stop the countdown anytime...");

    process.stdin.on("data", (key) => {
      if (key.toString().trim() === "s") {
        clearInterval(timer);
        console.log("Countdown Stopped!");
        process.exit();
      }
    });

  }, 1000);
});
