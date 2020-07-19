import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../productlist/product.model';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
title:String="add product";
  constructor(private productService: ProductService,private router: Router) {}
  productItem=new ProductModel(null,null,null,null,null,null,null,null,null);


  ngOnInit(): void {
  }
  addproduct()
  {
    this.productService.newProduct(this.productItem);
    console.log("called");
    alert("success");
    this.router.navigate(['/products']);
  }

}
