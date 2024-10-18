"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AutomobileRegistry_1 = require("./AutomobileRegistry");
var Vehicles_1 = require("./Vehicles");
var Vehicles_2 = require("./Vehicles");
var Vehicles_3 = require("./Vehicles");
var registry = new AutomobileRegistry_1.AutomobileRegistry();
// llamando a los diferentes vehiculos
var car1 = new Vehicles_1.Car('AAA111', 'Toyota', 'Corolla');
var car2 = new Vehicles_1.Car('AAA222', 'VolksWagen', 'Vento');
var motorcycle1 = new Vehicles_2.Motorcycle('BBB111', 'Yamaha', 'R1');
var motorcycle2 = new Vehicles_2.Motorcycle('BBB222', 'Honda', 'CBR');
var truck1 = new Vehicles_3.Truck('CCC111', 'Scania', 'R450');
var truck2 = new Vehicles_3.Truck('CCC222', 'Mercedes-Benz', '1114');
// Agregar vehículos
registry.addVehicles(car1);
registry.addVehicles(car2);
registry.addVehicles(motorcycle1);
registry.addVehicles(motorcycle2);
registry.addVehicles(truck1);
registry.addVehicles(truck2);
// Modificar un vehículo
registry.modifyVehicle('AAA111', 'Honda', 'Civic');
// Dar de baja un vehículo
registry.cancel('BBB222');
registry.cancel('CCC222');
// Obtener y mostrar la lista de vehículos 
console.log(registry.getVehicles());
