import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
