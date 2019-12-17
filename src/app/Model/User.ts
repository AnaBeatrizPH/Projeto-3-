import { ComponentFactory } from '@angular/core';

import { Adress } from '../Model/Adress';
import { Company } from '../Model/Company';

export class User {

    private id: number;
    private name: string;
    private email: string;
    private address: Adress;

    private phone: number;
    private website: string;
    private company: Company

    public constructor(_id: number, _name: string, _email: string, _adress: Adress, _phone: number, _website: string, _company: Company) {
        this.id = _id;
        this.name = _name;
        this.email = _email;
        this.address = _adress;
        this.phone = _phone;
        this.website = _website;
        this.company = _company;
    }

    public getId(): number {
        return this.id;
    }

    public setId(_id: number): void {
        this.id = _id
    }

    public getName(): string {
        return this.name
    }

    public setName(_name: string): void { this.name = _name }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(_email: string): void {
        this.email = _email
    }

    public getAdress(): Adress {
        return this.address;
    }

    public setAdress(_adress: Adress): void {
        this.address = _adress;
    }

    public getPhone(): number {
        return this.phone
    }

    public setPhone(_phone: number) {
        this.phone = _phone
    }

    public getWebsite(): string {
        return this.website;
    }
    public setWebsite(_website: string) {
        this.website = _website;
    }

    public getCompany(): Company {
        return this.company;
    }

    public setCompany(_company: Company) {
        this.company = _company;
    }




}

