import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Aerolinea } from './Aerolinea';


@Injectable({providedIn: 'root'})
export class AerolineaService {
    private url = environment.baseUrl
constructor(private http:HttpClient) { }
getAerolineas(){
    return this.http.get<Aerolinea[]>(this.url + 'flights.json');
}
getAerolinea(id: string){
    return this.http.get<Aerolinea>(this.url + 'flights/'+ id+'.json');
}

}
