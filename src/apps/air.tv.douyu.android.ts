import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'air.tv.douyu.android',
  name: '斗鱼',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.douyu.module.home.pages.main.MainActivity',
        'com.douyu.module.ad.launch.HotStartSplashActivity',
      ],
      rules: [
        {
          matches:
            '@TextView[text^=\'跳过\'] + LinearLayout TextView[text*="跳转"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12893916',
        },
        '[text^="跳过"] + * >2 TextView[text*=\'跳转\']', // 1686970245243, 1686970188866
      ],
    },
    {
      key: 1,
      name: '青少年模式',
      desc: '关闭青少年模式提醒弹窗',
      activityIds: [
        'com.douyu.module.young.view.YoungModeGuideDialog',
        'com.douyu.module.home.pages.main.MainActivity',
      ],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12472598',
      rules: [
        '[text="开启青少年模式"] + [text=\'我知道了\']', // 1686970236642
      ],
    },
    {
      key: 2,
      name: '新版本弹窗',
      activityIds: [
        'com.douyu.module.update.view.UpdateDialog',
        'com.douyu.module.home.pages.main.MainActivity',
      ],
      rules: '[text="立即升级"] - [text="忽略"][clickable=true]',
    },
    {
      key: 3,
      name: '直播间广告',
      activityIds: 'tv.douyu.view.activity.PlayerActivity',
      rules: [
        {
          key: 0,
          matches:
            'ImageView < ViewGroup + @ViewGroup[childCount=1] > ImageView', //添加childCount=1避免【全屏播放-设置】误触
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12892825',
            'https://gkd-kit.gitee.io/import/13037239',
          ],
        },
        {
          key: 1,
          matches: 'ViewPager + @View + ImageView + View',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12892825',
        },
        {
          key: 2,
          matches:
            'RelativeLayout[childCount=3] > ViewPager + @View + ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/13056107',
        },
        {
          key: 3,
          matches:
            'ViewGroup[childCount=4] > View + ImageView + FrameLayout + ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/13056107',
        },
        {
          key: 4,
          matches:
            'FrameLayout[childCount=2] > @ImageView - FrameLayout > RelativeLayout > WebView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/13056107',
        },
      ],
    },
  ],
});
