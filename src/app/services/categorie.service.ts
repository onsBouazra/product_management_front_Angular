import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) {
  }

  getall() {
    return this.http.get('http://localhost:8080/categorie/all');
  }

  ajoucategorie(data) {
    return this.http.post('http://localhost:8080/categorie/save', data);
  }

  deletcategorie(id) {
    return this.http.delete('http://localhost:8080/categorie/delete/' + id);
  }

  modif(data, id) {
    return this.http.put('http://localhost:8080/categorie/modif/' + id, data);
  }
}
