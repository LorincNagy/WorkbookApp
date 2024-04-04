# TypeScript Questions and Answers!!!

## 1. What is TypeScript and why is it useful?

A TypeScript egy nyelvi kiterjesztés a JavaScript-hez, szigorúan tipusos JavaScript lényegében amely statikus típusellenőrzést, osztályokat és interfészeket, valamint más fejlesztési funkciókat kínál. Hasznos, mert segít a fejlesztőknek csökkenteni a hibák számát a kód írásának és karbantartásának folyamata során, illetve jobb kódmegértést és fejlesztői élményt nyújt.

A TypeScript egy olyan nyelvi kiterjesztés a JavaScript-hez, amely lehetővé teszi a szigorú típusellenőrzést és típusdeklarációt a JavaScript kódokban. Ez azt jelenti, hogy a TypeScript kódban deklarálni lehet a változók, függvények és egyéb elemek típusát, és a TypeScript fordító (compiler) ellenőrzi ezeket a típusokat a kód írásakor és fordításkor is. Így a TypeScript segít a hibák felderítésében már a fejlesztés során, illetve jobb kódmegértést és dokumentációt nyújt a kódbázisban.

A TypeScript lehetővé teszi, hogy a függvények visszatérési értékének típusát is megadjuk a függvény definíciójában. Ez segít a fejlesztőknek és a fordítónak abban, hogy ellenőrizze, hogy a függvény valóban az elvárt típust adja vissza. Például:

Osztálymetódus visszatérési típussal:

getRecipe(index: number): Recipe {
return this.recipes[index];
}
Ez az első példa egy osztálymetódust mutat, amelynek explicit meg van határozva a visszatérési típusa (Recipe). Ez azt jelenti, hogy a függvény egy Recipe típusú értékkel tér vissza. A TypeScript ebben az esetben ellenőrzi, hogy a this.recipes[index] kifejezés valóban Recipe típusú-e, és hibaüzenetet ad, ha a típus nem egyezik.

Függvénykifejezés visszatérési típussal:

function add(x: number, y: number): number {
return x + y;
}
A második példa egy egyszerű függvénydeklarációt mutat, amely két számot vár bemenetként (x és y, mindkettő number típusú), és egy számot ad vissza (number), ami az x és y összege. Itt is, a TypeScript ellenőrzi, hogy a visszatérési érték típusa megfelel-e a deklarált number típusnak.

Mindkét esetben a TypeScript típusellenőrző rendszere biztosítja, hogy a függvények a megadott bemeneti és kimeneti típusoknak megfelelően viselkedjenek. Ez hozzájárul a kód hibáinak csökkentéséhez, mivel segít a fejlesztőnek már a fordítási időben felfedezni a potenciális típuskonfliktusokat és logikai hibákat. Az explicit visszatérési típus megadása nem kötelező, de erősen ajánlott a jobb kódolvasási élmény, a karbantartás és a típusbiztonság érdekében.

Angular és a React különböző programozási paradigma alkalmazását részesíti előnyben az alkalmazások struktúrájában és komponenseinek meghatározásában. Angularban az osztályalapú megközelítés dominál, míg a Reactben a funkcionális komponensek és a Hooks alkalmazása vált az elterjedt módszerré.

## 2. How can a JavaScript file be converted to a TypeScript file?

Egyszerűen át kell nevezni a .js kiterjesztést .ts-re, és már TypeScript fájlként lehet kezelni. A TypeScript nemcsak a JavaScript szintaxisát fogadja el, hanem kiegészíti azt saját típusellenőrzéseivel is.

## 3. What is the difference between using let and const in TypeScript?

A let egy változót deklarál, amely értéke később módosítható, míg a const egy olyan változót hoz létre, amely értéke nem változhat meg később.

## 4. How can an interface be defined in TypeScript?

Az interfészek a interface kulcsszóval definiálhatók. Például:
typescript
Copy code
interface Person {
name: string;
age: number;
}

## 5. What is the difference between interfaces and classes in TypeScript?

Az interfészek csak típusdefiníciókat tartalmaznak, míg az osztályok konkrét implementációkat is lehetővé tesznek. Az interfészek nem hoznak létre JavaScript kódot, csak a típusellenőrzést segítik.

## 6. How can a function type be defined in TypeScript?

Például így:
typescript
Copy code
type MyFunction = (param1: number, param2: string) => boolean;

## 7. What is generic type, and how to use in TypeScript?

A generikus típusokat a <> jelek között adhatjuk meg a függvények vagy osztályok definiálásakor. Például:

function identity<T>(arg: T): T {
return arg;
}

## 8. What is a decorator in TypeScript and how can it be used?

A dekorátorok kiegészítő funkciókat adnak osztályokhoz és osztályhoz tartozó elemekhez. Használatukhoz a @ karakterrel kezdődő kifejezést használjuk, például:

@decorator
class MyClass {
// class implementation
}

## 9. What is an Enum and how can it be used in TypeScript?

Az Enum egy különleges típus, amely egy adott érték halmazát reprezentálja. Például:
typescript
Copy code
enum Color {
Red,
Green,
Blue,
}
let c: Color = Color.Green;

## 10. How can modular code structure be implemented in TypeScript?

A moduláris kódstruktúra megvalósításához használhatunk export és import kulcsszavakat, amelyek segítségével különböző fájlokban tárolt kódrészleteket tudunk egymás között megosztani.

## 11. How are asynchronous operations handled in TypeScript?

Az aszinkron műveletek kezelésére használhatunk Promise-okat, async/await kifejezéseket vagy callback függvényeket.

## 12. How can TypeScript be used together with external JavaScript libraries?

A TypeScript definíciós fájlok (.d.ts) segítségével leírhatjuk a JavaScript könyvtárak típusinformációit, így a TypeScript is képes lesz ezeket használni.

## 13. What is a tuple in TypeScript and in what cases is it useful?

A tuple egy olyan típus, amely lehetővé teszi a heterogén elemekből álló fix hosszú sorozatok leírását. Hasznos például, amikor egy függvény több értéket is vissza szeretne adni, és ezek típusa előre ismert.

## 14. How to define optional parameters in a function in TypeScript?

A függvény paramétere elé az értékadás operátorral (?) ellátott az opcionális paramétereket definiálhatjuk. Például: function myFunction(x: number, y?: number) { }.

## 15. What is the difference between null and undefined in TypeScript?

A null és undefined mindkettő azt jelzi, hogy egy változónak nincs értéke, azonban a null expliciten be van állítva, míg az undefined azt jelenti, hogy a változóhoz nem rendelték hozzá az értéket.


