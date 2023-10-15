function selects(){  
  var check = document.getElementsByName('checked');
  for(var i=0; i<check.length; i++){  
    if(check[i].type=='checkbox')  
        check[i].checked=true;
  }  
}