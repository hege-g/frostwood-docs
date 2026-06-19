<div class="grid cards frostwood-header-cards" markdown>

-   <span class="fw-module-header-icon fw-module-07" aria-hidden="true"></span>

    # 07. Ikonrendszer és JAWS vezérlés { #07-ikonrendszer-es-jaws-vezerles }

    > Szerző: Hegedüs Gábor (@hege-g)<br>
    > Licenc: [MIT (Kód) / CC BY-NC-ND 4.0 (Docs)]<br>
    > Frostwood Docs: v1.0.0<br>
    > Rendszerverzió / Állapot: v1.0.5 / Stabil<br>
    > Blokk: <span class="fw-block-icon-main-alapok" aria-hidden="true"></span> Alapok

</div>

<div class="grid cards frostwood-toc-cards" markdown>

-   ## Tartalomkártyák

    * [:material-infinity: 1. Tervezési alapelv](#1-tervezesi-alapelv)
    * [:material-infinity: 2. Telepítés után megjelenő parancsikonok](#2-telepites-utan-megjeleno-parancsikonok)
        * [:material-infinity: 2.1 Desktop](#21-desktop)
        * [:material-infinity: 2.2 Munka asztal mappa](#22-munka-asztal-mappa)
        * [:material-infinity: 2.3 Tervezési indok](#23-tervezesi-indok)
    * [:material-infinity: 3. JAWS parancsikonok működése](#3-jaws-parancsikonok-mukodese)
        * [:material-infinity: 3.1 Normál JAWS](#31-normal-jaws)
        * [:material-infinity: 3.2 Lassúbb JAWS](#32-lassubb-jaws)
    * [:material-infinity: 4. Ikonok jelentése (vak felhasználók számára)](#4-ikonok-jelentese-vak-felhasznalok-szamara)
    * [:material-infinity: 5. Ikonleírások](#5-ikonleirasok)
        * [:material-infinity: 5.1 Normál JAWS](#51-normal-jaws)
        * [:material-infinity: 5.2 Lassúbb JAWS](#52-lassubb-jaws)
        * [:material-infinity: 5.3 WCAG BE](#53-wcag-be)
        * [:material-infinity: 5.4 WCAG KI](#54-wcag-ki)
        * [:material-infinity: 5.5 WCAG RESET](#55-wcag-reset)
        * [:material-infinity: 5.6 Travel BE](#56-travel-be)
        * [:material-infinity: 5.7 Travel KI](#57-travel-ki)
        * [:material-infinity: 5.8 SoftLock BE](#58-softlock-be)
        * [:material-infinity: 5.9 SoftLock KI](#59-softlock-ki)
        * [:material-infinity: 5.10 SignalColors BIZTONSÁGOS](#510-signalcolors-biztonsagos)
        * [:material-infinity: 5.11 SignalColors KONTRASZT](#511-signalcolors-kontraszt)
        * [:material-infinity: 5.12 SignalColors KI](#512-signalcolors-ki)

</div>

## 1. Tervezési alapelv

![Rácsba rendezett Frostwood ikoncsalád, amely az egységes panelméretet és a monokróm piktogramok konzisztens stílusát mutatja.](assets/images/fw-07-ikoncsalad.webp)

??? info "Vizuális leírás akadálymentesítéshez"
    A kép több ikonból álló rácsot mutat.

    Minden ikon egy azonos méretű, lekerekített sarkú szürke panelen helyezkedik el. A panelek közepén fehér, egyszerű piktogramok láthatók.

    A panelek mindegyike azonos felépítésű: háttérpanel, halvány vízjel és központi ikon. Az ikonok különböző funkciókat jelölnek, de vizuálisan egységesek.

    Néhány ikon tartalmazhat kiegészítő jelölést, például egy kis badge-et vagy színcsíkot, de ezek nem dominánsak.

    Az ábra célja annak bemutatása, hogy a Frostwood rendszerikonok egységes vizuális szabályok szerint készülnek.


???+ abstract "Összefoglaló"
    A Frostwood minden parancsikonhoz **egyedi ikont használ**.


Cél:

* gyors vizuális felismerés
* gyengén látó felhasználók segítése
* ikon-memória kialakítása
* képernyőolvasó használat közben egyértelmű funkciók

???+ quote "Alapelv"
    > Egy ikon csak egy funkcióhoz tartozik.<br>
    > Ez biztosítja, hogy a felhasználó **ikon alapján is felismerje a funkciót**, még akkor is, ha a feliratot nem látja jól.


---

## 2. Telepítés után megjelenő parancsikonok

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### 2.1 Desktop

    ??? success "A telepítő létrehozhatja az alábbi gyorskapcsolókat."
        ```text title="Text"
        WCAG KI
        Travel BE
        Travel KI
        SoftLock BE
        SoftLock KI
        SignalColors KI
        Normál JAWS
        ```


-   ### 2.2 Munka asztal mappa

    ??? success "A Frostwood létrehoz egy külön mappát"
        ```text title="Text"
        Desktop\Frostwood (Munka)
        ```


    ??? success "Ebben található"
        ```text title="Text"
        WCAG BE
        Travel BE
        SoftLock BE
        SignalColors BIZTONSÁGOS
        SignalColors KONTRASZT
        Normál JAWS
        Lassúbb JAWS
        ```


-   ### 2.3 Tervezési indok

    A **Normál JAWS** mindkét helyen elérhető:

    * Desktop
    * Munka mappa

    ???+ tip "Tipp"
        Ez lehetővé teszi, hogy a felhasználó **bármely munkakörnyezetből visszaállítsa a normál beszédtempót**.


    A **Lassúbb JAWS** csak a Munka mappában található.

    Ez jelzi, hogy ez a mód elsősorban **koncentrált munkához** készült.

</div>

---

## 3. JAWS parancsikonok működése

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### 3.1 Normál JAWS

    **Normál JAWS**

    Futtatja:

    ```text title="Text"
    JAWS_HOME_NORMAL.bat
    ```

    Működés:

    * ideiglenesen növeli a JAWS beszédtempóját
    * kb. 3 lépésben állítja vissza a normál tempót

    Használat:

    * általános olvasás
    * navigáció
    * böngészés

-   ### 3.2 Lassúbb JAWS

    **Lassúbb JAWS**

    Futtatja:

    ```text title="Text"
    JAWS_WORK_SLOW.bat
    ```

    Működés:

    * ideiglenesen csökkenti a JAWS beszédtempóját
    * kb. 3 lépéssel lassabb tempóra vált

    Használat:

    * precíz munkavégzés
    * kód
    * táblázatok
    * komplex felületek

</div>

---

## 4. Ikonok jelentése (vak felhasználók számára)

???+ note "Megjegyzés"
    A Frostwood dokumentáció minden ikonhoz tartalmaz szöveges leírást.


Ez fontos azoknak a felhasználóknak, akik:

* nem látják az ikonokat
* vagy képernyőolvasót használnak.

---

## 5. Ikonleírások

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### 5.1 Normál JAWS

    * **Ikon neve:** `JAWS_Normal.ico`
    * **Ábrázolás:** Balra néző / úszó cápa sziluettje.
    * **Jelentés:** Normál beszédtempó.

-   ### 5.2 Lassúbb JAWS

    * **Ikon neve:** `JAWS_Lassubb.ico`
    * **Ábrázolás:** Balra néző / úszó cápa sziluettje, alatta két vízszintes, lassulást jelző vonallal.
    * **Jelentés:** Lassabb beszédtempó, Precíz munkavégzéshez.

-   ### 5.3 WCAG BE

    * **Ikon neve:** `WCAG_BE.ico`
    * **Ábrázolás:** Stilizált emberalak (WCAG logó) körívben, határozott kontúrral.
    * **Jelentés:** Magas kontraszt, Jobb olvashatóság.

-   ### 5.4 WCAG KI

    * **Ikon neve:** `WCAG_KI.ico`
    * **Ábrázolás:** Halványított, szürkített stilizált emberalak (WCAG logó).
    * **Jelentés:** Normál vizuális mód, Normál kontraszt.

-   ### 5.5 WCAG RESET

    * **Ikon neve:** `WCAG_RESET.ico`
    * **Ábrázolás:** Stilizált emberalak (WCAG szimbólum), melyet egy balra mutató, íves nyíl vesz körül, jelezve a beállítások visszagörgetését.
    * **Jelentés:** Minden vizuális segédlet (kontraszt, színmód) kikapcsolása. Visszatérés a rendszer alapértelmezett megjelenéséhez.

-   ### 5.6 Travel BE

    * **Ikon neve:** `Travel_BE.ico`
    * **Ábrázolás:** Felfelé szálló repülőgép sziluettje.
    * **Jelentés:** Mobil mód, Utazási környezet.

-   ### 5.7 Travel KI

    * **Ikon neve:** `Travel_KI.ico`
    * **Ábrázolás:** Halványított, szürkített repülőgép sziluettje.
    * **Jelentés:** Otthoni mód.

-   ### 5.8 SoftLock BE

    * **Ikon neve:** `SoftLock_BE.ico`
    * **Ábrázolás:** Klasszikus lakat zárt kengyellel.
    * **Jelentés:** Rögzített rendszer, Két desktop biztosítva.

-   ### 5.9 SoftLock KI

    * **Ikon neve:** `SoftLock_KI.ico`
    * **Ábrázolás:** Klasszikus lakat nyitott kengyellel.
    * **Jelentés:** Desktopok szabadon kezelhetők.

-   ### 5.10 SignalColors BIZTONSÁGOS

    * **Ikon neve:** `SignalColors_BIZTONSAGOS.ico`
    * **Ábrázolás:** Három függőleges sáv, a középső kiemelve, biztonságos zónát jelezve.
    * **Jelentés:** Kímélt vizuális jelzések.

-   ### 5.11 SignalColors KONTRASZT

    * **Ikon neve:** `SignalColors_KONTRASZT.ico`
    * **Ábrázolás:** Három függőleges sáv, éles kontúrokkal és erős tónus különbséggel.
    * **Jelentés:** Erős kontrasztú jelzések.

-   ### 5.12 SignalColors KI

    * **Ikon neve:** `SignalColors_KI.ico`
    * **Ábrázolás:** Halványított, szürkített három függőleges sáv.
    * **Jelentés:** Jelzésrendszer kikapcsolva.

</div>