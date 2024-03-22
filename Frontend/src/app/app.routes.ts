import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { MarkdownViewerComponent } from './markdown/markdown-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: ':filename',
        component: MarkdownViewerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// Az általad leírt megközelítés helyes és jól érted a folyamatot. A HomeComponent-ben megadott linkek (a routerLink attribútumokkal) lehetővé teszik a felhasználók számára, hogy különböző útvonalakra navigáljanak. Amikor egy felhasználó egy ilyen linkre kattint, az Angular Router a megfelelő útvonalhoz rendeli a MarkdownViewerComponent-et, amely a dinamikus :filename paramétert használva betölti a megfelelő Markdown fájlt.

// Hogyan Működik Ez:
// Navigáció: A felhasználó a HomeComponent-ben található linkre kattint. Például a /module_progbasics útvonalra.
// Útvonalkezelés: Az AppRoutingModule definiálja, hogy minden :filename paraméterrel rendelkező útvonal a MarkdownViewerComponent-hez van rendelve.
// Markdown Fájl Betöltése: A MarkdownViewerComponent ngOnInit metódusa feliratkozik a route.params-re, kiolvassa a filename paramétert, és betölti az adott Markdown fájlt.
// Fontos Pontok:
// MarkdownViewerComponent Sablon: A MarkdownViewerComponent sablonja (template) a konvertált HTML-t jeleníti meg a [innerHTML] segítségével. Ez a komponens automatikusan beilleszti és megjeleníti a Markdown fájlból konvertált tartalmat az alkalmazásodban ott, ahol a <app-markdown-viewer></app-markdown-viewer> selektorral rendelkező komponenst használod. Ha közvetlenül a HomeComponent-ből navigálsz, nem szükséges további HTML-be illesztés a MarkdownViewerComponent-hez, mivel a Router gondoskodik a megjelenítésről az útvonalak alapján.

// Útvonalak és Fájlnév Konvenció: Győződj meg róla, hogy az útvonalakban használt fájlnév-azonosítók pontosan megfelelnek a fájlok neveinek és helyeiknek az assets mappában. Ha a fájlnevek nem egyeznek, vagy ha a fájlok nem találhatók, akkor hibaüzenetet fogsz kapni vagy nem jelenik meg a kívánt tartalom.

// Az egész folyamat automatizált és dinamikus, ahol a MarkdownViewerComponent a központi pont, ami kezeli a Markdown fájlok betöltését és megjelenítését a megadott útvonalparaméter alapján. Az Angular Router és a komponensek közötti interakció teszi lehetővé, hogy egyszerűen kezelhess különböző tartalmakat anélkül, hogy minden egyes tartalomhoz külön komponenst kellene írnod.

//Ha a HomeComponent van beágyazva az app.component.html-be a <app-home-component></app-home-component> segítségével, és a MarkdownViewerComponent közvetlenül nincs beillesztve sehol sem a sablonokban, akkor a megjelenítés az Angular Router segítségével történik dinamikusan, az útvonalak alapján.

// Amikor a felhasználó kattint egy linkre a HomeComponent-ben, ami egy routerLink-kel van definiálva (például /module_progbasics), az Angular Router elvégzi a navigációt és a megfelelő komponenst tölti be az aktuális útvonalnak megfelelően. Ebben az esetben, ha a MarkdownViewerComponent van konfigurálva az útvonalakhoz az AppRoutingModule-ben, akkor ez a komponens lesz betöltve és megjelenítve az alkalmazásban, amikor a felhasználó az adott útvonalra navigál.

// Hogyan Működik a Navigáció és a Megjelenítés:
// Alap Konfiguráció: Az app.component.html tartalmazza a <app-home-component></app-home-component> selektort, ami betölti a HomeComponent-et.

// Link Kattintás: A HomeComponent-ben lévő routerLink-ek lehetővé teszik a felhasználó számára, hogy az alkalmazáson belül különböző útvonalakra navigáljon.

// Router Működése: Amikor a felhasználó egy linkre kattint, az Angular Router érzékeli az útvonalváltozást és a routes konfiguráció alapján a megfelelő komponenst tölti be. Ha a routes konfigurációjában a MarkdownViewerComponent van megadva az útvonalhoz (például { path: 'module_progbasics', component: MarkdownViewerComponent }), akkor ez a komponens fog betöltődni és megjeleníteni a kért tartalmat.

// Dinamikus Tartalom Betöltése: A MarkdownViewerComponent a loadMarkdownFile metódusával betölti a kért Markdown fájlt, konvertálja HTML-re és megjeleníti a convertedHtml változóba injektálva az [innerHTML] direktívával.

// Összefoglalva:
// Nem szükséges közvetlenül beilleszteni a MarkdownViewerComponent-et a sablonokba. Az Angular Router gondoskodik arról, hogy a megfelelő komponenst dinamikusan betöltse és megjelenítse az aktuális útvonalnak megfelelően. Ez lehetővé teszi a komponensek újrafelhasználhatóságát és az alkalmazás rugalmas strukturálását.

// Igen, a <router-outlet> elemnek közvetlen kapcsolata van a routerLink-kel, valamint az AppRoutingModule-ben (vagy bármely más útvonalmodulban) definiált RouterModule, Routes, és az útvonalak konfigurációjával. Minden egyes elem fontos szerepet játszik az Angular útvonalkezelési rendszerében. Lássuk, hogyan kapcsolódnak össze:

// <router-outlet>
// Szerepe: A <router-outlet> a sablonban egy helyőrző, ahol az Angular Router dinamikusan betölti és megjeleníti a komponenseket az aktív útvonalnak megfelelően. Ez az elem teszi lehetővé, hogy egyoldalas alkalmazást (SPA) hozz létre, ahol az oldalak közötti navigáció nem tölti újra az egész oldalt, csak az új tartalmat tölti be az <router-outlet> helyére.
// routerLink
// Szerepe: A routerLink direktíva lehetővé teszi a sablonokban a deklaratív link létrehozását, amely az Angular Router segítségével navigál az alkalmazásban definiált útvonalak között. A routerLink használatakor az Angular elkerüli az oldal teljes újratöltését és helyette a <router-outlet>-ben dinamikusan cseréli a tartalmat az új útvonalnak megfelelően.
// RouterModule, Routes, és AppRoutingModule
// Szerepe: Az AppRoutingModule (vagy bármely más útvonalmodul, amit definiálsz) tartalmazza az alkalmazásod útvonalainak konfigurációját. A Routes egy tömb, amely az útvonalakat és azokhoz kapcsolódó komponenseket definiálja. Az RouterModule.forRoot(routes) metódus importálja az útvonalakat az alkalmazás gyökérmoduljába, így az Angular tudja, hogy melyik komponenst kell betöltenie az adott útvonalon.
// Kapcsolat
// Amikor a felhasználó egy routerLink-kel rendelkező linkre kattint, az Angular Router frissíti a böngésző URL-jét az új útvonalnak megfelelően, kiértékeli az AppRoutingModule-ben definiált útvonalakat, és betölti a megfelelő komponenst a <router-outlet>-be.
// A <router-outlet> tehát a dinamikus tartalom "kijelzője", a routerLink az "irányító", és az AppRoutingModule (a RouterModule és Routes segítségével) a "térkép", ami összeköti az útvonalakat a hozzájuk tartozó komponensekkel.
// Ez a rendszer teszi lehetővé az SPA-k hatékony és felhasználóbarát navigációját anélkül, hogy az oldalak közötti átmenetekkor az egész oldal újratöltődne.
