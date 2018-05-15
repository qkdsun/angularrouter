import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-first-page',
	templateUrl: './first-page.component.html',
	styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

	constructor(private routerInfo: ActivatedRoute) { }  // 接受路由传参
	private routerdata:number;
	

	ngOnInit() {
		console.log(this.routerInfo);
		console.log(this.routerInfo.snapshot.queryParams.id)
		this.routerdata = this.routerInfo.snapshot.queryParams["id"]
		
	}

}
