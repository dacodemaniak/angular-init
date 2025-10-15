import { FormControl, FormGroup, Validators } from "@angular/forms";

export class NoteFormBuilder {
    private _form: FormGroup = new FormGroup({})

    constructor() {
        this._buildForm()
    }



    public get form(): FormGroup {
        return this._form
    }


    private _buildForm() {
        let control: FormControl = new FormControl()
        control.setValidators([
            Validators.required,
            Validators.minLength(5)
        ])
        this._form.addControl('titre', control)

        control = new FormControl()
        this._form.addControl('content', control)

        control = new FormControl()
        control.addValidators([
            Validators.required
        ])
        this._form.addControl('themes', control)
    }
}
