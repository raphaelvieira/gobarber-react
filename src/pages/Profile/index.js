import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';
import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full Name" />
        <Input name="email" type="email" placeholder="Your e-mail adress" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Your Current Password"
        />
        <Input type="password" name="password" placeholder="New Password" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your Password"
        />

        <button type="submit">Update profile</button>
      </Form>
      <button type="button">Logout</button>
    </Container>
  );
}
