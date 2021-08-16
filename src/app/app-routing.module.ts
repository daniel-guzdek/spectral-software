import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ServicesCompComponent } from './services-comp/services-comp.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesCompComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  HeroComponent,
  AboutComponent,
  ServicesCompComponent,
  CareerComponent,
  ContactComponent,
];
