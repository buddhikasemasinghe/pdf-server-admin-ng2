import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CompanyModel } from './company.model';

@Injectable()
export class CompanyService {
    private baseUrl = API_URL+"admin/company/";
    constructor(private http: Http) {
    }
    companies=[];
    getCompanies() {
        this.http.get(this.baseUrl+'view')
            .subscribe(data => {
                console.log(data, data.json())
                this.companies.push(...data.json())
            });
        return this.companies;
    }


    getCompanyById(id:string){
        let person$ = this.http
            .get(`${this.baseUrl}/viewCompanyById/${id}`, {headers: this.getHeaders()})
            .map(mapCompany);
        return person$;
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

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
        mode: r.mode,
    });
    console.log('Parsed company:', company);
    return company;
}