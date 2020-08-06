import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }


  getAll(){ //Works
    return this.http.get(baseUrl);
  }

  get(id){ //Works
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data){
    return this.http.post(baseUrl, data);
  }

  update(id,data){
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  delete(id){
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(){
    return this.http.delete(baseUrl);
  }

  findByEvent(event){ //Works
    return this.http.get(`${baseUrl}?eventName=${event}`);
  }

  
}
