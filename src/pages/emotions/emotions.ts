import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'page-emotions',
  templateUrl: 'emotions.html'
})
export class EmotionsPage {

  emotionItems: any[];
 
  constructor(public navCtrl: NavController, translate: TranslateService) {
    this.emotionItems = [];
    for (let i = 1; i <= 4; i++) {
      this.emotionItems.push({
        img: 'assets/img/emotions/emotion' + i + '.jpg', 
        title: translate.get("emotions.post." + i +".title")['value'], 
        subtitle: translate.get("emotions.post." + i +".subtitle")['value'], 
        badge: translate.get("emotions.post." + i +".badge")['value']
      });
    }
  }
}
