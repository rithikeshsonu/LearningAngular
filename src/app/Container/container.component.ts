import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { HeaderComponent } from "../header/header.component";
import { NotificationComponent } from "../notification/notification.component";

// import { AppComponent } from "../app.component";
@Component({
    standalone: true,
    imports: [NavComponent, HeaderComponent,NotificationComponent],
    selector : 'app-container',
    templateUrl : './container.component.html',
    styleUrls : ['./container.component.css'],
})
export class ContainerComponent{

}