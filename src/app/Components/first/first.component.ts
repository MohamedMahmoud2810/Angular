import { Component } from "@angular/core";

@Component({
  selector: "app-first",
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  //logic

  firstName = ""

  getData(e:any){
    this.firstName = e.target.value;
  }
  res(){
    this.firstName = "";
  }
}
