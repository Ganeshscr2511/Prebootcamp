const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var a=userInput[0]+userInput[1]+userInput[2];

var sum=0;
for(i=0;i<a.length;i++)
{
    var aa=a[i].split(" ");
for(j=0;j<aa.length;j++)
{
    sum =sum+ +aa[j];
}
}
console.log(sum);


});
