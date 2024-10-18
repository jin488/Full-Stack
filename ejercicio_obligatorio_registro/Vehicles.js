"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = exports.Motorcycle = exports.Car = exports.Vehicles = void 0;
var Vehicles = /** @class */ (function () {
    function Vehicles(licensePlate, brand, model) {
        this.licensePlate = licensePlate;
        this.brand = brand;
        this.model = model;
    }
    //get y set de patentes
    Vehicles.prototype.getLicensePlate = function () {
        return this.licensePlate;
    };
    Vehicles.prototype.setLicensePlate = function (licensePlate) {
        this.licensePlate = licensePlate;
    };
    //get y set de marcas
    Vehicles.prototype.getBrand = function () {
        return this.brand;
    };
    Vehicles.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    //get y set de modelos
    Vehicles.prototype.getModel = function () {
        return this.model;
    };
    Vehicles.prototype.setModel = function (model) {
        this.model = model;
    };
    return Vehicles;
}());
exports.Vehicles = Vehicles;
// calses extendidas y uso de herencia 
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(licensePlate, brand, model) {
        return _super.call(this, licensePlate, brand, model) || this;
    }
    return Car;
}(Vehicles));
exports.Car = Car;
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(licensePlate, brand, model) {
        return _super.call(this, licensePlate, brand, model) || this;
    }
    return Motorcycle;
}(Vehicles));
exports.Motorcycle = Motorcycle;
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(licensePlate, brand, model) {
        return _super.call(this, licensePlate, brand, model) || this;
    }
    return Truck;
}(Vehicles));
exports.Truck = Truck;
