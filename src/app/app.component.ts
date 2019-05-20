import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public data: any;
  constructor() {}

  ngOnInit() {
    this.data = [
      {
        index: "01",
        fsid: "fsd0056tyhksrd",
        file: "image1.pdf",
        button: "<button type='button' class='btn btn-primary'>Select</button>"
      },
      {
        index: "02",
        fsid: "fsd0056tyhksrd",
        file: "image1.pdf",
        button: "<button type='button' class='btn btn-primary'>Select</button>"
      },
      {
        index: "03",
        fsid: "fsd0056tyhksrd",
        file: "image1.pdf",
        button: "<button type='button' class='btn btn-primary'>Select</button>"
      },
      {
        index: "04",
        fsid: "fsd0056tyhksrd",
        file: "image1.pdf",
        button: "<button type='button' class='btn btn-primary'>Select</button>"
      },
      {
        index: "05",
        fsid: "fsd0056tyhksrd",
        file: "image1.pdf",
        button: "<button type='button' class='btn btn-primary'>Select</button>"
      },
      {
        index: "06",
        fsid: "fsd0056tyhksrd",
        file: "image1.pdf",
        button: "<button type='button' class='btn btn-primary'>Select</button>"
      },
      {
        index: "07",
        fsid: "fsd0056tyhksrd",
        file: "image1.pdf",
        button: "<button type='button' class='btn btn-primary'>Select</button>"
      },
      {
        index: "08",
        fsid: "fsd0056tyhksrd",
        file: "image1.pdf",
        button: "<button type='button' class='btn btn-primary'>Select</button>"
      },
      {
        index: "09",
        fsid: "fsd0056tyhksrd",
        file: "image1.pdf",
        button: "<button type='button' class='btn btn-primary'>Select</button>"
      }
    ];
  }
}
