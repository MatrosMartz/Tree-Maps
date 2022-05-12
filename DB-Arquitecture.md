## Database

---

## Types

### State Conservation

```ts
enum Conservation {
	// Extinct
	EX = 'extinct',
	EW = 'extinct in wild',
	// Treatened
	CR = 'critically endangered',
	EN = 'endangered',
	VU = 'vunerable',
	// Lower Risk
	NT = 'near threatened',
	CD = 'conservation dependent',
	LC = 'least concern',
	// Other
	DD = 'data deficient', // default value
	NE = 'not evaluated',
}
```

### StateValidate

```ts
enum StateValidable {
	IN = 'inspected', // default value
	VL = 'validated',
	RF = 'refussed',
}
```

### Taxon

```ts
// without kindom and domain
enum Taxons {
	PH = 'phylum',
	CL = 'class',
	OR = 'order',
	TR = 'tribe',
	FM = 'Family',
	GN = 'genus', // deaulf value
}
```

### StateUser

```ts
enum StateUser {
	NR = 'normal', // default value
	BN = 'banned',
	SH = 'shadow',
	HD = 'hidden',
}
```

### StateActivity

```ts
enum StateActivity {
	NR = 'normal', // default value
	RM = 'remove',
	HD = 'hidden',
}
```

### State and Type

```ts
enum PoblationType {
	NA = 'native',
	IN = 'introducided and naturalized',
	NE = 'not evalued',
}

type StatePoblation = [string, PoblationType];
```

---

## Bases

### Trees

-   **Type:** _Entity_ and _Validable_
-   **Need Validation**

|       Column       |   Type   |    Content     | editable |   Key   | Auto | Nesesary | Visible |
| :----------------: | :------: | :------------: | :------: | :-----: | :--: | :------: | :-----: |
|       **Id**       | _String_ |       Id       |    No    | Primary | Yes  | Required |   Yes   |
| **User Recorder**  | _String_ |   User.Email   |    No    | Foreing | Yes  | Required | OnlyApp |
| **User Validator** | _String_ |   User.Email   |    No    | Foreing | Yes  | Required | OnlyApp |
|     **State**      | _String_ | StateValidable |   Auto   |   No    | Yes  | Required |   No    |
|      **Age**       | _Number_ |      Age       |   Yes    |   No    |  No  | Validate |   Yes   |
|     **Width**      | _Number_ |     Meters     |   Yes    |   No    |  No  | Validate |   Yes   |
|    **Diameter**    | _Number_ |     Meters     |   Yes    |   No    |  No  | Validate |   Yes   |
|      **Name**      | _String_ |    Letters     |   Yes    |   No    |  No  | Validate |   Yes   |
|    **Location**    | _String_ |    Lat&Lng     |   Yes    |   No    |  No  | Register |   Yes   |
|     **Specie**     | _String_ |  Specie.Name   |   Yes    | Foreing | Yes  | Register |   Yes   |
|  **Description**   | _String_ |      N/A       |   Yes    |   No    |  No  | Optional |   Yes   |

### Species

-   **Type:** _Taxonomy_ and _Validable_
-   **Need Validarion**

|       Column       |   Type   |    Content     | editable |   Key   | Auto | Nesesary | Visible |
| :----------------: | :------: | :------------: | :------: | :-----: | :--: | :------: | :-----: |
| **Cientific Name** | _String_ |    Letters     |    No    | Primary |  No  | Required |   Yes   |
|      **Name**      | _String_ |    Letters     |    No    |   No    |  No  | Required |   No    |
|     **State**      | _String_ | StateValidable |   Auto   |   No    | Yes  | Required |   Yes   |
|  **Conservation**  | _String_ |  Conservation  |   Yes    |   No    |  No  | Validate |   Yes   |
|     **Gener**      | _String_ |     Gener      |   Auto   | Foreing |  No  | Validate |   Yes   |
|  **Description**   | _String_ |      N/A       |   Yes    |   No    |  No  | Validate |   Yes   |
|    **Subgener**    | _String_ |    SubGener    |   Auto   | Foreing |  No  | Optional |   Yes   |
|  **Distribution**  | _Array_  |  StateAndType  |   Yes    |   No    |  No  | Optional |   Yes   |

### Taxons

-   **Type:** _Taxon_ and _Validable_
-   **Need Validarion**

|     Column      |   Type   | Content | editable |   Key   | Auto | Nesesary | Visible |
| :-------------: | :------: | :-----: | :------: | :-----: | :--: | :------: | :-----: |
|    **Rank**     | _String_ | Letters |    No    | Primary |  No  | Required |   Yes   |
|    **Name**     | _String_ | Letters |    No    | Primary |  No  | Required |   Yes   |
|     **Sup**     | _String_ | Family  |    No    | Foreing |  No  | Required |   Yes   |
| **Description** | _String_ |   N/A   |   Yes    |   No    |  No  | Optional |   Yes   |

### Users

-   **Type:** _Entity_

|       Column        |   Type   |   Content   | editable |   Key   | Auto | Nesesary | Visible |
| :-----------------: | :------: | :---------: | :------: | :-----: | :--: | :------: | :-----: |
|      **Email**      | _String_ | Auth0.Email |    No    | Primary | Yes  | Required | OnlyApp |
|      **Grade**      | _String_ |  UserGrade  |   Auto   |   No    | Yes  | Required | OnlyApp |
|      **State**      | _String_ |  StateUser  |   Auto   |   No    | Yes  | Required |   No    |
| **Trees Following** | _Array_  |   Tree.Id   |   Yes    |   No    |  No  | Optional | OnlyApp |
| **Users Following** | _Array_  | User.Email  |   Yes    |   No    |  No  | Optional | OnlyApp |
|   **Social Webs**   | _Array_  |    Links    |   Yes    |   No    |  No  | Optional | OnlyApp |
|   **Description**   | _String_ |     N/A     |   Yes    |   No    |  No  | Optional | OnlyApp |

### Photos

|  Column  |   Type   |   Content   | editable |   Key   | Auto | Nesesary | Visible |
| :------: | :------: | :---------: | :------: | :-----: | :--: | :------: | :-----: |
|  **Id**  | _String_ |     Id      |    No    | Primary | Yes  | Required |   Yes   |
| **Name** | _String_ |     N/A     |    No    |   No    |  No  | Required |   Yes   |
| **Blob** | _Binary_ | Binary Data |    No    |   No    |  No  | Required |   Yes   |

### Moments

-   **Type:** _Activity_ and _Answerable_

|     Column      |   Type   |    Content    | editable |   Key   | Auto | Nesesary | Visible |
| :-------------: | :------: | :-----------: | :------: | :-----: | :--: | :------: | :-----: |
|     **Id**      | _String_ |      Id       |    No    | Primary | Yes  | Required |   Yes   |
|    **State**    | _String_ | StateActivity |   Auto   |   No    | Yes  | Required |   No    |
|    **Date**     | _String_ |     Date      |   Yes    |   No    | Yes  | Required |   Yes   |
|   **Photos**    | _Array_  |    Photos     |   Yes    | Foreing |  No  | Required |   Yes   |
|    **Tree**     | _String_ |    Tree.Id    |    No    | Foreing |  No  | Required |   Yes   |
|    **User**     | _String_ |  User.Email   |    No    | Foreing |  No  | Required |   Yes   |
| **Description** | _String_ |      N/A      |   Yes    |   No    |  No  | Required |   Yes   |

### Comments

-   **Type:** _Activity_, _Interaction_ and _Answerable_

|   Column    |   Type   |    Content    | editable |   Key   | Auto | Nesesary | Visible |
| :---------: | :------: | :-----------: | :------: | :-----: | :--: | :------: | :-----: |
|   **Id**    | _String_ |      Id       |    No    | Primary | Yes  | Required | OnlyApp |
|  **State**  | _String_ | StateActivity |   Auto   |   No    | Yes  | Required |   No    |
|  **User**   | _String_ |  User.Email   |    No    | Foreing |  No  | Required | OnlyApp |
|   **To**    | _String_ | Answerable.Id |    No    | Foreing |  No  | Required | OnlyApp |
| **Content** | _String_ |      N/A      |   Yes    |   No    |  No  | Required | OnlyApp |

### Reactions

-   **Type:** _Activity_ and _Interaction_

|   Column    |   Type   |    Content    | editable |   Key   | Auto | Nesesary | Visible |
| :---------: | :------: | :-----------: | :------: | :-----: | :--: | :------: | :-----: |
|   **Id**    | _String_ |      Id       |    No    | Primary | Yes  | Required | OnlyApp |
|  **State**  | _String_ | Statectivity  |   Auto   |   No    | Yes  | Required |   No    |
|  **User**   | _String_ |  User.Email   |    No    | Foreing |  No  | Required | OnlyApp |
|   **To**    | _String_ | Answerable.Id |    No    | Foreing |  No  | Required | OnlyApp |
| **Content** | _String_ |   Reaction    |   Yes    |   No    |  No  | Required | OnlyApp |

---

## Data

### Taxons

```js
[
	// geners
	{
		type: 'gener',
		name: 'Ficus',
		sup: 'Moraceae',
		description: '',
	},
	{
		type: 'gener',
		name: 'Platanus',
		sup: 'Planaceae',
		description: '',
	},
	{
		type: 'gener',
		name: 'Plumeria',
		sup: 'Plumerieae',
		description: '',
	},
	{
		type: 'gener',
		name: 'Cojoba',
		sup: 'Ingeae',
		description: '',
	},
	{
		type: 'gener',
		name: 'Taxodium',
		sup: 'Cupressaceae',
		description: '',
	},
	{
		type: 'gener',
		name: 'Inga',
		sup: 'Ingeae',
		description: '',
	},
	{
		type: 'gener'
		name: 'Cochlospermum',
		sup: 'Bixaceae',
		description: '',
	},
	{
		type: 'gener',
		name: 'Tabebuia',
		sup: 'Tecomeae',
		description: '',
	},
	{
		type: 'gener',
		name: 'Pinus',
		sup: 'Pinaceae',
		description: '',
	},
	// tribes
	{
		type: 'tribe',
		name: 'Ficeae',
		sup: 'Moraceae',
		description: '',
	},
	{
		type: 'tribe',
		name: 'Plumerieae',
		sup: 'Apocynaceae',
		description: '',
	},
	{
		type: 'tribe',
		name: 'Tecomeae',
		sup: 'Bignoniaceae',
		description: '',
	},
	{
		type: 'tribu',
		name: 'Ingeae',
		sup: 'Fabaceae',
		description: '',
	},
	// families
	{
		type: 'family',
		name: 'Moraceae',
		sup: 'Rosales',
		description: '',
	},
	{
		type: 'family',
		name: 'Planaceae',
		sup: 'proteales',
		description: '',
	},
	{
		type: 'family',
		name: 'Apocynaceae',
		sup: 'Gentianales',
		description: '',
	},
	{
		type: 'family',
		name: 'Moraceae',
		sup: 'Urticales',
		description: '',
	},
	{
		type: 'family',
		name: 'Fabaceae',
		sup: 'Fabales',
		description: '',
	},
	{
		type: 'family',
		name: 'Cupressaceae',
		sup: 'Cupressales',
		description: '',
	},
	{
		type: 'family',
		name: 'Bixaceae',
		sup: 'Malvales',
		description: '',
	},
	{
		type: 'family',
		name: 'Bignoniaceae',
		sup: 'Lamiales',
		description: '',
	},
	{
		type: 'family',
		name: 'Pinaceae',
		sup: 'Pinales',
		description: '',
	},
];
```

### Speciess

```js
[
	{
		cientificName: 'Ficus sycomorus',
		name: 'Sicómoro',
		state: 'validated',
		conservation: 'least concern',
		distribution: [],
		gener: 'Ficus',
		subgener: 'Sycomorus',
		description:
			'Puede medir hasta 20m de altura y 6m de anchura con una copa bastante espesa. La corteza es verde amarillenta y se exfolia en tiras que dejan aparecen en su interior otra corteza amarillenta. Como todas las higueras, el sicómoro contiene látex. Las hojas cordiformes (con forma acorazonada) tienen un color verde oscuro, son ásperas y miden unos 14cm de largo y unos 10cm de ancho y están dispuestas en espiral alrededor de la rama. Sobre su envés verde claro se ven los nervios prominentes. El peciolo pubescente mide de 0,5 a 3cm de longitud.',
	},
	{
		cientificName: 'Platanus mexicana',
		name: 'Álamo Blanco',
		state: 'validated',
		conservation: 'least concern',
		distribution: [
			['Mexico', 'native'],
			['Guatemala', 'native'],
		],
		gener: 'Platanus',
		description:
			'Se trata de un árbol caducifolio que alcanza entre 15 y 40m de alto, con un diámetro de hasta 2m, tronco derecho con manchas irregulares blancas originadas por la exfoliación de la corteza, de color pardo amarillenta con manchas blancuzcas a pardo rojizas; ramificación irregular, pelos dendríticos formando un indumento flocoso ferrugíneo en las ramas jóvenes. Hojas, yemas de 5mm de largo orientadas al interior cubiertas por estípulas foliáceas.',
	},
	{
		cientificName: 'Ficus Pertusa',
		name: 'Amatillo',
		state: 'validated',
		conservation: 'least concern',
		distribution: [
			['Mexíco', 'native'],
			['El Salvador', 'native'],
			['Guatemala', 'native'],
			['Jamaica', 'native'],
			['Brasil', 'native'],
			['Belice', 'native'],
			['Ecuador', 'native'],
			['Perú', 'native'],
		],
		gener: 'Ficus',
		description:
			'Son árboles o arbustos, que alcanzan un tamaño de hasta 30m de alto, iniciándose como epífitos pero tornándose independientes; ramas jóvenes glabras, grises a café-amarillentas. Hojas elípticas a muy angostamente elípticas o lanceoladas, 5 a 12.5cm de largo y 2 a 5.5cm de ancho, acuminadas a atenuadas en el ápice, obtusas a agudas en la base, glabras, lisas, cartáceas y verdes a café claras cuando secas, 10 a 20 pares de nervios secundarios, muy débiles y difíciles de distinguir de los nervios intermedios, nervio submarginal débil, nervios terciarios inconspicuos; pecíolos 0.8 a 2.5cm de largo, glabros, café claros, estípulas 0.5 a 1.3cm de largo, glabras.',
	},
	{
		cientificName: 'Cojoba arborea',
		name: 'Frijolillo',
		state: 'validated',
		conservation: 'least concern',
		distribution: [
			['Mexíco', 'native'],
			['Ecuador', 'native'],
			['El Salvador', 'native'],
			['Guatemala', 'native'],
			['Honduras', 'native'],
			['Nicaragua', 'native'],
			['Costa Rica', 'native'],
			['Panamá', 'native'],
			['Cuba', 'native'],
			['República Dominicana', 'native'],
			['Belice', 'native'],
		],
		gener: 'Cojoba',
		description:
			'Árbol de hasta 35m de altura y 1m de Diámetro, fuste recto y cilíndrico que presenta ramas en la base. La copa es rala y dispersa, con follaje verde claro. La corteza es café oscuro a café verdoso. Las hojas son alternas y bipinnadas, y se caracterizan por tener una glandulita entre cada par de pinnas. Las hojas se encuentran compuestas por 10 a 15 pares de hojas secundarias o foliolos primarios, estas a su vez están compuestas por 20 a 40 pares de foliolos secundarios.',
	},
	{
		cientificName: 'Plumeria Rubra',
		name: 'Franchipán',
		state: 'validated',
		conservation: 'least concern',
		distribution: [
			['Mexíco', 'native'],
			['Perú', 'native'],
			['El Salvador', 'native'],
			['Guatemala', 'native'],
			['Nicaragua', 'native'],
			['Costa Rica', 'native'],
			['Panamá', 'native'],
			['Cuba', 'native'],
			['República Dominicana', 'native'],
			['Belice', 'native'],
		],
		gener: 'Plumeria',
		description:
			'Es un arbusto grande o arbolillo de 5 a 8m (puede alcanzar hasta 25) de hoja caduca con tronco recto, escasa ramificación y copa abierta e irregular. Las hojas, de haz verde brillante y más pálido en el envés, se disponen en espiral en los ápices de las ramas. Son simples, de 15 a 30cm de largo por entre 4 a 8cm de ancho, lanceoladas o elípticas y de margen entero. Las flores hermafroditas surgen en panículas en las axilas de las hojas nuevas. Miden entre 15 a 30cm, con sépalos verdosos y pétalos blancos con el centro amarillo pálido.',
	},
	{
		cientificName: 'Ficus Carica',
		name: 'Higuera',
		state: 'validated',
		conservation: 'least concern',
		distribution: [],
		gener: 'Ficus',
		description:
			'Árbol o arbusto caducifolio de porte bajo, su altura máxima es de 7 a 8m. De copa muy abierta debido a su profusa ramificación, que a menudo surge casi a ras del suelo. La corteza es lisa y de color grisáceo. Las hojas, de 12 a 25cm de largo y 10 a 18cm de ancho, son profundamente lobuladas, formadas por 3 o 7 folíolos, de color verde brillante y textura áspera.',
	},
	{
		cientificName: 'Cochlospermum vitifolium',
		name: 'Rosa Amarilla',
		state: 'validated',
		conservation: 'least concern',
		distribution: [
			['Mexíco', 'native'],
			['Perú', 'native'],
			['Bolivia', 'native'],
			['Brasil', 'native'],
			['Guayanas', 'native'],
			['Trinidad', 'native'],
		],
		gener: 'Cochlospermum',
		description:
			'Son plantas árboles o arbustos, que alcanzan un tamaño de 3 a 15m de alto. Hojas con 5 a 7 lobos elípticos a oblongos, acuminadas, subenteras a serradas, glabras o pubescentes en el envés. Panícula terminal amplia, flores actinomorfas, 8 a 12cm de ancho; pétalos ampliamente obovados, emarginados, amarillos; ovario 1-locular, con 5 placentas parietales. Cápsula suberecta a colgante, ampliamente ovada a obovada umbilicada, valva exterior de color café obscuro, gris o verdoso, afelpada o glabra, valva interna de color ocre a crema, glabra; semillas reniformes con tricomas blancos gosipinos.',
	},
	{
		cientificName: 'Inga jinicuil',
		name: 'Algodoncillo',
		state: 'validated',
		conservation: 'least concern',
		distribution: [],
		gener: 'Inga',
		description:
			'Árbol perennifolio o caducifolio, de 12 a 15 m (hasta 20 m) de altura, de 30 a 50 cm de diámetro a la altura del pecho. El tronco es recto y la copa extendida y redonda consiste de ramas erectas con denso follaje. La corteza es gris pálida y amarilla al corte. Las hojas son pinnadas, formadas por seis pinnas elípticas o lanceoladas, de 8 a 20 cm de largo, alternas, elípticas, lisas, de 8 a 11 cm de largo, lustrosas, puntiagudas.',
	},
	{
		cientificName: 'Taxodium huegelii',
		name: 'Ahuehuete',
		state: 'validated',
		conservation: 'least concern',
		distribution: [],
		gener: 'Taxodium',
		description:
			'Son árboles longevos, que alcanzan los miles de años de antigüedad. Su origen se remonta a la Era Mesozoica, entre 100 a 200 millones de años, cuando las coníferas dominaban el paisaje y formaban impresionantes bosques primitivos. Taxodium huegelii es un árbol frondoso, con troncos de diámetros considerables entre 2 y 14m y alturas de hasta de 40m. Las hojas están ordenadas en espiral y yacen en dos filas horizontales superpuestas y son de uno a dos cm de largo de uno a dos mm de ancho. Las piñas son ovaladas, prácticamente esféricas de 1,5 a 2,5cm de largo y de 1 a 2cm de ancho, con escamas poligonales piramidales. Produce semillas todo el año, sobre todo entre agosto y noviembre.',
	},
	{
		cientificName: 'Tabebuia Rosea',
		name: 'Apamate',
		state: 'validated',
		conservation: 'least concern',
		distribution: [],
		gener: 'Tabebuia',
		description:
			'Llega a medir de 6 a 10m de altura, aunque en su hábitat nativo puede superar los 25m. Tronco corto de corteza grisácea, algo fisurada. Hojas palmadas, compuestas de 3 a 5 foliolos elípticos a oblongos grandes (hasta 34 cm de largo). Las inflorescencias surgen en panículas terminales. Las flores tienen cáliz acampanado y bilabiado con pétalos rosa, lavanda o magenta. El fruto es una cápsula lineal, cilíndrica de 22 a 35cm de longitud y con 7 a 10 semillas aladas.',
	},
	{
		cientificName: 'Pinus devoniana',
		name: 'Pino Blanco Mexicano',
		state: 'validated',
		conservation: 'least concern',
		distribution: [],
		gener: 'Pinus',
		description:
			'Es un árbol de entre veinte y treinta metros de altura, copa irregular redondeada, corteza áspera y agrietada, ramas largas, colocadas irregularmente en el tallo, ramillas de color café oscuro muy ásperas. Hojas de 30 a 35cm, color verde claro brillante. Conos de 20 a 30cm, de largo por 12 a 15cm de ancho de color moreno opaco, madera blanca amarillenta, dura y pesada.',
	},
];
```
