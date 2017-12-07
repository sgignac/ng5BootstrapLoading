import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LabelsService {

  private _labelsData: any;
  // data;

  constructor(private http: HttpClient) { }

  // This is the method you want to call at bootstrap
  // Important: It should return a Promise
  load(): Promise<any> {

      this._labelsData = null;

      return this.http
          .get('http://testapi.sebdevlab.com/labels.php')
          .map((res: Response) => res.json())
          .toPromise()
          .then((data: any) => this._labelsData = data)
          .catch((err: any) => Promise.resolve());
  }

  get labelsData(): any {
      return this._labelsData;
  }

}
