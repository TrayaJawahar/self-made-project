AFRAME.registerComponent('planet', {
   schema:{
    selectedId:{default:"" , type:"string"},
   },

    tick : function(){
        this.planetClicked();      
   },
   planetClicked:function(){
    
   }

})