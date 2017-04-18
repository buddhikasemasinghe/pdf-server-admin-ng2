import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { GlobalLibraryModel} from './components/global/library-global.model';

@Injectable()
export class LibraryService {
    private baseUrl = API_URL+"admin/tag/";
    constructor(private http: Http) {
    }
    getAll() {
        let globalTags$ = this.http
            .get(`${this.baseUrl}/view`, {headers: this.getHeaders()})
            .map(mapGlobalLibraries);
        return globalTags$;
    }


    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

}


function mapGlobalLibraries(response:Response): GlobalLibraryModel[]{
    return response.json().map(toGlobalLibrary)
}

function mapLibrary(response:Response): GlobalLibraryModel{
    return toGlobalLibrary(response.json());
}

function toGlobalLibrary(r:any): GlobalLibraryModel{
    let libraryModel = <GlobalLibraryModel>({
        id: r.id,
        description: r.description,
        name: r.name,
        externalRef: r.runwayRef,
        modes: r.modes,
    });
    return libraryModel;
}