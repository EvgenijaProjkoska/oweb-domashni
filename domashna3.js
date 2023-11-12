window.addEventListener("load",start,false);
function start(){
    words = ["rakomet","fudbal","kosarka","odbojka","tenis","hokej","plivanje","karate","atletika","pikado","surfanje","pingpong","futsal","kriket","lakros","borenje","ragbi","bejzbol"];
    word1 =  Math.floor(Math.random()*21);
    word=words[word1];
    revealed = new Array(word.length).fill(0);
    for(i=0;i<3;i++){
        pom=Math.floor(Math.random()*(word.length+1));
        if(revealed[pom]==0)
        revealed[pom]=1;
        else{i--;}}
    show();
    tries=0;}
function guess(){
    tries++;
    for( i=0;i<revealed.length;i++){
        if(revealed[i]==1){
            continue;}
        entered=document.getElementById("letter"+i);
        input=entered.value;
        if(input==word[i]){
            revealed[i]=1;}}
    show();
    flag=1;
    for(i=0;i<revealed.length;i++){
        if(revealed[i]==0){flag=0; break;}}
    if(flag==1){
        window.alert("Igrata e uspeshna!");
        location.reload();}
    else if(tries==5){
        response = confirm("Igrata ne e uspeshna! Dali sakash da se obidesh povtorno?");
        if(response)
        location.reload();}}
function show(){
    game=document.getElementById("game");
    game.innerHTML="";
    for(i=0;i<word.length;i++){
        if(revealed[i]==0){
            game.innerHTML+='<span><input class ="letter" id="letter'+i+'" type="text" maxlength=1></span>';}
        else{
            game.innerHTML+='<span>'+word[i]+'</span>';}}}
