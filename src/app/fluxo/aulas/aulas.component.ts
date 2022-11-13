import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.scss']
})
export class AulasComponent implements OnInit {

  @ViewChild('videoPlayer') videoplayer!: ElementRef;
  videoSource = '//www.youtube.com/watch?v=_RsYz_iKP4k';

  constructor() { }

  ngOnInit(): void {
  }

  toggleVideo() {
    this.videoplayer.nativeElement.play();
}

}
