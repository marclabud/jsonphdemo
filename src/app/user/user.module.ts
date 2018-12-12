import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {UserlistComponent} from './userlist/userlist.component';
import {UserselectionComponent} from './userselection/userselection.component';

@NgModule({
    declarations: [
        UserlistComponent,
        UserselectionComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        UserlistComponent,
        UserselectionComponent
    ]
})
export class UserModule {
}
