export enum ConservationCodes {
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

export enum StateValidable {
	IN = 'inspected', // default value
	VL = 'validated',
	RF = 'refussed',
}

export enum Taxons {
	PH = 'phylum',
	CL = 'class',
	OR = 'order',
	TR = 'tribe',
	FM = 'Family',
	GN = 'genus', // deaulf value
}

export enum StateUser {
	NR = 'normal', // default value
	BN = 'banned',
	SH = 'shadow',
	HD = 'hidden',
}

export enum StateActivity {
	NR = 'normal', // default value
	RM = 'remove',
	HD = 'hidden',
}

export enum Poblationtype {
	NA = 'native',
	IN = 'introducided and naturalized',
	NE = 'not evalued',
}
