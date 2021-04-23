player1=localStorage.getItem("player1_username");

player1Score=0;

document.getElementById("player1_name").innerHTML=player1+":";

document.getElementById("player1_score").innerHTML=player1Score;

document.getElementById("player_question").innerHTML="Question turn: "+player1;

player2=localStorage.getItem("player2_username");

player2Score=0;

document.getElementById("player2_name").innerHTML=player2+":";

document.getElementById("player2_score").innerHTML=player2Score;

document.getElementById("player_answer").innerHTML="Answer turn: "+player2;

function send()
{
   word_given_by_player=document.getElementById("word").value;
    
  word=word_given_by_player.toLowerCase();

  a=word.charAt(1);
  
  console.log(a);

  midvalue=Math.floor(word.length/2);

  b=word.charAt(midvalue);

  lastvalue=word.length-1;

  c=word.charAt(lastvalue);

  removeA=word.replace(a, "_");

  removeB=removeA.replace(b, "_");

  removeC=removeB.replace(c, "_");

  var question_word="<h4 id='word_display'>"+removeC+"</h4>";

  input="<br> answer: <input type='text' id='input_box'>";

  check_button="<br><button class='btn btn-info' onclick='check()'>Check</button>"

  row=question_word+input+check_button;

  document.getElementById("output").innerHTML=row;

  document.getElementById("word").value="";
}