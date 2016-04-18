
var moji = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I",
                     "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                     "S", "T", "U", "V", "W", "X", "Y", "Z");

var kcode = new Array(65, 66, 67, 68, 69, 70, 71, 72, 73,
                      74, 75, 76, 77, 78, 79, 80, 81, 82,
                      83, 84, 85, 86, 87, 88, 89, 90);

var rnd = new Array();

var mondai = "";
var cun = 0;
var typeStart, typeEnd;

function make_rand()
{
  for(var i = 0;  i < 200;  i++)
  {
    rnd[i] = Math.floor(Math.random() * 26);
  }
}

function gameSet()
{
  mondai = "";
  cnt = 0;

  make_rand();

  mondai="<table class='Q'>";

  for ( var i = 0 ; i < 10 ; i++ )
  {
    mondai += "<tr>";

    for ( var j = 0 ; j < 20 ; j++ )
    {
      var idnum =i*20+j;
      mondai += "<td id='word"+idnum+"'>"+moji[ rnd[idnum] ]+"</td>";
    }

    mondai += "</tr>";
  }
  mondai += "</table>";

/*
  for(var i = 0;  i < 200;  i++)
  {
    mondai = mondai + moji[rnd[i]];
  }
*/
  document.getElementById("waku").innerHTML = mondai;
}

function typeGame(evt)
{
  var kc;

  if(document.all)
  {
    kc = event.keyCode;
  }
  else
  {
    kc = evt.which;
  }

  if(kc == kcode[rnd[cnt]])
  {
    if(cnt == 0)
    {
      typeStart = new Date();
    }

      //mondai = mondai.substring(1, mondai.Length);
      var idname = "word"+cnt;
      document.getElementById(idname).style.color = "#dddddd";
      cnt++;
      //document.getElementById("waku").innerHTML = mondai;
    if(cnt==200)
    {
      typeEnd = new Date();

      var time = typeEnd -typeStart;

      var sec = Math.floor(time / 1000);

      var msec = time % 1000;

      var fin = "GAME END  time = " + sec + "s" + msec + "ms";

      document.getElementById("waku").innerHTML = fin;
    }
  }

  function reset()
  {
    typeEnd = 0;
    typeStart = 0;
    cnt = 0;

    gameSet();
  }
}
