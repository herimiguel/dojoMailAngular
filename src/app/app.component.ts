import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' the Email app';
  users = [
    {
    email: 'eddie@email.com',
    important: true,
    subject: 'JS',
    content: 'six months of experience'
    },
    {
    email: 'kee19@email.com',
    important: true,
    subject: 'Python',
    content: 'three months of experience'
    },
    {
    email: 'bryTall@email.com',
    important: true,
    subject: 'Mean',
    content: 'new at this'
    },
    {
    email: 'dyrrTarr@email.com',
    important: false,
    subject: 'DB',
    content: 'is a master!'
    }
]
}
