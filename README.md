You can try this app, click below badge!
</br>
<a href="https://jovial-elion-1df897.netlify.app/
" target="_blank">![Netlify Status](https://api.netlify.com/api/v1/badges/aea01573-e082-44b4-8617-12e71bf71494/deploy-status)</a>

# 🚀 開発背景

- コロナで自宅で料理する機会が増えたが，賞味期限内に消費できず捨ててしまうことが多くなった 🙊
- 持っている材料で作れるレシピーをおすすめしてもらったら，捨てる材料を減らせると思う ✨
- おすすめのレシピーで持っていない材料を教えてもらって買い物の時間も減らしたい ⏱

# ⭐️ 機能

z

## 必須機能

![inApp](public/images/main.png)

- 持っている材料を追加/削除
- 洗濯した材料で作れるレシピーのおすすめ
- レシピーに必要で，持ってない材料を教えてくれる
- レシピーの表示

## 追加したい機能

- 材料の消費期限設定とお知らせ

# 🦄 使用技術とツール

<p>
    <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS3&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat&logo=PostCSS&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=Yarn&logoColor=white"/>&nbsp;&nbsp;
 </p>

# 📚 使用ライブラリとリソース， API

[axios](https://github.com/axios/axios): REST API 使用

[spooncular](https://spoonacular.com/food-api): レシピーの API

[swiper](https://swiperjs.com/): レシピーの slider 表示

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 🐛 改善が必要な部分

- setState に useEffect を入れることで，無限にレシピーを持ってくることになっている
