


export class Geo{

    private lat: number;
    private lng: number; 
 
    public constructor(_lat: number, _lng: number){
        this.lat=_lat; 
        this.lng=_lng; }

        public getLat():number{
            return this.lat; 
        }
    
        public setLat(_lat: number):void 
        {
            this.lat=_lat
        }

        public getLng():number{
            return this.lng; 
        }
    
        public setLng(_lng: number):void 
        {
            this.lng=_lng
        }






}