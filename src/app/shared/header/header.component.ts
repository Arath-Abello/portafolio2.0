import { Component } from '@angular/core';
import {  NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  imageLogo = '../../../assets/terminal.png';
  altLogo = 'Logo de la imagen';
  toggle = false;

  playAudio(audio: HTMLAudioElement){
    if(this.toggle){
      audio.pause();
    }else{
      audio.play();
    }
    this.toggle = !this.toggle;
  }

  
}
