# de-e2e-pw
E2E tesztelési tananyag - PlayWright 

## Előfeltételek
- b1 branch-en található előkészületek, feladatok végrehajtása.

## Fenntartható fejlesztés

A kódduplikáció elkerülése a fenntarthatóság egyik alapfeltétele. Az erre ismertetett egyik technika, hogy hasonló kódrészleteket külön metódusba emeljük ki. Ha ebben vannak változó részek, akkor akár paraméterezhetjük is:

```typescript
async function login(page: Page, 
                     username: string = process.env.USERNAME ?? '',
                     password: string = process.env.PASSWORD ?? '') {
  await page.goto('');
  await page.getByLabel('Login').fill(username);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
}
```

Az ilyen függvényeket azon a ponton érdemes definiálni, ahol az őt használó specifikációk könnyedén elérik.

# Kicsoda POM?

<img src="./pom.jpg" alt="pom" style="zoom:50%;" />

Ennél sokkal hatékonyabb, ha az **objektum orientált** gondolkozást bevetve a metódusokat olyan osztályokban helyezzük el, amelyek a rendszer egy adott részének működését modellezik. Ezeket angolul **Page Object Model**-nek, vagy röviden pom-nak hívjuk.

A **Page Object Model (POM)** egy tervezési minta, amely a webes alkalmazások tesztelésénél különösen előnyös, mert:

1. **Olvashatóság és karbantarthatóság**: Az oldalspecifikus elemeket és műveleteket különálló osztályokban kezeljük, ami könnyen érthető és módosítható kódot eredményez.
2. **Újrahasznosíthatóság**: Az oldalakhoz kapcsolódó logikát egyszer kell megírni, és több tesztben is használható.
3. **Egyszerűbb hibakezelés**: Ha az oldal szerkezete változik, csak az adott oldal objektumait kell módosítani, nem minden tesztet.
4. **Modularitás**: A tesztek és az oldalspecifikus kód elkülönítése javítja a struktúrát és támogatja a nagyobb projekteket.
5. **Tisztább tesztek**: A tesztkódok fókuszáltak és érthetőbbek lesznek, mivel a teszt maga az üzleti logikára koncentrál, nem a webes elemek kezelésére.

POM tehát segíti a tesztelés hatékonyságát, miközben csökkenti a hosszú távú karbantartási költségeket.

## Hogyan néz ki ez a login esetében például?

Az eddigi függvény saját osztályba kerül `LoginPage.ts`:

```typescript
import { Page, Locator } from 'playwright';
import { expect } from 'playwright/test';

export class LoginPage {
    private page: Page;
    private username: Locator;
    private password: Locator;
    private signInButton: Locator;
    private signOutLink: Locator; // Ez csalás!

    constructor(page: Page) {
        this.page = page;
        this.username = this.page.getByLabel('Username');
        this.password = this.page.getByLabel('Password');
        this.signInButton = this.page.getByRole("button", { name: "Login" });
        this.signOutLink = this.page.getByRole('link', { name: 'Kijelentkezés' });
    }

    async login(username: string, password: string) {
        await this.page.goto('/');
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
        expect(this.signOutLink).toBeVisible();
    }
```

Látható, hogy az eddig több helyen is definiált felületi elemeket mostmár csak egyetlen helyen definiáljuk az osztály konstruktorában.
A `login` függvény pedig csak használja a már meglevő lokátorokat.

A használata pofonegyszerű:

```typescript
import { LoginPage } from '../LoginPage';

async function login(page: Page, 
  username: string = process.env.USERNAME ?? '',
  password: string = process.env.PASSWORD ?? '') {
  
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
}
```

## Feladatok

- login -> LoginPage
- MainPage / BasePage
  - menu
  - searchBar