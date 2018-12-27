import { Component, OnInit } from '@angular/core';
import { UserFeedService } from '../user-feed.service';
import { timer } from 'rxjs';
import { merge, switchMap } from 'rxjs/operators';
import { LoadNotifyService } from '../load-notify.service';

@Component({
  selector: 'app-latest-users',
  templateUrl: './latest-users.component.html',
  styleUrls: ['./latest-users.component.css']
})
export class LatestUsersComponent implements OnInit {
  updateUsersTrigger$ = timer(0, 10000);

  users$ = this.updateUsersTrigger$.pipe(switchMap(() => this.userFeedService.getUsers()), merge(this.loadNotifyService.requestLoad$)
    , merge(this.loadNotifyService.loadComplete$));

  constructor(private userFeedService: UserFeedService, private loadNotifyService: LoadNotifyService) { }

  ngOnInit() {

  }

}
