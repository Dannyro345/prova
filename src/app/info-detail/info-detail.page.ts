import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.page.html',
  styleUrls: ['./info-detail.page.scss'],
})
export class InfoDetailPage implements OnInit {

  nome;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.nome = this.route.snapshot.paramMap.get('nome');
  }

}
