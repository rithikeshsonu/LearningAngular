import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  // templateUrl: './notification.component.html',
  // template : '<div><p>This app uses cookies for better user experience!!</p></div>',
  template : `<div class = "notification-div">
                  <p>This app uses cookies for better user experience!!</p>
                </div>`,

  // styleUrl: './notification.component.css'
  styles: [".notification-div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align: center}", "p{font-size: 14px;}" ]
})
export class NotificationComponent {

}
