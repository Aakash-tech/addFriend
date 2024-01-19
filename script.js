var stat = document.querySelector("h5")
var addFriend = document.querySelector("#btn")
var flag = 0;
addFriend.addEventListener("click",function(){
    if(flag == 0){
        stat.innerHTML="Friends";
        stat.style.color="green";
        btn.innerHTML = "remove";
        flag =1;
    }else{
        stat.innerHTML = 'Stranger';
        stat.style.color = 'red';
        btn.innerHTML = "Add Friend";
        flag=0;
    }
    
})