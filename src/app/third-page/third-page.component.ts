import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-third-page',
	templateUrl: './third-page.component.html',
	styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

	constructor(private routerInfo: ActivatedRoute) { }

	private isdata : boolean;

	ngOnInit() {
		this.isdata = this.routerInfo.snapshot.data[0].isdata
	}

}
