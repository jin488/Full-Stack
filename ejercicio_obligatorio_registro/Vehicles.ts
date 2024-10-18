export class Vehicles {
    protected licensePlate: string;
    protected brand: string;
    protected model: string;


    constructor(licensePlate: string, brand: string, model: string) {
        this.licensePlate = licensePlate;
        this.brand = brand;
        this.model = model;
    }


    //get y set de patentes
    getLicensePlate(): string {
        return this.licensePlate;
    }

    setLicensePlate(licensePlate: string): void {
        this.licensePlate = licensePlate;
    }

    //get y set de marcas
    getBrand(): string {
        return this.brand;
    }

    setBrand(brand: string): void {
        this.brand = brand;
    }

    //get y set de modelos
    getModel(): string {
        return this.model;
    }

    setModel(model: string): void {
        this.model = model;
    }
}


// calses extendidas y uso de herencia 

export class Car extends Vehicles {
    constructor(licensePlate: string, brand: string, model: string) {
        super(licensePlate, brand, model);
    }
}

export class Motorcycle extends Vehicles {
    constructor(licensePlate: string, brand: string, model: string) {
        super(licensePlate, brand, model);
    }
}

export class Truck extends Vehicles {
    constructor(licensePlate: string, brand: string, model: string) {
        super(licensePlate, brand, model);
    }
}
