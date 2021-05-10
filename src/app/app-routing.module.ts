import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import các component
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import { Page404Component } from './page404/page404.component';

// import các guard
import { ContactGuard } from './contact/contact.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'danh-muc/:id',
    component: CategoryComponent
  },
  {
    path: 'san-pham/:id',
    component: ProductComponent
  },
  {
    path: 'tin-tuc',
    component: PostComponent
  },
  {
    path: 'dang-nhap',
    component: LoginComponent
  },
  {
    path: 'dang-ky',
    component: RegisterComponent
  },
  {
    path: 'lien-he',
    component: ContactComponent,
    canActivate: [ContactGuard],
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
