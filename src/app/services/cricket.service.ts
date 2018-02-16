import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class CricketService {
  constructor(private http: HttpClient) { }

  getCricketScores(){
      return this.http.get("https://cricapi.com/api/matches?apikey=bdqyJKjhrqcSHz3i8LsUwfE4kVn2");
  }

  getLiveScores(uniqueId){
    return this.http.get("https://cricapi.com/api/cricketScore?apikey=bdqyJKjhrqcSHz3i8LsUwfE4kVn2&unique_id="+uniqueId);
   
  }

  testScores(){
    return this.http.get("https://dev132-cricket-live-scores-v1.p.mashape.com/scorecards.php");
  }
}