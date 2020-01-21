import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servies/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
apiURL = 'https://api.bart.gov/api/etd.aspx?cmd=etd&orig=RICH&key=Z8R9-59Q2-9M7T-DWE9&json=y'
  constructor(private dataS: DataService) { }

  ngOnInit() {
    this.dataS.getURL(this.apiURL).subscribe(
      x => {console.log(x);
      }
    );
  }

}
