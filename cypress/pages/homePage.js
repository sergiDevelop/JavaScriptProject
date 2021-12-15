class homeSignaturitPage{   
    
    url = 'https://google.com'
    
    elements = {
        firstNameInput: () => cy.get('#register_first_name'),
        lastNameInput: () => cy.get('#register_last_name'),
        corporateEmailInput: () => cy.get('#register_email'),
        jobTitleSelect: () => cy.get('#job_title'),  
        defaultCountryPhone: () => cy.get('.selected-flag'),
        countryPhone: () => cy.get('#form > fieldset > form > div:nth-child(4) > div > div > div.intl-tel-input.allow-dropdown > div > ul > li:nth-child(206)'),                        
        phoneNumberInput: () => cy.get('#register_phone'),
        companyInput: () => cy.get('#register_company'),
        numberEmployeesSelect: () => cy.get('#employees_number'),        
        departmentSelect: () => cy.get('#department'),        
        industrySelect: () => cy.get('#industry'),        
        countrySelect: () => cy.get('#countries'),        
        textBox: () => cy.get('#form > fieldset > form > div:nth-child(8) > div > textarea'),
        passwordInput: () => cy.get('#register_password'),
        acceptTermsCheck: () => cy.get('.info-links-checkbox'),
        signUpBtn: () => cy.get('#register_submit')        
    }

    elementsMessages = {
        invalidName: () => cy.xpath('//*[@id="form"]/fieldset/form/div[1]/div[1]/div/div/small'),
        invalidSurname: () => cy.xpath('//*[@id="form"]/fieldset/form/div[1]/div[2]/div/div/small'),
        invalidEmail: () => cy.xpath('//*[@id="form"]/fieldset/form/div[2]/div[1]/div/div/small'),
        jobTitleEmpty: () => cy.xpath('//*[@id="form"]/fieldset/form/div[2]/div[2]/div/div/small'),
        invalidPhone: () => cy.xpath('//*[@id="form"]/fieldset/form/div[3]/div/div/div[2]/small'),
        companyEmpty: () => cy.xpath('//*[@id="form"]/fieldset/form/div[4]/div[1]/div/div/small'),
        employessNumber: () => cy.xpath('//*[@id="form"]/fieldset/form/div[4]/div[2]/div/div/small'),
        departmentEmpty: () => cy.xpath('//*[@id="form"]/fieldset/form/div[5]/div[1]/div/div/small'),
        industryEmpty: () => cy.xpath('//*[@id="form"]/fieldset/form/div[5]/div[2]/div/div/small'),
        countryEmpty: () => cy.xpath('//*[@id="form"]/fieldset/form/div[6]/div/div/small'),
        textBoxEmpty: () => cy.xpath('//*[@id="form"]/fieldset/form/div[7]/div/div/small'),
        passwordEmpty: () => cy.xpath('//*[@id="form"]/fieldset/form/div[8]/div/small')
    }

    typeFirstName(firstname){
        this.elements.firstNameInput().type(firstname);
    }

    typeLastName(lastname){
        this.elements.lastNameInput().type(lastname);
    }

    typeCorporationEmail(email){
        this.elements.corporateEmailInput().type(email);
    }

    selectJobTitle(){
        this.elements.jobTitleSelect().select('Manager')        
    }    

    typePhoneNumber(phone){  
        this.elements.defaultCountryPhone().click();
        this.elements.countryPhone().click();        
        this.elements.phoneNumberInput().type(phone);
    }

    typeCompany(company){
        this.elements.companyInput().type(company);
    }

    selectNumberEmployees(){
        this.elements.numberEmployeesSelect().select('201-1.000');        
    }

    selectDepartment(){        
        this.elements.departmentSelect().select('IT / Operations');        
    }

    selectIndustry(){        
        this.elements.industrySelect().select('Technology / Software');        
    }

    selectCountry(){
        this.elements.countrySelect().select('Spain');        
    } 

    typeTextBox(txt){
        this.elements.textBox().type(txt);        
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }
    
    clickAccepTerms(){
        this.elements.acceptTermsCheck().click();
    }

    clickSignUp(){
        this.elements.signUpBtn().click();
    }

    verifyInvalidName() {
        cy.elementsMessages.invalidName.expect.equal('Invalid name');
    }
}

module.exports = new homeSignaturitPage();