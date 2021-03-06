import { Component, OnInit } from '@angular/core';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _configService:ConfigService){}
  
  companyName: string;

  ngOnInit(){
    console.log('Here is the config service data...', this._configService.configData);
    this.companyName = this._configService.configData.results.data.companyName;
  }
}
