export enum House {
    "Slytherin" = "Slytherin",
    "Ravenclaw" = "Ravenclaw",
    "Hufflepuff" = "Hufflepuff",
    "Gryffindor" = "Gryffindor"
}

export enum CharacterStatus {
    "Vivo" = "Vivo",
    "Muerto" = "Muerto"
}

export enum CharacterType {
    "Estudiante" = "Estudiante",
    "Staff" = "Staff"
}

export type Character = {
    picture: string
    house: House
    status: CharacterStatus
    type: CharacterType
    name: string
    characteristics: {[key: string]: string}
}

export enum Filter {
    'Estudiantes' = 'Estudiantes',
    'Staff' = 'Staff',
}