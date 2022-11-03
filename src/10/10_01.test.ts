import {
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, updateBook,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./10_01";

test.skip('reference type test', () => {
    let user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk"
        }
    }

    const awesomeUser = makeHairstyle(user, 2);

    user = awesomeUser;

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test.skip('change address', () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const movedUser = moveUser(user, 'Kiev');

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})


test.skip('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const userCopy = upgradeUserLaptop(user, 'MacBook');

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('MacBook')
    expect(user.laptop.title).toBe('ZenBook')
})

test.skip('change number of house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ['css', 'html','js','react']
    }

    const userCopy = moveUserToOtherHouse(user, 99);

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address.house).toBe(99)
})


test.skip('change books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, 'ts');

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books.length).toBe(5)
})


test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateBook(user,'js','ts');

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books[2]).toBe('ts')
})
