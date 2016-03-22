console.log("process.env.TRAVIS_JOB_NUMBER")
console.log("value is: " + process.env.TRAVIS_JOB_NUMBER);
console.log("type is: " + typeof process.env.TRAVIS_JOB_NUMBER);

console.log("process.env.TRAVIS_TAG")
console.log("value is: " + process.env.TRAVIS_TAG);
console.log("type is: " + typeof process.env.TRAVIS_TAG);

console.log("process.env.CI")
console.log("value is: " + process.env.CI);
console.log("type is: " + typeof process.env.CI);

setTimeout(function(){ log("Done!"); }, 5000);