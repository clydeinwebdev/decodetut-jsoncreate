"use strict";

class App{
	constructor(){
		this.sampleJSON = [
			{ "id" : 0,	"name": "clyde"	},
			{ "id" : 1,	"name": "rj"	}
		];
	}

	render(html, component){
		component.innerHTML += html;
	}

	reRender(html, component){
		component.innerHTML = html;
	}

	//CRUD codes here

	create(){
		let s = this.sampleJSON;
		let newObject = {
			"id" : s.length,
			"name" : $('#newName').val()
		};
		s.push(newObject);

		this.landingPage();
	}
}

class Component extends App{
	constructor(){
		super();
	}

	landingPage(){
		let html = `

			<div id="nameCreate"></div>
			<div id="nameList"></div>

		`;
		this.reRender(html,document.getElementById("app"));
		this.nameList();
		this.nameCreate();
	}

	nameList(){
		let html = `
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>NAME</th>
					</tr>
				</thead>
				<tbody>
		`;
		let s = this.sampleJSON;
		for(let i=0;i<s.length;i++){
			html += `
				<tr>
					<td>${s[i].id}</td>
					<td>${s[i].name}</td>
				</tr>
			`;
		}

		html += `
				</tbody>
			</table>
		`;
		this.reRender(html,document.getElementById("nameList"));
	}

	nameCreate(){
		let html = `
			<h4>Create New Name</h4>
			<input id="newName" type="text" placeholder="New Name"/>
			<button onclick="component.create()" class="btn">Create</button>
			<br/>
			<br/>
			<br/>
		`;
		this.reRender(html,document.getElementById("nameCreate"));
	}
}

let component = new Component();
component.landingPage();