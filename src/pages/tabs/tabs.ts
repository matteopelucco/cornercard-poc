import { Component } from '@angular/core';

import { CornercardPage } from '../cornercard/cornercard';
import { SocialPage } from '../social/social';
import { EmotionsPage } from '../emotions/emotions';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CornercardPage;
  tab2Root = SocialPage;
  tab3Root = EmotionsPage;
  tab4Root = MorePage;

  constructor() {

  }
}
