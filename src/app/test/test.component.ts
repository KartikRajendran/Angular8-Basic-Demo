import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-test',
  template: `
  <div>--------------------Template Reference Variables--------------------</div>
  <br>
      <button (click)="greetUsers($event)">Greet Users Function Call</button>
      <button (click)="greeting='Welcome to Angular 8 App'">Greet Users Direct Assignment</button><br>
      <input #myInput type="text">
      <button (click)="sayHi(myInput.value)">Greet Users Using Input Value</button>
      <h4>{{greeting}}</h4>

<div>--------------------Two Way Binding--------------------</div>
    <h4>Welcome {{name}}</h4>
    Enter Name : <input [(ngModel)]="name" type="text"><br><br>
<div>--------------------Ng-If--------------------</div>
    <h4 *ngIf="ifVariable;then thenBlock; else elseBlock">Demo Angular 8 App</h4>
    <ng-template #thenBlock>
      <h4>Demo Angular 8 App If Then Block</h4>
    </ng-template>
    <ng-template #elseBlock>
      <h4>Demo Angular 8 App Hidden Block</h4>
    </ng-template>
<div>--------------------Ng-Switch--------------------</div>
  <div [ngSwitch]="color" >
    <div *ngSwitchCase="'red'" [style.color]="color"><h3>You Picked Red Color</h3></div>
    <div *ngSwitchCase="'green'" [style.color]="color"><h3>You Picked Green Color</h3></div>
    <div *ngSwitchCase="'blue'" [style.color]="color"><h3>You Picked Blue Color</h3></div>
    <div *ngSwitchDefault [style.color]="color"><h3>Pick Again</h3></div>
  </div>
<div>--------------------Ng-For--------------------</div>
  <div *ngFor="let item of colors;index as i">
    <h3 [style.color]="item">{{i}}--{{item}}</h3>
  </div>
<div>--------------------Component Interaction--------------------</div>
  <h3>{{"Hello " + parentData}}</h3>
  <button (click)="fireEvent()">Send Event</button><br><br>
<div>--------------------Custom Pipe--------------------</div>
  <h3>{{date}}</h3>
  <h3>{{date | date:'short'}}</h3>
  <h3>{{date | date:'shortDate'}}</h3>
  <h3>{{date | date:'shortTime'}}</h3>
  <h3>{{date | date:'mediumDate'}}</h3>
  <h3>{{date | date:'mediumTime'}}</h3>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  public date = new Date();

  public name = '';
  public myId = 'testId';
  public greeting = '';
  public isSpecial = true;
  public hasError = false;
  public ifVariable = true;
  public color = 'red';

  public colors = ['violet', 'red', 'orange', 'blue', 'green'];

  constructor() { }

  ngOnInit() {
  }
  greetUsers(event) {
    console.log(event);
    this.greeting = 'Hello, Welcome to Angular 8 App';
  }

  sayHi(value) {
    this.greeting = value;
  }

  fireEvent() {
    this.childEvent.emit(', How r u?');
  }
}
