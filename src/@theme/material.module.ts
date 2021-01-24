import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatListModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatTabsModule,
        DragDropModule,
        MatTableModule,
        MatSelectModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatStepperModule,
        MatAutocompleteModule,
        MatSlideToggleModule,
        MatCardModule,
        MatDialogModule,
        MatGridListModule,
        MatSliderModule,
        NgxChartsModule,
        MatExpansionModule,
        MatProgressBarModule,
        MatTooltipModule,
        ColorPickerModule,
        MatToolbarModule,
        ScrollingModule,
        MatChipsModule,
        MatSnackBarModule,
    ],
    exports: [
        MatBottomSheetModule,
        MatListModule,
        MatButtonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatTabsModule,
        DragDropModule,
        MatTableModule,
        MatSelectModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatStepperModule,
        MatAutocompleteModule,
        MatSlideToggleModule,
        MatCardModule,
        MatDialogModule,
        MatGridListModule,
        MatSliderModule,
        NgxChartsModule,
        MatExpansionModule,
        MatProgressBarModule,
        MatTooltipModule,
        ColorPickerModule,
        MatToolbarModule,
        ScrollingModule,
        MatChipsModule,
        MatSnackBarModule,
    ],
    providers: [
        MatDatepickerModule,
        {
            provide: MatDialogRef,
            useValue: {},
        },
    ],
})
export class MaterialModule {}
