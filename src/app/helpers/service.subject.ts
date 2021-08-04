import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  // Observable string sources


  private openNav = new Subject<boolean>();
  private filterCollum = new Subject<object>();

  // Observable string streams

  public pageCardHeaderSubject = new BehaviorSubject<string>('');
  navOpen$ = this.openNav.asObservable()
  filterCollum$ = this.openNav.asObservable()

  // Service message commands
  navOpened(opened: any): void {
    console.log(opened)
    this.openNav.next(opened);
  }

  collumns(collumns: any): void {
    console.log(collumns)
    
    this.filterCollum.next(collumns);
  }

}