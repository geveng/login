import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {
  currentEvent = null;
  message = "";
  submitted = false;

  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEvent(this.route.snapshot.paramMap.get('id'));
  }

  getEvent(id){
    this.eventsService.get(id)
    .subscribe(
      data => {
        this.currentEvent = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateEvent(){
    this.eventsService.update(this.currentEvent.eventID, this.currentEvent)
    .subscribe(
      response => {
        console.log(response);
        this.message = "The Event was updated successfully";
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  back(){
    this.router.navigate(['events']);
  }
  




}
