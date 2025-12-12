// coinToss.ts
function tossCoin() {
    var randomNumber = Math.random();
    return randomNumber < 0.5 ? "Heads" : "Tails";
}
function main() {
    console.log("Press Enter to toss the coin...");
    process.stdin.on("data", function () {
        var result = tossCoin();
        console.log("You tossed: ".concat(result));
        console.log("Press Enter to toss again or Ctrl+C to exit.");
    });
}
main();
