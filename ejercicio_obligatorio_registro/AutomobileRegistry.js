"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomobileRegistry = void 0;
// Clase principal para el registro
var AutomobileRegistry = /** @class */ (function () {
    function AutomobileRegistry() {
        this.vehicles = [];
    }
    // para agregar un nuevo vehículo
    AutomobileRegistry.prototype.addVehicles = function (vehicle) {
        this.vehicles.push(vehicle);
        console.log("Veh\u00EDculo con patente ".concat(vehicle.getLicensePlate(), " agregado."));
    };
    // Modificar un vehículo mediante su patente
    AutomobileRegistry.prototype.modifyVehicle = function (licensePlate, newBrand, newModel) {
        var vehicle = this.vehicles.find(function (newVehicle) { return newVehicle.getLicensePlate() === licensePlate; });
        // confirmacion de los cambios
        if (vehicle) {
            vehicle.setBrand(newBrand);
            vehicle.setModel(newModel);
            console.log("Veh\u00EDculo con patente ".concat(licensePlate, " modificado."));
        }
        else {
            console.log("Veh\u00EDculo con patente ".concat(licensePlate, " no encontrado."));
        }
    };
    // Dar de baja un vehículo mediante su patente filtrando una nueva patente
    AutomobileRegistry.prototype.cancel = function (licensePlate) {
        this.vehicles = this.vehicles.filter(function (newVehicle) { return newVehicle.getLicensePlate() !== licensePlate; });
        console.log("Veh\u00EDculo con licensePlate ".concat(licensePlate, " dado de baja."));
    };
    // Obtener la lista final de vehículos
    AutomobileRegistry.prototype.getVehicles = function () {
        return this.vehicles;
    };
    return AutomobileRegistry;
}());
exports.AutomobileRegistry = AutomobileRegistry;
