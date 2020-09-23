var submit = document.getElementById("submit");
var google = document.getElementById("google");
var instagram = document.getElementById("instagram");
var signIn = document.getElementById("signIn");
if(submit)
	submit.addEventListener("click",onClick,true);
if(google)
	google.addEventListener("click",loginSN,true);
if(instagram)
	instagram.addEventListener("click",loginSN,true);
if(signIn)
	signIn.addEventListener("click",login,true);

function onClick(){
var rating = document.getElementsByClassName("rating");
var comment = document.getElementById("comment").value;
var rate=0;
for (var i = rating.length - 1; i >= 0; i--) {
	if(rating[i].checked){
		rate=rating[i].value;
		break;
	}
}
var tmp='';
for(var i = 1; i <=5; i++) {
	if(i<=rate)
		tmp+='<span class="active"></span>';
	else tmp+='<span></span>';
}
if(rate==0 || comment=='')
{
	alert("Заполните все поля");
	return 0;
}
var message = document.getElementById("comments_by_users").innerHTML + '<p><div class="rating-mini">' + tmp + '</div><br>'+comment+'</p>';
document.getElementById("comments_by_users").innerHTML = message;
}

function loginSN() {
	sessionStorage.setItem('key', '1');
}

function login(e) {
	var user = document.getElementById("user").value;
	var password = document.getElementById("password").value;
	if(user==''|| password=='')
	{
		e.preventDefault();
		alert("Заполните все поля!");
		return 0;
	}
	else sessionStorage.setItem('key', '1');
}
