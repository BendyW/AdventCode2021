const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let inputArray = [];

  for await (const line of rl) {
    inputArray.push(line)
  }
  return inputArray
}

async function main() {
    let depth = 0;
    let value = 0;
    inputArray = await processLineByLine();
    inputArray.forEach(input => {
        let words = input.split(' ');
        direction = words[0];
        distance = parseInt(words[1], 10)
        switch (direction) {
            case 'forward':
              value+= distance;
              break;
            case 'up':
                depth-=distance;
                break;
            case 'down':
                depth+=distance
              break;
            default:
              console.log('Case not found.');
          }
    });
    console.log(depth*value)
}

main()