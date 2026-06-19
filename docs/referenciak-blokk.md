<div class="grid cards frostwood-header-cards" markdown>

-   <span class="fw-block-icon-main-referenciak" aria-hidden="true"></span>

    # Referenciák blokk { #referenciak-blokk }

    > A Frostwood közös jelentés-, audit- és referenciaarchitektúrája.

</div>

<div class="grid cards frostwood-toc-cards" markdown>

-   ## Tartalomkártyák

    * [:material-infinity: Referenciák blokk összefoglaló](#referenciak-blokk-osszefoglalo)
    * [:material-infinity: Referenciák blokk moduljai](#referenciak-blokk-moduljai)
        * [:material-infinity: 91. Színkódok](#91-szinkodok)
        * [:material-infinity: 92. Jelzés színek / viselkedés](#92-jelzes-szinek-viselkedes)
        * [:material-infinity: 93. Útiterv](#93-utiterv)
        * [:material-infinity: 94. Rendszer áttekintés](#94-rendszer-attekintes)
        * [:material-infinity: 95. Változásnapló](#95-valtozasnaplo)
        * [:material-infinity: 96. Telepítőcsomag struktúra](#96-telepitocsomag-struktura)
        * [:material-infinity: 97. Frostwood ikonarchitektúra](#97-frostwood-ikonarchitektura)
        * [:material-infinity: 99. Referenciák blokk architektúra (DEV)](#99-referenciak-blokk-architektura-dev)
    * [:material-infinity: Referenciák blokk státusz](#referenciak-blokk-statusz)

</div>

## Referenciák blokk összefoglaló

A rendszer technikai, strukturális és szabványügyi dokumentációjának elérése:

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### Fogalmi referencia

    :material-book-open-variant: **91, 92, 94. Modul**

-   ### Jelzés- és színrendszer

    :material-palette-swatch-outline: **91, 92. Modul**

-   ### Döntési és verziókeret

    :material-source-branch: **93, 95. Modul**

-   ### Strukturális referencia

    :material-file-tree: **96. Modul**

-   ### Ikon- és navigációs architektúra

    :material-keyboard-settings-outline: **97. Modul**

-   ### Fejlesztői architektúra (DEV)

    :material-code-json: **99. Modul**

</div>

??? note "Megjegyzés (fontos konzisztencia miatt)"
    A Referenciák blokkban szándékosan van **átfedés**:

    * **91, 92. Modul** → külön is szerepelnek (szín + jelzés kritikus réteg)
    * **94. Modul** → összefoglaló, de fogalmi referencia is
    * **97. Modul** → ikonarchitektúra, navigációs viselkedés és billentyűnavigációs szabvány

    Ez nem hiba, hanem:

    > **Többdimenziós referencia-rendszer.**


---

## Referenciák blokk moduljai

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   <a class="fw-module-card-icon fw-module-91"
       href="91-szinkodok.md#91-hasznalt-szinkodok-vegleges"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [91. Színkódok](91-szinkodok.md#91-hasznalt-szinkodok-vegleges)

    A rendszer globális színreferenciája.

    **Szabványosított specifikáció:**

    * jóváhagyott Frostwood színkódok
    * világos, sötét és WCAG referenciafelületek
    * fókusz- és jelzésszínek
    * hover és nem-jelentés színek
    * tiltott és kerülendő színek
    * függelékek (ikonrendszer, zebra, tolerancia, implementációs megjegyzések)

    [:material-cube-send: Színkódok megnyitása](91-szinkodok.md#91-hasznalt-szinkodok-vegleges){ .md-button }

-   <a class="fw-module-card-icon fw-module-92"
       href="92-jelzes-szinek.md#92-jelzes-szinek-es-jelzes-viselkedes"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [92. Jelzés színek / viselkedés](92-jelzes-szinek.md#92-jelzes-szinek-es-jelzes-viselkedes)

    A jelzések jelentéshez kötött szín- és viselkedésrendszere.

    **Szabványosított specifikáció:**

    * jelzési szerepek
    * domináns jelzés elve
    * zajszint-modell
    * WCAG jelzéskorlátok
    * tiltólista és engedélylista
    * A), B), C), D) függelékek (gyakorlati példák, edge case-ek, implementációs minták)

    [:material-cube-send: Jelzés színek / viselkedés megnyitása](92-jelzes-szinek.md#92-jelzes-szinek-es-jelzes-viselkedes){ .md-button }

-   <a class="fw-module-card-icon fw-module-93"
       href="93-utiterv.md#93-utiterv-utemterv"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [93. Útiterv](93-utiterv.md#93-utiterv-utemterv)

    Középtávú fejlesztési és kiadási irányok.

    **Fogalmi keretrendszer:**

    * fejlesztési irányok
    * mi fér bele / mi nem fér bele a következő stabil ágba
    * döntési szabályok
    * stabilitási prioritások
    * hatókör: nem backlog, nem feature lista, hanem döntési keret

    [:material-cube-send: Útiterv megnyitása](93-utiterv.md#93-utiterv-utemterv){ .md-button }

-   <a class="fw-module-card-icon fw-module-94"
       href="94-rendszer-attekintes.md#94-rendszer-attekintes"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [94. Rendszer áttekintés](94-rendszer-attekintes.md#94-rendszer-attekintes)

    A Frostwood teljes rendszerösszefoglalója.

    **Fogalmi keretrendszer:**

    * a rendszer fő rétegei
    * a két fő pillér
    * mentális terhelés modell
    * rendszerhatárok
    * referencia modell (nem lépésről-lépésre útmutató)

    [:material-cube-send: Rendszer áttekintés megnyitása](94-rendszer-attekintes.md#94-rendszer-attekintes){ .md-button }

-   <a class="fw-module-card-icon fw-module-95"
       href="95-valtozasnaplo.md#95-valtozasnaplo"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [95. Változásnapló](95-valtozasnaplo.md#95-valtozasnaplo)

    A Frostwood rendszer és dokumentáció hivatalos változásnaplója.

    **Dokumentációs audit:**

    * hivatalos verziótörténet
    * rendszer- és dokumentációszintű változások
    * verzióelv
    * bejegyzési szabvány
    * verzióváltási szabály
    * Docs vs System változások elkülönítése
    * auditálható módosítási történet

    [:material-cube-send: Változásnapló megnyitása](95-valtozasnaplo.md#95-valtozasnaplo){ .md-button }

-   <a class="fw-module-card-icon fw-module-96"
       href="96-telepitocsomag-struktura.md#96-telepitocsomag-struktura"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [96. Telepítőcsomag struktúra](96-telepitocsomag-struktura.md#96-telepitocsomag-struktura)

    A teljes telepítőcsomag böngészhető fájl- és mappaszerkezete.

    **Dokumentációs audit:**

    * teljes fájl- és mappaszerkezet
    * gyors navigáció
    * audit célú ellenőrzés
    * strukturális konzisztencia validáció

    [:material-cube-send: Telepítőcsomag struktúra megnyitása](96-telepitocsomag-struktura.md#96-telepitocsomag-struktura){ .md-button }

-   <a class="fw-module-card-icon fw-module-97"
       href="97-frostwood-ikonarchitektura-guide.md#97-frostwood-ikonarchitektura"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [97. Frostwood ikonarchitektúra](97-frostwood-ikonarchitektura-guide.md#97-frostwood-ikonarchitektura)

    A dokumentációs ikonrendszer, navigációs hierarchia és használati szabályok leírása.

    **Részletek:**

    * felső tab ikonok
    * oldalsó navigációs ikonok
    * modulikonok
    * függelék ikonok
    * blokkikonok
    * WCAG viselkedés
    * Markdown minták
    * CSS architektúra
    * karbantartási szabályok
    * A) függelék (PWA ikoncsalád spec)

    [:material-cube-send: Ikonarchitektúra megnyitása](97-frostwood-ikonarchitektura-guide.md#97-frostwood-ikonarchitektura){ .md-button }

-   <a class="fw-module-card-icon fw-module-99"
       href="99-referenciak-blokk-architektura--dev.md#99-referenciak-blokk-architektura-dev"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [99. Referenciák blokk architektúra (DEV)](99-referenciak-blokk-architektura--dev.md#99-referenciak-blokk-architektura-dev)

    Belső fejlesztői dokumentum a Referenciák blokk szerepéről.

    **Dokumentációs audit:**

    * fogalmi és strukturális referencia
    * függőségi modell
    * bővíthetőségi szabályok
    * kapcsolat a Rendszer és Alkalmazások blokkal
    * fejlesztői hatókör (nem felhasználói dokumentum)
    * belső architektúra döntések

    [:material-cube-send: Referenciák blokk architektúra (DEV) megnyitása](99-referenciak-blokk-architektura--dev.md#99-referenciak-blokk-architektura-dev){ .md-button }

</div>

??? info "Vizuális leírás az akadálymentes használathoz"
    A Referenciák blokk a Frostwood közös jelentésrétegét tartalmazza.

    Ez a blokk:

    * nem végrehajtó réteg,
    * nem állapotkezelő rendszer,
    * hanem közös referenciaarchitektúra.

    A többi blokk erre a közös jelentésrendszerre épül.


---

## Referenciák blokk státusz

> A Referenciák blokk nem csupán leíró dokumentáció,<br>
> hanem a teljes Frostwood-ökoszisztéma<br>
> Logikai és technikai alapköve.

> Ez a blokk definiálja:
>
> * a közös jelentésrendszert,
> * a szabványosított működési modelleket,
> * a referencia- és auditkereteket,
> * valamint a hosszú távú konzisztencia szabályait.

> A Frostwood rendszer különböző rétegei<br>
> erre a közös referenciaarchitektúrára épülnek.