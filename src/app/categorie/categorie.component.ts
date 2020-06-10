import {Component, OnInit} from '@angular/core';
import {CategorieService} from '../services/categorie.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Categorie} from '../model/categorie';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  listcategorie;
  registerForm: FormGroup;
  categorie = new Categorie();

  constructor(private router: Router, private categorieservice: CategorieService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nom: [''],
      description: [''],
    });
    this.getallcategorie();
  }


  getallcategorie() {
    this.categorieservice.getall().subscribe(result => {
      console.log(result);
      this.listcategorie = result;

    });
  }

  delete(id) {
    this.categorieservice.deletcategorie(id).subscribe(res1 => {
      console.log(res1);
      this.getallcategorie();
    });
  }

  recuper(id, nom, description) {
    console.log(id, nom, description);
    this.categorie.id = id;
    this.categorie.nom = nom;
    this.categorie.description = description;
  }

  modif() {
    this.categorieservice.modif(this.registerForm.value, this.categorie.id).subscribe(res => {
      console.log(res);
      this.getallcategorie();
    });
  }
}
