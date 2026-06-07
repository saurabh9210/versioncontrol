import { LightningElement,api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import {updateRecord} from 'lightning/uiRecordApi';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class RecordForm extends LightningElement {
     // Expose a field to make it available in the template
    fields = [NAME_FIELD];
    nameField = NAME_FIELD;

    // Flexipage provides recordId and objectApiName
    @api recordId;
    @api objectApiName;

    handleSubmit(event) {
        console.log('Submit Triggered:', JSON.stringify(event.detail.fields));
        // Do NOT use preventDefault() → Salesforce will auto-save
    }

    handleSuccess(event) {
        console.log('Record Saved Successfully. ID:', event.detail.id);

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Record saved successfully!',
                variant: 'success'
            })
        );
    }

    handleError(event){
        let errorMessage = event.detail.detail;
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: errorMessage,
                variant: 'success'
            })
        );
    }
}