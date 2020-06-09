import { Component, OnInit } from '@angular/core';
import { ClasesService } from 'src/app/shared/services/clases.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.container.html',
  styleUrls: ['./clases.container.css']
})
export class ClasesContainer implements OnInit {

  clases = [];

  constructor(private claseService: ClasesService) { }

  ngOnInit(): void {
    this.claseService.getClases().subscribe( elem => {
      this.clases = elem.body;
      console.log(this.clases);
    });
  }

}
