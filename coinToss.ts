// coinToss.ts
function tossCoin(): string {
    const randomNumber = Math.random();
    return randomNumber < 0.5 ? "Heads" : "Tails";
}

function main(): void {
    console.log("Press Enter to toss the coin...");
    process.stdin.on("data", () => {
        const result = tossCoin();
        console.log(`You tossed: ${result}`);
        console.log("Press Enter to toss again or Ctrl+C to exit.");
    });
}

main();

