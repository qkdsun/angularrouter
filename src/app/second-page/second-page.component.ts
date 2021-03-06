import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-second-page',
	templateUrl: './second-page.component.html',
	styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

	constructor(private routerInfo: ActivatedRoute) { }

    private routerData:number;
	private isfocus:boolean = true;
	
	changeFocus(){
		return this.isfocus
	}

	ngOnInit() {
		console.log(this.routerInfo.snapshot.params.id)
		this.routerData = this.routerInfo.snapshot.params["id"]
	}
    
}
