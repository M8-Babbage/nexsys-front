import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/models/platzi.interface';
import { PlatziStoreService } from 'src/app/services/platzi-store.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product!: Product;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private platzi: PlatziStoreService) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(switchMap(({ id }) => this.platzi.getProductById(id)))
      .subscribe((response) => (this.product = response));
  }

}
