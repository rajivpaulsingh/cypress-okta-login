// Okta
import { OktaAuth } from '@okta/okta-auth-js'

// Login by Okta through api (skip the cross-browser limitation of Cypress)
Cypress.Commands.add('loginByOktaApi', () => {
  cy.request({
    method: 'POST',
    url: Cypress.env('session_token_url'),
    body: {
      username: Cypress.env('username'),
      password: Cypress.env('password'),
      options: {
        warnBeforePasswordExpired: 'true'
      }
    },
  }).then(({ body }) => {
    const user = body._embedded.user
    const config = {
      issuer: Cypress.env('issuer_url'),
      clientId: Cypress.env('okta_client_id'),
      redirectUri: Cypress.env('redirect_uri'),
      scope: ['openid', 'email', 'profile'],
    }

    const authClient = new OktaAuth(config)
    authClient.token
      .getWithoutPrompt({ sessionToken: body.sessionToken })
      .then(({ tokens }) => {
        const userItem = {
          token: tokens.accessToken.value,
          user: {
            sub: user.id,
            email: user.profile.login,
          },
        }
        window.localStorage.setItem('oktaCypress', JSON.stringify(userItem))
      })
  })
})
