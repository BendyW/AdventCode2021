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
    inputArray.push(parseInt(line, 10))
  }
  return inputArray
}

async function main() {
    let increasedCount = 0;
    inputArray = await processLineByLine();
    inputArray.forEach((input, i) => {
        if(i !== 0) {
            if( input > inputArray[i-1]) {
                increasedCount++;
            }
        }
    });
    console.log(increasedCount)
}

main()