# 開発

以下に記載するFirebaseの機能を利用する場合の開発手順等について記載します。

- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Cloud Firestore](https://firebase.google.com/docs/firestore)

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
[user@host app] $ firebase apps:create --non-interactive --project target_project web app_name
```

出力例

```shell
[user@host app] $ firebase apps:create --non-interactive --project target_project web app_name

Create your WEB app in project target_project
✔ Creating your Web app

🎉🎉🎉 Your Firebase WEB App is ready! 🎉🎉🎉

App information:
  - App ID: *:************:web:**********************
  - Display name: appname

You can run this command to print out your new app's Google Services config:
  firebase apps:sdkconfig WEB *:************:web:**********************
```

## Cloud Firestore のセットアップ

データベースとして Cloud Firestore を利用する為の対応です。

[Cloud Firestore  \|  Firebase](https://firebase.google.com/docs/firestore)

Security rules の選択は任意。
後程上書きする為問題ありません。

[appname – appname – Firebase console](https://console.firebase.google.com/project/target_project/database)

## Firebase CLI の準備

開発環境(PCなど)にFirebase CLI をインストールします。
既にインストール済である場合は対応不要。

参考) [Firebase CLI reference  \|  Firebase](https://firebase.google.com/docs/cli)

## 開発手順

### 関連パッケージのインストール(開発用)

app/package.json に記載されている依存パッケージをインストールします。

```shell
[user@host app] $ npm install
```

### 開発

`npm run dev` コマンドで起動される環境等を利用して開発を進めます。

参考)

- [コマンド \- NuxtJS](https://ja.nuxtjs.org/guide/commands/)


## アプリケーションの(Firebaseへの)デプロイ

アプリケーションをFirebaseにデプロイします。

### ファイルの生成(Nuxt.js)

```shell
[user@host app] $ npm run generate
```

### Firebaseへのデプロイ

```shell
[user@host app] $ firebase --project target_porject deploy
```

- `.firebaserc` が存在する場合はこの限りではない

出力例

```shell
[user@host app] $ firebase --project target_porject deploy
=== Deploying to 'target_project'...

i  deploying firestore, hosting
i  firestore: reading indexes from firestore.indexes.json...
i  cloud.firestore: checking firestore.rules for compilation errors...
✔  cloud.firestore: rules file firestore.rules compiled successfully
✔  firestore: deployed indexes in firestore.indexes.json successfully
i  firestore: uploading rules firestore.rules...
i  hosting[target_project]: beginning deploy...
i  hosting[target_project]: found 35 files in app
✔  hosting[target_project]: file upload complete
✔  firestore: released rules firestore.rules to cloud.firestore
i  hosting[target_project]: finalizing version...
✔  hosting[target_project]: version finalized
i  hosting[target_project]: releasing new version...
✔  hosting[target_project]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/target_project/overview
Hosting URL: https://target_project.firebaseapp.com
```

## リリース手順 (開発用PJとは別のPJが存在する場合)

開発時のみ必要なパッケージの除去、開発用Firebaseプロジェクトとは異なるプロジェクトへのデプロイなどが必要な場合は以下のように対応します。

### 関連パッケージのインストール(例:公開用)

```shell
[user@host app] $ npm install --production && npm prune --production
```

### Firebaseへのデプロイ

```shell
[user@host app] $ firebase --project target_porject deploy
```

## テスト

## CI/CD

CI(Continuous Integration), CD(Continuous Delivery)には未対応

