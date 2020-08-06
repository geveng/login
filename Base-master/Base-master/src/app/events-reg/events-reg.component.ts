import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-reg',
  templateUrl: './events-reg.component.html',
  styleUrls: ['./events-reg.component.css']
})
export class EventsRegComponent implements OnInit {
  event = {
    eventName: '',
    eventDate: '',
    eventCoordinator: '',
    eventOrganisation: '',
    eventDescription: '',
    eventContactPerson: '',
    eventContactPersonHP: '',
    eventContactPersonEmail: '',
    eventVenue: '',
    eventStartTime: '',
    eventEndTime: ''
  }
  submitted = false;

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {}

  saveEvent(){
    const data = {
      eventName: this.event.eventName,
      eventCoordinator: this.event.eventCoordinator,
      eventOrganisation: this.event.eventOrganisation,
      eventDescription: this.event.eventDescription,
      eventContactPerson: this.event.eventContactPerson,
      eventContactPersonHP: this.event.eventContactPersonHP,
      eventContactPersonEmail: this.event.eventContactPersonEmail,
      eventDate: this.event.eventDate,
      eventVenue: this.event.eventVenue,
      eventStartTime: this.event.eventStartTime,
      eventEndTime: this.event.eventEndTime
    };

    this.eventsService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
    
/*
    if (this.event.eventName == "" || this.event.eventDate==""){
      if (this.event.eventCoordinator == "" || this.event.eventOrganisation==""){
        if (this.event.eventContactPerson == "" || this.event.eventContactPersonEmail==""){
          if (this.event.eventContactPersonHP == "" || this.event.eventVenue==""){
            if (this.event.eventStartTime == "" || this.event.eventEndTime==""){
              if (this.event.eventDescription == ""){
                document.getElementById("errormsg").innerHTML = "Please fill in all blanks";
              }
              else{
                document.getElementById("errormsg").innerHTML = "";
              }
            }
          }
        }
      }
    } 
    */
  }

  newEvent(){
    this.submitted = false;
    this.event = {
      eventName: '',
      eventDate: '',
      eventCoordinator: '',
      eventOrganisation: '',
      eventDescription: '',
      eventContactPerson: '',
      eventContactPersonHP: '',
      eventContactPersonEmail: '',
      eventVenue: '',
      eventStartTime: '',
      eventEndTime: ''
    };
  }

}


