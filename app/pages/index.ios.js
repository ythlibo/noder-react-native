import {Navigation} from 'react-native-navigation';

import HomeRender from './HomeRender';
import DetailRender from './DetailRender';
import MeRender from './MeRender';
import ReplyListRender from './ReplyListRender';
import QRScanRender from './QRScanRender';
import RecentTopicsRender from './RecentTopicsRender';
import RecentRepliesRender from './RecentRepliesRender';
import TopicCollectRender from './TopicCollectRender';
import UserProfileRender from './UserProfileRender';




// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('Noder.HomeRender', () => HomeRender);
  Navigation.registerComponent('Noder.MeRender', () => MeRender);
  Navigation.registerComponent('Noder.DetailRender', () => DetailRender);
  Navigation.registerComponent('Noder.ReplyListRender', () => ReplyListRender);
  Navigation.registerComponent('Noder.QRScanRender', () => QRScanRender);
  Navigation.registerComponent('Noder.RecentTopicsRender', () => RecentTopicsRender);
  Navigation.registerComponent('Noder.RecentRepliesRender', () => RecentRepliesRender);
  Navigation.registerComponent('Noder.TopicCollectRender', () => TopicCollectRender);
  Navigation.registerComponent('Noder.UserProfileRender', () => UserProfileRender);
}
