import { Component,OnInit } from '@angular/core';
import { MoviessearchService } from '../moviessearch.service';

@Component({
  selector: 'app-moviessearch',
  templateUrl: './moviessearch.component.html',
  styleUrls: ['./moviessearch.component.css']
})
export class MoviessearchComponent implements OnInit {
  movies:any = []
  movie:String = "avengers"
ngOnInit(): void {
  this.getData()
}
 onSearch(){
   this.getData()
 }
constructor(private ms:MoviessearchService) {}

getData(){
  this.ms.getMovie(this.movie).subscribe((data:any)=>{
    console.log(data);
    this.movies = data.Search
    
  })
}
}
