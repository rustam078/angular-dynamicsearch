import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const Material=[
  MatButtonModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSnackBarModule
];
@NgModule({
  imports: [Material],
  exports:[Material]
})
export class MaterialModule { }
