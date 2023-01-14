import { ConfigPlugin } from '@expo/config-plugins';
type Props = string[];
export declare const initialSkadnetworkStrings: Props;
export declare const createSKAdNetworkItems: (items: string[]) => {
    SKAdNetworkIdentifier: string;
}[];
declare const _default: ConfigPlugin<Props>;
export default _default;
