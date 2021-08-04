import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SubjectService } from 'src/app/helpers/service.subject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  open = true;
  title = '';
  media = window.matchMedia("(max-width:575px)")
  styleSide;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(['(max-width: 660px)']).pipe(
    map((result) => result.matches),
    shareReplay()
  );
  sun: Subscription
  constructor(
    private breakpointObserver: BreakpointObserver,
    private subjectService: SubjectService,
    private router: Router

  ) {
    this.sun = subjectService.navOpen$.subscribe(res => {
      this.open = res
    })
  }

  ngOnInit(): void {

    if (this.media.matches) { // If media query matches
      this.styleSide = "push";
      console.log('hide')
    } else {
      this.styleSide = "side";
      console.log('push')
    }

    if (this.title === '') {
      this.subjectService.pageCardHeaderSubject.subscribe((title) => {
        this.title = title;
      });
    }
  }

  openNav(): void {
    this.open = !this.open;
    this.subjectService.navOpened(this.open)
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['../']);

  }


}
