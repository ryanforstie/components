import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mods-home",
  templateUrl: "./mods-home.component.html",
  styleUrls: ["./mods-home.component.css"]
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: "Why is the sky blue?", content: "Because" },
    { title: "What does orange taste like?", content: "Orange" },
    { title: "Why are you awesome?", content: "Because" }
  ];

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
