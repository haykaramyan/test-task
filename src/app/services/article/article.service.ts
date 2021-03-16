import {Injectable} from '@angular/core';
import {ApiService} from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private readonly api: ApiService
  ) {
  }

  public getArticleByDate(data) {

    const key = Object.keys(data)[0];
    return this.api.request('get', `articles?${key}=${data[key]}`, null);
  }
}
