export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house?: number
    }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type UserWithCompaniesType = UserType & {
    companies: Array<{id: number, title: string}>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {...u, address: {...u.address, city: city}}
}

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {...u, laptop: {...u.laptop, title: title}}
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {...u, address: {...u.address, house: house}}
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string) {
    return {...u, books: [...u.books, newBooks]}
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldbook: string, newBook: string) {
    //return {...u,books:[...u.books.slice(2),newBooks]}
    return {...u, books: u.books.map(b => b === oldbook ? newBook: b)}
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) {
    return {...u, books: u.books.filter(b => b !== bookForDelete )}
}

export function updateCompanyTitle(u: UserWithLaptopType & UserWithCompaniesType, companyID:number,newTitle:string) {
    return {...u, companies: u.companies.map(c => c.id === companyID ? {...c, title : newTitle }: c)}
}




