import IMovie from "./IMovie";

export default interface IServerResponse {
  Search: IMovie[];
  totalResults: string;
  Response: string;
}
