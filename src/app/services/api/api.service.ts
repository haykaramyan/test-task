import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_API: string;

  constructor(private http: HttpClient) {
    this.BASE_API = environment.apiUrl;
  }

  getHeaders(body: any = null): HttpHeaders {
    const headersObj = {};
    if (body && !(body instanceof FormData)) {
      headersObj['Content-Type'] = 'application/json';
    }

    return new HttpHeaders(headersObj);
  }

  request(type: string, url: string, body: object | null = null): Observable<any> {
    const to = `${this.BASE_API}/${url}`;

    const options = {
      observe: 'response',
      headers: this.getHeaders(body)
    };

    const argsArray: any[] = [to];

    if (type === 'get' || type === 'delete') {
      argsArray.push(options);
    } else {
      let data = null;
      if (body) {
        data = body instanceof FormData ? body : JSON.stringify(body);
      }
      argsArray.push(data);
      argsArray.push(options);
    }

    return this.http[type](...argsArray).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    );
  }
}
