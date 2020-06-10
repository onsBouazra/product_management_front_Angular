import {Component, OnInit} from '@angular/core';
import {CategorieService} from '../services/categorie.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajoucategorie',
  templateUrl: './ajoucategorie.component.html',
  styleUrls: ['./ajoucategorie.component.css']
})
export class AjoucategorieComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private router: Router, private categorieservice: CategorieService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nom: [''],
      description: [''],
    });
  }

  addcategorie() {
    this.categorieservice.ajoucategorie(this.registerForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['categorie']);

    });
  }

  onSubmit() {
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

}
