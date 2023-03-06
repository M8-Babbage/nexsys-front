import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatziStoreService {

  public URL: string = 'https://api.escuelajs.co/api/v1';

  constructor() { }

}
