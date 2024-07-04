context("GET /users", () => {
    it("gets a list of users", () => {
      cy.request("GET", "https://reqres.in/api/users?page=1").then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.total).to.be.greaterThan(1)
        expect(response.body.data).length.to.be.greaterThan(1)
      })
    })
  })

  context("GET /user", () => {
    it("get a single user detail by id", () => {
      cy.request("GET", "https://reqres.in/api/users/2").then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.data.id).to.eq(2)
        expect(response.body.data.email).to.eq("janet.weaver@reqres.in")
      })
    })
  })
  
  context("post /users", () => {
    it("Add a new user to users list", () => {
        cy.request('POST', 'https://reqres.in/api/users', { name: 'Tester',job: 'QA engineer' }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name', 'Tester')
            expect(response.body).to.have.property('job', 'QA engineer')
        })
    })
  })

  context("put /users", () => {
    it("Add a new user to users list and update detail", () => {
        cy.request('POST', 'https://reqres.in/api/users', { name: 'Tester',job: 'QA engineer' }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name', 'Tester')
            expect(response.body).to.have.property('job', 'QA engineer')
            const id = response.body.id;
            cy.request('PUT', 'https://reqres.in/api/users/'+id, { name: 'Tester',job: 'QA automation' }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('name', 'Tester')
                expect(response.body).to.have.property('job', 'QA automation')
                
            })
        })
    })
  })

  context("delete /users", () => {
    it("Add a new user to users list and delete the user", () => {
        cy.request('POST', 'https://reqres.in/api/users', { name: 'Test delete',job: 'QA engineer' }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name', 'Test delete')
            expect(response.body).to.have.property('job', 'QA engineer')
            const id = response.body.id;
            cy.request('DELETE', 'https://reqres.in/api/users/'+id).then((response) => {
                expect(response.status).to.eq(204)
            })
        })
    })
  })

