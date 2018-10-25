import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private httpClient:HttpClient) {

  }
  title = 'Assignment';
  arrOutput:any=[];
  arrPizzTypes=[];
  selectedPizzType="";
  arrCheeseType=[];
  selectedCheeseType="";
  inputValue="hello 123";
  arrFilteredRecords=[];
  arrAllRecords=[];
  checked:boolean=true;
  bIsVeg:boolean=true;
  value: number = 100;
  options: Options = {
    floor: 100,
    ceil: 600
  };
  minValue=100;
  maxValue=600;
  //nMoney=13;
  //strOutput='';
  //demonitisation={1,2,5,10,50};

  ngOnInit(): void {
    //Geting data from json file. We can also call API here
    this.httpClient.get('/assets/apidata.json').subscribe((respose:any)=>{
      if(respose!=null){
          this.arrPizzTypes=respose.pizzTypes;
          this.selectedPizzType=this.arrPizzTypes[0].key;
          this.arrCheeseType=respose.cheeseTypes;
          this.selectedCheeseType=this.arrCheeseType[0].key;
          this.arrAllRecords=respose.data;
          this.onTypeChange();
      }
    })
  }
 
  onTypeChange(){
    //If true then it is Veg or else Non Veg
    var strVegNonVegg=this.bIsVeg?"Veg":"NonVeg";
    //Filtering records according to selected values
    this.arrFilteredRecords=this.arrAllRecords.filter(data=>{return data.type==strVegNonVegg
      && data.baseTypeKey==this.selectedPizzType
      && data.cheeseTypeKey==this.selectedCheeseType
      && data.price>=this.minValue && data.price<=this.maxValue})
  }

  getMoneyChange(){
    // var value=0;
    // if(this.nMoney==1||this.nMoney== 2||this.nMoney==5||this.nMoney==10||this.nMoney==150){
    //   this.strOutput=this.nMoney+"X 1";
    // }else{
    //   if(this.nMoney>50){
    //    value =this.nMoney-50;
    //   }
    //   if(this.nMoney>20){
    //    value =this.nMoney-50;
    //   }
    //   if(this.nMoney>10){
    //    value =this.nMoney-50;
    //   }
    //   if(this.nMoney>5){
    //     value=this.nMoney-50;
    //   }
    //   if(this.nMoney>2){
    //    value =this.nMoney-50;
    //   }
    //   if(this.nMoney>1){
    //   value  =this.nMoney-50;
    //   }
    // }
  }
}
