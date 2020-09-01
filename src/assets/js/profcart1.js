var vm = new Vue({
    el:'#app',
    data:{
      shopname:'CHI SHOP',
      list:[
        {
          id:'1',
          name:'chihua1',
          imgUrl:'https://placedog.net/150/?id=17',
          discribe:'It is good to drink.',
          price:'5'
        },
        {
          id:'2',
          name:'chihua2',
          imgUrl:'https://placedog.net/150/?id=48',
          discribe:'Very cutie.',
          price:'100'
        },
         {
          id:'3',
          name:'Special',
          imgUrl:'https://placedog.net/150/100?random',
          discribe:'Special gift.',
          price:'999'
        },
         {
          id:'4',
          name:'Premium',
          imgUrl:'https://placedog.net/150?random',
          discribe:'This is for you.',
          price:'687'
        },
      ],
      cart:[],
      total:0,
    },
    
   methods:{
     // 加入購物車
     addCart(item){
       let incart = false;
       
       // 已經在購物車裡
       for(let i = 0; i < this.cart.length; i++){
          if(this.cart[i].id === item.id){
            incart = true;
            this.cart[i].quantity++;
            break;
          }
        }
       
       // 沒有在購物車
       if(!incart){
         this.cart.push({
           id : item.id,
           name : item.name,
           price : item.price,
           quantity : 1,
         });
       }
     },
     
     sub(item){
       if( item.quantity === 1 ) return;
       return item.quantity--;
     },
     
     add(item){
       return item.quantity++;
     },
     
     del(item){
       let index = this.cart.findIndex(item => {
          if(item.id == this.id)
            return true;
        })
        this.cart.splice(index,1)
     }
   }        
  })