//Counter code
var button=document.getElementById('counter');

button.onclick=function(){

	//Make a request to the counter endpoint
    var request=new XMLHttpRequest();

	//Capture the response and store it in avariable 
    request.onreadyStatechange=function(){
    	if (request.readyState==XMLHttpRequest.DONE) {
    		//Take some action
    		if (request.status==200) { //status 200 i.e request is in successful state
    			var counter=request.responseText;
    			var span=document.getElementById('count');
    			span.innerHTML=counter.toString();
    	}
    	//Not done yet
    };

    //Make the request
    request.open('GET','http://georgekunchattil1992.imad.hasura-app.io/counter',true);
    request.send(null);
};

//Submit name

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
  //Create a request object
  var request=new XMLHttpRequest();
  
  //Capture the response and store it in a variable
  request.onreadystatechange=function(){
      if(request.readyState==XMLHttpRequest.DONE){
          //Take some action
          if(request.status==200){
              //Capture a list of names and render it as a list
             var names=['name1','name2','name3','name4'];
             var list='';
             for (var i=0;i<names.length;i++){
               list+='<li>'+names[i]+'</li>';
           }
           var ul=document.getElementById('namelist');
           ul.innerHTML=list;
          }
      }
      //Not done yet
  };
  
  //Make the request.
  var nameInput=document.getElementById('name');
  var name=nameInput.value;
    request.open('GET','http://georgekunchattil1992.imad.hasura-app.io/submit-name?name='+ name,true);
    request.send(null);     
};
