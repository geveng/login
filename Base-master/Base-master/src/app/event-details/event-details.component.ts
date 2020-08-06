import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  currentEvent = null;
  message = "";
  paramid = "";

  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.paramid = this.route.snapshot.paramMap.get('id');
    this.getEvent(this.paramid);
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

  deleteEvent(){
    var cfm = confirm("Are you sure?");
    if (cfm == true){
      this.eventsService.delete(this.currentEvent.eventID)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/events']);
      },
      error => {
        console.log(error);
      }
    );
    }
    else{
      
    }
  
  }


}
