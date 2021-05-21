import { Component, OnInit } from '@angular/core';

declare var discordInvite: any;


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', '../home.component.scss']
})    


export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    discordInvite.init({
      inviteCode: 'rudHdrJ',
      title: 'MultiTeam HUB',
  });
  discordInvite.render();
  }

}
