 const User={
        key:'users',
        data:[],
      init:function(){
        console.log(this.key);
        if(localStorage.getItem(this.key)){
            this.data = JSON.parse(localStorage.getItem("users"));
            
          } 
      },
      findIndex:function(index){
        return (this.data[index])?this.data[index]:{}
      },
      filter:function(findvalue){
            if(findvalue!="" && findvalue!=null  && this.data.length>0){
                 return this.data.filter(function(value){
                     return value.fullname.indexOf(findvalue)>-1 || value.useremail.indexOf(findvalue)>-1 ;
                 })
            }else{
                return this.data;
            }
      },
      findUniqueEmail:function(email,currentIndex=''){
        if(email!="" && email!=null  && this.data.length>0){
            return this.data.find(function(value,index){
                return ((currentIndex!='')? value.email== 'email' &&  currentIndex!=index:value.email==email);
                
            })
       }
      },
      reset:()=>this.init(),
      delete:function(index){
         if(index!=""){
              this.data.splice(index,1);
              localStorage.setItem(this.key,JSON.stringify(this.data));
              this.init();
         }
      }
 }
 User.init();