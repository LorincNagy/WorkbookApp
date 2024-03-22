# Angular Questions and Answers

## 1. What is angular?

Angular egy TypeScript alapú nyílt forráskódú webes keretrendszer, javascript keretrendszer amelyet a Google
fejlesztett ki. Felhasználható a kliensoldali webfejlesztéshez.

Az Angular keretrendszerben a komponens struktúrája általában két fő részből áll: egy TypeScript fájlból, amely meghatározza a komponens logikáját, állapotát és adatkezelési módjait (ezt hívjuk a komponens osztálynak vagy kontrollerének), valamint egy HTML sablonfájlból (template), amely meghatározza a komponens felhasználói felületének struktúráját és kinézetét.

## 2. What is TypeScript and how does it relate to Angular?

TypeScript egy szigorú típusellenőrzésű JavaScript kiterjesztés, amely lehetővé teszi a fejlesztőknek a hibák korai
felismerését és az erősebb típusbiztonságot. Angular kifejezetten TypeScript alapú.

## 3. What is a component in Angular?

Egy komponens egy önálló és újrahasználható része egy Angular alkalmazásnak, amely tartalmazza a sablonokat,
stílusokat és a logikát is.

## 4. How to create a new component in Angular?

Új komponens létrehozásához használhatjuk az Angular CLI parancssorát a `ng generate component` paranccsal, vagy
manuálisan létrehozhatjuk a szükséges fájlokat.

## What is CLI?

A CLI (Command Line Interface) az "utasítások során" (parancssoros felület) rövidítése. Az Angular esetében az Angular
CLI egy parancssoros eszköz, amely lehetővé teszi az Angular alkalmazások gyors létrehozását, fejlesztését és
kezelését. Segítségével könnyen létrehozhatunk új komponenseket, szolgáltatásokat, modulokat stb., valamint
futtathatjuk, tesztelhetjük és kiépíthetjük az alkalmazásunkat.

## 5. What is an Angular module?

Az Angular modul egy logikailag összetartozó funkciók csoportja. Segítségükkel szervezhetjük az alkalmazásunkat és
lehetővé teszik a lazább csatolást.

## 6. What is a service in Angular?

A szolgáltatások olyan osztályok, amelyek különböző részegységeket, például adatszolgáltatásokat, HTTP hívásokat stb.
kezelnek.

## 7. What is a directives in Angular?

Az Angular direktívák olyan utasítások, amelyek módosítják a DOM viselkedését vagy megjelenését.

## 8. What are Angular LifeCycle hooks?

Az Angular LifeCycle hooks olyan metódusok, amelyek lehetővé teszik számunkra, hogy reagáljunk az Angular alkalmazás
különböző életciklus eseményeire, például az inicializációra, frissítésre vagy megsemmisítésre.

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
Ebben a példában egy hivatkozás (<a> elem) közvetlenül az /some-path útvonalra navigál, amikor a felhasználó rákattint.Ł

Útvonalak Megjelenítése:
Az útvonalakhoz rendelt komponensek a <router-outlet> direktíva segítségével jelennek meg. A <router-outlet> egy helyfoglaló, amely megmondja az Angular Routernek, hogy hol jelenítse meg a kiválasztott útvonal komponensét az alkalmazásban.

## 10. How can we pass data to child component and parent component in Angular?

Angularban az adatok átadása a szülő és gyermek komponensek között két fő módon történhet: a szülőből a gyermekbe az @Input() dekorátor segítségével, és a gyermekből a szülőbe az @Output() dekorátor és az események kiemelése révén. Ezenkívül használhatók szolgáltatások is az adatok megosztására a komponensek között.

pl servire:

1. Lépés: Szolgáltatás Definiálása

typescript
Copy code
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

## 11. What are Observables in Angular?

Az Observable-ök az Angularban és széles körben a reaktív programozásban használt aszinkron adatfolyamok, amelyek lehetővé teszik az adatok "megfigyelését" és reagálást az idővel bekövetkező változásokra. Az RxJS (Reactive Extensions for JavaScript) könyvtár implementálja őket, amely széles körben használt az Angular alkalmazásokban az aszinkron műveletek, mint például HTTP kérések, felhasználói interakciók vagy időzítések kezelésére.

Alapvető Jellemzők
Aszinkron: Az Observable-ök lehetővé teszik az adatok aszinkron kezelését, azaz az adatokat nem azonnal, hanem valamikor a jövőben kapjuk meg.
Megfigyelhető: Az Observable-ök adatfolyamok, amelyekre fel lehet iratkozni (subscribe), hogy értesítést kapjunk, amikor új adat érkezik, hiba történik, vagy a folyam befejeződik.
Manipulálható: Az RxJS operátorok széles választékát kínálja az adatfolyamok manipulálására, például szűrésre, összegzésre, transzformációra és még sok másra.
Többször felhasználható: Egy Observable-t több előfizető is felhasználhat, ami lehetővé teszi az adatok megosztását több részegység között.

## 12. How can we handle HTTP requests in Angular?

Angularban az HTTP kérések kezelésére az HttpClientModule-t használjuk, amely része az @angular/common/http csomagnak. Ez a modul lehetővé teszi, hogy HTTP kéréseket indítsunk webes API-khoz és kezeljük a válaszokat. Az HttpClient szolgáltatás reaktív programozási modelleket használ az adatok kezelésére, így az adatfolyamok manipulálhatók és kezelhetők az RxJS operátorok segítségével.

Angularban használt HTTP kérések, amelyek Observable típusú adatfolyamokat adnak vissza, megkövetelik, hogy feliratkozz (subscribe) rájuk a válaszadatok fogadásához. Az Observable-ökkel való munka lényege, hogy azok csak akkor kezdenek el adatokat szolgáltatni, amikor van rájuk feliratkozó. Ez a "lusta" működési mód lehetővé teszi, hogy csak akkor végezzünk el műveleteket (például HTTP kéréseket), amikor ténylegesen szükség van rájuk.

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

Validáció
Mindkét típusú form támogatja a beépített és egyedi validátorokat. A Template-driven formok esetében a validációkat a sablonban adjuk meg direktívákkal, míg a Reactive formoknál a validációkat a komponens osztályban állítjuk be.

## 14. What are the options for testing Angular applications?

Az Angular különböző típusú tesztek – egységtesztek, integrációs tesztek és end-to-end (E2E) tesztek – elvégzéséhez különböző eszközöket és keretrendszereket ajánl. Minden teszttípus más és más aspektusait vizsgálja az alkalmazásnak, és különböző eszközök segítségével optimalizálják a tesztelési folyamatot az adott kontextusban. Itt van egy gyors összefoglaló:

Egységtesztek
Cél: Az alkalmazás kisebb egységeinek, például komponensek, szolgáltatások és segédprogramok izolált tesztelése.
Eszközök/Keretrendszerek: Alapértelmezés szerint a Jasmine teszt keretrendszert használja, ami egy viselkedésvezérelt fejlesztési keretrendszer, amely lehetővé teszi a tesztesetek specifikáció alapú definícióját. A tesztek futtatására a Karma tesztfuttatót használja, amely böngészőben futtatja a Jasmine teszteket.

Integrációs Tesztek
Cél: Az alkalmazás különböző részeinek együttműködésének tesztelése, például komponensek interakcióinak és szolgáltatások integrációjának vizsgálata.
Eszközök/Keretrendszerek: A TestBed API-t használja, amely része az Angular keretrendszernek. A TestBed lehetővé teszi a tesztelési környezet konfigurálását és a komponensek dinamikus kompilálását, így lehetőség nyílik az integrációs tesztek végrehajtására az Angular kontextusában.

End-to-End (E2E) Tesztek
Cél: Az alkalmazás teljes működésének tesztelése a felhasználó szemszögéből, beleértve a felhasználói interakciókat és az alkalmazás általános működését valós böngészőkörnyezetben.
Eszközök/Keretrendszerek: A Protractor keretrendszert ajánlja, ami a Selenium WebDriverre épül és lehetővé teszi a valós böngészőkben történő automatizált E2E tesztek végrehajtását. A Protractor speciálisan Angular alkalmazások tesztelésére lett tervezve, így támogatja az Angular-specifikus funkciókat, mint például a modellek és kötések könnyű kezelését.
Minden teszttípus másik szemszögből közelíti meg az alkalmazás tesztelését, és különböző eszközöket használ a hatékonyság és a relevancia érdekében. Az egységtesztek és integrációs tesztek általában fejlesztés közben, fejlesztői környezetben történnek, míg az E2E tesztek gyakran a teljes alkalmazás tesztelésére szolgálnak, beleértve a felhasználói interakciókat is, így általában a fejlesztési folyamat későbbi szakaszaiban kerülnek végrehajtásra.

## 15. RxJS operators

RxJS (Reactive Extensions for JavaScript), amely egy könyvtár, melyet az Angular széles körben használ reaktív programozáshoz. Az RxJS operátorok olyan függvények, amelyek lehetővé teszik az observable-ök által kibocsátott adatok különböző módokon történő manipulálását. Ezek az operátorok szűrhetik, transzformálhatják, összevonhatják vagy másképp manipulálhatják az observable adatfolyamokat.

Az RxJS Operátorok Megértése
Az RxJS operátorok tiszta függvények, amelyek observable-öket vesznek bemenetként és új observable-öket adnak vissza. Ez alapvető a komplex aszinkron kód kezelhetőbbé és olvashatóbbá tételéhez. Az operátorokat különböző típusokra lehet osztani a céljuk alapján, mint például létrehozási operátorok, transzformációs operátorok, szűrő operátorok, kombinációs operátorok és még sok más.

Az RxJS kontextusában a pipe() nem operátor, hanem egy metódus, amelyet az Observable példányokon hívunk meg, és amely lehetővé teszi számunkra, hogy operátorok sorozatát alkalmazzuk az adatfolyamra. A pipe() metódus tehát egyfajta keretet biztosít az operátorok egymásba ágyazásához, amelyek manipulálják az Observable által kibocsátott értékeket.

Operátorok az RxJS-ben
Az RxJS operátorok funkciónak tekinthetőek, amelyek lehetővé teszik az adatfolyamok transzformálását, szűrését, kombinálását és egyéb módosításait. Néhány gyakran használt RxJS operátor:

map(): Egy adott függvényt alkalmaz az Observable által kibocsátott minden egyes értékre, és az eredményül kapott értékeket egy új Observable-ben bocsátja ki.
filter(): Egy tesztfüggvény alapján szűri az értékeket, és csak azokat az értékeket bocsátja ki egy új Observable-ben, amelyek teljesítik a teszt feltételeit.
tap() (korábban do): Egy mellékhatás-függvényt hajt végre az Observable által kibocsátott minden egyes értéken, de magát az értéket nem módosítja. Hasznos naplózásra vagy más mellékhatások elvégzésére az adatfolyam manipulálása nélkül.
catchError(): Kezeli az Observable által generált hibákat, és lehetőséget biztosít egy hiba-kezelő Observable visszaadására.

## 16. Pipes

Az Angularban a pipe-ok (csövek) egyszerű függvények, amelyeket a sablon kifejezésekben használnak az adatok átalakítására, mielőtt azok megjelenítésre kerülnének a nézetben. A pipe-okat a pipe karakter (|) használatával alkalmazzák a sablon kifejezésekben, amit a pipe neve és szükség esetén az argumentumok követnek. Az Angular számos beépített pipe-ot kínál a gyakori adattranszformációkhoz, és lehetőség van egyedi pipe-ok létrehozására is, hogy specifikusabb vagy összetettebb transzformációkat kapszulázhassunk.

Beépített Pipe-ok
Az Angular számos előre definiált pipe-pal rendelkezik, amelyeket azonnal használhatsz, többek között:

DatePipe: Dátum értékek formázása a helyi szabályok szerint.
UpperCasePipe: Szöveg átalakítása nagybetűssé.
LowerCasePipe: Szöveg átalakítása kisbetűssé.
CurrencyPipe: Szám átalakítása pénznem formátumú szöveggé, a helyi szabályok szerint formázva.
DecimalPipe: Szám átalakítása tizedes ponttal rendelkező szöveggé, a helyi szabályok szerint formázva.
PercentPipe: Szám átalakítása százalékos formátumú szöveggé, a helyi szabályok szerint formázva.
AsyncPipe: Érték kicsomagolása egy aszinkron primitívből, mint például egy Observable vagy Promise.
