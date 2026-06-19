<div class="grid cards frostwood-header-cards" markdown>

-   <span class="fw-module-header-icon fw-module-97" aria-hidden="true"></span>

    # 97. Frostwood ikonarchitektúra { #97-frostwood-ikonarchitektura }

    > Szerző: Hegedüs Gábor (@hege-g)<br>
    > Licenc: [MIT (Kód) / CC BY-NC-ND 4.0 (Docs)]<br>
    > Frostwood Docs: v1.0.0<br>
    > Rendszerverzió / Állapot: v1.0.5 / Stabil<br>
    > Blokk: <span class="fw-block-icon-main-referenciak" aria-hidden="true"></span> Referenciák<br>
    > A Frostwood dokumentációs ikonrendszer, navigációs hierarchia és Markdown-használati szabályok hivatalos specifikációja.

</div>

<div class="grid cards frostwood-toc-cards" markdown>

-   ## Tartalomkártyák

    * [:material-infinity: 1. Ikonarchitektúra célja](#1-ikonarchitektura-celja)
    * [:material-infinity: 2. Ikonhierarchia](#2-ikonhierarchia)
    * [:material-infinity: 3. Felső tab ikonok](#3-felso-tab-ikonok)
    * [:material-infinity: 4. Oldalsó navigációs ikonok](#4-oldalso-navigacios-ikonok)
    * [:material-infinity: 5. Modulikon-rendszer](#5-modulikon-rendszer)
    * [:material-infinity: 6. Függelék ikonok](#6-fuggelek-ikonok)
    * [:material-infinity: 7. Block icon osztályok](#7-block-icon-osztalyok)
    * [:material-infinity: 8. Frostwood dokumentációs billentyűnavigáció](#8-frostwood-dokumentacios-billentyunavigacio)
    * [:material-infinity: 9. WCAG viselkedés](#9-wcag-viselkedes)
    * [:material-infinity: 10. Markdown minták](#10-markdown-mintak)
    * [:material-infinity: 11. Tiltott minták](#11-tiltott-mintak)
    * [:material-infinity: 12. Karbantartási szabályok](#12-karbantartasi-szabalyok)
    * [:material-infinity: 13. Ikonarchitektúra státusz](#13-ikonarchitektura-statusz)

        * [:material-infinity: A) Függelék: Frostwood PWA ikoncsalád — ULTRA PRO+ EXPORT SPEC](#a-fuggelek-frostwood-pwa-ikoncsalad-ultra-pro-export-spec)
        * [:material-infinity: A/1. Cél](#a1-cel)
        * [:material-infinity: A/2. Forrásfájl](#a2-forrasfajl)
        * [:material-infinity: A/3. Közös vizuális szabályrendszer](#a3-kozos-vizualis-szabalyrendszer)
            * [:material-infinity: A/3.1 Általános vizuális szabályok](#a31-altalanos-vizualis-szabalyok)
            * [:material-infinity: A/3.2 Árnyékkezelés](#a32-arnyekkezeles)
            * [:material-infinity: A/3.3 Háttér](#a33-hatter)
            * [:material-infinity: A/3.4 Logó elhelyezés](#a34-logo-elhelyezes)
        * [:material-infinity: A/4. Technikai export szabályok](#a4-technikai-export-szabalyok)
            * [:material-infinity: A/4.1 Kimeneti formátum](#a41-kimeneti-formatum)
            * [:material-infinity: A/4.2 Rasterizálás](#a42-rasterizalas)
            * [:material-infinity: A/4.3 Kódtisztaság / gyártási tisztaság](#a43-kodtisztasag-gyartasi-tisztasag)
        * [:material-infinity: A/5. Ikoncsalád szintű közös arányelv](#a5-ikoncsalad-szintu-kozos-aranyelv)
        * [:material-infinity: A/6. Modulonkénti végleges export SPEC](#a6-modulonkenti-vegleges-export-spec)
            * [:material-infinity: A/6.1 PWA minimum ikon](#a61-pwa-minimum-ikon)
            * [:material-infinity: A/6.2 Fő PWA ikon](#a62-fo-pwa-ikon)
            * [:material-infinity: A/6.3 Android Maskable ikon](#a63-android-maskable-ikon)
            * [:material-infinity: A/6.4 Apple Touch ikon](#a64-apple-touch-ikon)
        * [:material-infinity: A/7. Frostwood platformszintű megjegyzés](#a7-frostwood-platformszintu-megjegyzes)
        * [:material-infinity: A/8. Minőségbiztosítási ellenőrzőlista](#a8-minosegbiztositasi-ellenorzolista)
        * [:material-infinity: A/9. Végleges fájllista](#a9-vegleges-fajllista)
        * [:material-infinity: A/10. Rövid gyártási összefoglaló](#a10-rovid-gyartasi-osszefoglalo)

</div>

## 1. Ikonarchitektúra célja

A Frostwood dokumentációs ikonrendszer célja a vizuális tájékozódás gyorsítása, a modulok egyértelmű azonosítása és a dokumentáció szerkezetének következetes megjelenítése.

Az ikonok nem önálló jelentéshordozók, és nem helyettesítik a szöveget.

Feladatuk:

* a navigáció támogatása,
* a vizuális memória kialakítása,
* a dokumentációs hierarchia megjelenítése,
* a modulok gyors felismerhetőségének javítása,
* valamint a Frostwood identitás egységes fenntartása.

???+ note "Megjegyzés"
    A Frostwood ikonarchitektúra nem dekorációs réteg, hanem vizuális navigációs rendszer.

    Képernyőolvasóval a szöveg, a címsor, a link és a gomb marad az elsődleges információforrás.


---

## 2. Ikonhierarchia

A Frostwood dokumentáció négy fő ikonréteget használ.

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### Szint 1 – Fő navigáció

    **Szerep:**

    * felső tab ikonok
    * fő oldalsó navigációs pontok
    * belépési irányok

    **Méretelv:**

    * nagyobb vizuális súly
    * kb. 24 px-es optikai méret

-   ### Szint 2 – Dokumentációs blokkok

    **Szerep:**

    * Alapok blokk
    * Rendszer blokk
    * Alkalmazások blokk
    * Referenciák blokk

    **Méretelv:**

    * közepes vizuális súly
    * kb. 20 px-es optikai méret

-   ### Szint 3 – Modulok

    **Szerep:**

    * 01–09
    * 11–19
    * 21–34
    * 89
    * 91–97
    * 99

    **Méretelv:**

    * modulazonosító ikon
    * kb. 16 px-es optikai méret navigációban
    * nagyobb megjelenés C1/C2 pozícióban

-   ### Szint 4 – Függelékek

    **Szerep:**

    * A) Függelék
    * B) Függelék
    * C) Függelék
    * D) Függelék

    **Méretelv:**

    * dokumentumfejléc feletti kiegészítő ikon
    * nem oldalsó navigációs jelölés

</div>

---

## 3. Felső tab ikonok

A felső tab ikonok automatikusan jelennek meg a `frostwood-extra-icons.css` szabályai alapján.

A szerzőnek külön Markdown-kódot nem kell írnia.

<div class="grid cards frostwood-section-cards" markdown>

-   ### Fő tabok

    **Ikon-hozzárendelés:**

    * Kezdőlap → `fw-main-kezdolap-dashboard-iso.svg`
    * Gyors áttekintés → `fw-main-gyors-attekintes-villam-iso.svg`
    * Dokumentációs blokkok → `fw-main-dokumentacios-hub-iso.svg`
    * Letöltések → `fw-main-letoltesek-fagyott-fa-iso.svg`
    * Alapok → `fw-main-alapok-retegzett-kocka-iso.svg`
    * Rendszer → `fw-main-rendszer-fogaskerekek-iso.svg`
    * Alkalmazások → `fw-main-alkalmazasok-uveglap-alkalmazasnegyzet-iso.svg`
    * Referenciák → `fw-main-referenciak-archivum-mappa-iso.svg`
    * Licenc → `fw-special-license-merleg-iso.svg`

-   ### Működési szabály

    A felső tab ikonok:

    * vizuális orientációt adnak,
    * nem kapnak külön fókuszt,
    * nem helyettesítik a tab szövegét,
    * WCAG módban eltüntethetők.

</div>

---

## 4. Oldalsó navigációs ikonok

Az oldalsó navigációs ikonok célja a dokumentációs hierarchia gyors vizuális felismerése.

A bal oldali navigáció három vizuális szintet különböztet meg:

* fő pontok,
* blokkoldalak,
* modulok.

<div class="grid cards frostwood-section-cards" markdown>

-   ### Fő pontok

    **Példák:**

    * Kezdőlap
    * Gyors áttekintés
    * Dokumentációs blokkok
    * Letöltések
    * Licenc

    **Vizuális szerep:**

    Ezek a dokumentáció fő belépési pontjai, ezért nagyobb ikonsúlyt kaphatnak.

-   ### Blokkoldalak

    **Példák:**

    * Alapok blokk
    * Rendszer blokk
    * Alkalmazások blokk
    * Referenciák blokk

    **Vizuális szerep:**

    Ezek a dokumentáció fő szerkezeti területei.

-   ### Modulok

    **Példák:**

    * 01. Áttekintés
    * 22. Total Commander
    * 91. Színkódok
    * 97. Frostwood ikonarchitektúra

    **Vizuális szerep:**

    A modulikonok az adott dokumentum vizuális azonosítói.

</div>

???+ tip "Tipp"
    Az oldalsó navigációban a modulikonok használata akkor működik jól, ha a modulikon ugyanaz, mint a dokumentum fejlécében és a blokkoldali modulkártyán.


---

## 5. Modulikon-rendszer

A Frostwood minden fő dokumentációs modulhoz egyedi modulikont rendel.

Ugyanaz az ikon jelenik meg:

* az oldalsó navigációban,
* a dokumentum fejlécében,
* a blokkoldali modulkártyán.

Ez biztosítja a vizuális memória kialakulását.

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### C1 – Dokumentum fejléc ikon

    A C1 ikon a dokumentum H1 címe fölött jelenik meg.

    Célja, hogy a látó felhasználó azonnal felismerje, melyik modulban jár.

    A C1 ikon:

    * nem kerül fókuszba,
    * képernyőolvasó számára rejtett,
    * a modul vizuális azonosítója,
    * ugyanazt az SVG-t használja, mint a C2 ikon.

    ```html title="C1 minta"
    <span class="fw-module-header-icon fw-module-01" aria-hidden="true"></span>

    # 01. Áttekintés { #01-attekintes }
    ```

-   ### C2 – Blokkoldali modulkártya ikon

    A C2 ikon a blokkoldalakon, az adott modulkártya H3 címe fölött jelenik meg.

    A C2 ikon:

    * vizuálisan a H3 cím része,
    * ugyanarra a célra mutat, mint a H3 link,
    * `aria-hidden="true"` értéket kap,
    * `tabindex="-1"` értékkel nem kerül be a billentyűs fókuszsorrendbe,
    * nem ad plusz linket a képernyőolvasónak,
    * látó felhasználónak kattintható vizuális célpont.

    ```html title="C2 minta"
    <a class="fw-module-card-icon fw-module-01"
       href="01-attekintes.md#01-attekintes"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [01. Áttekintés](01-attekintes.md#01-attekintes)
    ```

</div>

???+ note "Megjegyzés"
    A C2 ikon és a H3 cím vizuálisan egy egységet alkot.

    A H3 továbbra is valódi Markdown címsor marad, ezért a dokumentumszerkezet, a tartalomjegyzék és a képernyőolvasós navigáció nem sérül.


---

## 6. Függelék ikonok

A függelékek külön ikonréteget használnak.

A függelék ikon:

* a fejléckártyán belül jelenik meg,
* a H1 cím fölött áll,
* nem oldalsó navigációs ikon,
* nem modulikon,
* hanem kiegészítő dokumentumtípus-jelölés.

A függelék ikonok:

* A) Függelék → `fw-special-fuggolek-gemkapocs-a-iso.svg`
* B) Függelék → `fw-special-fuggolek-gemkapocs-b-iso.svg`
* C) Függelék → `fw-special-fuggolek-gemkapocs-c-iso.svg`
* D) Függelék → `fw-special-fuggolek-gemkapocs-d-iso.svg`

```html title="Függelék fejléc minta"
<div class="grid cards frostwood-header-cards" markdown>

-   <span class="fw-appendix-header-icon fw-appendix-a" aria-hidden="true"></span>

    # A) Függelék: Rendszer ikonok (figurák) részletes vizuális elemzése { #a-fuggelek-rendszer-ikonok-figurak-reszletes-vizualis-elemzese }

    > Szerző: Hegedüs Gábor (@hege-g)<br>
    > Licenc: [MIT (Kód) / CC BY-NC-ND 4.0 (Docs)]<br>
    > Frostwood Docs: v1.0.0<br>
    > Rendszerverzió / Állapot: v1.0.5 / Stabil<br>
    > Blokk: <span class="fw-block-icon-main-alapok" aria-hidden="true"></span> Alapok<br>
    > Kiegészítő függelék a `08. Rendszer ikonok` modulhoz.

</div>
```

---

## 7. Block icon osztályok

A block icon osztályok rövid, kézzel beszúrt, vizuális azonosítók.

Ezek akkor hasznosak, amikor nem automatikus navigációs ikon kell, hanem kézi, kontextuson belüli blokkjelölés.

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### Elérhető fő osztályok

    ```text title="Block icon osztályok"
    fw-block-icon-main-kezdolap
    fw-block-icon-main-gyors-attekintes
    fw-block-icon-main-dokumentacios-hub
    fw-block-icon-main-dokumentacios-blokkok
    fw-block-icon-main-letoltesek
    fw-block-icon-main-alapok
    fw-block-icon-main-rendszer
    fw-block-icon-main-alkalmazasok
    fw-block-icon-main-referenciak
    fw-block-icon-main-licenc
    ```

-   ### Használati minta

    ```html title="Block icon minta"
    <span class="fw-block-icon-main-alapok" aria-hidden="true"></span> Alapok
    ```

</div>

???+ tip "Tipp"
    A block icon osztályoknál mindig legyen `aria-hidden="true"`, mert ezek vizuális tájékozódási segédletek, nem önálló felolvasandó tartalmak.


---

## 8. Frostwood dokumentációs billentyűnavigáció

A Frostwood dokumentáció saját, kiegészítő billentyűnavigációt használ.

Ez nem a Material MkDocs `navigation.keyboard` funkciójának egyszerű átnevezése, hanem Frostwood-specifikus, dokumentációs használatra rögzített szabvány.

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### Oldal teteje

    :material-keyboard-tab: **Alt + Shift + Home**

    **Funkció:**

    * az aktuális oldal tetejére ugrik,
    * a fő tartalmi H1 címsorra vagy a fő tartalmi régióra ad fókuszt,
    * képernyőolvasóval rövid visszajelzést ad: `Ugrás az oldal tetejére`.

-   ### Előző oldal

    :material-page-previous-outline: **Alt + Shift + PageDown**

    **Funkció:**

    * az előző dokumentációs oldalra lép,
    * a Material footer előző oldal hivatkozását használja,
    * nem ad külön hangos visszajelzést, mert az új oldal betöltése önmagában állapotváltozás.

-   ### Következő oldal

    :material-page-next-outline: **Alt + Shift + PageUp**

    **Funkció:**

    * a következő dokumentációs oldalra lép,
    * a Material footer következő oldal hivatkozását használja,
    * nem ad külön hangos visszajelzést, mert az új oldal betöltése önmagában állapotváltozás.

-   ### Kivételi szabály

    **Nem aktiválódik:**

    * keresőmezőben,
    * szövegbeviteli mezőben,
    * legördülő mezőben,
    * szerkeszthető tartalmi régióban.

</div>

???+ note "Megjegyzés"
    A Frostwood dokumentációs billentyűnavigáció célja a gyorsabb dokumentációs mozgás.

    Nem helyettesíti a képernyőolvasó saját gyorsbillentyűit, és nem írja felül a Material MkDocs jól működő navigációs címkéit.


---

## 9. WCAG viselkedés

WCAG módban a dekoratív vagy vizuális navigációs ikonok eltüntethetők.

A Frostwood ikonrendszer úgy van kialakítva, hogy ikonok nélkül is teljes értékű maradjon.

Megmarad:

* szöveg,
* link,
* gomb,
* címsor,
* dokumentumszerkezet,
* billentyűs navigáció.

Eltűnhet:

* felső tab ikon,
* oldalsó navigációs ikon,
* C1 modulikon,
* C2 modulkártya ikon,
* függelék ikon,
* block icon span.

???+ warning "Fontos"
    Az ikon soha nem lehet az egyetlen jelentéshordozó.

    Ha egy ikon eltűnik WCAG módban, a szövegnek akkor is teljesen érthetőnek kell maradnia.


---

## 10. Markdown minták

Ez a fejezet a dokumentáció szerkesztésekor használandó mintákat rögzíti.

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### Dokumentumfejléc modulikon

    ```html title="Dokumentumfejléc modulikon"
    <div class="grid cards frostwood-header-cards" markdown>

    -   <span class="fw-module-header-icon fw-module-97" aria-hidden="true"></span>

        # 97. Frostwood ikonarchitektúra { #97-frostwood-ikonarchitektura }

        > Szerző: Hegedüs Gábor (@hege-g)<br>
        > Licenc: [MIT (Kód) / CC BY-NC-ND 4.0 (Docs)]<br>
        > Frostwood Docs: v1.0.0<br>
        > Rendszerverzió / Állapot: v1.0.5 / Stabil<br>
        > Blokk: <span class="fw-block-icon-main-referenciak" aria-hidden="true"></span> Referenciák<br>
        > A Frostwood dokumentációs ikonrendszer hivatalos specifikációja.

    </div>
    ```

-   ### Blokkoldali C2 modulkártya ikon

    ```html title="C2 modulkártya ikon"
    <a class="fw-module-card-icon fw-module-97"
       href="97-frostwood-ikonarchitektura-guide.md#97-frostwood-ikonarchitektura"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [97. Frostwood ikonarchitektúra](97-frostwood-ikonarchitektura-guide.md#97-frostwood-ikonarchitektura)
    ```

-   ### Függelék ikon

    ```html title="Függelék ikon"
    <span class="fw-appendix-header-icon fw-appendix-a" aria-hidden="true"></span>

    # A) Függelék címe { #a-fuggelek-cime }
    ```

-   ### Linken belüli Material ikon

    ```md title="Linken belüli Material ikon"
    [:material-cube-send: Áttekintés megnyitása](01-attekintes.md#01-attekintes){ .md-button }
    ```

-   ### Sima szövegben vagy címsorban használt Material ikon

    ```md title="Sima Material ikon"
    ## :material-puzzle-outline: Dokumentációs alapelvek
    ```

</div>

---

## 11. Tiltott minták

A következő minták kerülendők, mert zajosak, törékenyek vagy nem illeszkednek a Frostwood ikonarchitektúrához.

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### Emoji alapú modulikon

    ```md title="Nem használt minta"
    ### 🧭 Áttekintés
    ```

-   ### Material ikon modulazonosítóként

    ```md title="Nem használt minta"
    ### :material-home: 01. Áttekintés
    ```

-   ### Ikon önálló jelentéshordozóként

    ```md title="Nem használt minta"
    :material-alert:
    ```

    Megfelelő szöveg nélkül az ikon nem használható jelentésközlésre.

-   ### Képernyőolvasó számára feleslegesen felolvasott vizuális ikon

    ```html title="Nem használt minta"
    <span class="fw-block-icon-main-alapok"></span> Alapok
    ```

    Helyesen:

    ```html title="Helyes minta"
    <span class="fw-block-icon-main-alapok" aria-hidden="true"></span> Alapok
    ```

</div>

---

## 12. Karbantartási szabályok

Új modul létrehozásakor az ikonrendszert is frissíteni kell.

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### Új modul felvételekor

    1. Elkészül a modulhoz tartozó Frostwood izometrikus SVG ikon.
    2. Az ikon bekerül az `assets/icons/` mappába.
    3. A `frostwood-extra-icons.css` oldalsó navigációs ikon-hozzárendelése frissül.
    4. Létrejön a modulhoz tartozó `fw-module-XX` osztály.
    5. A dokumentumfejléc megkapja a C1 ikont.
    6. A blokkoldali modulkártya megkapja a C2 ikont.
    7. A Referenciák vagy blokkoldali összefoglaló frissül, ha a modul új dokumentációs szerepet kap.

-   ### Új blokk felvételekor

    1. Elkészül a fő blokkikon.
    2. Frissül a felső tab ikon.
    3. Frissül az oldalsó nav ikon.
    4. Létrejön a block icon span osztály.
    5. Frissül az index és a blokkstruktúra.

-   ### Új függelék felvételekor

    1. Ellenőrizni kell, hogy A/B/C/D függelékikon elegendő-e.
    2. A fejléckártyába bekerül a megfelelő függelékikon.
    3. A függeléknek továbbra is önálló, egyértelmű címe marad.
    4. A függelék ikon nem helyettesíti a függelék címét vagy leírását.

</div>

??? info "Vizuális leírás az akadálymentes használathoz"
    A Frostwood ikonarchitektúra több szintből álló vizuális tájékozódási rendszer.

    A legfelső szint a fő navigációt jelöli.

    A második szint a dokumentációs blokkokat azonosítja.

    A harmadik szint a modulokat különbözteti meg.

    A negyedik szint a függelékeket jelöli.

    Az ikonok látó felhasználóknak segítik a gyors felismerést, de a dokumentáció minden fontos információt szövegesen is tartalmaz.

    WCAG módban az ikonok eltűnhetnek, a szöveges szerkezet azonban változatlan marad.


---

## 13. Ikonarchitektúra státusz

> A Frostwood ikonrendszer nem grafikai díszítés,<br>
> hanem a dokumentáció vizuális navigációs rétege.

> Az ikon segít felismerni,<br>
> de a szöveg adja a jelentést.

---

<div class="grid cards frostwood-header-cards" markdown>

-   <span class="fw-appendix-header-icon fw-appendix-a" aria-hidden="true"></span>

    # A) Függelék: Frostwood PWA ikoncsalád — ULTRA PRO+ EXPORT SPEC { #a-fuggelek-frostwood-pwa-ikoncsalad-ultra-pro-export-spec }

    > Szerző: Hegedüs Gábor (@hege-g)<br>
    > Licenc: [MIT (Kód) / CC BY-NC-ND 4.0 (Docs)]<br>
    > Frostwood Docs: v1.0.0<br>
    > Rendszerverzió / Állapot: v1.0.5 / Stabil<br>
    > Blokk: <span class="fw-block-icon-main-referenciak" aria-hidden="true"></span> Referenciák<br>
    > Kiegészítő függelék a `97. Frostwood ikonarchitektúra` modulhoz.

</div>

<div class="grid cards frostwood-toc-cards" markdown>

-   ## Tartalomkártyák

    * [:material-infinity: A/1. Cél](#a1-cel)
    * [:material-infinity: A/2. Forrásfájl](#a2-forrasfajl)
    * [:material-infinity: A/3. Közös vizuális szabályrendszer](#a3-kozos-vizualis-szabalyrendszer)
        * [:material-infinity: A/3.1 Általános vizuális szabályok](#a31-altalanos-vizualis-szabalyok)
        * [:material-infinity: A/3.2 Árnyékkezelés](#a32-arnyekkezeles)
        * [:material-infinity: A/3.3 Háttér](#a33-hatter)
        * [:material-infinity: A/3.4 Logó elhelyezés](#a34-logo-elhelyezes)
    * [:material-infinity: A/4. Technikai export szabályok](#a4-technikai-export-szabalyok)
        * [:material-infinity: A/4.1 Kimeneti formátum](#a41-kimeneti-formatum)
        * [:material-infinity: A/4.2 Rasterizálás](#a42-rasterizalas)
        * [:material-infinity: A/4.3 Kódtisztaság / gyártási tisztaság](#a43-kodtisztasag-gyartasi-tisztasag)
    * [:material-infinity: A/5. Ikoncsalád szintű közös arányelv](#a5-ikoncsalad-szintu-kozos-aranyelv)
    * [:material-infinity: A/6. Modulonkénti végleges export SPEC](#a6-modulonkenti-vegleges-export-spec)
        * [:material-infinity: A/6.1 PWA minimum ikon](#a61-pwa-minimum-ikon)
        * [:material-infinity: A/6.2 Fő PWA ikon](#a62-fo-pwa-ikon)
        * [:material-infinity: A/6.3 Android Maskable ikon](#a63-android-maskable-ikon)
        * [:material-infinity: A/6.4 Apple Touch ikon](#a64-apple-touch-ikon)
    * [:material-infinity: A/7. Frostwood platformszintű megjegyzés](#a7-frostwood-platformszintu-megjegyzes)
    * [:material-infinity: A/8. Minőségbiztosítási ellenőrzőlista](#a8-minosegbiztositasi-ellenorzolista)
    * [:material-infinity: A/9. Végleges fájllista](#a9-vegleges-fajllista)
    * [:material-infinity: A/10. Rövid gyártási összefoglaló](#a10-rovid-gyartasi-osszefoglalo)

</div>

> A Frostwood dokumentáció Progresszív Webalkalmazás (PWA) módban is ugyanazt a vizuális identitást használja, mint böngészőben.

> **Képernyőorientáció:** A Frostwood PWA nem kényszerít orientációt. A böngésző és az operációs rendszer alapértelmezett viselkedése érvényesül.

> A PWA ikonrendszer a Frostwood embléma hivatalos alkalmazásikon- változatait tartalmazza Android, iOS, Chrome, Edge és Windows platformokhoz.

## A/1. Cél

Ez a specifikáció a Frostwood dokumentációs rendszer hivatalos **PWA ikoncsaládjának** gyártási szabályait rögzíti.

A cél egyetlen, egységes, világos hátterű ikoncsalád létrehozása, amely minden releváns platformon következetesen használható:

* Android
* Chrome
* Edge
* Windows 11
* iOS
* iPadOS

A teljes rendszerben a vizuális alap azonos marad:

**Frostwood logó + világos háttér + középre igazított kompozíció + platform-kompatibilis méretezés.**

---

## A/2. Forrásfájl

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### Elsődleges forrás

    `logo_100_active.svg`

    Ez a forrásfájl szolgál minden export alapjául.

-   ### Forráskezelési szabályok

    * A forrás **vektoros SVG** maradjon.
    * A logó arányai **nem torzíthatók**.
    * A logó körül kötelező optikai lélegző tér maradjon.
    * A kimenetek minden esetben ebből az egyetlen hivatalos forrásból készüljenek.

</div>

---

## A/3. Közös vizuális szabályrendszer

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### A/3.1 Általános vizuális szabályok

    Minden ikonra kötelező:

    * **PNG export**
    * **sRGB színtér**
    * **négyzetes vászon**
    * **háttér: `#FBFBFB`**
    * **középre igazított logó**
    * **optikailag középre igazított kompozíció**
    * **nincs szöveg**
    * **nincs keret**
                                               * **nincs erős árnyék**
    * **nincs térbeli effekt**
    * **nincs extra embléma vagy díszítőelem**
    * **nincs sötét háttérváltozat**
    * **Frostwood vizuális identitás megtartása**

-   ### A/3.2 Árnyékkezelés

    Általános szabály:

     * árnyék **nem szükséges**
    * ha mégis van, akkor csak **rendkívül enyhe**
    * az árnyék nem befolyásolhatja a tiszta, sík, appikon-jellegű megjelenést

    Javasolt döntés:

    * **Elsődleges gyártási irány:** árnyék nélküli export

-   ### A/3.3 Háttér

    Minden ikon háttere:

    `#FBFBFB`

    Ez a teljes PWA családon belül fix és egységes.

-   ### A/3.4 Logó elhelyezés

    * geometriailag középre igazított
    * optikailag is középre korrigált
    * ne tűnjön se túl magasnak, se túl alacsonynak
    * ne érjen a vászon széléhez
    * maradjon tiszta margó minden oldalon

</div>

---

# A/4. Technikai export szabályok

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### A/4.1 Kimeneti formátum

    * **Formátum:** `PNG`
    * **Színmód:** sRGB
    * **Háttér:** beégetett, egyszínű `#FBFBFB`
    * **Átlátszóság:** nem kötelező, általában nem szükséges

-   ### A/4.2 Rasterizálás

    * éles rasterizálás
    * aliasing rendben kezelt legyen
    * a logó szélei ne legyenek recések
    * túlzott blur vagy puha élkezelés nem megengedett

-   ### A/4.3 Kódtisztaság / gyártási tisztaság

    * exportált fájlnevek pontosan a specifikáció szerint készüljenek
    * felesleges duplikált fájlok ne készüljenek
    * a négy ikon ugyanabból a forráslogikából épüljön fel
    * csak a vászonméret és a logó kitöltése változzon

</div>

---

## A/5. Ikoncsalád szintű közös arányelv

A négy export között a fő különbség a **logó kitöltési aránya**.

### Kitöltési logika

* **PWA minimum:** → erősebb kitöltés
* **PWA fő ikon:** → hasonló, kicsit lazább kitöltés
* **Maskable:** → jelentősen kisebb kitöltés, nagy biztonsági zónával
* **Apple Touch Icon:** → közepes kitöltés, iOS-hez finoman levegősebb arány

---

## A/6. Modulonkénti végleges export SPEC

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### A/6.1 PWA minimum ikon

    * **Fájlnév:** `pwa-192.png`
    * **Vászon:** 192 × 192 px
    * **Háttér:** `#FBFBFB`
    * **Logókitöltés:** kb. 85%
    * **Kompozíció:**

        * középre igazított logó
        * optikailag kiegyensúlyozott
        * a logó körül keskeny, de tiszta margó maradjon

    * **Cél:**

        * Android kezdőképernyő
        * Chrome PWA minimum ikon

    ???+ note "Gyártási megjegyzés"
        Ez a változat legyen kompakt és határozott, mert a kisebb vászonméret miatt a logó vizuális jelenléte itt fontosabb.


-   ### A/6.2 Fő PWA ikon

    * **Fájlnév:** `pwa-512.png`
    * **Vászon:** 512 × 512 px
    * **Háttér:** `#FBFBFB`
    * **Logókitöltés:** kb. 82–85%
    * **Kompozíció:**

        * középre igazított logó
        * kiegyensúlyozott optikai margó
        * ne legyen túl kicsi, mert ez a rendszer elsődleges hivatalos alkalmazásikonja

    * **Cél:**

        * telepítési képernyő
        * splash screen
        * PWA alkalmazásikon
        * Frostwood rendszer hivatalos appikonja

    * **Frostwood státusz:**

        A teljes rendszer hivatalos alkalmazásikonja:

        `pwa-512.png`

-   ### A/6.3 Android Maskable ikon

    * **Fájlnév:** `pwa-maskable-512.png`
    * **Vászon:** 512 × 512 px
    * **Háttér:** `#FBFBFB`
    * **Logókitöltés:** kb. 60–65%
    * **Elhelyezés:**

    * középre igazított
    * optikailag középre korrigált
    * a teljes logó maradjon a középső biztonsági zónában

    * **Fontos maskable szabály:**

        * a széleken nagy üres tér szükséges
        * a logó minden lényeges része maradjon biztonságos belső területen
        * a szélek felől történő platform-vágás esetén se sérüljön a logó

    * **Cél:**

        * Android adaptív ikon

    ???+ note "Gyártási megjegyzés"
        Ez a fájl **nem egyszerűen egy kisebb logójú 512-es ikon**, hanem kifejezetten a maskable használatra optimalizált változat.


-   ### A/6.4 Apple Touch ikon

    * **Fájlnév:** `apple-touch-icon.png`
    * **Vászon:** 180 × 180 px
    * **Háttér:** `#FBFBFB`
    * **Logókitöltés:** kb. 70–75%
    * **Kompozíció:**

        * középre igazított logó
        * kicsit levegősebb arány
    * iOS / iPadOS kezdőképernyős használatra vizuálisan kiegyensúlyozott elhelyezés

    * **Cél:**

    * iPhone kezdőképernyő
        * iPad kezdőképernyő

</div>

---

## A/7. Frostwood platformszintű megjegyzés

Külön sötét hátterű PWA ikoncsalád **nem készül**.

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### Érvényes döntés

    A teljes Frostwood PWA rendszer egyetlen, világos hátterű ikoncsaládot használ:

    **Háttér:** `#FBFBFB`

-   ### Platformlista

    Ez az egységes család szolgál minden platformra:

    * Android
    * Chrome
    * Edge
    * Windows 11
    * iOS
    * iPadOS

</div>

---

## A/8. Minőségbiztosítási ellenőrzőlista

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### Kötelező vizuális ellenőrzés

    * :material-checkbox-blank-outline: a háttér minden esetben `#FBFBFB`
    * :material-checkbox-blank-outline: a logó minden ikonon középre igazított
    * :material-checkbox-blank-outline: nincs szöveg
    * :material-checkbox-blank-outline: nincs erős árnyék
    * :material-checkbox-blank-outline: nincs torzulás
    * :material-checkbox-blank-outline: a logó nem ér a vászon széléhez
    * :material-checkbox-blank-outline: a kompozíció optikailag középre igazított
    * :material-checkbox-blank-outline: a PNG export éles és tiszta
    * :material-checkbox-blank-outline: az összes fájl sRGB színtérben készült

-   ### Méretarány-ellenőrzés

    * :material-checkbox-blank-outline: pwa-192.png → kb. 85% kitöltés
    * :material-checkbox-blank-outline: pwa-512.png → kb. 82–85% kitöltés
    * :material-checkbox-blank-outline: pwa-maskable-512.png → kb. 60–65% kitöltés
    * :material-checkbox-blank-outline: apple-touch-icon.png → kb. 70–75% kitöltés

-   ### Maskable-specifikus ellenőrzés

    * :material-checkbox-blank-outline: a logó minden fontos része a középső biztonsági zónában marad
    * :material-checkbox-blank-outline: a széleken elegendő üres tér van
    * :material-checkbox-blank-outline: adaptív ikonvágás esetén sem sérül a forma

</div>

---

## A/9. Végleges fájllista

* `pwa-192.png`
* `pwa-512.png`
* `pwa-maskable-512.png`
* `apple-touch-icon.png`

---

## A/10. Rövid gyártási összefoglaló

???+ success "A gyártandó PWA ikoncsalád"
    * 4 darab PNG export
    * egységes háttér: `#FBFBFB`
    * egységes Frostwood logó
    * középre igazított kompozíció
    * platformonként optimalizált kitöltési arány
    * maskable változatnál nagy biztonsági zóna
    * sRGB színtér
    * tiszta, éles export
    * nincs külön sötét ikoncsalád
    * **Hivatalos fő appikon:** `pwa-512.png`
