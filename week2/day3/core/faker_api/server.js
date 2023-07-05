const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newUser = {
        password: faker.internet.password({ length: 20 }),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        id: faker.string.uuid({})
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        id: faker.string.uuid({}),
        name: faker.company.name(),
        adress: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            location: faker.location.country()
        }
    }
    return newCompany;
}

app.get("/api/user/new", (req, res) =>{
    const newfakeUser = createUser();
    console.log(newfakeUser);
    res.json(newfakeUser)
})

app.get("/api/company/new", (req, res) =>{
    const newfakecompany = createCompany();
    console.log(newfakecompany);
    res.json(newfakecompany)
})

app.get("/api/user/company", (req,res) => {
    const newFakeUser = createUser();
    const newFakeCompany = createCompany();
    console.log(newFakeCompany, newFakeUser);
    res.json({newFakeUser,newFakeCompany} )
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );