import { Rest } from './rest';
export interface Folder {
  id:number;
  name:string;
  content:[Rest];
  folders:[string];
}
