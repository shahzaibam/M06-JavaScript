import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit{
  // atributo de la classe Parent. Ejemplo @Input();
  // parentMessage = "Message from Parent";

  // ejemplo 2:
  @ViewChild(ChildComponent) child: { message: string; } | undefined;

  color:string = "blue";
  message:string = "";

  ngAfterViewInit(): void {
    // Called after ngafterCintentInit when the components view
    // Add implements AfterViewInit to the class.
    // @ts-ignore

    this.message = this.child.messageChild;
  }




}
