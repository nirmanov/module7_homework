function ElectricalAppliance(name, manufacturer, power) {
  this.name = name;
  this.power = power;
  this.manufacturer = manufacturer;
}

ElectricalAppliance.prototype.turn = function (switchOnOff) {
  switchOnOff == 'on' ? this.turn = true : this.turn = false;
  this.turn ? this.turnStatus = "включен" : this.turnStatus = "выключен";
  console.log(`Электроприбор ${this.name} ${this.turnStatus}`);
};

ElectricalAppliance.prototype.showDetail = function () {
  console.log(`Электроприбор ${this.name} ${this.manufacturer} мощностью ${this.power}`);
}

ElectricalAppliance.prototype.totalPower = function () {
  if (this.turn) return this.power;
  else return 0;
}

function Notebook(name, manufacturer, power, cpu) {
  this.name = name;
  this.power = power;
  this.manufacturer = manufacturer;
  this.cpu = cpu;
}

function Lamp(name, manufacturer, power, lumen) {
  this.name = name;
  this.power = power;
  this.manufacturer = manufacturer;
  this.lumen = lumen;
}

Notebook.prototype = new ElectricalAppliance()
Lamp.prototype = new ElectricalAppliance()

Lamp.prototype.showDetail = function () {
  console.log(`Яркость лампы составляет ${this.lumen} люмен`);
 }

 Notebook.prototype.showDetail = function () {
  console.log(`${this.name} ${this.manufacturer}, процессор ${this.cpu}, мощность ${this.power}`);
 }

let microwaveOven = new ElectricalAppliance('Микроволновка', 'Samsung', 1500,);
let deskLamp = new Lamp ('Лампа', '', 150, 100);
let pc = new Notebook ('Ноутбук', 'ASUS', 550, 'Intel');

microwaveOven.turn('on');
deskLamp.turn('off');
pc.turn('on');
deskLamp.showDetail();
pc.showDetail();
console.log(`Суммарная мощность = ${microwaveOven.totalPower() + deskLamp.totalPower() + pc.totalPower()} Вт.`);