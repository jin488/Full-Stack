import { Vehicles } from "./Vehicles";

// Clase principal para el registro

export class AutomobileRegistry {
    private vehicles: Vehicles[] = [];

    // para agregar un nuevo vehículo
    addVehicles(vehicle: Vehicles): void {
        this.vehicles.push(vehicle);
        console.log(`Vehículo con patente ${vehicle.getLicensePlate()} agregado.`);
    }

    // Modificar un vehículo mediante su patente
    modifyVehicle(licensePlate: string, newBrand: string, newModel: string): void {
        const vehicle = this.vehicles.find(newVehicle => newVehicle.getLicensePlate() === licensePlate);
        // confirmacion de los cambios
        if (vehicle) {
            vehicle.setBrand(newBrand);
            vehicle.setModel(newModel);
            console.log(`Vehículo con patente ${licensePlate} modificado.`);
        } else {
            console.log(`Vehículo con patente ${licensePlate} no encontrado.`);
        }
    }

    // Dar de baja un vehículo mediante su patente filtrando una nueva patente
    cancel(licensePlate: string): void {
        this.vehicles = this.vehicles.filter(newVehicle => newVehicle.getLicensePlate() !== licensePlate);
        console.log(`Vehículo con licensePlate ${licensePlate} dado de baja.`);
    }

    // Obtener la lista final de vehículos
    getVehicles(): Vehicles[] {
        return this.vehicles;
    }
}
