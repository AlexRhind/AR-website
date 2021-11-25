   $('nav li a').filter(function(){
       
    const curPage = document.URL;
    console.log(curPage);
    
    return this.href === location.href;
  }).addClass('active');