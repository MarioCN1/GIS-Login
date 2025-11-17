/// Loging test script steps
/// <reference types="cypress" />

import {LoginPage} from "/home/mnavacerrada/Documents/GIS/GIS Automation/GIS Login/GIS-Login/cypress/e2e/common/loginpage.js"

describe('All login test', function(){
    const login_page = new LoginPage ()

it('GIS Login Test valid credentials', function(){
    login_page.navigate('http://172.25.253.184:3000/account/login');
    login_page.enterUsername('');
    login_page.enterPassword('');
    login_page.clickLogin();
    cy.contains('Welcome to GIS Portal');
})

it('GIS Login Test invalid User', function(){
    login_page.navigate('http://172.25.253.184:3000/account/login');
    login_page.enterUsername('');
    login_page.enterPassword('');
    login_page.clickLogin();
    cy.on('window:alert', (txt) =>{
        expect(txt).to.be.equal('Unauthorized: Username or password is invalid.')
    })
    
})

it('GIS Login Test invalid Password', function(){
    login_page.navigate('http://172.25.253.184:3000/account/login');
    login_page.enterUsername('');
    login_page.enterPassword('');
    login_page.clickLogin();
    cy.on('window:alert', (txt) =>{
        expect(txt).to.be.equal('Unauthorized: Username or password is invalid.')
    })

})


})