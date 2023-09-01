# 0、创建项目
```
npm i -g @vue-cli
vue create app-name
cd app-name
npm run serve
```

# 1、动画:transition包裹 控制组件显示隐藏的变量
## 自定义：注意类名的使用即可
```
transition : name='liu'
样式：主要规定 进入和离开：
.liu-enter-active,.liu-leave-active {  transition: opacity 0.5s;}
.liu-enter,.liu-leave-to {  opacity: 0;}
```

## 第三方库：animation.css 4.0之前和之后的类名有区别
```
npm install animation.css
import animated  from 'animate.css'
<transition enter-active-class="animated bounce" leave-active-class="animated bounceOutRight">
    <HelloWorld msg="Welcome to Your Vue.js App" v-show="flag" />
</transition>
```

# 2、







# 补充
```
  lintOnSave: false

```
