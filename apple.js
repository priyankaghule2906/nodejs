function Apple(type){
  this.type =type;
  this.color ="red";
  this.getInfo = getAppleInfo;
}

function getAppleInfo(){
  console.log(this.color + " " + this.type + " apple");
}

var apple = new Apple('macintosh');
apple.color = "reddish";
apple.getInfo();
