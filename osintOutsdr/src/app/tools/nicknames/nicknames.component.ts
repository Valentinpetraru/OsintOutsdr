import { Component } from '@angular/core';
import { NICKNAME_TOOLS } from '../models/constants/nickname.consts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nicknames',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nicknames.component.html',
  styleUrl: './nicknames.component.css'
})
export class NicknamesComponent {
nicknames = NICKNAME_TOOLS;
}
