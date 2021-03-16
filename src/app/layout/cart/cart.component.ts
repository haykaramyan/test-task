import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {
  }

  public articleData;
  public selectedArticle: [any];

  ngOnInit(): void {
    this.getCartDatas();
  }

  private getCartDatas() {

    this.articleData = JSON.parse(localStorage.getItem('data'));
  }

  deleteSelectedArticle() {

    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected articles?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (this.selectedArticle && this.selectedArticle.length < 1) {
          return false;
        }

        const data = JSON.parse(localStorage.getItem('data'));

        this.selectedArticle.map(item => {

          const i = data.findIndex(single => item.id || null === single.id);

          if (i >= 0) {
            data.splice(i, 1);
          }
          localStorage.setItem('data', JSON.stringify(data));
          this.articleData = data;
        });
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Articles Deleted', life: 3000});
      }
    });


  }
}
