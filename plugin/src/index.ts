import { ConfigPlugin, createRunOncePlugin, withInfoPlist } from '@expo/config-plugins';
import { ExpoConfig } from '@expo/config-types';

let pkg: { name: string; version?: string } = {
  name: 'react-native-ios-skadnetwork',
};
try {
  pkg = require('react-native-ios-skadnetwork/package.json');
} catch {
  // empty catch block
}

type Props = string[];

export const initialSkadnetworkStrings: Props = [
  'cstr6suwn9.skadnetwork',
  '4fzdc2evr5.skadnetwork',
  '4pfyvq9l8r.skadnetwork',
  '2fnua5tdw4.skadnetwork',
  'ydx93a7ass.skadnetwork',
  '5a6flpkh64.skadnetwork',
  'p78axxw29g.skadnetwork',
  'v72qych5uu.skadnetwork',
  'ludvb6z3bs.skadnetwork',
  'cp8zw746q7.skadnetwork',
  'c6k4g5qg8m.skadnetwork',
  's39g8k73mm.skadnetwork',
  '3qy4746246.skadnetwork',
  '3sh42y64q3.skadnetwork',
  'f38h382jlk.skadnetwork',
  'hs6bdukanm.skadnetwork',
  'prcb7njmu6.skadnetwork',
  'v4nxqhlyqp.skadnetwork',
  'wzmmz9fp6w.skadnetwork',
  'yclnxrl5pm.skadnetwork',
  't38b2kh725.skadnetwork',
  '7ug5zh24hu.skadnetwork',
  '9rd848q2bz.skadnetwork',
  'y5ghdn5j9k.skadnetwork',
  'n6fk4nfna4.skadnetwork',
  'v9wttpbfk9.skadnetwork',
  'n38lu8286q.skadnetwork',
  '47vhws6wlr.skadnetwork',
  'kbd757ywx3.skadnetwork',
  '9t245vhmpl.skadnetwork',
  'a2p9lx4jpn.skadnetwork',
  '22mmun2rn5.skadnetwork',
  '4468km3ulz.skadnetwork',
  '2u9pt9hc89.skadnetwork',
  '8s468mfl3y.skadnetwork',
  'av6w8kgt66.skadnetwork',
  'klf5c3l5u5.skadnetwork',
  'ppxm28t8ap.skadnetwork',
  '424m5254lk.skadnetwork',
  'ecpz2srf59.skadnetwork',
  'uw77j35x4d.skadnetwork',
  'mlmmfzh3r3.skadnetwork',
  '578prtvx9j.skadnetwork',
  '4dzt52r2t5.skadnetwork',
  'gta9lk7p23.skadnetwork',
  'e5fvkxwrpn.skadnetwork',
  '8c4e2ghe7u.skadnetwork',
  'zq492l623r.skadnetwork',
  '3rd42ekr43.skadnetwork',
  '3qcr597p9d.skadnetwork',
];

export const createSKAdNetworkItems = (items: string[]) => {
  let skadnetworkItems = (items ?? []).map((e) => ({ SKAdNetworkIdentifier: e }));
  if (skadnetworkItems.length === 0) {
    skadnetworkItems = initialSkadnetworkStrings.map((e) => ({ SKAdNetworkIdentifier: e }));
  }
  return skadnetworkItems;
};

const withSkadnetworkPlist: ConfigPlugin<Props> = (config, skadnetworkStrings = initialSkadnetworkStrings) => {
  config = withInfoPlist(config, (infoPlistConfig) => {
    const items = createSKAdNetworkItems(skadnetworkStrings);

    infoPlistConfig.modResults.SKAdNetworkItems = items;
    return infoPlistConfig;
  });

  return config;
};

export default createRunOncePlugin<Props>(withSkadnetworkPlist, pkg.name, pkg.version);