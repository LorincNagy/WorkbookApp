https://github.com/LorincNagy/WorkbookApp/blob/main/Frontend/src/assets/module_angular.md

tuple, enum
# Angular Questions and Answers

## 1. What is angular?

Angular egy TypeScript alapú nyílt forráskódú webes keretrendszer, javascript keretrendszer amelyet a Google
fejlesztett ki. Felhasználható a kliensoldali webfejlesztéshez.

Az Angular keretrendszerben a komponens struktúrája általában két fő részből áll: egy TypeScript fájlból, amely meghatározza a komponens logikáját, állapotát és adatkezelési módjait (ezt hívjuk a komponens osztálynak vagy kontrollerének), valamint egy HTML sablonfájlból (template), amely meghatározza a komponens felhasználói felületének struktúráját és kinézetét.

Az Angular komponensek, hasonlóan más objektumorientált programozási nyelvek osztálypéldányaihoz (mint például a Javában), objektumokká válnak, amikor példányosításra kerülnek. Minden Angular komponens egy osztály, amely dekorátorral van ellátva (@Component), ami metaadatokat biztosít az osztály számára, így az Angular tudja, hogyan kezelje a komponenst az alkalmazásban.

Amikor egy komponens példányosításra kerül, létrejön egy új objektum, ami tartalmazza az osztályban definiált összes tulajdonságot és metódust. Ez a példány lesz az, amivel az Angular futtatási ideje dolgozik – kezeli az adatáramlást a komponens és a sablonja között, valamint az eseménykezelést és az életciklus hook-okat.

Mind az Angular komponensek, mind a Java osztályok objektumorientált programozási paradigmát követnek, ahol az osztályok és komponensek definíciói sablonként szolgálnak objektumok vagy "példányok" létrehozásához. Mindkettő lehetővé teszi az adatok és a viselkedés egy helyen történő kapszulázását, így segítve a kód modularitását és újrafelhasználhatóságát.

1. Komponens Deklarálása
   Minden Angular komponens a @Component dekorátorral van jelölve, amely metaadatokat tartalmaz a komponensről, mint például a sablon, a szelektor, és a stílusok. Ez a dekorátor jelzi az Angular számára, hogy egy osztály komponensként funkcionál.

2. Komponens Regisztrálása
   Amikor egy komponenst egy Angular modulhoz (pl. AppModule) rendelsz a declarations tömbben, az Angular DI rendszere "tudomást szerez" róla. Ez lehetővé teszi a keretrendszer számára, hogy tudja, mely komponensek érhetőek el és hol helyezkednek el az alkalmazás struktúrájában.

3. Komponens Példányosítása
   Amikor az alkalmazás fut, és egy komponens szelektora vagy útvonala aktiválódik (például a felhasználó egy linkre kattint, ami egy komponenshez vezet), az Angular renderelő motorja létrehozza a komponens példányt. Ez magában foglalja a komponens osztályának konstruktorának meghívását, valamint a függőségek injektálását, ha vannak ilyenek (azaz más szolgáltatások vagy komponensek, amelyekre a komponens támaszkodik).

## 2. What is TypeScript and how does it relate to Angular?

TypeScript egy szigorúan tipusos JavaScript lényegében, JavaScript kiterjesztés(JavaScript superset), amely kibővíti a JavaScript nyelvet további szintaxisokkal és funkciókkal, lehetővé teszi a fejlesztőknek a hibák korai felismerését és az erősebb típusbiztonságot. Angular kifejezetten TypeScript alapú.

## 3. What is a component in Angular?

Egy komponens egy önálló és újrahasználható része egy Angular alkalmazásnak, amely tartalmazza a sablonokat(html),  
stílusokat(css) és a logikát(ts) is. Egyfajta sablon amiből példányokat lehet létrehozni mint objektumokat.

## 4. How to create a new component in Angular?

Új komponens létrehozásához használhatjuk az Angular CLI parancssorát a `ng generate component` paranccsal, vagy
manuálisan létrehozhatjuk a szükséges fájlokat.

## What is CLI?

A CLI (Command Line Interface) (parancssoros felület) rövidítése. Az Angular esetében az Angular
CLI egy parancssoros eszköz, amely lehetővé teszi az Angular alkalmazások gyors létrehozását, fejlesztését és
kezelését. Segítségével könnyen létrehozhatunk új komponenseket, szolgáltatásokat, modulokat stb., valamint
futtathatjuk `ng serve`, tesztelhetjük és kiépíthetjük az alkalmazásunkat.

## 5. What is an Angular module?

Egy Angular modul egy olyan strukturális egység, amelyben összefogjuk az alkalmazásunk részeit, mint például a komponenseket, direktívákat, szolgáltatásokat és egyéb funkciókat. Ezek a modulok segítenek a kódbázis szervezésében és a kód újrafelhasználásában.

Az Angular modulokat @NgModule dekorátorral hozzuk létre, amely beállítja a modul nevét, illetve meghatározza, hogy milyen összetevőket, direktívákat(BrowserModule tartalmazza CommonModule által biztosított direktívákat és szolgáltatásokat is), szolgáltatásokat és más modulokat importálunk, exportálunk vagy deklarálunk benne.

Az Angular modulok hasznosak abban, hogy az alkalmazást logikailag elkülönítsük kisebb részekre, ami megkönnyíti a fejlesztést és karbantartást. Ezenkívül lehetővé teszik az alkalmazás funkcionalitásának moduláris felépítését, amely elősegíti a csapatmunkát és az új funkciók hozzáadását az alkalmazáshoz.

Minden angular projektnek minimum egy module-ja kell hogy legyen(NGModule) app.module. De app.routing.module is majdnem minden projektben előfordul. Azért van szükség a module-ra mert Angular nem scan-neli automatikusan a file-okat igy nem tudja detectálni a component-eket , meg kell határozni konkrétan a modulban ezeket. AppModule kötelező , minimum egy modul nélkül nem müködik az app, de szét lehet splittelni multiply azaz több modulra is.(feature modules)
Ez nagyon hasznos és elengedhetetlen nagyobb kódok eseténben , igy jobban átlátható a kódbázis, és könyebben struktúrálható is.

@NgModule:

(dipbe)

declarations: [];
Ide jön minden komponens amit létrehoztam

imports: [];
Ide azok a modulok jönnek amiket angular előre biztosit (Core Angular fetures) gyűjtemények, különböző funkciókat, direktívákat, szolgáltatásokat és komponenseket biztosítanak, amelyeket felhasználhatsz az Angular alkalmazásodban, melyek angulár modulokban vannak tárolva, összegyűjtve pl FormsModule.

providers:[];
Ide jönnek a service komponensek amiket létrehoztam.
Vagy megadhatók és deklarálhatók közvetlenül a komponensben is mint @Injectable ({providedIn:'root'})

bootstrap:[];
Fontos az applikációnk elindulásához.
Azt határozza meg hogy melyik komponens elérhető az "index.html" fájl a weboldal gyökér vagy "root" dokumentumában.
Általában egy ilyen komponens van és az az AppComponent. bootstrap: [AppComponent],

entryComponents:[];
Hogyha dinamikus komponenseket akarok létrehozni és használni ezeket itt kell megadni, ezt a késöbbi Angular verziókban nem szükséges megadni.

## 6. What is a service in Angular?

A szolgáltatások olyan osztályok, amelyek különböző részegységeket, például adatszolgáltatásokat, HTTP hívásokat stb.
kezelnek. Kiszervezhetünk nekik olyan feladatokat amiket nem szeretnénk a komponensben elvégezni.
@Injectable({providedIn:'root'}) dekorátorral deklarálom az appba vagy AppModule providers tömbjében.

## 7. What are directives in Angular?

Az Angular direktívák olyan utasítások, amelyek módosíthatják a DOM (Document Object Model) viselkedését vagy megjelenését az Angular alkalmazásokban. A direktívák lehetővé teszik az alkalmazás fejlesztői számára, hogy dinamikusan módosítsák a DOM struktúráját és megjelenését, így számos különböző funkciót valósíthatnak meg.

Az Angular direktívákat két fő típusba lehet sorolni:

### Beépített direktívák:

Az Angular alapértelmezett direktívái, amelyeket a keretrendszer biztosít. Ezek a direktívák olyan gyakran használt funkciókat valósítanak meg, mint például az adatkötés, az elemek megjelenítésének, elrejtésének vagy dinamikus módosításának irányítása.

Structural directives (Szerkezeti direktívák): Olyan direktívák, amelyek dinamikusan adnak vagy elvesznek elemeket a DOM-ból az alkalmazásokban.. Például: *ngIf, *ngFor, \*ngSwitch.

Attribute directives (Attribútum direktívák): Olyan direktívák, amelyek képesek befolyásolni az elemek kinézetét, állapotát vagy viselkedését, Az Angular attribútum direktívák a DOM-ban lévő elemek tulajdonságait manipulálják. Például: ngClass, ngStyle, ngModel.

### Egyedi direktívák (Custom directives):

Az Angular lehetővé teszi az egyedi direktívák létrehozását az alkalmazás saját igényeinek megfelelően. Ezeket a direktívákat az alkalmazás fejlesztői írják, és saját funkcionalitást adnak hozzá az alkalmazásban.

## 8. What are Angular LifeCycle hooks?

Az Angular LifeCycle hooks olyan metódusok, amelyek lehetővé teszik számunkra, hogy reagáljunk az Angular alkalmazás
különböző életciklus eseményeire, például az inicializációra, frissítésre vagy megsemmisítésre.

Az ngOnInit hook azt jelenti, hogy a metódus akkor hívódik meg, amikor a komponens vagy direktíva példányosításra került, és Angular befejezte az összetevő inicializálását, de még nem tette hozzáférhetővé a DOM-ot a komponens számára, alapvetően arra szolgál, hogy a komponens inicializálása után, de még azelőtt, hogy bármi megjelenne a felhasználói felületen, kódot hajthass végre. Ezért az ngOnInit használható inicializációs logika végrehajtására, például adatok betöltésére vagy előkészítő műveletek végrehajtására anélkül, hogy közvetlenül a DOM-hoz férnénk hozzá, ezzel korán felismerve az esetleges hibákat.

Adatlekérdezések külső forrásokból (például API-kból),
A komponens kezdeti állapotának beállítását,
Feliratkozások létrehozását eseményekre vagy adatfolyamokra,
Valamint minden egyéb inicializálást, ami a komponens megfelelő működéséhez szükséges.

ngOnDestroy, ngAfterViewInit, ngOnChanges

## 9. What is Angular Router and how does it work?

Az Angular Router egy erőteljes navigációs és útválasztási könyvtár az Angular keretrendszerben, amely lehetővé teszi az alkalmazásokban a komponensek közötti dinamikus navigációt anélkül, hogy az oldalakat újra kellene tölteni. Az Angular Router segítségével definiálhatók az alkalmazás útvonalai (routes), amelyek megadják, hogy az alkalmazás különböző címein (URL-eken) milyen tartalom jelenjen meg.

Hogyan Működik?
Útvonalak Definiálása:
Az útvonalakat a Routes típusú tömbben definiáljuk, ahol megadjuk az útvonalakat, a hozzájuk tartozó komponenseket, és szükség esetén a gyermekútvonalakat. Ez a konfiguráció általában egy dedikált routing modulban (AppRoutingModule) található.

Navigáció és URL Kezelés:
Az Angular Router lehetővé teszi a programozott (imperatív) és a deklaratív navigációt is. A programozott navigációt a Router szolgáltatás navigate és navigateByUrl metódusai segítségével végezhetjük el, míg a deklaratív navigációhoz a routerLink direktívát használhatjuk a sablonokban, hogy linket hozzunk létre az útvonalak között.

Az Angular keretrendszerben két fő módszer létezik a navigáció kezelésére: programozott navigáció és deklaratív navigáció. Mindkettő lehetővé teszi az alkalmazás különböző részei közötti navigálást, de eltérő módon.

Programozott Navigáció
A programozott navigáció, más néven imperatív navigáció, azt jelenti, hogy a navigációt közvetlenül a TypeScript kódból vezéreljük. Ezt általában a Router szolgáltatás navigate vagy navigateByUrl metódusainak hívásával érjük el, amelyek lehetővé teszik az útvonalakhoz való programozott hozzáférést. A programozott navigációt gyakran akkor használjuk, amikor a navigációs logikát valamilyen esemény (például egy gombnyomás vagy egy adatbetöltés befejezése) alapján kell végrehajtani.

Példa programozott navigációra:

constructor(private router: Router) {}

navigateToPage() {
this.router.navigate(['/some-path']);
}
Ebben a példában a navigateToPage függvény hívására az alkalmazás az /some-path útvonalra navigál.

Deklaratív Navigáció
A deklaratív navigáció a sablonokban (HTML) használt routerLink direktíva segítségével valósul meg. Ez a módszer lehetővé teszi, hogy a sablonokban közvetlenül hivatkozzunk az útvonalakra, így a felhasználói felület elemei (például linkek vagy gombok) közvetlenül az adott útvonalakra navigálnak, amikor a felhasználó rájuk kattint. A deklaratív navigáció egyszerű és kifejező, és gyakran használják statikus navigációs struktúrák létrehozására.

Példa deklaratív navigációra a sablonban:

<a [routerLink]="['/some-path']">Go to Some Path</a>
Ebben a példában egy hivatkozás (<a> elem) közvetlenül az /some-path útvonalra navigál, amikor a felhasználó rákattint.

Útvonalak Megjelenítése:
Az útvonalakhoz rendelt komponensek a <router-outlet> direktíva segítségével jelennek meg. A <router-outlet> egy helyfoglaló, amely megmondja az Angular Routernek, hogy hol jelenítse meg a kiválasztott útvonal komponensét az alkalmazásban.

1. Szelektorok Használata Komponensek Beágyazásához
   Tegyük fel, hogy van egy HeaderComponent-ed, amely az alkalmazás fejlécét tartalmazza, és egy AppComponent-ed, amely az alkalmazás gyökérkomponense.

HeaderComponent (header.component.ts):

import { Component } from '@angular/core';

@Component({
selector: 'app-header',
template: `<header><h1>Üdvözöljük az alkalmazásunkban!</h1></header>`,
})
export class HeaderComponent {}
Ezt a HeaderComponent-et közvetlenül beágyazhatod az AppComponent sablonjába a szelektor használatával:

AppComponent (app.component.ts):

import { Component } from '@angular/core';

@Component({
selector: 'app-root',
template: `  <app-header></app-header>
    <main>
      <p>Ez az alkalmazás fő tartalma.</p>
    </main>`,
})
export class AppComponent {}
Ebben a példában az AppComponent sablonja közvetlenül használja a HeaderComponent szelektorát (<app-header></app-header>), hogy beágyazza a fejlécet.

2. <router-outlet> Használata Dinamikus Útvonalválasztáshoz
   Az Angular Router lehetővé teszi, hogy különböző komponenseket jeleníts meg az alkalmazásban az URL változásainak megfelelően. Ehhez először definiálnod kell az útvonalakat egy útvonalmodulban, például az AppRoutingModule-ben.

AppRoutingModule (app-routing.module.ts):

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
Ezután az AppComponent sablonjában használhatod a <router-outlet></router-outlet> direktívát, hogy megjelöld, hol jelenjenek meg az útvonalakhoz rendelt komponensek.

AppComponent (app.component.ts):

import { Component } from '@angular/core';

@Component({
selector: 'app-root',
template: `  <app-header></app-header>
    <router-outlet></router-outlet> <!-- Itt jelennek meg az útvonalakhoz rendelt komponensek -->`,
})
export class AppComponent {}
Ebben a példában, ha a felhasználó az alkalmazás gyökér URL-jére navigál (/), akkor az HomeComponent fog megjelenni, míg ha az /about URL-re navigál, akkor az AboutComponent jelenik meg, mindezt dinamikusan, a <router-outlet>-en keresztül.

Ezek a példák bemutatják a komponensek statikus beágyazásának és a dinamikus útvonalválasztásnak az alapvető különbségeit az Angularban.

## 10. How can we pass data to child component and parent component in Angular?

### @Input @Output

parent.component.ts:

import { Component } from '@angular/core';

@Component({
selector: 'app-parent',
templateUrl: './parent.component.html',
styleUrls: ['./parent.component.css']
})
export class ParentComponent {
dataFromParent: string = 'Ez az adat a szülő komponenstől';
dataFromChild: string = '';

receiveDataFromChild(data: string) {
this.dataFromChild = data;
}
}
parent.component.html:

<div>
  <h2>Szülő komponens</h2>
  <app-child [inputData]="dataFromParent" (outputEvent)="receiveDataFromChild($event)"></app-child>
  <p>Szülő komponens adat: {{ dataFromParent }}</p>
  <p>Adat gyermek komponenstől: {{ dataFromChild }}</p>
</div>

child.component.ts:

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
selector: 'app-child',
templateUrl: './child.component.html',
styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() inputData: string = '';
@Output() outputEvent: EventEmitter<string> = new EventEmitter<string>();

sendDataToParent() {
const dataToSend: string = 'Ez az adat a gyermek komponenstől';
this.outputEvent.emit(dataToSend);
}
}
child.component.html:

<div>
  <h3>Gyermek komponens</h3>
  <button (click)="sendDataToParent()">Adat küldése a szülőnek</button>
</div>

### Services

Angularban az adatok átadása a szülő és gyermek komponensek között két fő módon történhet: a szülőből a gyermekbe az @Input() dekorátor segítségével, és a gyermekből a szülőbe az @Output() dekorátor és az események kiemelése révén. Ezenkívül használhatók szolgáltatások is az adatok megosztására a komponensek között.

pl servire:

1. Lépés: Szolgáltatás Definiálása

import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class MessageService {
private message = 'Kezdeti üzenet';

setMessage(newMessage: string) {
this.message = newMessage;
}

getMessage() {
return this.message;
}
}
A szolgáltatásban egy privát message változó van, ami az üzenetet tárolja, valamint setMessage és getMessage metódusok, amelyek lehetővé teszik az üzenet beállítását és lekérdezését.

2. Lépés: Szolgáltatás Használata a Komponensekben

Szülő komponensben:

import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
selector: 'app-parent',
template: `...`
})
export class ParentComponent {
constructor(private messageService: MessageService) {}

changeMessage() {
this.messageService.setMessage('Új üzenet a szülőtől');
}
}

3. Gyermek komponensben:

import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
selector: 'app-child',
template: `{{ message }}`
})
export class ChildComponent implements OnInit {
message: string;

constructor(private messageService: MessageService) {}

ngOnInit() {
this.message = this.messageService.getMessage();
}
}

### Subjects

Subject és annak speciális változatai, mint a BehaviorSubject, ReplaySubject, stb., szintén hatékony eszközök az adatok megosztására és kommunikációra a komponensek között az Angularban. A Subject egy speciális típusú Observable, amely lehetővé teszi, hogy több observer feliratkozzon rá, és egyben lehetővé teszi az adatok "küldését" vagy "kibocsátását" is.

BehaviorSubject
A BehaviorSubject különösen hasznos, amikor az inicializáláskor is szükséged van az utolsó értékre vagy alapértelmezett értékre. Minden új feliratkozónak azonnal elküldi az aktuális értéket.

Szolgáltatás a BehaviorSubject használatával:

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class MessageService {
private messageSource = new BehaviorSubject<string>('Kezdeti üzenet');
currentMessage = this.messageSource.asObservable();

changeMessage(message: string) {
this.messageSource.next(message);
}
}
Szülő komponens:

import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
selector: 'app-parent',
template: `<button (click)="changeMessage()">Üzenet módosítása</button>`
})
export class ParentComponent {
constructor(private messageService: MessageService) {}

changeMessage() {
this.messageService.changeMessage('Új üzenet a szülőtől');
}
}
Gyermek komponens:

import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
selector: 'app-child',
template: `<p>{{ message }}</p>`
})
export class ChildComponent implements OnInit {
message: string;

constructor(private messageService: MessageService) {}

ngOnInit() {
this.messageService.currentMessage.subscribe(message => this.message = message);
}
}
Ebben a példában a MessageService használ egy BehaviorSubject-et az üzenet tárolására és frissítésére. A ParentComponent képes módosítani az üzenetet, míg a ChildComponent feliratkozik az üzenetre, így mindig megjeleníti az aktuális üzenetet.

## 11. What are Observables in Angular?

Az Observable-ök az Angularban és széles körben a reaktív programozásban használt(programozási paradigmát jelent, amely az aszinkron adatfolyamok kezelésére összpontosít.) aszinkron adatfolyamok, amelyek lehetővé teszik az adatok "megfigyelését" és reagálást az idővel bekövetkező változásokra. Az RxJS (Reactive Extensions for JavaScript) könyvtár implementálja őket, amely széles körben használt az Angular alkalmazásokban az aszinkron műveletek, mint például HTTP kérések, felhasználói interakciók vagy időzítések kezelésére.

Alapvető Jellemzők:

Aszinkron: Az Observable-ök lehetővé teszik az adatok aszinkron kezelését, azaz az adatokat nem azonnal, hanem valamikor a jövőben kapjuk meg.

Megfigyelhető: Az Observable-ök adatfolyamok, amelyekre fel lehet iratkozni (subscribe), hogy értesítést kapjunk, amikor új adat érkezik, hiba történik, vagy a folyam befejeződik. Az RxJS Observable osztályának belső implementációja gondoskodik arról, hogy az next, error és complete metódusok minden releváns pillanatban meghívódjanak az adatfolyam életciklusának megfelelően, függetlenül attól, hogy a feliratkozó (Observer) ezt explicite megadja-e, vagy sem.
next(value): Akkor hívódik meg, amikor az Observable új értéket bocsát ki.
error(err): Akkor hívódik meg, ha az adatfolyamban hiba történik.
complete(): Akkor hívódik meg, amikor az adatfolyam befejeződik, és több érték nem várható.

Manipulálható: Az RxJS operátorok széles választékát kínálja az adatfolyamok manipulálására, például szűrésre, összegzésre, transzformációra és még sok másra.

Többször felhasználható: Egy Observable-t több observer is felhasználhat, ami lehetővé teszi az adatok megosztását több részegység között.

Az Angular és más hasonló keretrendszerekben, amelyek Observable-öket használnak adatfolyamok kezelésére, a HTTP kérés elküldése megtörténik azonnal, amikor meghívod a kéréshez tartozó metódust (pl. this.http.get('api/url')). Ez a lépés nem igényel explicit feliratkozást.

A feliratkozás (subscribe) a kérés válaszának kezelésére szolgál. Ezzel mondod meg, hogy mit szeretnél tenni az adatokkal, amikor azok megérkeznek. Ha nincs feliratkozás, akkor a válasz nem kerül feldolgozásra, de maga a kérés már elküldésre került. Ez a folyamat lehetővé teszi, hogy kontrolláld az adatfolyamot: mikor kezdődik az adatok kezelése, és mi történik az adatokkal.

Egy példával szemléltetve:

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root',
})
export class DataService {
constructor(private http: HttpClient) {}

getData() {
// Ebben a pontban a HTTP GET kérés már elindul
return this.http.get('https://api.myservice.com/data');
}
}

// Másik komponens vagy szolgáltatás
@Component({
/_ Komponens metadata _/
})
export class MyComponent {
constructor(private dataService: DataService) {
const dataObservable = this.dataService.getData();
// Itt iratkozunk fel a válasz adatok fogadására
dataObservable.subscribe(data => {
console.log(data);
// Itt kezeljük az adatokat
});
}
}
A getData() metódus meghívása a DataService-ben indítja a HTTP kérést, de a válasz csak a MyComponent-ben történő subscribe hívásra kerül feldolgozásra. Ha a subscribe hívás nem történik meg, a kérés még mindig elindul, de a válaszadatokkal "nem történik semmi".

## 12. How can we handle HTTP requests in Angular?

Angularban az HTTP kérések kezelésére az HttpClientModule-t használjuk, amely része az @angular/common/http csomagnak. Ez a modul lehetővé teszi, hogy HTTP kéréseket indítsunk webes API-khoz és kezeljük a válaszokat. Az HttpClient szolgáltatás reaktív programozási modelleket használ az adatok kezelésére, így az adatfolyamok manipulálhatók és kezelhetők az RxJS operátorok segítségével.

Angularban használt HTTP kérések, amelyek Observable típusú adatfolyamokat adnak vissza, megkövetelik, hogy feliratkozz (subscribe) rájuk a válaszadatok fogadásához. Az Observable-ökkel való munka lényege, hogy azok csak akkor kezdenek el adatokat szolgáltatni, amikor van rájuk feliratkozó. Ez a "lusta" működési mód lehetővé teszi, hogy csak akkor végezzünk el műveleteket (például HTTP kéréseket), amikor ténylegesen szükség van rájuk.

HTTP kérés elküldése: Az Angular HttpClient-je felelős a HTTP kérések elküldéséért. Amikor egy HTTP kérést indítasz az HttpClient segítségével (például a get, post, put, delete metódusokkal), az HttpClient létrehoz egy HTTP kérést, és elküldi azt a megadott URL-re.

Válasz kezelése: Az HttpClient azonnal visszaad egy RxJS Observable-t, amikor egy kérést indítasz. Ez az Observable képviseli a kérés válaszát. Azonban az Observable "lusta" természetű, ami azt jelenti, hogy a kérés válaszának kezelése (azaz a válaszadatok feldolgozása vagy a hibák kezelése) csak akkor kezdődik el, amikor egy feliratkozó (subscriber) csatlakozik hozzá a subscribe() metódus meghívásával.

Observable és adatfolyam: Az Observable, amelyet az HttpClient visszaad, az adatfolyamot képviseli, amely tartalmazhat egy vagy több adatot (a válaszban lévő adatok), illetve hibát vagy befejezési jelzést is közölhet. Az Observable lehetővé teszi az adatfolyam manipulálását különböző RxJS operátorokkal (például map, filter, catchError stb.), amelyek segítségével transzformálhatod a válaszadatokat, kezelheted a hibákat, és így tovább, mielőtt azokat a feliratkozók feldolgoznák.

## 13. What is form handling in Angular?

Az Angular keretrendszer két fő módszert kínál űrlapok kezelésére: a Template-driven (Sablonvezérelt) formokat és a Reactive (Reaktív) formokat. Mindkét módszer lehetővé teszi adatok gyűjtését, validálását és elküldését a felhasználói felületről, de eltérő megközelítést alkalmaznak.

### Template-Driven Formok

A Template-driven formokat a sablon (HTML) oldalon definiáljuk, Angular direktívákat használva. A Template-driven formok egyszerűek és könnyen használhatók kisebb űrlapok esetén, ahol nem szükséges bonyolult validáció vagy állapotkezelés. A form modelljének kezelése a háttérben történik, és az Angular automatikusan létrehozza a form modelt az űrlap alapján.

A Template-driven formok használatakor az FormsModule-t kell importálni az alkalmazás moduljába.

Példa Template-Driven Formra:

<form #myForm="ngForm" (ngSubmit)="submitForm()">
  <input type="text" name="username" [(ngModel)]="user.username" required>
  <button type="submit">Submit</button>
</form>

// A komponensben
export class AppComponent {
user = { username: '' };

submitForm() {
console.log(this.user);
}
}

### Reactive Formok

A Reactive formok egy programozói, reaktív megközelítést alkalmaznak, ahol a form modellt és annak validációját explicit módon kezeljük a komponens osztályban. Ez több kontrollt és rugalmasságot biztosít, így bonyolultabb űrlapok esetén előnyös. A Reactive formok használatakor az ReactiveFormsModule-t kell importálni.

Példa Reactive Formra:

// A komponensben
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class AppComponent {
myForm = new FormGroup({
username: new FormControl('', Validators.required)
});

submitForm() {
console.log(this.myForm.value);
}
}

<form [formGroup]="myForm" (ngSubmit)="submitForm()">
  <input type="text" formControlName="username">
  <button type="submit">Submit</button>
</form>

A Template-ben ([formGroup]="myForm"): Az [formGroup] direktíva hozzákapcsolja a template <form> elemét a TypeScript fájlban definiált myForm FormGroup-hoz. Ez teszi lehetővé az űrlap adatok és állapotának kezelését reaktív módon.

Validácio:

Template-driven formok: A validációkat a sablonban adjuk meg, és ehhez direktívákat használunk, például required, minlength, maxlength, pattern stb. Ezeket a direktívákat hozzáadhatjuk az űrlapmezőkhöz a HTML sablonban, és az Angular automatikusan végzi a validációkat.

Reactive formok: A validációkat a komponens osztályban állítjuk be. Itt JavaScript / TypeScript kód segítségével hozzuk létre a FormGroup-ot és a FormControl-okat, majd ezekhez hozzáadjuk a megfelelő validátorokat. Ez a módszer teljesen programozható és átláthatóbb, különösen nagyobb űrlapok esetén.

Bár különböző módszereket használnak a kötelező mezők validálására, mindkét megközelítés lehetővé teszi, hogy az űrlapokon szükség szerint kötelező mezőket definiáljunk a required attribútum segítségével. A Template-driven formokban a direktívák használata egyértelműbb és kényelmesebb lehet, míg a Reactive formoknál a validátorokat általában a komponens osztályban szokás definiálni, ami több rugalmasságot ad a validációs logika kezelésében. Összességében mindkét megközelítés célja az űrlapok validálása és kezelése, és mindkettő lehetővé teszi a kötelező mezők definiálását a required attribútummal.

## 14. What are the options for testing Angular applications?

Az Angular különböző típusú tesztek – egységtesztek, integrációs tesztek és end-to-end (E2E) tesztek – elvégzéséhez különböző eszközöket és keretrendszereket ajánl. Minden teszttípus más és más aspektusait vizsgálja az alkalmazásnak, és különböző eszközök segítségével optimalizálják a tesztelési folyamatot az adott kontextusban.

Egységtesztek
Cél: Az alkalmazás kisebb egységeinek, például komponensek, szolgáltatások és segédprogramok izolált tesztelése.
Eszközök/Keretrendszerek: Alapértelmezés szerint a Jasmine teszt keretrendszert használja, ami egy viselkedésvezérelt fejlesztési keretrendszer, amely lehetővé teszi a tesztesetek specifikáció alapú definícióját. A tesztek futtatására a Karma tesztfuttatót használja, amely böngészőben futtatja a Jasmine teszteket.

Integrációs Tesztek
Cél: Az alkalmazás különböző részeinek együttműködésének tesztelése, például komponensek interakcióinak és szolgáltatások integrációjának vizsgálata.
Eszközök/Keretrendszerek: A TestBed API-t használja, amely része az Angular keretrendszernek. A TestBed lehetővé teszi a tesztelési környezet konfigurálását így lehetőség nyílik az integrációs tesztek végrehajtására az Angular kontextusában.

End-to-End (E2E) Tesztek
Cél: Az alkalmazás teljes működésének tesztelése a felhasználó szemszögéből, beleértve a felhasználói interakciókat és az alkalmazás általános működését valós böngészőkörnyezetben.
Eszközök/Keretrendszerek: A Protractor keretrendszert ajánlja, ami a Selenium WebDriverre épül és lehetővé teszi a valós böngészőkben történő automatizált E2E tesztek végrehajtását. A Protractor speciálisan Angular alkalmazások tesztelésére lett tervezve, így támogatja az Angular-specifikus funkciókat, mint például a modellek és kötések könnyű kezelését.

Minden teszttípus másik szemszögből közelíti meg az alkalmazás tesztelését, és különböző eszközöket használ a hatékonyság és a relevancia érdekében. Az egységtesztek és integrációs tesztek általában fejlesztés közben, fejlesztői környezetben történnek, míg az E2E tesztek gyakran a teljes alkalmazás tesztelésére szolgálnak, beleértve a felhasználói interakciókat is, így általában a fejlesztési folyamat későbbi szakaszaiban kerülnek végrehajtásra.

## 15. RxJS operators

RxJS (Reactive Extensions for JavaScript), amely egy könyvtár, melyet az Angular széles körben használ reaktív programozáshoz. Az RxJS operátorok olyan függvények, amelyek lehetővé teszik az observable-ök által kibocsátott adatok különböző módokon történő manipulálását. Ezek az operátorok szűrhetik, transzformálhatják, összevonhatják vagy másképp manipulálhatják az observable adatfolyamokat.

Az RxJS operátorok tiszta függvények, amelyek observable-öket vesznek bemenetként és új observable-öket adnak vissza. Ez alapvető a komplex aszinkron kód kezelhetőbbé és olvashatóbbá tételéhez. Az operátorokat különböző típusokra lehet osztani a céljuk alapján, mint például létrehozási operátorok, transzformációs operátorok, szűrő operátorok, kombinációs operátorok és még sok más.

Az RxJS kontextusában a pipe() nem operátor, hanem egy metódus, amelyet az Observable példányokon hívunk meg, és amely lehetővé teszi számunkra, hogy operátorok sorozatát alkalmazzuk az adatfolyamra. A pipe() metódus tehát egyfajta keretet biztosít az operátorok egymásba ágyazásához, amelyek manipulálják az Observable által kibocsátott értékeket.

Operátorok az RxJS-ben
Az RxJS operátorok funkciónak tekinthetőek, amelyek lehetővé teszik az adatfolyamok transzformálását, szűrését, kombinálását és egyéb módosításait.

Néhány gyakran használt RxJS operátor:

map(): Egy adott függvényt alkalmaz az Observable által kibocsátott minden egyes értékre, és az eredményül kapott értékeket egy új Observable-ben bocsátja ki.
filter(): Egy tesztfüggvény alapján szűri az értékeket, és csak azokat az értékeket bocsátja ki egy új Observable-ben, amelyek teljesítik a teszt feltételeit.
tap() (korábban do, ún."side effect" operátor): Egy mellékhatás-függvényt hajt végre az Observable által kibocsátott minden egyes értéken, de magát az értéket nem módosítja. Hasznos naplózásra vagy más mellékhatások elvégzésére az adatfolyam manipulálása nélkül.
catchError(): Kezeli az Observable által generált hibákat, és lehetőséget biztosít egy hiba-kezelő Observable visszaadására.

## 16. Pipes

Az Angularban a pipe-ok (csövek) egyszerű függvények, amelyeket a sablon kifejezésekben használnak az adatok átalakítására, mielőtt azok megjelenítésre kerülnének a nézetben. A pipe-okat a pipe karakter (|) használatával alkalmazzák a sablon kifejezésekben, amit a pipe neve és szükség esetén az argumentumok követnek. Az Angular számos beépített pipe-ot kínál a gyakori adattranszformációkhoz, és lehetőség van egyedi pipe-ok létrehozására is, hogy specifikusabb vagy összetettebb transzformációkat hozzunk létre.

Beépített Pipe-ok
Az Angular számos előre definiált pipe-pal rendelkezik, amelyeket azonnal használhatsz, többek között:

DatePipe: Dátum értékek formázása a helyi szabályok szerint.
UpperCasePipe: Szöveg átalakítása nagybetűssé.

// text változóban van egy szöveg
text: string = 'Hello World!';

// Sablonban:
{{ text | uppercase }} // HELLO WORLD!
{{ text | lowercase }} // hello world!

LowerCasePipe: Szöveg átalakítása kisbetűssé.
CurrencyPipe: Szám átalakítása pénznem formátumú szöveggé, a helyi szabályok szerint formázva.
DecimalPipe: Szám átalakítása tizedes ponttal rendelkező szöveggé, a helyi szabályok szerint formázva.
PercentPipe: Szám átalakítása százalékos formátumú szöveggé, a helyi szabályok szerint formázva.
AsyncPipe: Érték kicsomagolása egy aszinkron primitívből, mint például egy Observable vagy Promise.

## 17. Binding

A databinding mechanizmus az Angularban nem direktívákon keresztül működik, hanem az Angular kötési szintaxisának használatával. A kötés szintaxis lehetővé teszi az adatok dinamikus megjelenítését és frissítését a DOM-ban, anélkül, hogy közvetlen DOM műveleteket kellene végezni.

Az Angular kötési szintaxisa közvetlenül az interpoláció, a property binding és az event binding révén teszi lehetővé az adatok és a felhasználói felület közötti kommunikációt. Ezek a kötési mechanizmusok a következők:

Interpoláció: Az {{ }} zárójelek közötti kifejezések megjelenítése az Angular sablonokban. Például: {{ user.name }}.

Property binding: Az elem tulajdonságainak dinamikus beállítása az Angular komponensekből. Például: [property]="expression", ahol a property az elem tulajdonsága (pl. src, value, innerText stb.), és az expression az érték, amelyet beállítani szeretnénk.

Event binding: Az események kezelése és az események hatására végrehajtott műveletek definiálása. Például: (event)="expression", ahol az event az esemény neve (pl. click, keyup, submit stb.), és az expression az esemény bekövetkeztére végrehajtandó kifejezés.

Az event binding során az események (mint például a click, input, change stb.) a felhasználói interakciókat jelentik, amelyeket a felhasználó végrehajt a böngészőben. Ezek az események hivatkozhatnak egy listener függvényre, amelyet az Angular komponensben vagy a sablonban definiálunk, vagy egy emitterre, amely az adatokat küldi az egyik komponensből a másikba.

Például:

### Listener függvény:

<!-- Sablonban -->

<button (click)="handleClick()">Click me</button>

<!-- Komponensben -->

handleClick() {
console.log('Button clicked!');
}

### Emitter:

<!-- Komponensben -->

import { EventEmitter } from '@angular/core';

export class MyComponent {

myEventEmitter: EventEmitter<string> = new EventEmitter<string>();

handleClick() {

this.myEventEmitter.emit('Data to emit');
}
}

### Feliratkozó:

import { Component, OnInit } from '@angular/core';
import { MyComponent } from './my.component';

@Component({
selector: 'app-other',
template: `  <p>Received data: {{ receivedData }}</p>`
})
export class OtherComponent implements OnInit {
receivedData: string;

constructor(private myComponent: MyComponent) {}

ngOnInit() {

this.myComponent.myEventEmitter.subscribe(data => {
this.receivedData = data;
});
}
}
