import { Component, computed, signal , Input, input,Output,EventEmitter} from '@angular/core';

import { DUMMY_USERS } from '../dummy.users';

import { User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone:false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imgpath (){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser () {
    this.select.emit(this.user.id); 
  }
}
