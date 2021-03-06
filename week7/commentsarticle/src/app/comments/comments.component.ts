import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  username:string = "stock username"

  theComments:Array<any> = 
  [
    {
      author: 'little red riding hood',
    content: 'althought I have my hesitations about wolves in general, I will admit this genlewolf was an exemplar of outstanding citizenship today! =) =)'
   },
   {
     author: 'Virginia Woolfe',
     content: 'am not a wolf myself.  however, do identify as one.  Good job, gentlewolf.'
   }
  ]

  addComment(author, comment){
    console.log(author.value, comment.value);
    this.theComments.push({
       author: author.value,
       content: comment.value
       })
  }


  ngOnInit() {}
}
