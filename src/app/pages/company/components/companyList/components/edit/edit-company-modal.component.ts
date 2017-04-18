import {Component, OnInit, Input} from '@angular/core';
import {IMultiSelectOption, IMultiSelectSettings} from 'angular-2-dropdown-multiselect';
import {PdfCategoryModel} from "../../pdfCategory/pdf-category.model";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CompanyModel} from "../../../../company.model";

@Component({
    selector: 'edit-company',
    styleUrls: [('./edit-company-modal.component.scss')],
    templateUrl: './edit-company-modal.component.html'
})

export class EditCompanyModal implements OnInit {

    modalHeader:string;

    company:CompanyModel;
    pdfCategories:PdfCategoryModel[];
    pipelineClients:any[] = [];


    categoriesModel:number[] = [];
    allCategories:IMultiSelectOption[] = [];
    pipelineClientModel:string[] = [];
    allPipelineClients:IMultiSelectOption[] = [];

    constructor(private activeModal:NgbActiveModal) {
    }

    ngOnInit() {

        for (let pdfCategory of this.pdfCategories) {
            this.allCategories.push({
                id: pdfCategory.id, name: pdfCategory.name
            });
        }

        for (let assignCategory of this.company.modes) {
            this.categoriesModel.push(assignCategory.id);
        }

        for (let client of this.pipelineClients) {
            this.allPipelineClients.push({
                id: client.id, name: client.clientName
            });
        }

        this.pipelineClientModel.push(this.company.externalRef);


    }

    pipelineClientSettings: IMultiSelectSettings = {
        selectionLimit : 1,
        enableSearch : true,
        pullRight : true
    };

    closeModal() {
        this.activeModal.close();
    }
}
