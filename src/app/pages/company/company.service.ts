import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CompanyService {
    private companyServiceUrl = 'http://pdfserver-staging.runway.com.au/sog-pdf-server/admin/company/view';

    constructor(private _http: Http) {
    }
    companies=[];
    getCompanies() {
        this._http.get(this.companyServiceUrl)
            .subscribe(data => {
                console.log(data, data.json())
                this.companies.push(...data.json())
            });
        return this.companies;
    }

}