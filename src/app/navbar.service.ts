import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
 emitsearch=new BehaviorSubject<string>("")
  constructor() { }
  search(search:string)
  {
    this.emitsearch.next(search)
  }
}
