

export class CommentSendModel{
    constructor(
       public  author: string,
       public  commentText: string,
      public  postId: number
    ){}
}