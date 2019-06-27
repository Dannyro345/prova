import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoServiceService {

  URL_BASE = 'http://5d0ab6c4c5896f0014e86dcb.mockapi.io/contact/';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(this.URL_BASE)
  }

  add(contato) {
    return this.http.post(this.URL_BASE, contato)
  }

  remove(contato) {
    return this.http.delete(this.URL_BASE + contato.id)
  }
}
