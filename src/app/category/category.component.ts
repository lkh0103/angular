import { Component, OnInit } from '@angular/core';
// gọi thư viện lấy params
import { ActivatedRoute, ParamMap } from '@angular/router';

// gọi service
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router:ActivatedRoute, private service: CategoryService) { }

  info_category;
  name_category;

  limit=12;
  page=1;

  list_product;

  // test phân trang
  //data=[1,2,3,4,5,6] // dữ liệu
  pageSize: Number = 12 // số lượng sản phẩm hiển thị trên 1 trang
  p: Number = 1; // trang hiện tại
  total;
  // end

  ngOnInit(): void {
    this.router.paramMap.subscribe((params:ParamMap)=>{
      this.service.inforCategory(params.get('id'))
      .subscribe((kq)=>{
        this.info_category = kq['data'][0];
        this.name_category = this.info_category.name;

        this.service.allProduct(this.name_category)
        .subscribe((kq)=>{
          this.list_product = kq['data'];
          this.total = this.list_product.length;
        })
      })
    });
  }

}
