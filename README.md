# de-e2e-pw
E2E tesztelési tananyag - PlayWright 

## Előfeltételek
- b3 branch-en található előkészületek, feladatok végrehajtása.

## Tesztek szerkezete

A **Gherkin szintaxis** egy ember által olvasható formátum, amelyet a viselkedésalapú fejlesztéshez (*Behavior-Driven Development*, BDD) használnak. Lehetővé teszi a fejlesztők, tesztelők és üzleti szereplők közötti kommunikációt az alkalmazás működéséről, olyan módon, hogy mindegyik fél könnyen megérthesse.  

A Gherkin lényegében egy szabályos nyelvtanra épülő szöveges formátum, amelyet például a **Cucumber** keretrendszer használ a tesztesetek definiálására és végrehajtására. A szintaxis lehetővé teszi, hogy a teszteseteket az üzleti követelményekhez igazítsák.

### Alapszintaxis elemei:

1. **Feature**: Az adott alkalmazás egy funkciójának leírása.  
   - *Példa*: `Feature: Bejelentkezés a rendszerbe`

2. **Scenario**: Egy konkrét forgatókönyv, amely egy adott funkciót vagy annak részét teszteli.  
   - *Példa*: `Scenario: Sikeres bejelentkezés érvényes adatokkal`

3. **Given**: A kezdeti állapot vagy feltétel meghatározása.  
   - *Példa*: `Given a felhasználó a bejelentkezési oldalon van`

4. **When**: Az a művelet vagy esemény, amelyet végrehajtanak.  
   - *Példa*: `When a felhasználó megadja az érvényes felhasználónevet és jelszót`

5. **Then**: Az elvárt eredmény leírása.  
   - *Példa*: `Then a felhasználó sikeresen bejelentkezik`

6. **And/But**: Kiegészítő feltételek vagy események.  
   - *Példa*: `And a felhasználó a kezdőoldalra kerül`

### Példa egy teljes forgatókönyvre:

```gherkin
Feature: Bejelentkezés

  Scenario: Sikeres bejelentkezés érvényes adatokkal
    Given a felhasználó a bejelentkezési oldalon van
    When a felhasználó megadja az érvényes felhasználónevet és jelszót
    Then a felhasználó sikeresen bejelentkezik
    And a kezdőoldal megjelenik
```

### Mire jó a Gherkin?

- **Közös nyelv**: Az üzleti szereplők és fejlesztők számára egyaránt érthető.
- **Automatizált tesztelés alapja**: A Gherkin-ben megírt forgatókönyveket a tesztelési eszközök (pl. Cucumber, SpecFlow) automatikusan végrehajthatják.
- **Dokumentáció**: Az alkalmazás funkcióinak jól strukturált leírását adja.

A Gherkin tehát hatékony eszköz a tesztelés és az üzleti követelmények összehangolására, és támogatja a fejlesztési folyamat átláthatóságát.

## Step-by-step

Ha megnézzük a tesztfutások által generált jegyzőkönyvet, akkor elég béna leírásokat találunk, ami ráadásul nem is segít a gyakorlatlan (üzleti oldalról érkező) szereplőknek. Hogyan tehetjük olvashatóbbá és struktúráltabbá a tesztjeinket?

```typescript
    await test.step('Bejelentkezés', async () => {
      const loginPage = new LoginPage(page);
      await loginPage.login();
    });
```

Gyakorlatilag a megjegyzések helyére beilleszthetjük ezeket a `test.step` hívásokat, és a megjegyzés tartalmát adjuk át első paraméternek. A UI-on keresztül (`npx playwright test --ui`) vagy a generált jelentésen keresztül (`npx playwright show-report`) látható, hogy mennyivel olvashatóbbá és érthetőbbé vált a tesztesetünk.

Arra kell csak vigyázni, hogy az így definiált kódblokkok nem publikálják a bennük létrehozott változókat. Ha egy változó értékére több blokkban is szükség van, akkor az első őt használó lépés előtt kell definiálni. (pl. esetünkben a feladat tárgya lehet ilyen)

Fontos, hogy ne maradjon ki az `await` kulcsszó, mert különben nem várja meg a végrehajtást a futó szál!

## Feladatok

1. Feleltessük meg egymásnak a Playwright által nyújtott API lehetőségeit és a Gherkin szintaxis elemeit!
   1. feature = spec fájl
   2. scenario = teszt
   3. given, when, then blokk = tesztlépés (utasítások és elvárások – mindig legyenek elvárások!)
2. Alakítsuk át a meglévő teszteket ebbe a formátumba!
3. A `test.step` használatával struktúráljuk a meglevő eseteket!