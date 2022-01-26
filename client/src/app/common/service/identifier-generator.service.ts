import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentifierGeneratorService {

  constructor() { }

  /**
   * Generiert einen eindeutigen Id für Patienten/Doktoren/Pfleger.
   * Dabei handelt es sich um eine UUID.
   */
  public generateIdentifier(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    }).replace("-", "").substring(0, 12);
  }
}
