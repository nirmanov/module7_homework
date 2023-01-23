class ElectricalAppliance {
  constructor(name, manufacturer, power) {
    this.name = name;
    this.power = power;
    this.manufacturer = manufacturer;
  }

  turn(switchOnOff) {
    switchOnOff == 'on' ? this.turn = true : this.turn = false;
    this.turn ? this.turnStatus = "включен" : this.turnStatus = "выключен";
    console.log(`Электроприбор ${this.name} ${this.manufacturer} ${this.turnStatus}`);
  }
  totalPower() {
    if (this.turn) return this.power;
    else return 0;
  }
}

class Notebook extends ElectricalAppliance {
  constructor(name, manufacturer, power, cpu, hdd, ram) {
    super(name, manufacturer, power);
    this.cpu = cpu;
    this.hdd = hdd;
    this.ram = ram;
  }
  showDetailTech() {
    console.log(`Процессор ${this.cpu}, Жесткий диск ${this.hdd} Gb, Оперативная память ${this.ram} Gb`);
  }
}

class Lamp extends ElectricalAppliance {
  constructor(name, manufacturer, power, lumen) {
    super(name, manufacturer, power);
    this.lumen = lumen;
  }
  showLummensOfLamp() {
    console.log(`Яркость лампы ${this.lumen} люмен`);
  }
}

const microwaveOven = new ElectricalAppliance('Микроволновка', 'Samsung', 1500,);
const deskLamp = new Lamp('Лампа', '', 150, 100);
const pc = new Notebook('Ноутбук', 'ASUS', 2000, 'Intel', 4000, 32);

microwaveOven.turn('on');
deskLamp.turn('off');
pc.turn('on')
pc.showDetailTech()
deskLamp.showLummensOfLamp()
console.log(`Суммарная мощность = ${microwaveOven.totalPower() + deskLamp.totalPower() + pc.totalPower()} Вт.`);