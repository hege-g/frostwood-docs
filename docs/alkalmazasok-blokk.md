<div class="grid cards frostwood-header-cards" markdown>

-   <span class="fw-block-icon-main-alkalmazasok" aria-hidden="true"></span>

    # Alkalmazások blokk { #alkalmazasok-blokk }

    > Frostwood-kompatibilis alkalmazásmodellek és integrációk.

</div>

<div class="grid cards frostwood-toc-cards" markdown>

-   ## Tartalomkártyák

    * [:material-infinity: Alkalmazások blokk összefoglaló](#alkalmazasok-blokk-osszefoglalo)
    * [:material-infinity: Alkalmazások blokk moduljai](#alkalmazasok-blokk-moduljai)
        * [:material-infinity: 21. Windows 11 Fájlkezelő](#21-windows-11-fajlkezelo)
        * [:material-infinity: 22. Total Commander](#22-total-commander)
        * [:material-infinity: 23. Microsoft Edge](#23-microsoft-edge)
        * [:material-infinity: 24. Google Chrome](#24-google-chrome)
        * [:material-infinity: 25. Mozilla Firefox](#25-mozilla-firefox)
        * [:material-infinity: 26. Microsoft Office](#26-microsoft-office)
        * [:material-infinity: 27. Meta Chat](#27-meta-chat)
        * [:material-infinity: 28. Zoom](#28-zoom)
        * [:material-infinity: 29. Windows Narrátor](#29-windows-narrator)
        * [:material-infinity: 30. JAWS for Windows](#30-jaws-for-windows)
        * [:material-infinity: 31. Insta360 Studio](#31-insta360-studio)
        * [:material-infinity: 32. ChatGPT](#32-chatgpt)
        * [:material-infinity: 33. Gemini](#33-gemini)
        * [:material-infinity: 34. Windows Lomtár](#34-windows-lomtar)
        * [:material-infinity: 89. Alkalmazások blokk architektúra (DEV)](#89-alkalmazasok-blokk-architektura-dev)
    * [:material-infinity: Alkalmazások blokk státusz](#alkalmazasok-blokk-statusz)

</div>

## Alkalmazások blokk összefoglaló

A rendszerbe integrált alkalmazások és kognitív rétegek logikai elrendezése:

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### Rendszerközeli és fájlkezelés

    :material-folder-cog-outline: **21, 22, 34. Modul**

-   ### Böngésző réteg

    :material-web: **23, 24, 25. Modul**

-   ### Irodai és kommunikációs réteg

    :material-microsoft-office: **26, 27, 28. Modul**

-   ### Kisegítő technológia

    :material-wheelchair-accessibility: **29, 30. Modul**

-   ### Speciális munkaeszközök

    :material-toolbox-outline: **31. Modul**

-   ### AI / kognitív réteg

    :material-brain: **32, 33. Modul**

-   ### Fejlesztői architektúra (DEV)

    :material-code-tags: **89. Modul**

</div>

---

## Alkalmazások blokk moduljai

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   <a class="fw-module-card-icon fw-module-21"
       href="21-windows-11-fajlkezelo.md#21-windows-11-fajlkezelo-opcionalis-windhawk-zebra-tamogatassal"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [21. Windows 11 Fájlkezelő](21-windows-11-fajlkezelo.md#21-windows-11-fajlkezelo-opcionalis-windhawk-zebra-tamogatassal)

    A natív Windows fájlkezelő Frostwood-szempontú értelmezése.

    **Integrációs szabályok:**

    * a File Explorer szerepe a rendszerben
    * kapcsolat a Total Commanderrel
    * halk, natív működési modell
    * opcionális Windhawk-alapú zebra / spacing finomhangolás
    * installer-viselkedés és fallback logika
    * állapotfüggetlen működés (Home / Work nem különül el)

    [:material-cube-send: Windows 11 Fájlkezelő megnyitása](21-windows-11-fajlkezelo.md#21-windows-11-fajlkezelo-opcionalis-windhawk-zebra-tamogatassal){ .md-button }

-   <a class="fw-module-card-icon fw-module-22"
       href="22-total-commander.md#22-total-commander-tc-sync-modul"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [22. Total Commander](22-total-commander.md#22-total-commander-tc-sync-modul)

    A Frostwood elsődleges fájlkezelési modellje.

    **Integrációs szabályok:**

    * Otthon / Munka profilarchitektúra
    * külön `wincmd.ini` és `wincmd_fokus.ini` használat
    * parancsikon-alapú determinisztikus indítás
    * TC Sync opcionális állapotkövetés
    * soft restart és apply-now működés
    * A) és B) függelék a `.ini` beállításokról
    * C) függelék Segít értelmezni a Klasszikus (Sávos) és a Fókuszált (Sávmentes) módokat, valamint útmutatást ad a beállítások alkalmazásához

    [:material-cube-send: Total Commander megnyitása](22-total-commander.md#22-total-commander-tc-sync-modul){ .md-button }

-   <a class="fw-module-card-icon fw-module-23"
       href="23-microsoft-edge.md#23-microsoft-edge"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [23. Microsoft Edge](23-microsoft-edge.md#23-microsoft-edge)

    Rendszerközeli és fallback böngésző.

    **Környezeti konfiguráció:**

    * PDF és fallback szerep
    * rendszerintegráció és WebView2 kapcsolat
    * rendszer-témakövetés
    * opcionális profilhasználat
    * Dark Reader korlátozott, célzott szerepe
    * másodlagos böngésző szerep (nem primary Work layer)

    [:material-cube-send: Microsoft Edge megnyitása](23-microsoft-edge.md#23-microsoft-edge){ .md-button }

-   <a class="fw-module-card-icon fw-module-24"
       href="24-google-chrome.md#24-google-chrome-home-work-teljes-szeparacio"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [24. Google Chrome](24-google-chrome.md#24-google-chrome-home-work-teljes-szeparacio)

    Elkülönített Home és Work böngészőmodell.

    **Környezeti konfiguráció:**

    * teljes Home / Work szeparáció
    * külön `--user-data-dir` alapú adatkönyvtárak
    * parancsikonos indítás
    * Dark Reader állapotfüggő használata
    * memória- és fókuszkezelési szempontok
    * állapotalapú működés (Home / Work = külön környezet)

    [:material-cube-send: Google Chrome megnyitása](24-google-chrome.md#24-google-chrome-home-work-teljes-szeparacio){ .md-button }

-   <a class="fw-module-card-icon fw-module-25"
       href="25-mozilla-firefox.md#25-mozilla-firefox-home-work-teljes-szeparacio"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [25. Mozilla Firefox](25-mozilla-firefox.md#25-mozilla-firefox-home-work-teljes-szeparacio)

    Profil-alapú elkülönített működés.

    **Környezeti konfiguráció:**

    * `Frostwood-Home` és `Frostwood-Work` profilok
    * `-P` és `-no-remote` alapú indítás
    * külön példányos működés
    * rendszer-témakövetés
    * Dark Reader állapotfüggő modell

    [:material-cube-send: Mozilla Firefox megnyitása](25-mozilla-firefox.md#25-mozilla-firefox-home-work-teljes-szeparacio){ .md-button }

-   <a class="fw-module-card-icon fw-module-26"
       href="26-microsoft-office.md#26-microsoft-office-word-excel"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [26. Microsoft Office](26-microsoft-office.md#26-microsoft-office-word-excel)

    Zajszegény dokumentum- és munkafolyamat-rendszer.

    **Munkafolyamat fókusz:**

    * célzott Word / Excel telepítési modell
    * téma- és rendszerintegráció
    * dokumentumtér-optimalizálás
    * tipográfia, sorköz, zoom és margólogika
    * mentési struktúra
    * sablonrendszer
    * workflow-alapú használat (nem automatizált rendszer)

    [:material-cube-send: Microsoft Office megnyitása](26-microsoft-office.md#26-microsoft-office-word-excel){ .md-button }

-   <a class="fw-module-card-icon fw-module-27"
       href="27-meta-chat.md#27-messenger-whatsapp-meta-chat-reteg"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [27. Meta Chat](27-meta-chat.md#27-messenger-whatsapp-meta-chat-reteg)

    Kommunikációs zajkezelés és prioritás.

    **Munkafolyamat fókusz:**

    * WhatsApp-first működési modell
    * Messenger mint fallback réteg
    * Otthon / Munka értesítési különbségek
    * preview, badge, popup és hangjelzés szabályai
    * JAWS / NVDA használati szempontok
    * multi-signal tiltás kommunikációs környezetben

    [:material-cube-send: Meta Chat megnyitása](27-meta-chat.md#27-messenger-whatsapp-meta-chat-reteg){ .md-button }

-   <a class="fw-module-card-icon fw-module-28"
       href="28-zoom.md#28-zoom-akadalymentesitett-modell"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [28. Zoom](28-zoom.md#28-zoom-akadalymentesitett-modell)

    Meeting-fókusz és képernyőolvasó-integráció.

    **Munkafolyamat fókusz:**

    * meeting alatti fókuszvédelem
    * alapbeállítások Munka környezethez
    * Accessibility panel és screen reader alert szűrés
    * fő gyorsbillentyűk és F6 alapú navigáció
    * meeting-fókusz protokoll

    [:material-cube-send: Zoom megnyitása](28-zoom.md#28-zoom-akadalymentesitett-modell){ .md-button }

-   <a class="fw-module-card-icon fw-module-29"
       href="29-windows-narrator.md#29-windows-narrator-rendszerszintu-akadalymentessegi-reteg"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [29. Windows Narrátor](29-windows-narrator.md#29-windows-narrator-rendszerszintu-akadalymentessegi-reteg)

    Fallback képernyőolvasó és natív rendszerhozzáférés.

    **Interakciós alapelv:**

    * a Narrátor szerepe mint vészhelyzeti képernyőolvasó
    * login-szintű hozzáférés
    * kapcsolat a Frostwood állapotokkal
    * diagnosztikai szerep
    * fallback prioritás (JAWS kiesése esetén)

    [:material-cube-send: Windows Narrátor megnyitása](29-windows-narrator.md#29-windows-narrator-rendszerszintu-akadalymentessegi-reteg){ .md-button }

-   <a class="fw-module-card-icon fw-module-30"
       href="30-jaws-for-windows.md#30-jaws-for-windows-alapreteg-modell"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [30. JAWS for Windows](30-jaws-for-windows.md#30-jaws-for-windows-alapreteg-modell)

    Elsődleges interakciós és navigációs réteg.

    **Interakciós alapelv:**

    * JAWS mint alapréteg
    * egységes profilmodell
    * Otthon / Munka közti beszédtempó-logika
    * opcionális manuális gyorsváltó
    * SendKeys alapú tempókezelés
    * kapcsolat a Munka asztallal és a Travel móddal

    [:material-cube-send: JAWS for Windows megnyitása](30-jaws-for-windows.md#30-jaws-for-windows-alapreteg-modell){ .md-button }

-   <a class="fw-module-card-icon fw-module-31"
       href="31-insta360-studio.md#31-insta360-studio-csak-munka-asztalon"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [31. Insta360 Studio](31-insta360-studio.md#31-insta360-studio-csak-munka-asztalon)

    Speciális, vizuálisan intenzív munkamodul.

    **Munkafolyamat fókusz:**

    * csak Munka asztalon ajánlott használat
    * hardveres gyorsítás és cache-kezelés
    * preview minőség és fókuszstabilitás
    * mentési és exportstruktúra
    * gyorsbillentyűk és export preset ajánlások

    [:material-cube-send: Insta360 Studio megnyitása](31-insta360-studio.md#31-insta360-studio-csak-munka-asztalon){ .md-button }

-   <a class="fw-module-card-icon fw-module-32"
       href="32-chatgpt.md#32-openai-chatgpt"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [32. ChatGPT](32-chatgpt.md#32-openai-chatgpt)

    Gondolkodási és munkafolyamat-támogató rendszer.

    **Környezeti konfiguráció:**

    * webböngészős és elkülönített appablakos használat
    * Home / Work böngészőprofil-logika
    * memória- és zajkezelés
    * Light / Dark témakövetés
    * billentyűvezérlés és képernyőolvasó-szempontok
    * mentési workflow Office / Markdown környezetbe

    [:material-cube-send: ChatGPT megnyitása](32-chatgpt.md#32-openai-chatgpt){ .md-button }

-   <a class="fw-module-card-icon fw-module-33"
       href="33-gemini.md#33-google-gemini"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [33. Gemini](33-gemini.md#33-google-gemini)

    Google-ökoszisztéma integráció és kontrollált használat.

    **Környezeti konfiguráció:**

    * GEMINI mint Google-alapú AI munkatárs
    * webböngészős és elkülönített appablakos használat
    * Google-fiók és böngészőprofil-szeparáció
    * Drive / Docs integráció kontrollált használata
    * memóriahasználat és tabterhelés kezelése
    * mentési workflow saját munkarendszerbe

    [:material-cube-send: Gemini megnyitása](33-gemini.md#33-google-gemini){ .md-button }

-   <a class="fw-module-card-icon fw-module-34"
       href="34-windows-lomtar.md#34-windows-lomtar-recycle-bin"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [34. Windows Lomtár](34-windows-lomtar.md#34-windows-lomtar-recycle-bin)

    Biztonsági pufferzóna és visszaállítási réteg.

    **Integrációs szabályok:**

    * ikonviselkedés Otthon és Munka asztalon
    * passzív állapotinformáció kezelése
    * automatikus ürítés és cleanup tiltása
    * kézi karbantartási modell
    * nem automatizálható biztonsági réteg
    * A) függelék a tálcára helyezés menetéről

    [:material-cube-send: Windows Lomtár megnyitása](34-windows-lomtar.md#34-windows-lomtar-recycle-bin){ .md-button }

-   <a class="fw-module-card-icon fw-module-89"
       href="89-alkalmazasok-blokk-architektura--dev.md#89-alkalmazasok-blokk-architektura-dev"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [89. Alkalmazások blokk architektúra (DEV)](89-alkalmazasok-blokk-architektura--dev.md#89-alkalmazasok-blokk-architektura-dev)

    Belső fejlesztői dokumentum az Alkalmazások blokk szerkezetéről.

    **Technikai architektúra:**

    * modulcsoportok
    * alkalmazásrétegek
    * kapcsolat a Rendszer blokkal
    * kapcsolat a Referenciák blokkal
    * bővíthetőségi szabályok

    [:material-cube-send: Alkalmazások blokk architektúra (DEV) megnyitása](89-alkalmazasok-blokk-architektura--dev.md#89-alkalmazasok-blokk-architektura-dev){ .md-button }

</div>

??? info "Vizuális leírás az akadálymentes használathoz"
    Az Alkalmazások blokk a Frostwood gyakorlati használati rétegét mutatja.

    A modulok különböző alkalmazásokat írnak le, de közös működési szabályokra épülnek:

    * zajcsökkentés
    * fókusz
    * elkülönítés
    * akadálymentes működés


---

## Alkalmazások blokk státusz

> Az Alkalmazások blokk a Frostwood gyakorlati működési rétege.

> A modulok nem önálló alkalmazásleírások,<br>
> hanem Frostwood-kompatibilis működési modellek.

> A közös alapelvek:
>
> * a zajcsökkentés,
> * a fókuszvédelem,
> * az állapotalapú működés,
> * valamint az akadálymentes használhatóság.

> Az alkalmazások a Frostwood rendszerhez igazodnak,<br>
> nem pedig fordítva.