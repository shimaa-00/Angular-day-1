import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  imgSrc =
    'https://tse4.mm.bing.net/th?id=OIP.IbhLrnKBjHWsgC6jU8nNpgHaKC&pid=Api&P=0&w=167&h=226';
  constructor() {}

  ngOnInit(): void {}
}
