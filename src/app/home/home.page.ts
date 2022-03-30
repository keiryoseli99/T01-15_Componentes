import { Component, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonDatetime) datetime: IonDatetime;
  
  dateValue = '';
  dateValue2 = new Date(Date.now()).toISOString();

  constructor() {}

  private confirm() {
    this.datetime.confirm(true);
  }
  
  private reset() {
    this.datetime.reset(new Date(Date.now()).toISOString());
    //this.datetime.cancel(true);
  }

  formatDate(value: string) {
    return format(parseISO(value), 'PPPP', {locale: es});
  }
}
