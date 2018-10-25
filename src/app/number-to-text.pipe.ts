import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToText'
})
export class NumberToTextPipe implements PipeTransform {
  //Dictionary of key value (Number,String)
  dictNumberAndStr={
    1:"One",
    2:"Two",
    3:"Three",
    4:"Four",
    5:"Five",
    6:"Six",
    7:"Seven",
    8:"Eight",
    9:"Nine",
    0:"Zero",
  };

  transform(value: any, args?: any): any {
    //Split input value into array 
    var arrInputValues=value.split("");
    var strOutput='';
    
    for(var index=0;index<arrInputValues.length;index++){
      //If value is present in dictionary then it is number so Get String from Dictionary and append
      if(this.dictNumberAndStr[arrInputValues[index]]!=undefined)
        strOutput+=this.dictNumberAndStr[arrInputValues[index]]
      else //If value is not present in dictionary then it is string and append it directly 
        strOutput+=arrInputValues[index];
    }
    return strOutput;
  }

}
