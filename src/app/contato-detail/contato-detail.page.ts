import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contato-detail',
  templateUrl: './contato-detail.page.html',
  styleUrls: ['./contato-detail.page.scss'],
})
export class ContatoDetailPage implements OnInit {
  id;
  contact;
  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    this.id = this.route.snapshot.paramMap.get('id');
  
    this.http.get('http://5d0ab6c4c5896f0014e86dcb.mockapi.io/contact/' + this.id).subscribe(
      (data) => {
        this.contact = data;
      }
    )
  }

  

  ngOnInit() {}
    

}