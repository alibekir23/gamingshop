import { Type } from "@angular/core";
import { Review } from "./Review";
import { Genre } from "./Genre";

export class Game
{
  id: number;
  title: string;
  description: string;
  cover: string;
  image: Blob;
  price: number;
  genre_id: Genre;
  review_id: Review;
}
