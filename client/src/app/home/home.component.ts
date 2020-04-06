import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})




export class HomeComponent implements OnInit {







  constructor(private httpClient: HttpClient) { }


  ngOnInit() {
  }


  list: Array<Product>;
  commentProduct: String = "Default String mssg"

  public loadComments(productId: Number) {
    console.log("loading comments" + productId)
  }


  public listallproducts() {
    this.httpClient.get<any>('http://localhost:8055/products/getproducts').subscribe(
      data => {

        this.list = data;

        //console.log(this.list);
        // for (const iterator of this.list) {
        //   console.log(iterator.id + "ahahahah")
        //   this.httpClient.get<any>('http://localhost:8055/comments/find/' + iterator.id).subscribe(
        //     res => { console.log("HELLO"); console.log(res) }
        //   )

        // }
      }




    );




  }

}

