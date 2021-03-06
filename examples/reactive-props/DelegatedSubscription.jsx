import React from 'react'
import { Form } from 'react-advanced-form'
import { Input } from '@examples/fields'
import Button from '@examples/shared/Button'

export default class RxPropsDelegatedSubscription extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Delegated subscription</h1>

        <Form onSubmitStart={this.props.onSubmitStart}>
          <Input
            name="firstName"
            label="Fisrt name"
            hint="Required when `lastName` has value"
            required={({ get }) => {
              return !!get(['lastName', 'value'])
            }}
          />
          <Input name="lastName" label="Last name" initialValue="foo" />

          <Button>Submit</Button>
        </Form>
      </React.Fragment>
    )
  }
}
