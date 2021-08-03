import {Component, OnInit, ViewChild, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import {EventService} from '../../app-service/event.service';
import {AuthService} from '../../app-service/auth.service';
import {FrinineEvent} from '../../interfaces/event';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {BehaviorSubject, Subscription} from 'rxjs';
import {MatTabChangeEvent} from '@angular/material/tabs';


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
	displayedColumns: string[] = ['id', 'name', 'email', 'tel'];
	dataSource: MatTableDataSource<FrinineEvent>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	events: FrinineEvent[];
	eventsSubscription: Subscription;
	loading: boolean;

	constructor(private eventService: EventService, private authService: AuthService) {
	}
	ngOnInit(): void {
		this.loading = true;
		this.updateDatatable();
		this.eventsSubscription = this.eventService.eventsSubject.subscribe(
			(events) => {
				this.loading = false;
				this.events = events;
				this.updateDatatable();
			}
		);
		this.eventService.getEventByOrganiser('humQK8Mv2FZxkaXTctwKLbI2eHP2');
	}

	updateDatatable() {
		this.dataSource = new MatTableDataSource(this.events);
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}


	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	tabChanged(tabChangeEvent: MatTabChangeEvent){
		console.log(tabChangeEvent);
		console.log(tabChangeEvent.index);
	}

}



