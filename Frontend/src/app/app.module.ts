import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MarkdownViewerComponent } from './markdown/markdown-viewer.component';
import { HomeComponent } from './home-component/home-component.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, MarkdownViewerComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// A BrowserModule importálja és rendelkezésre bocsátja azokat a szolgáltatásokat és direktívákat, amelyek szükségesek a webalkalmazások böngészőben történő futtatásához, beleértve azokat a direktívákat is, amelyeket a CommonModule biztosít. Azonban a BrowserModule-t, amely a CommonModule-ot is magában foglalja, általában csak az alkalmazás gyökérmoduljában (általában az AppModule-ban) kell importálni. Az alkalmazás más moduljaiban, ahol szintén szükség van a CommonModule által biztosított direktívákra és szolgáltatásokra, ott explicit módon importálni kell a CommonModule-t, ha az adott modul nem gyökérmodul.

// Az Angular modulok (NgModule) kulcsfontosságú szerepet játszanak az Angular alkalmazások szervezésében és modularizálásában. Egy Angular modul egy osztály, amelyet az @NgModule dekorátor díszít. Ez a dekorátor metaadatokat vesz fel, amelyek meghatározzák, hogyan kell az Angularnak összeállítani az alkalmazást futási időben. Az app.module.ts fájl általában az alkalmazás gyökérmodulját definiálja, és több kulcsfontosságú szekciót tartalmaz:

// declarations
// A declarations tömbbe azokat a komponenseket, direktívákat és csöveket (pipes) kell felvenni, amelyeket ebben a modulban szeretnél használni. Ezek az osztályok ezzel a modullal lesznek összekapcsolva, és csak ebben a modulban lesznek elérhetőek, kivéve, ha a modult exportálod.

// declarations: [AppComponent, MarkdownViewerComponent, HomeComponent],
// Ebben az esetben az AppComponent, MarkdownViewerComponent, és HomeComponent azok a komponensek, amelyeket a modul deklarál.

// imports
// Az imports tömb olyan külső modulokat tartalmaz, amelyeket az adott modul használni szeretne. Az Angularban számos beépített modul van, mint például a BrowserModule és a HttpClientModule, amelyeket az alkalmazás különböző részein használhatsz.

// imports: [BrowserModule, HttpClientModule, AppRoutingModule],
// A BrowserModule a böngésző-specifikus szolgáltatásokat importálja be (például a DOM renderelését), és minden webalkalmazás gyökérmoduljában szükséges. A HttpClientModule lehetővé teszi az HTTP kérések küldését. Az AppRoutingModule az alkalmazás útvonal-modulja, amely az alkalmazás útvonalainak (routing) konfigurációját tartalmazza.

// providers
// A providers tömb szolgáltatásokat és azok függőséginjektálási tokeneit tartalmazhat, amelyeket az alkalmazásban szeretnél használni. Itt adhatod meg azokat a szolgáltatásokat, amelyek példányait az Angular DI (Dependency Injection) rendszere létrehozhatja és elérhetővé teheti a komponensek számára.

// providers: [],
// Ebben az esetben nincsenek globális szolgáltatások definiálva, de szükség esetén ide vehetőek fel.

// bootstrap
// A bootstrap tömb meghatározza azt a gyökérkomponenst (vagy komponenseket), amely(ek)et az alkalmazás indításakor az Angularnak el kell indítania. Általában csak egy komponenst tartalmaz, amely az alkalmazás gyökérkomponense, és amely a böngésző DOM-jába először renderelődik.

// bootstrap: [AppComponent],
// Ebben az esetben az AppComponent az az alkalmazás gyökérkomponense, amely az alkalmazás elindulásakor kerül betöltésre.
