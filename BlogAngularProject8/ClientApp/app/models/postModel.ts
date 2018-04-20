

import { Comment } from '../models/commentModel';

export class PostModel{
    public postId: number;
    public title: string;
    public description: string;
    public author: string;
    public dateTime: string;
    public comment: Comment[];

}