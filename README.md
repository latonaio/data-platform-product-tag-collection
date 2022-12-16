# data-platform-product-tag-collection 
 
data-platform-product-tag-collection は、データ連携基盤において、品目タグデータを維持管理する MongoDB の Collection を作成するためのレポジトリです。  

## 前提条件  
data-platform-product-tag-collection は、データ連携にあたり、API を利用し、本レポジトリ の Collection 設定ファイルの内容は、下記 URL の API 仕様を前提としています。  
https://api.XXXXXXXX.com/api/OP_API_XXXXXXX_XXX/overview   

## collectionの設定ファイル

data-platform-product-tag-collection には、Collection の設定ファイルとして、以下のファイルが含まれています。    

* data-platform-product-tag-sql-product-tag-data.js（データ連携基盤 品目タグ - 品目タグデータ）
* data-platform-product-tag-sql-product-tag-data-setup.js（データ連携基盤 品目タグ - 品目タグデータ 設定）

## MongoDBのセットアップ / Kubernetesの設定 / Collectionの作成方法
MongoDBのセットアップ / Kubernetesの設定 / 具体的なCollectionの作成方法、については、[mongodb-kube](https://github.com/latonaio/mongodb-kube)を参照ください。  

