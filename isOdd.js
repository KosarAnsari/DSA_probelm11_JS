//Helper Recursive Function
function isOdd(array){
    let result =[];

    function helperfunc(inputarr){

        if(inputarr.length === 0){
            return"array is empty";
        };
        if(inputarr[0] % 2 !== 0){
            result.push(inputarr[0]);
        }
        helperfunc(inputarr.slice(1));

    }
  helperfunc(array);
  return result;
};
let res = isOdd([1,2,3,4,5,6,7,8,9]);
console.log(res);