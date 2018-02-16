import { Component } from '@angular/core';
import { CricketService } from './../services/cricket.service';

@Component({
    selector: 'cricket-score',
    templateUrl: './cricket-score.component.html',
    styleUrls: ['./cricket-score.component.css']
})
export class CricketScoreComponent {
    allMatches: any;
    liveMatches: any = [];
    indiaMatches: any = [];
    futureIndiaMatches: any = [];
    currentScore:any;
    liveData:any;

    constructor(private cricService: CricketService) { }

    ngOnInit() {
        console.log("calls automatically");
        this.test();
    }

    test() {
        this.cricService.getCricketScores().subscribe(data => {
            this.allMatches = data;

            this.allMatches.matches.forEach(element => {
                if (element.matchStarted && element.type != "First-class" && element.type != "ListA") {
                    this.liveMatches.push(element);
                    console.log(this.liveMatches);
                }
                if ((element['team-1'] === "India" || element['team-2'] === "India") && element.type != "First-class" && element.type != "ListA" && element.matchStarted) {
                    this.indiaMatches.push(element);
                    console.log(this.indiaMatches);
                }
                if ((element['team-1'] === "India" || element['team-2'] === "India") && !element.matchStarted) {
                    this.futureIndiaMatches.push(element);
                    console.log(this.futureIndiaMatches);
                }
            });
        },
            err => console.error(err),
            () => console.log('done'))
    }

    getliveScores(data) {
        console.log(data);

        this.cricService.getLiveScores(data.unique_id).subscribe(data => {
            console.log(data);
            this.liveData = data;
            this.currentScore =  this.liveData.score;
        },
            err => console.error(err),
            () => console.log('done loading foods'))

    }

}