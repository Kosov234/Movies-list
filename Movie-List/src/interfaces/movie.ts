export default interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  [propName: string]: any;
  // Released?: string;
  // Genre?: string;
  // Director?: string;
  // Actors?: string;
  // Plot?: string;
  // Language?: string;
  // Awards?: string;
}
