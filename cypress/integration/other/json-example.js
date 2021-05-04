

describe("JSON Object", () => {
  it("JSON Object - example", () => {

    const exampleObject = {
        "key1": "Zeljko",
        "key2": "Nikola"
    };
    const exampleArrayOfValues = ["Ivana", "Zoki", "Milosh", "Sonja", "Ana", "Boris", "Ljube"];
    const users = {
        "firstName": "Petar",
        "lastName": "Petrovic",
        "Age": 185,
        "Students": [
            {
                "firstName": "Marko",
                "lastName": "Malinovac",
            },
            {
                "firstName": "Marina",
                "lastName": "Markovic",
            }
        ]
    };
    const exampleArrayOfObjects = [{"key":"Luka"}, {"key":"Muka"}, {"key":"Tuka"}];

    cy.log(exampleObject["key1"]);
    cy.log(exampleObject["key2"]);
    cy.log(exampleObject.key1);
    cy.log(exampleObject.key2);

    cy.log(exampleArrayOfValues[0]);
    cy.log(exampleArrayOfValues[1]);
    cy.log(exampleArrayOfValues[2]);
    cy.log(exampleArrayOfValues[3]);
    cy.log(exampleArrayOfValues[4]);
    cy.log(exampleArrayOfValues[5]);
    cy.log(exampleArrayOfValues[6]);

    cy.log(users.Students[1].lastName);

    cy.log(exampleArrayOfObjects.[0].key);
    cy.log(exampleArrayOfObjects.[1].key);
    cy.log(exampleArrayOfObjects.[2].key);

  });
});
