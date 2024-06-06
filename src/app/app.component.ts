import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
CommonModule
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-calculator';
  
  before: string= '';
  after: string = '';
  operation:string = '';
  answer:number = 0;

  clearEverything(){
    this.before = '';
    this.after = '';
    this.operation = '';
    this.answer=0;
  }

  calculate(){
    switch (this.operation) {
      case '+':
        this.answer = parseFloat(this.before) + parseFloat(this.after);  
        this.before = this.answer.toString();
        this.after = '';
        this.operation = '';
        break;
      case '-':
        this.answer = parseFloat(this.before) - parseFloat(this.after); 
        this.before = this.answer.toString();
        this.after = '';
        this.operation = ''; 
        break;
      case '*':
        this.answer = parseFloat(this.before) * parseFloat(this.after);  
        this.before = this.answer.toString();
        this.after = '';
        this.operation = '';
        break;
      case '/':
        this.answer = parseFloat(this.before) / parseFloat(this.after); 
        this.before = this.answer.toString();
        this.after = '';
        this.operation = ''; 
        break; 
      case '%':
        this.answer = parseFloat(this.before) % parseFloat(this.after);  
        this.before = this.answer.toString();
        this.after = '';
        this.operation = '';
        break;   
      case '!=':
        if (this.before == this.after) {
          this.before = 'Equal';
        }else{
          this.before = 'Not Equal';
        }  
        this.after = '';
        this.operation = '';
        break;
      default:
        break;
    }
  }

  clear(){
    if (this.operation == '') {
      this.before = this.before.substring(0,this.before.length - 1);
    }else{
      this.after = this.after.substring(0,this.after.length - 1);
    }
  }

  operationClicked(val:string){
    this.operation = val;
  }

  numberClicked(val:string){
    if (this.operation == '') {
      this.before += val;
    }else{
      this.after += val;
    }
  }

}
