class Animal {
    constructor(name) {
      this.name = name;
      this.legs = 4;
      this.cold_blooded = false;
    }
  
    get animalName() {
      return this.name;
    }
  
    set animalName(name) {
      this.name = name;
    }
  
    get animalLegs() {
      return this.legs;
    }
  
    set animalLegs(legs) {
      this.legs = legs;
    }
  
    get animalCold_blooded() {
      return this.cold_blooded;
    }
  
    set animalCold_blooded(cb) {
      this.cold_blooded = cb;
    }
  }
  
  class Ape extends Animal {
    constructor(name) {
      super(name);
    }
  
    get apeName() {
      return this.name;
    }
  
    set apeName(name) {
      this.name = name;
    }
  
    get apeLegs() {
      return this.legs;
    }
  
    set apeLegs(legs) {
      this.legs = legs;
    }
  
    get apeCold_blooded() {
      return this.cold_blooded;
    }
  
    set apeCold_blooded(cb) {
      this.cold_blooded = cb;
    }
  
    yell() {
      console.log("Auooo");
    }
  }
  
  class Frog extends Animal {
    constructor(name) {
      super(name);
    }
  
    get frogName() {
      return this.name;
    }
  
    set frogName(name) {
      this.name = name;
    }
  
    get frogLegs() {
      return this.legs;
    }
  
    set frogLegs(legs) {
      this.legs = legs;
    }
  
    get frogCold_blooded() {
      return this.cold_blooded;
    }
  
    set frogCold_blooded(cb) {
      this.cold_blooded = cb;
    }
  
    jump() {
      console.log("hop hop");
    }
  }
  
  var sheep = new Animal("shaun");
  console.log("---------Soal 1 -----------");
  console.log("---------Release 0 --------");
  console.log(sheep.name); // "shaun"
  console.log(sheep.legs); // 4
  console.log(sheep.cold_blooded); // false
  
  
  var sungokong = new Ape("kera sakti");
  console.log("---------Release 1 --------");
  sungokong.legs = 2;
  console.log(sungokong.name);
  console.log(sungokong.legs);
  console.log(sungokong.cold_blooded);
  sungokong.yell(); // "Auooo"
  
  console.log("-----------------");

  var kodok = new Frog("buduk");
  console.log(kodok.name);
  console.log(kodok.legs);
  console.log(kodok.cold_blooded);
  kodok.jump(); // "hop hop"
  
  // soal 2
  class Clock {
    constructor({ template }) {
      this.template = template;
      this.timer;
    }
  
    render() {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = "0" + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = "0" + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = "0" + secs;
  
      var output = this.template.replace("h", hours).replace("m", mins).replace("s", secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  console.log("---------Soal 2 -----------");
  var clock = new Clock({ template: "h:m:s" });
  clock.start();