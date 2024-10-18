
export class validation {
    private brand: string
    private model: string;
    private verification: boolean;

    constructor(model: string, verification: boolean) {
        this.brand = brand;
        this.model = model;
        this.verification = verification;
    }

    addBrand(brand: Vehicles): void {
        this.brand.push(brand)
    }

    getBrand(): Vehicles[] {
        return this.brand
    }



    getModel(): string {
        return this.model;
    }

    aproveVerification(): boolean {
        if(this.verification == true) {
            return true
        }else {
            return false
        }
    }
}


