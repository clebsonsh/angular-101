import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SubmitFormService } from '../../services/submit-form.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private service = inject(SubmitFormService);

  hiddenMessage = 'The hidden message is here to be shown!';

  showHiddenMessage = false;

  toggleShowHiddenMessage() {
    this.showHiddenMessage = !this.showHiddenMessage;
  }

  items = [
    "Stormwind",
    "Tahabata",
    "Tiamat",
  ]

  submit() {
    this.sendToParent.emit(this.hiddenMessage);
    this.service.post("frontend data");
  }

  @Input("title") outsideData!: string;

  @Output() sendToParent = new EventEmitter<string>();
}
