import { Component, OnInit } from '@angular/core';
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faList } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-startnavbar',
  templateUrl: './startnavbar.component.html',
  styleUrls: ['./startnavbar.component.css']
})
export class StartnavbarComponent implements OnInit {



  constructor() {

   }

  ngOnInit(): void {
    // We are only using the user-astronaut icon
    library.add(faList)
    dom.watch()


  }

  toggleNavbar():void{

    var navbar = document.getElementById("navbar");
    var btn = document.getElementById("btn-toggle");

    navbar?.classList.toggle("active")
  }










}
