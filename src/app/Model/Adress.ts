import {Geo} from '../Model/Geo';  

export class Adress{

    private street: string;
    private suite: string;
    private city: string; 
    private zipcode: number;
    private geo: Geo;  
 
    public constructor(_street: string, _suite: string, _city: string, _zipcode: number){
        this.street=_street; 
        this.suite=_suite; 
        this.city=_city; 
        this.zipcode=_zipcode; 
    
        }

        public getStreet():string{
            return this.street; 
        }
    
        public setStreet(_street: string):void 
        {
            this.street=_street
        }

        public getSuite():string{
            return this.suite; 
        }
    
        public setSuite(_suite: string):void 
        {
            this.suite=_suite
        }

        public getCity():string{
            return this.city; 
        }
    
        public setCity(_city: string):void 
        {
            this.city=_city
        }

        public getZipcode():number{
            return this.zipcode; 
        }
    
        public setZipcode(_zipcode: number):void 
        {
            this.zipcode=_zipcode
        }







}




