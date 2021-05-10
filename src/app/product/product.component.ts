import { Component, OnInit } from '@angular/core';
// gọi thư viện lấy params
import { ActivatedRoute, ParamMap } from '@angular/router';
// gọi api
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router:ActivatedRoute, private http: HttpClient) { }

  url_product='http://localhost:3000/api/products/inforProduct/';

  info_product;
  info_category;
  name_product;
  name_category;
  id_product;
  id_category;
  price_product;

  url_product_relative='http://localhost:3000/api/categories/relative/';
  info_product_relative;

  url_info_category='http://localhost:3000/api/categories/inforCateogryName/';

  url_update_view='http://localhost:3000/api/products/update_view/';

  ngOnInit(): void {
    this.router.paramMap.subscribe((params:ParamMap)=>{
      this.http.get(this.url_product + params.get('id'))
      .subscribe((kq)=>{
        this.info_product = kq['data'][0];
        this.name_product = this.info_product.name;
        this.price_product = this.info_product.price;

        // cập nhật view
        // this.http.get(this.url_update_view + this.info_product._id)
        // .subscribe((kq)=>{
        //   console.log(kq['data']);
        // })

        // thông tin catrgory
        this.http.get(this.url_info_category + this.info_product.parents[0])
        .subscribe((kq)=>{
          this.info_category = kq['data'][0];
          this.id_category = this.info_category._id;
          this.name_category = this.info_category.name;
        })

        // sản phẩm liên quan
        this.http.get(this.url_product_relative + 
          this.info_product.parents[0] + '/' + 
          this.info_product._id)
          .subscribe((kq)=>{
          this.info_product_relative = kq['data'];
        })
        
      })
    });
  }

}
