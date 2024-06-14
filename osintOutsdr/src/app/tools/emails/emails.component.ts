import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EMAIL_TOOLS } from '../models/constants/email.consts';

@Component({
  selector: 'app-emails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emails.component.html',
  styleUrl: './emails.component.css'
})
export class EmailsComponent {
emails = EMAIL_TOOLS ;
}
