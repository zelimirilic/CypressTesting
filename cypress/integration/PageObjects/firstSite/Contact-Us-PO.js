

class Contact_Us_PO {

    contactFormSubmission(firstName, lastName, email, comment, selector, messageText) {

        cy.get('[name="first_name"]').type(firstName);
        cy.get('[name="last_name"]').type(lastName);
        cy.get('[name="email"]').type(email);
        cy.get('textarea.feedback-input').type(comment);
        cy.get('[type="submit"]').click();
        cy.get(selector).contains(messageText);

    }

}

export default Contact_Us_PO;