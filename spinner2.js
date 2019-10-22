// Spinning wheel 
// With Simon Olsen @ Lighthouse Labs

const string = "|/-\\|/-\\|";
let result = 0;
const spinner = () => {
  for (const char of string) {
    setTimeout(() => {
      process.stdout.write(`\r${char}       `);
    }, 100 + 200 * result);
    result += 1;
  }
};
setTimeout(() => {
  process.stdout.write("\n");
}, 100 + 200 * string.length + 1);

spinner();