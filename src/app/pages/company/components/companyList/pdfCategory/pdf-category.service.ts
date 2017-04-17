import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {PdfCategoryModel} from "./pdf-category.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PdfCategoryService {
    private baseUrl = API_URL+"admin/product/mode/";

    constructor(private http: Http) {
    }
    getAll(): Observable<PdfCategoryModel[]>{
        let modes$ = this.http
            .get(`${this.baseUrl}/view`, {headers: this.getHeaders()})
            .map(mapPdfCategories);
        return modes$;
    }
    

    getPdfCategories(){
        let pdfCategories$ = this.http
            .get(`${this.baseUrl}/viewById/`, {headers: this.getHeaders()})
            .map(mapPdfCategory);
        return pdfCategories$;
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

}

function mapPdfCategories(response:Response): PdfCategoryModel[]{
    return response.json().map(toPdfCategory)
}


function mapPdfCategory(response:Response): PdfCategoryModel{
    return toPdfCategory(response.json());
}

function toPdfCategory(r:any): PdfCategoryModel{
    let pdfCategory = <PdfCategoryModel>({
        id: r.id,
        description: r.description,
        name: r.name,
        pdfGroup: r.pdfGroup,
        productType: r.productType,
    });
    return pdfCategory;
}