import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ToolsPageComponent } from './tools-page/tools-page.component';
import { BuildingBlocksComponent } from './building-blocks/building-blocks.component';
import { CommonTagsComponent } from './common-tags/common-tags.component';
import { StylingsComponent } from './stylings/stylings.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { ConclusionComponent } from './conclusion/conclusion.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ToolsPageComponent,
    BuildingBlocksComponent,
    CommonTagsComponent,
    StylingsComponent,
    JavascriptComponent,
    FrameworksComponent,
    ConclusionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
