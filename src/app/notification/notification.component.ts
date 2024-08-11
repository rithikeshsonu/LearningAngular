import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  // templateUrl: './notification.component.html',
  // template : '<div><p>This app uses cookies for better user experience!!</p></div>',
  template : `<div>
                  <p>This app uses cookies for better user experience!!</p>
                </div>`,

  styleUrl: './notification.component.css'
})
export class NotificationComponent {

}
