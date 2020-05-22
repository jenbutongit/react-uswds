/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { Address } from '../Address/Address'
import { Button } from '../../Button/Button'
import { Footer } from './Footer'
import { FooterNav } from '../FooterNav/FooterNav'
import { Form } from '../../forms/Form/Form'
import { Label } from '../../forms/Label/Label'
import { Logo } from '../Logo/Logo'
import { SocialLinks } from '../SocialLinks/SocialLinks'
import { TextInput } from '../../forms/TextInput/TextInput'

// assets
import logoImg from 'uswds/src/img/logo-img.png'

export default {
  title: 'Footer/Footer',
  parameters: {
    info: `
  USWDS 2.0 Footer component
  
  Source: https://designsystem.digital.gov/components/form-controls/#footer
  `,
  },
}

const mockSubmit = (): void => {
  /* mock submit fn */
}

const returnToTop = (
  <div className="grid-container usa-footer__return-to-top">
    <Button type="button" unstyled>
      Return to top
    </Button>
  </div>
)

const SignUpForm = (): React.ReactElement => {
  return (
    <div className="usa-sign-up">
      <h3 className="usa-sign-up__heading">Sign up</h3>
      <Form onSubmit={mockSubmit}>
        <Label htmlFor="email">Your email address</Label>
        <TextInput id="email" name="email" type="email" />
        <Button type="submit">Sign up</Button>
      </Form>
    </div>
  )
}

export const SlimFooter = (): React.ReactElement => (
  <Footer
    slim
    returnToTop={returnToTop}
    primary={
      <div className="usa-footer__primary-container grid-row">
        <div className="mobile-lg:grid-col-8">
          <FooterNav
            slim
            links={Array(4).fill(
              <a className="usa-footer__primary-link" href="#">
                Primary Link
              </a>
            )}
          />
        </div>
        <div className="tablet:grid-col-4">
          <Address
            slim
            items={[
              <a key="telephone" href="tel:1-800-555-5555">
                (800) CALL-GOVT
              </a>,
              <a key="email" href="mailto:info@agency.gov">
                info@agency.gov
              </a>,
            ]}
          />
        </div>
      </div>
    }
    secondary={
      <Logo
        slim
        image={
          <img
            className="usa-footer__logo-img"
            alt="img alt text"
            src={logoImg}
          />
        }
        heading={<h3 className="usa-footer__logo-heading">Name of Agency</h3>}
      />
    }
  />
)

export const MediumFooter = (): React.ReactElement => (
  <Footer
    medium
    returnToTop={returnToTop}
    primary={
      <FooterNav
        medium
        links={Array(4).fill(
          <a className="usa-footer__primary-link" href="#">
            Primary Link
          </a>
        )}
      />
    }
    secondary={
      <div className="grid-row grid-gap">
        <Logo
          medium
          image={
            <img
              className="usa-footer__logo-img"
              alt="img alt text"
              src={logoImg}
            />
          }
          heading={<h3 className="usa-footer__logo-heading">Name of Agency</h3>}
        />
        <div className="usa-footer__contact-links mobile-lg:grid-col-6">
          <SocialLinks
            links={[
              <a
                key="facebook"
                className="usa-social-link usa-social-link--facebook"
                href="#">
                <span>Facebook</span>
              </a>,
              <a
                key="twitter"
                className="usa-social-link usa-social-link--twitter"
                href="#">
                <span>Twitter</span>
              </a>,
              <a
                key="youtube"
                className="usa-social-link usa-social-link--youtube"
                href="#">
                <span>YouTube</span>
              </a>,
              <a
                key="rss"
                className="usa-social-link usa-social-link--rss"
                href="#">
                <span>RSS</span>
              </a>,
            ]}
          />
          <h3 className="usa-footer__contact-heading">Agency Contact Center</h3>
          <Address
            medium
            items={[
              <a key="telephone" href="tel:1-800-555-5555">
                (800) CALL-GOVT
              </a>,
              <a key="email" href="mailto:info@agency.gov">
                info@agency.gov
              </a>,
            ]}
          />
        </div>
      </div>
    }
  />
)

export const BigFooter = (): React.ReactElement => (
  <Footer
    big
    returnToTop={returnToTop}
    primary={
      <div className="grid-container">
        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-8">
            <FooterNav
              big
              links={[
                [
                  'Topic',
                  ...Array(2).fill(<a href="#">Secondary link</a>),
                  <a key="4" href="#">
                    Secondary link that is a bit longer than most of the others
                  </a>,
                  <a key="5" href="#">
                    Secondary link
                  </a>,
                ],
                [
                  'Topic',
                  <a key="2" href="#">
                    Secondary link that is pretty long
                  </a>,
                  ...Array(3).fill(<a href="#">Secondary link</a>),
                ],
                [
                  'Topic',
                  ...Array(4).fill(
                    <a className="usa-footer__secondary-link" href="#">
                      Secondary link
                    </a>
                  ),
                ],
                [
                  'Topic',
                  ...Array(4).fill(
                    <a className="usa-footer__secondary-link" href="#">
                      Secondary link
                    </a>
                  ),
                ],
              ]}
            />
          </div>
          <div className="tablet:grid-col-4">
            <SignUpForm />
          </div>
        </div>
      </div>
    }
    secondary={
      <div className="grid-row grid-gap">
        <Logo
          big
          image={
            <img
              className="usa-footer__logo-img"
              alt="img alt text"
              src={logoImg}
            />
          }
          heading={<h3 className="usa-footer__logo-heading">Name of Agency</h3>}
        />
        <div className="usa-footer__contact-links mobile-lg:grid-col-6">
          <SocialLinks
            links={[
              <a
                key="facebook"
                className="usa-social-link usa-social-link--facebook"
                href="#">
                <span>Facebook</span>
              </a>,
              <a
                key="twitter"
                className="usa-social-link usa-social-link--twitter"
                href="#">
                <span>Twitter</span>
              </a>,
              <a
                key="youtube"
                className="usa-social-link usa-social-link--youtube"
                href="#">
                <span>YouTube</span>
              </a>,
              <a
                key="rss"
                className="usa-social-link usa-social-link--rss"
                href="#">
                <span>RSS</span>
              </a>,
            ]}
          />
          <h3 className="usa-footer__contact-heading">Agency Contact Center</h3>
          <Address
            big
            items={[
              <a key="telephone" href="tel:1-800-555-5555">
                (800) CALL-GOVT
              </a>,
              <a key="email" href="mailto:info@agency.gov">
                info@agency.gov
              </a>,
            ]}
          />
        </div>
      </div>
    }
  />
)

export const MobileBigFooter = (): React.ReactElement => (
  <Footer
    big
    returnToTop={returnToTop}
    primary={
      <div className="grid-container">
        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-8">
            <FooterNav
              isMobile
              big
              links={[
                [
                  'Topic',
                  ...Array(2).fill(<a href="#">Secondary link</a>),
                  <a key="4" href="#">
                    Secondary link that is a bit longer than most of the others
                  </a>,
                  <a key="5" href="#">
                    Secondary link
                  </a>,
                ],
                [
                  'Topic',
                  <a key="2" href="#">
                    Secondary link that is pretty long
                  </a>,
                  ...Array(3).fill(<a href="#">Secondary link</a>),
                ],
                [
                  'Topic',
                  ...Array(4).fill(
                    <a className="usa-footer__secondary-link" href="#">
                      Secondary link
                    </a>
                  ),
                ],
                [
                  'Topic',
                  ...Array(4).fill(
                    <a className="usa-footer__secondary-link" href="#">
                      Secondary link
                    </a>
                  ),
                ],
              ]}
            />
          </div>
          <div className="tablet:grid-col-4">
            <SignUpForm />
          </div>
        </div>
      </div>
    }
    secondary={
      <div className="grid-row grid-gap">
        <Logo
          big
          image={
            <img
              className="usa-footer__logo-img"
              alt="img alt text"
              src={logoImg}
            />
          }
          heading={<h3 className="usa-footer__logo-heading">Name of Agency</h3>}
        />
        <div className="usa-footer__contact-links mobile-lg:grid-col-6">
          <SocialLinks
            links={[
              <a
                key="facebook"
                className="usa-social-link usa-social-link--facebook"
                href="#">
                <span>Facebook</span>
              </a>,
              <a
                key="twitter"
                className="usa-social-link usa-social-link--twitter"
                href="#">
                <span>Twitter</span>
              </a>,
              <a
                key="youtube"
                className="usa-social-link usa-social-link--youtube"
                href="#">
                <span>YouTube</span>
              </a>,
              <a
                key="rss"
                className="usa-social-link usa-social-link--rss"
                href="#">
                <span>RSS</span>
              </a>,
            ]}
          />
          <h3 className="usa-footer__contact-heading">Agency Contact Center</h3>
          <Address
            big
            items={[
              <a key="telephone" href="tel:1-800-555-5555">
                (800) CALL-GOVT
              </a>,
              <a key="email" href="mailto:info@agency.gov">
                info@agency.gov
              </a>,
            ]}
          />
        </div>
      </div>
    }
  />
)
