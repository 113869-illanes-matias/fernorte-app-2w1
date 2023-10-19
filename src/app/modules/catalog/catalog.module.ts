import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RegisterArticleComponent } from './components/register-article/register-article.component';


@NgModule({
  declarations: [HomeComponent, RegisterArticleComponent, ],
  providers: [],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class CatalogModule {}
