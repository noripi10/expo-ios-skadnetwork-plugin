# expo-ios-skadnetwork-plugin

react native ios skadnetwork writing(info.plist)

# API documentation

- [Prepare for iOS 14+](https://developers.google.com/admob/ios/ios14)

SKAdNetworkItems can be customized. If no optional values are set, the values listed in the documentation above will be set as default values.

# Installation in managed Expo projects

For [managed](https://docs.expo.dev/versions/latest/introduction/managed-vs-bare/) Expo projects, please follow the installation instructions in the [API documentation for the latest stable release](#api-documentation). If you follow the link and there is no documentation available then this library is not yet usable within managed projects &mdash; it is likely to be included in an upcoming Expo SDK release.

## Add the package to your npm dependencies

```
yarn install expo-ios-skadnetwork-plugin
or
npm install expo-ios-skadnetwork-plugin
```

## How to use

app.json

```json
"plugins": [
  [
    "expo-ios-skadnetwork-plugin/plugin/build",
    // option string array
    [
      "aaa",
      "bbb"
    ]
  ]
]
```

```plist
<key>SKAdNetworkItems</key>
<array>
  <dict>
    <key>SKAdNetworkIdentifier</key>
    <string>aaa</string>
  </dict>
  <dict>
    <key>SKAdNetworkIdentifier</key>
    <string>bbb</string>
  </dict>
</array>
```
