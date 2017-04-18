import {Component, OnInit} from '@angular/core';
import {LibraryService} from "../../library.service";
import {GlobalLibraryModel} from "./library-global.model";

@Component({
    selector: 'library-global',
    templateUrl: './globalLibrary.html'
})
export class GlobalTemplateLibrary implements OnInit{

    globalTags:Array<GlobalLibraryModel>;
    order: string = 'name';

    ngOnInit():void {
        this._libraryService
            .getAll()
            .subscribe(p => this.globalTags = p);

    }

    constructor(private _libraryService : LibraryService) {
    }
}
