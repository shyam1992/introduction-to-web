import { JavascriptComponent } from './javascript/javascript.component';
import { StylingsComponent } from './stylings/stylings.component';
import { CommonTagsComponent } from './common-tags/common-tags.component';
import { BuildingBlocksComponent } from './building-blocks/building-blocks.component';
import { ToolsPageComponent } from './tools-page/tools-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'tools',
    component: ToolsPageComponent
  },
  {
    path: 'buildnig-blocks',
    component: BuildingBlocksComponent
  },
  {
    path: 'html',
    component: CommonTagsComponent
  },
  {
    path: 'css',
    component: StylingsComponent
  },
  {
    path: 'js',
    component: JavascriptComponent
  },
  {
    path: '**',
    redirectTo: 'tools'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
