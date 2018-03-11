import { Injectable } from '@angular/core';
import Hero from '../models/hero';
import { Heros } from '../models/mock-heros';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class HeroService {
  private itemDoc: AngularFirestoreCollection<Hero>;

  getHero(id: number): Observable<Hero> {
    return this.itemDoc.valueChanges().map(heros => heros.find(hero => hero.id == id));

  }
  constructor(private messageService: MessageService, private afs: AngularFirestore) {
    this.itemDoc = this.afs.collection<Hero>("heros");

  }
  getHeros(): Observable<Hero[]> {
    return this.itemDoc.valueChanges();

  }

}
