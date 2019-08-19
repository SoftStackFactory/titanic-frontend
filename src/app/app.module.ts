import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserInputComponent } from "./user-input/user-input.component";
import { LoaderComponent } from "./loader/loader.component";
import { HttpClientModule } from "@angular/common/http";
import { ModalComponent } from 'src/modal/modal.component';

@NgModule({
  declarations: [AppComponent, UserInputComponent, LoaderComponent, ModalComponent],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
