#学习
## npm 的包管理，能够将依赖库保存到package.json
- npm install requirejs --save
- npm install jquery --save
- npm install react-tools --save
- npm install reactjs --save

## requirejs 的用法
- 用这个库能够实现引入jquery 和reactjs
> html 文件中引入 <script src="node_modules/requirejs/require.js" data-main="app" ></script>
> app.js 导入依赖库， 这里导入了jquery , reactjs
> code:
> require.config({
  baseUrl: 'node_modules',
  paths : {
    'jquery':'jquery/dist/jquery',
    'react' : 'reactjs/react.js'
}
})

>require(['jquery'], function($){
  $(document).ready({
    greet = $("#h1").html()
    alert(greet)
    });
  });

## reactjs 的hello
- 如何实现的
- 写一个hello
- JSX 是怎么回事
