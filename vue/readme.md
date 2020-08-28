# router 传参

- 通过 name {{$route.name}}获得
- 通过 \<router-link :to="{name: 'hi1', params:{name: 'test'}}">hi 一 \</router-link> {{$route.params.name}}获得
