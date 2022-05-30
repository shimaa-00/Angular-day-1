import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  peopleByCountry: any[] = [
    {
      country: 'UK',
      people: [{ name: 'Douglas Pace' }, { name: 'Mcleod Mueller' }],
    },
    {
      country: 'USA',
      people: [
        { name: 'Day Meyers' },
        { name: 'Aguirre Ellis' },
        { name: 'Cook Tyson' },
      ],
    },
    {
      country: 'MARS',
      people: [
        { name: 'Day Meyers' },
        { name: 'Aguirre Ellis' },
        { name: 'Cook Tyson' },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
