import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../productlist/product.model';
import { ProductService } from '../product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
title:String="add product";
productForm: any;
updateProduct:any;
BtnText:string = "Submit"
  constructor(private formBuilder: FormBuilder,private productService: ProductService,private router: Router,private route:ActivatedRoute) {
    this.productForm = this.formBuilder.group({
      productId: ['', Validators.required],
      productName: ['', [Validators.required]],
      productCode: ['', [Validators.required]],
      releaseDate: ['', Validators.required],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      starRating: ['', Validators.required],
      imageUrl: ['', []]
    });
  }
  productItem=new ProductModel(null,null,null,null,null,null,null,null,null);


  ngOnInit(): void {
let data = this.route.snapshot.paramMap.get('productid');
    if(data != null){
      this.updateProduct = JSON.parse(data);
      this.BtnText = "Update";
      this.productForm.setValue({
        productId:this.updateProduct.productId ,
      productName:this.updateProduct.productName ,
      productCode:this.updateProduct.productCode ,
      releaseDate: this.updateProduct.releaseDate,
      description:this.updateProduct.description ,
      price: this.updateProduct.price,
      starRating: this.updateProduct.starRating,
      imageUrl:this.updateProduct.imageUrl
        });
    }
  }
  get productId() {
    return this.productForm.get("productId");
  }
  get productName() {
    return this.productForm.get("productName");
  }
  get productCode() {
    return this.productForm.get("productCode");
  }
  get releaseDate() {
    return this.productForm.get("releaseDate");
  }
  get description() {
    return this.productForm.get("description");
  }
  get price() {
    return this.productForm.get("price");
  }
  get starRating() {
    return this.productForm.get("starRating");
  }
  get imageUrl() {
    return this.productForm.get("imageUrl");
  }
  addproduct()
  {
    if(this.BtnText != "Update"){
    if (this.productForm.dirty && this.productForm.valid) {
    this.productService.newProduct(this.productForm.value).subscribe((res)=>{
      this.router.navigate(['/products']);
    });
    
    }
  }else{
    if (this.productForm.dirty && this.productForm.valid) {
      this.productService.updateProduct(this.updateProduct._id,this.productForm.value).subscribe((res)=>{
        this.router.navigate(['/products']);
      });
      
      }
  }
  }

}
