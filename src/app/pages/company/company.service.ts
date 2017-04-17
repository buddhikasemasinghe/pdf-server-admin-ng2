import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CompanyModel } from './company.model';

@Injectable()
export class CompanyService {
    private baseUrl = API_URL+"admin/company/";
    constructor(private http: Http) {
    }
    getAll() {
        let companies$ = this.http
            .get(`${this.baseUrl}/view`, {headers: this.getHeaders()})
            .map(mapCompanies);
        return companies$;
    }

    getAllPipelineClients() {
        let pipelineClients$ = this.http
            .get(API_URL+'admin/client/pipeline/clients', {headers: this.getHeaders()})
            .map(mapPipelineClient);
        return pipelineClients$;
    }

    getCompanyById(id:string){
        let company$ = this.http
            .get(`${this.baseUrl}/viewCompanyById/${id}`, {headers: this.getHeaders()})
            .map(mapCompany);
        return company$;
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

}

function mapPipelineClient(response:Response): any{
    return response.json().client;
}

function mapCompanies(response:Response): CompanyModel[]{
    return response.json().map(toCompany)
}

function mapCompany(response:Response): CompanyModel{
    return toCompany(response.json());
}

function toCompany(r:any): CompanyModel{
    let company = <CompanyModel>({
        id: r.id,
        description: r.description,
        name: r.name,
        externalRef: r.runwayRef,
        modes: r.modes,
    });
    return company;
}