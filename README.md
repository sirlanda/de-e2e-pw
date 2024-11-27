# de-e2e-pw
E2E tesztelési tananyag - PlayWright 

## Előfeltételek
- b3 branch-en található előkészületek, feladatok végrehajtása.

## Teszt projekt felépítése

A tesztprojekt kódját a technológiától függetlenül érdemes az alábbiak szerint struktúrálni:

|          Útvonal          |                           Tartalom                           |
| :-----------------------: | :----------------------------------------------------------: |
|          `tests`          | Teszt specifikációk helye (ez a tesztek forráskódját jelenti) |
| `resources` vagy `assets` | Tesztadatok, tesztfájlok, konfigurációs állományok (a tesztek elvégzéséhez szükséges állományok) |
|           `api`           | Tesztelési segédosztályok (az alkalmazás tesztelési modellje) |
|        `api/pages`        |  Felületi elemeket leíró modellek (POM - page object model)  |
|         `api/dmo`         | Tesztelést segítő adatszerkezetek (felhasználó, folyamat, ügylet) |
|     `api/components`      | A projektre jellemző felületi elemek/komponensek (megerősítő popup, tól-ig-komponens) |

A felsorolás inkább példa akar lenni, mint szigorú szabály. A tesztelési segédosztályok esetében egy **nagyobb projektnél eleve érdemes modulok szintjén külön könyvtárba tenni** az itt felsorolt modell típusokat.

## Feladatok

1. Akkor legyen így!