import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Aerolinea } from './Aerolinea';


@Injectable()
export class AerolineaService {
    private url = environment.baseUrl
constructor(private http:HttpClient) { }


getAerolineas(){
    return this.http.get<Aerolinea[]>(this.url + 'flights.json');
}
getAerolinea(id: number){
    return this.http.get<Aerolinea>(this.url + 'flights/' + id+'.json');
}

}
