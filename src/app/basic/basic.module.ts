import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/basic/header/header.component';
import { FooterComponent } from 'src/app/basic/footer/footer.component';
import { HomeComponent } from 'src/app/basic/home/home.component';
import { NotFoundComponent } from 'src/app/basic/not-found/not-found.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
      ],
      exports:[ HeaderComponent,
        FooterComponent,
        HomeComponent,
        NotFoundComponent]
})
export class BasicModule { }
