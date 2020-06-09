import { Injectable } from '@angular/core';
import { AppStore } from './app.store';
import { action } from '@datorama/akita';
import { User } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppAction {
  constructor(protected store: AppStore) { }

  @action('updateUser')
  updateUser(user: User) {
    sessionStorage.setItem('auth-userName', user.userName);
    this.store.update({
      user
    });
  }

  @action('updateCurrentRoute')
  updateCurrentRoute(currentRoute: string) {
    this.store.update({
      currentRoute
    });
  }
}
