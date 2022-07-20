import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test-utils'


describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('POST', 'https://pup-trainer-api.herokuapp.com/graphql', (req) => {
      const { body } = req
      aliasMutation(req, 'createUser')
      if (hasOperationName(req, 'createUser')) {
        req.alis = 'gqlcreateUserMutation'
        req.reply((res) => {
          res.body.data.data.createUser.user.email = 'dan@gmail.com'
          res.body.data.data.createUser.user.id = 1
          res.body.data.data.createUser.user.username = 'dan'
          console.log('Working')
        })
      } else {
        console.log('Not working')
      }
    })

    cy.intercept('POST', 'https://pup-trainer-api.herokuapp.com/graphql', (req) => {
      const { body } = req
      aliasQuery(req, 'fetchUser')
      if (hasOperationName(req, 'fetchUser')) {
        req.alis = 'gqlfetchUserQuery'
        req.reply((res) => {
          res.body.data.fetchUser.email = 'dan@gmail.com'
          res.body.data.fetchUser.id = 1
          res.body.data.fetchUser.username = 'dan'
          res.body.data.fetchUser.dogs = [
            {
                id: '2',
                name: 'Dany',
                age: 4,
                breed: 'Mix'
              }
          ]
          console.log('Working')
        })
      } else {
        console.log('Not working')
      }
    })

    cy.intercept('POST', 'https://pup-trainer-api.herokuapp.com/graphql', (req) => {
      const { body } = req
      aliasMutation(req, 'createDog')
      if (hasOperationName(req, 'createDog')) {
        req.alis = 'gqlcreateDogMutation'
        req.reply((res) => {
          res.body.data.createDog.name = 'Dani'
          res.body.data.createDog.id = '1'
          res.body.data.createDog.age = 2
          res.body.data.createDog.breed = 'Mix'
          res.body.data.createDog.user = {
            id: '1',
            username: 'dan',
            email: 'dan@gmail.com'
          }

          console.log('Working')
        })
      } else {
        console.log('Not working')
      }
    })
    cy.get('[placeholder="Username"]').type('dan')
    cy.get('[placeholder="Email"]').type('dan@gmail.com')
    cy.get('.button').click()
  })

  it('Should show information of logged in user', () => {
    cy.url().should('eq', 'http://localhost:3000/homepage')
    cy.get('.user-info > :nth-child(4)').should('have.text', 'Username: dan')
    cy.get('.user-info > :nth-child(5)').should('have.text', 'Email: dan@gmail.com')
  })

  it('Should be able to register a dog' , () => {
      
      cy.intercept('POST', 'https://pup-trainer-api.herokuapp.com/graphql', (req) => {
          const { body } = req
          aliasQuery(req, 'fetchUser')
          if (hasOperationName(req, 'fetchUser')) {
              req.alis = 'gqlfetchUserQuery'
              req.reply((res) => {
                  res.body.data.fetchUser.email = 'dan@gmail.com'
                  res.body.data.fetchUser.id = 1
                  res.body.data.fetchUser.username = 'dan'
                  res.body.data.fetchUser.dogs = [{
                    id: '1',
                    name: 'Dani',
                    age: 2,
                    breed: 'Mix'
                  }]
                  console.log('Working')
                })
            } else {
                console.log('Not working')
            }
        })

        cy.get('[placeholder="Name"]').type('Dani')
        cy.get('[placeholder="Age"]').type(2)
        cy.get('[placeholder="Breed"]').type('mix')
        cy.get('[type="submit"]').click()
        cy.get('.dog-btn > :nth-child(1)').should('have.text', 'Dani')
    })
    
    it('Should be able to navigate to the dog profile page', () => {
        cy.get('button').click()
        cy.url('http://localhost:3000/1')
    })

    it('Should be able to navigate to the about page', () => {
        cy.get('[href="/About"]').click()
        cy.url('http://localhost:3000/about')
    })

})