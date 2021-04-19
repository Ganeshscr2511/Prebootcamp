var a=userInput[0].split(" ");
var b=userInput[1].split(" ");
var c=userInput[2].split(" ");

function sumOfArr(data){
var sum=0;
for(var i=0;i<data.length;i++)
{
    sum=sum+ +data[i];
}
console.log(sum);
}
sumOfArr(a);
sumOfArr(b);
sumOfArr(c);
