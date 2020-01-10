# 開発

## Firebaseの準備

Firebaseは既に利用可能である前提とします。
Firebaseの利用開始方法については公式サイト等を参考にして下さい。

本PJではサイトの公開、データベースなどに関して[Firebase](https://firebase.google.com/)を利用する為、Firebaseを利用する為の各種準備、対応が必要です。

参考) Firebaseの概要と利用する機能

- [Firebase](https://firebase.google.com/)
  - [Firebase Hosting \| Fast and secure web hosting  \|  Firebase](https://firebase.google.com/products/hosting/)
  - [Cloud Firestore \| Store and sync app data at global scale  \|  Firebase](https://firebase.google.com/products/firestore/)
- [Firebase Guides  \|  Firebase](https://firebase.google.com/docs/guides)
  - [Firebase Hosting  \|  Firebase](https://firebase.google.com/docs/hosting/)
  - [Cloud Firestore  \|  Firebase](https://firebase.google.com/docs/firestore)


### Project の作成

[Firebase console](https://console.firebase.google.com/) にて、プロジェクトを作成する。

既に利用対象のプロジェクトが存在する場合は対応不要。

### GCP resource location の設定

Cloud Firestore を利用する(想定である)為、対象プロジェクトの設定画面にてGoogle Cloud Platform (GCP) resource locationを設定します。

既に設定済みである場合は対応不要。

参考)

- [Global Locations \- Regions & Zones  \|  Google Cloud](https://cloud.google.com/about/locations/)
- Tokyoは `asia-northeast1` です (2020-01-10現在)

### app を追加

対象プロジェクトにアプリケーションを追加します。

既に追加済である場合は対応不要。

参考)

- [Firebase を JavaScript プロジェクトに追加する  \|  Firebase](https://firebase.google.com/docs/web/setup?hl=ja#register-app)

後述する Firebase CLI がインストールされている場合は、CLIでの操作も可能。

コマンド例

```shell
# firebase apps:create --non-interactive --project `対象プロジェクトのID` web `任意のアプリケーション名`
[user@host path-to-dir] $ firebase apps:create --non-interactive --project project_id web app_name
```

出力例

```shell
[user@host path-to-dir] $ firebase apps:create --non-interactive --project project_id web app_name

Create your WEB app in project project_id
✔ Creating your Web app

🎉🎉🎉 Your Firebase WEB App is ready! 🎉🎉🎉

App information:
  - App ID: *:************:web:**********************
  - Display name: appname

You can run this command to print out your new app's Google Services config:
  firebase apps:sdkconfig WEB *:************:web:**********************
```

<!---
## Cloud Firestore のセットアップ

データベースとして Cloud Firestore を利用する為の対応です。

[Cloud Firestore  \|  Firebase](https://firebase.google.com/docs/firestore)

Security rules の選択は任意。
後程上書きする為問題ありません。

[appname – appname – Firebase console](https://console.firebase.google.com/project/project_id/database)
--->

## Firebase CLI の準備

開発環境(PCなど)にFirebase CLI をインストールします。
既にインストール済である場合は対応不要。

参考) [Firebase CLI reference  \|  Firebase](https://firebase.google.com/docs/cli)

## 開発手順

### 関連パッケージのインストール(開発用)

app/package.json に記載されている依存パッケージをインストールします。

```shell
[user@host path-to-dir] $ npm install
```

### Firebaseエミュレーターによる動作確認

エミュレータでの動作確認も可能です。

参考) [Set up the Firebase Emulators  \|  Firebase](https://firebase.google.com/docs/rules/emulator-setup)

```shell
[user@host path-to-dir] $ firebase emulators:start
```

出力例

```shell
[user@host path-to-dir] $ firebase emulators:start
i  emulators: Starting emulators: firestore, hosting
i  firestore: Serving ALL traffic (including WebChannel) on http://localhost:8080
⚠  firestore: Support for WebChannel on a separate port (8081) is DEPRECATED and will go away soon. Please use port above instead.
i  firestore: Emulator logging to firestore-debug.log
✔  firestore: Emulator started at http://localhost:8080
i  firestore: For testing set FIRESTORE_EMULATOR_HOST=localhost:8080
i  hosting: Serving hosting files from: app
✔  hosting: Local server: http://localhost:5000
✔  hosting: Emulator started at http://localhost:5000
✔  All emulators started, it is now safe to connect.
```

## リリース手順

### 関連パッケージのインストール(リリース用)

app/package.json に記載されている依存パッケージをインストールします。

```shell
[user@host path-to-dir] $ npm install --production
```

### アプリケーションの(Firebaseへの)デプロイ

Firebaseへのデプロイ

```shell
[user@host path-to-dir] $ firebase deploy
```

出力例

```shell
[user@host path-to-dir] $ firebase deploy
=== Deploying to 'project_id'...

i  deploying firestore, hosting
i  firestore: reading indexes from firestore.indexes.json...
i  cloud.firestore: checking firestore.rules for compilation errors...
✔  cloud.firestore: rules file firestore.rules compiled successfully
✔  firestore: deployed indexes in firestore.indexes.json successfully
i  firestore: uploading rules firestore.rules...
i  hosting[project_id]: beginning deploy...
i  hosting[project_id]: found 35 files in app
✔  hosting[project_id]: file upload complete
✔  firestore: released rules firestore.rules to cloud.firestore
i  hosting[project_id]: finalizing version...
✔  hosting[project_id]: version finalized
i  hosting[project_id]: releasing new version...
✔  hosting[project_id]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/project_id/overview
Hosting URL: https://project_id.firebaseapp.com
```

# CI/CD

CI(Continuous Integration), CD(Continuous Delivery)には未対応
