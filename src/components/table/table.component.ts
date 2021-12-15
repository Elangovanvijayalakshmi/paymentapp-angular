import {Component,Input} from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html'
})
export class TableComponent {
    @Input() tableName ;
    @Input() headers ;
    @Input() dataRows ;
}
