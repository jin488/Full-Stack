import { Vehicles } from "./Vehicles";
import { AutomobileRegistry } from "./AutomobileRegistry";
import { Car } from "./Vehicles";
import { Motorcycle } from "./Vehicles";
import { Truck } from "./Vehicles";

const registry = new AutomobileRegistry();

// llamando a los diferentes vehiculos

const car1 = new Car('AAA111', 'Toyota', 'Corolla');
const car2 = new Car('AAA222', 'VolksWagen', 'Vento');
const motorcycle1 = new Motorcycle('BBB111', 'Yamaha', 'R1');
const motorcycle2 = new Motorcycle('BBB222', 'Honda', 'CBR');
const truck1 = new Truck('CCC111', 'Scania', 'R450');
const truck2 = new Truck('CCC222', 'Mercedes-Benz', '1114');

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