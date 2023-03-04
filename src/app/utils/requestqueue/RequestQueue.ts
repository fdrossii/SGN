import { Injectable } from '@angular/core';
import axios from 'axios';
import { RequestItem } from '../../interfaces/requestItem';

@Injectable({
    providedIn: 'root'
})
export class RequestQueue{
    
    private request: RequestItem[] = [];

    public addRequest(request: RequestItem): void{
        this.request.push(request);
    }

    proccesQueue(): void{
        for (const request of this.request){
            axios.put(request.url, request.params, {headers: {'Content-Type' : 'application/json'}})
                .then(response => {
                    console.log(response.data);
                    this.removeRequest(request);
                })
                .catch(error =>{
                    console.log(error);
                    this.removeRequest(request);
                })
        }        
    }

    removeRequest(request: RequestItem): void{
        const index = this.request.indexOf(request);
        if (index !== -1){
            this.request.splice(index, 1);
        }
    }
}