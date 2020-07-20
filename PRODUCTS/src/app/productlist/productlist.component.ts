import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  title:String="Product List";
  products:ProductModel[];
  imageWidth:number=50;
  imageMargin:number=2;
  showImage:boolean=false;
  constructor(private productService:ProductService,private router:Router) { }
  toggleImage():void{
    this.showImage=!this.showImage;
  }
  onRemoveClick(){

  }
  ngOnInit(): void {
    this.grtProducts()
   
  }
  grtProducts(){
    this.productService.getProducts().subscribe((data)=>{
      this.products=data
    })
  }
  deleteproduct(id)
  {
    this.productService.deleteProduct(id).subscribe((data)=>{
      this.grtProducts()
    })
  }
  updateproduct(product)
  {
    let data = JSON.stringify(product)
    this.router.navigate(['/add', { productid: data }]);
  }

 

}
