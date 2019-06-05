import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contato-detail',
  templateUrl: './contato-detail.page.html',
  styleUrls: ['./contato-detail.page.scss'],
})
export class ContatoDetailPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}