import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigService {

  private _configData: any;
  // data;

  constructor(private http: HttpClient) { 
      console.log('config service construcor');
  }

  // This is the method you want to call at bootstrap
  // Important: It should return a Promise
  load(): Promise<any> {

    console.log('config load() called');

    this._configData = null;

    return this.http
          .get('http://testapi.sebdevlab.com/config.php')
          .toPromise()
          .then((data: any) => {
              console.log('received data from the API', data);
              this._configData = data;
            })
          .catch((err: any) => Promise.resolve());
  }

  get configData(): any {
      
    console.log('getting data from the config service', this._configData);
    return this._configData;
  }

}
