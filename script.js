const button = document.querySelectorAll('.button1')
button.forEach(btn => {
  btn.addEventListener('mouseleave', function (){
    btn.blur()
  })
});

document.getElementById('video1').addEventListener('loadedmetadata', function() {
    this.currentTime = 50;
  }, false);

  
var audio = new Audio("click.mp3")

function play() {
audio.play();
};

function windowClose(){
    var conf=confirm("Are you sure, you want to close this tab?");
    if(conf==true){
        close();
    }
}


var scroll = document.getElementById("scroller");
var menu = document.getElementsByClassName("menu2")[0];

scroll.onscroll = function(ev) {
  if( scroll.scrollTop >= (scroll.scrollHeight - scroll.offsetHeight - 1))
    {
      menu.style.opacity = 1;
    }
  };
