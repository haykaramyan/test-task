import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../services/article/article.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private date;
  public articleData;
  public userInfo:[any];

  constructor(
    private readonly articleService: ArticleService
  ) {
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  private getUserInfo(){

    this.userInfo = JSON.parse(localStorage.getItem('personalData'));
  }

  getDate(value: any) {
    this.date = moment(new Date(value)).format('YYYY-MM-DD');

    this.articleService.getArticleByDate({
      date: this.date
    }).subscribe(res => {
      this.articleData = res;
      this.checkDatas();
    });
  }

  private checkDatas() {

    const data = JSON.parse(localStorage.getItem('data'));

    if (!data || data.length < 1) {
      return false;
    }

    data.map(item => {

      const i = this.articleData.findIndex(single => single.id === item.id);

      if (i >= 0) {
        this.articleData[i].quantity = item.quantity;
        this.articleData[i].total = item.total;
      }

    });
  }

  changeProductQuantity(element: any, count: number) {

    element.quantity += count;

    if (element.quantity <= 0) {
      element.quantity = 0;
    }

    element.total = element.quantity * element.price;

    this.storeData(element);
  }

  private storeData(article) {

    const storeArr = [];
    const data = JSON.parse(localStorage.getItem('data'));
    if (!data || data.length < 1) {
      storeArr.push(article);
      localStorage.setItem('data', JSON.stringify(storeArr));
      return false;
    }

    const index = data.findIndex(single => single.id === article.id);

    if (index >= 0) {

      data[index] = article;
      localStorage.setItem('data', JSON.stringify(data));
    } else {

      data.push(article);
      localStorage.setItem('data', JSON.stringify(data));
    }
  }
}
