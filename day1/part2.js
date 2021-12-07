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
            let a = inputArray[i] + inputArray[i+1] + inputArray[i+2] 
            let b = inputArray[i-1] + inputArray[i] + inputArray[i+1]
            if( a > b) {
                increasedCount++;
            }
        }
    });
    console.log(increasedCount)
}

main()