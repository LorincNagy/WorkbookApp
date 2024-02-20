import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //amit ebbe beleraksz az a selectorral megjelölt helyre lesz alkalmazva ergo index.html root elemébe lesz betéve.
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Frontend';
}

//Az Angular alkalmazásokban az app-root szelektor az AppComponent számára van fenntartva, ami az alkalmazás gyökérkomponense. Ez a konvenció az Angular keretrendszerben, ami lehetővé teszi az egyoldalas alkalmazások (SPA) hatékony kezelését és inicializálását. Az app-root szelektor az index.html fájlban az a pont, ahol az Angular alkalmazás "életre kel" és ahol a komponensfa gyökere található. Amikor az Angular alkalmazás betöltődik a böngészőben, az Angular keresi az index.html fájlban az app-root szelektort, és ott tölti be az AppComponent sablonját, amely szolgál az alkalmazás belépési pontjaként.
//Miért van szükség a gyökérkomponensre?
// Inicializálás: Az app-root szelektor jelzi az Angularnak, hogy hol kezdje el az alkalmazás renderelését az index.html-ben. Ez a gyökérkomponens szolgál az alkalmazás többi részének alapjaként.
//Az index.html fájlban egy olyan HTML elem, amely az app-root szelektort használja, általában így néz ki:

// <body>
//   <app-root></app-root>
// </body>
// Amikor az Angular alkalmazás betöltődik, az Angular keresi ezt a szelektort, és a AppComponent sablon tartalmát beilleszti ebbe az elembe. Ezáltal az AppComponent-ben definiált sablon és a benne található további komponensek és UI elemek az app-root helyére kerülnek az index.html-ben, így építve fel az alkalmazás felhasználói felületét.

// Az app-root szelektor használata és a gyökérkomponens koncepciója lehetővé teszi az Angular alkalmazások skálázható és moduláris felépítését, ahol az alkalmazás komplexitása növekedésével is könnyen kezelhető marad a projekt struktúrája.
