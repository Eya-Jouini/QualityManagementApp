import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'Qualipro';
  showNavbarList = false;
  showHomePage: boolean = true;//this boolean is for displaying or not the four-divs aka the home page

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((segments) => {
      this.showHomePage = segments.length === 0;
    });
  }

  toggleNavbarList() {
    this.showNavbarList = !this.showNavbarList;
  }
}
