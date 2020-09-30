| chapter: Sissejuhatus
| id: intro
| section: Avaleht
| padding: 0

<div style="width: 100%; height: 100%; overflow: hidden; position: relative">
    <intro />
    <div class="fp-text" style="pointer-events: none; position: absolute; left: 5vw; top: 5vw ">
       <h1 style="font-size: 4em; color: var(--white)">3D graafika elemendid <br> ja töövõtted</h1>
    </div>
</div>
   

   
<div class="fp-text" style="position: absolute; bottom:2vh; right: 2vw">
    <f-next-button title="Alustame" />
</div>

---


| section: Kursusest
| cols: 1fr 1fr
| rows: auto
| 1 1
| 2 3
| 4 4

## Kursusest

-


#### Sihtgrupp

Kursuse ametlik sihtgrupp on kujundaja ja noorem-tarkvaraarendaja erialade õpilased, üldhariduskoolide õpilased tehnoloogiaõppe raames. Tegelikult peaks kursus olema jõukohane kõigile, aga sisaldab algaja jaoks tõenäoliselt väga palju uut informatsiooni, nii et soovitan läheneda tasa ja targu. 


#### Tehnilised nõudmised

Kuigi kursus on seotud Kuressaare Ametikoolis asuva Innovatsioonilaboriga, ei eelda see tegelikult erivahendeid, välja arvatud 3D-printimise peatükk kursuse lõpuosas.
Ülejäänud osa kursusest saab sooritada tavalise arvutiga, sobib nii Windows, Mac kui Linux. 3D-printimise osa kursusest ei ole primaarne oskuste ja tulemuse saavutamiseks.

#### Autor

Mina, kursuse autor, olen Kuressaare Ametikooli disaini- ja tehnoloogiaosakondade õpetaja Madis Vaher. Olen 3D-maailmas seigelnud koos kujunduserialade õpilastega, ning kasutanud 3D-d kujundaja- ja kunstnikutöös.

<br>

<blockquote>
<small>
Siin all on nupp, kust pääseb edasi. Teemade vahel saab liikuda veel vasakul menüüst <f-menu-icon /> või lihtsalt klaviatuuri nooleklahvide <kbd>vasak</kbd> / <kbd>parem</kbd> abil. Sama rolli täidavad ka üleval paremas nurgas olevad <f-leftarrow-icon /> <f-rightarrow-icon /> noolekesed. 
</small>
</blockquote>

-

<img src="./img/valmis_renderdus.png" />

<br>

<img src="./img/el_struktuuri-ja-investeerimisfondid__hor.svg" style="--image-height:40vh; --image-min-height: 240px; --image-size:contain; --image-position: center; max-width:300px;" />
<br>
<small>
Kursust toetatakse projektist <strong>"Kaasaegse ja uuendusliku õppevara arendamine ja kasutuselevõtt"</strong>"Innovatsioonilabor (2018-2021)".
Kursus on ehitatud <f-link to="https://designstem.github.io/fachwerk/">Fachwerkile</f-link>
</small>

-

<div class="right">
<f-next-button title="Edasi: Teemad" />
</div>

---





| section: Kursuse teemad
| cols: 2fr 3fr
| rows: auto
| 1 1 
| 2 3
| 4 4

## Kursuse teemad 🍦

-

- Blenderi kasutajaliides
- Modelleerimine
- Materjalid ja tekstuurid
- Valgustus ja virtuaalne kaamera
- Osakeste süsteemid
- Renderdamine
- Animatsioon
- Füüsikasimulatsioonid
- 3D-printimine


Kursus toimub peamiselt praktilise tööna - modelleerime, värvime, katame tekstuuriga, valgustame ja renderdame peamiselt erinevat sorti jäätiseid.
Jäätis on kättesaadav, suhteliselt odav ja mitte liiga keerulise kujuga (ja maitsev) toiduaine, mille ainus puudus on madal sulamistemperatuur.

-

<f-video src="https://www.youtube.com/watch?v=VXinXgKj224" />
<br>
<blockquote>

<f-inline>

## 💬

<small>
Kursuse läbimiseks on vajalik mõningane <strong>inglise keele oskus</strong>>, et tutvuda lingitud materjalide, juhendite ja õppevideotega. Samuti on inglise keelsed kasutatava riist- ja tarkvara kasutajaliidesed.
</small>
</f-inline>

</blockquote>

-

<div class="right">
    <f-next-button title="Edasi: 3D graafika programmid" />
</div>

---

| section: 3D graafika programmid
| rows: auto 1fr auto
| cols: 2fr 3fr
| 1 1 
| 2 3
| 4 4

## 3D graafika programmid

-

Sellel kursusel kasutame 3D-graafika programmi <f-link to="https://blender.org">Blender</f-link>, mille saab alla laadida <f-link to="https://blender.org/download">siit</f-link>

Veel 3d-graafika programme:
- Cinema 4d
- Maya
- 3d Max 

eelnevad kolm on Blenderi-sarnased, aga tasulised 3d-graafika programmid. Järgnevad aga mingile kindlale spetsiifikale keskendunud:

- Houdini - eriefektide jaoks
- zBrush - modelleerimiseks

Valik CAD-programme, mille põhirõhk erinevalt Blenderist on täpsel joonestamisel:

- Fusion 360
- Solidworks
- Sketchup

3D-arendusraamistikud veebis:

- Threejs (näide kursuse <f-link to="intro">avalehel</f-link>)
- Aframe

Lisaks veel mängumootorid nagu
- Unity
- Unreal

Nimekiri on pidevas muutumises ja täiesti meelevaldne. Nagu näha, on 3D maailm kirju! Õnneks on paljud mainitud programmidest vähemalt proovimiseks tasuta kättesaadavad. Peale proovimist võivad hinnad kerkida mitme tuhande euroni, seetõttu on hea alustada oma teekonda Blenderist, mis on avatud lähtekoodiga ja kõigile vabalt kasutatav.


-

<f-video src="https://www.youtube.com/watch?v=_7_1NyYpi_s" />

-

<div class="right">
    <f-next-button title="Blenderis navigeerimine" />
</div>

---

| chapter: Blenderi kasutajaliides
| section: Navigeerimine
| rows: auto 1fr auto
| cols: 2fr 3fr
| 1 1 
| 2 3
| 4 4

## Navigeerimine

-

Enne, kui päriselt pihta hakata, peab veidi ringi vaatama. Seega vaatamegi, kuidas Blenderis enda vaatepunkti muuta saab.
Kasutatud klahvid on: 
- <i class="lmb"></i> objektide valimiseks (vanasti oli <i class="rmb"></i>)
- <i class="mmb"></i> alla vajutades saame oma vaatepunkti pöörata
- <i class="mmb"></i> rullides saame sisse-välja zoomida
- <i class="mmb"></i> ja <kbd>Shift</kbd> klahvi korraga vajutades saame oma vaatepunkti liigutada
- <kbd>7</kbd><kbd>8</kbd><kbd>9</kbd> standardvaadete vahel vahetamiseks<br><kbd>4</kbd><kbd>5</kbd><kbd>6</kbd><br><kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><br><kbd>0&nbsp;&nbsp;</kbd>
- <kbd>G</kbd> objektide liigutamiseks
- <kbd>R</kbd> objektide pööramiseks
- <kbd>S</kbd> objektide skaleerimiseks ehk suurendamiseks ja vähendamiseks

Eriti tähtsad on teljed **X**, **Y** ja **Z** ja nende tähised klaviatuuril <kbd>X</kbd>,<kbd>Y</kbd> ja <kbd>Z</kbd>. Neid saab kombineerida <kbd>G</kbd>, <kbd>R</kbd> või <kbd>S</kbd>-ga, näiteks
- <kbd>G</kbd> <kbd>Z</kbd> <kbd>1</kbd> <kbd>Enter</kbd> tõstab valitud objekti ühe ühiku ülespoole
- <kbd>R</kbd> <kbd>X</kbd> <kbd>90</kbd> <kbd>Enter</kbd> pöörab objekti 90&deg; X teljel
- <kbd>S</kbd> <kbd>10</kbd> <kbd>Enter</kbd> teeb objekti 10 korda suuremaks.

-

<f-video src="https://www.youtube.com/watch?v=2kWt-riGTb8" />

-

<div class="right">
    <f-next-button title="Paneelid ja vaated" />
</div>

---


| section: Paneelid ja vaated
| rows: auto 1fr auto
| cols: 2fr 3fr
| 1 1 
| 2 3
| 4 4

## Paneelid ja vaated

-

Blenderi kasutajaliides koosneb paneelidest, mille sisu on vahetatav. Paneele saab suuremaks-väiksemaks muuta ja juurde tekitada. Lihtsam viis paneelide haldamiseks on kasutada vaateid ehk *workspace*'e

-

<f-video src="https://www.youtube.com/watch?v=0VEPZVjTj7A" />

-

<div class="right">
    <f-next-button title="Primitiivid" />
</div>
