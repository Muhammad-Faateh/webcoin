const number  =  123123123123;
const new_Number = number.toString();
const updated_Number = new_Number.split('').sort();
const empty_array = [];
    for(var i = 0; i < updated_Number.length; i++){
        if(updated_Number[i] < updated_Number[i+1]){
            empty_array.push(updated_Number[i])
        }
    }
      if(updated_Number.length -1  >  updated_Number.length - 2 || updated_Number.length -1 < updated_Number.length - 2){
        empty_array.push(updated_Number.pop())
      }
    console.log("duplication removed", empty_array.toString());
