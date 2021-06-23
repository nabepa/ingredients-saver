You can try this app, click below badge!
</br>
<a href="https://jovial-elion-1df897.netlify.app/
" target="_blank">![Netlify Status](https://api.netlify.com/api/v1/badges/aea01573-e082-44b4-8617-12e71bf71494/deploy-status)</a>

Check below if you want to know how to use!

<img src="public/images/main.png" height="450">

# 🚀 開発背景

- コロナ渦で自宅で料理する機会が増えたが，食材を賞味期限内に消費できず捨ててしまうことが多くなった 🙊
- 早く消費したい食材から作れるレシピーを検索して，食材を使い切ろう ✨
- 検索したレシピーで持っていない食材を教えてもらうことで買い物の時間も減らす ⏱

# ⭐️ 機能

## 使い方

1. 買い物した食材を My list に追加
   <img src="public/images/step1.png" height="300">
2. My list から消費したい食材を選択して，レシピーを検索
   <img src="public/images/step2.png" height="300">
3. レシピーを選択して，材料を確認(レシピの詳細はリンクで確認)
   <img src="public/images/step3.png" height="300">
4. 使い切った材料は My list から削除
   <img src="public/images/step4.png" height="300">

## 今後目標とする機能

- 条件付き検索(ex. 持っている材料のみで作れるレシピー，選択した材料を全て使うレシピーのみ)
- 材料の消費期限設定とお知らせ

# 🦄 使用技術とツール

<p>
    <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS3&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat&logo=PostCSS&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=Yarn&logoColor=white"/>&nbsp;&nbsp;
 </p>

# 📚 使用ライブラリとリソース， API

[axios](https://github.com/axios/axios): REST API 使用

[spooncular](https://spoonacular.com/food-api): レシピーの API

[swiper](https://swiperjs.com/): レシピーの slider 表示

[google fonts](https://fonts.google.com/icons): 各種アイコ n

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 🐛 改善予定

- ~~Recipe Card が無限に re-render されている~~
  → useEffect 内で unselectedPreshopIds という state を更新し，dependency にも設定していた事で無限ループしていた
  useEffect に setState を利用する際，Dependancy の設定を間違うと無限に re-rendering してしまうので注意
  (June4, 2021)
  ただし，次のような warning が出始めている
  `React Hook useEffect has a missing dependency: 'unselectedPreshopIds'. Either include it or remove the dependency array. You can also do a functional update 'setUnselectedPreshopIds(u => ...)' if you only need 'unselectedPreshopIds' in the 'setUnselectedPreshopIds' call react-hooks/exhaustive-deps`
  →
- ~~Recipe 検索後，ユーザが持っている材料のチェック・追加・削除が Recipe Card の方に反映されない~~
  → チェック・追加は反映できるように修正(June4, 2021)
  ~~ただし，削除した材料がチェックされた材料として残っている~~
  → Item component の child である削除のアイコンをクリックすると，イベントが Item component まで bubbling してくるのが原因だった(そこで，削除と同時にチェエクされてた)(June11, 2021)
- 検索した材料をキーボードの方向キーと enter キーで選択できるように
