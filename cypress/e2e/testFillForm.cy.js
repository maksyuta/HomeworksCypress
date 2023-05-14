
  
    const users = [
      {firstname: 'Serhii', lastname: 'Maksiuta', email: 's.maksyuta@test.com', website:'www.mask.com.ua'},
      {firstname: 'Vasya', lastname: 'Pupkin', email: 'pupkin@test.com', website:'www.pupk.com'},
      {firstname: 'Zhenya', lastname: 'Gagarin', email: 'dfgdgdg@test.com', website:'www.dfgdgdfgfd.com.ua'},
  ];
 
  
    users.forEach(({firstname, lastname, email, website}) => {
      it(`Test ${firstname} ${lastname} ${email} ${website}`, () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
          cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
           cy.get('[title="Forms"]').click();
           cy.get('[title="Form Layouts"]').click();
           cy.get('#inputFirstName').type(firstname);
           cy.get('#inputLastName').type(lastname);
          cy.get('#inputEmail').type(email);
          cy.get('#inputWebsite').type(website);
          cy.get('[class="appearance-filled size-medium shape-rectangle status-basic nb-transition"]').click();
      });
  });
  
  
  
  
  
  