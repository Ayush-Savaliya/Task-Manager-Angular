import { Component, computed, signal , Input, input,Output,EventEmitter} from '@angular/core';

import { DUMMY_USERS } from '../dummy.users';

import { User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  standalone:true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  
  // imagePath = computed(() => { return 'assets/users/' + this.selectedUser().avatar;  })

  // get imagePath () {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }

 
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imgpath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imgpath (){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser () {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex] );
  
    this.select.emit(this.user.id);
    
  
  }

}
