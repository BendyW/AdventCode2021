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
    let binaryOccurenceCount = ''
    let binaryOccurenceInverseCount = ''
    let gammaRate;
    let epsilonRate;
    let powerConsumption;
    inputArray = await processLineByLine();
    for(let i = 0; i < inputArray[0].length; i++) {
        let oneCount = 0;
        for(let j = 0; j < inputArray.length; j++) {
            if(inputArray[j].charAt(i) == '1') {
                oneCount++;
            }
        }
        if(oneCount >= inputArray.length/2) {
            binaryOccurenceCount += '1'
        } else {
            binaryOccurenceCount += '0'
        }
    }
    gammaRate = parseInt(binaryOccurenceCount, 2)
    for (let i = 0; i < binaryOccurenceCount.length; i++) {
        if(binaryOccurenceCount.charAt(i) === '1') {
            binaryOccurenceInverseCount += '0'
        } else {
            binaryOccurenceInverseCount += '1'
        }
    }
    epsilonRate = parseInt(binaryOccurenceInverseCount, 2)
    powerConsumption = gammaRate * epsilonRate;
    console.log(powerConsumption)
}

main()