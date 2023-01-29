import {Component, ViewChild} from '@angular/core';
import {GalleryComponent} from "./gallery/gallery.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'view-child-app';
// ! = null checker
// ? = optional
  @ViewChild(GalleryComponent) gallery!: GalleryComponent;

  addNewPicture() {
    this.gallery?.pictures.unshift(this.gallery.generateImage())
  }
  removeFirstPicture() {
    this.gallery?.pictures.shift()
  }
}
