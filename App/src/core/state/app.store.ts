
import { Injectable } from '@angular/core';
import { User } from './app.model';
import { Store, StoreConfig } from '@datorama/akita';
import { stringify } from 'querystring';



export interface AppState {
  user: User;
  currentRoute: string;
}

export function createInitialState() {
  return {
    user: {
      userName: '',
      passwd: '',
      tipo: ''
    },
    currentRoute: ''
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'app' })
export class AppStore extends Store<AppState> {
  constructor() {
    super(createInitialState());
  }
}
