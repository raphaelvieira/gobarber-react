import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispacth = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispacth(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispacth(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
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
      <button type="button" onClick={handleSignOut}>
        Logout
      </button>
    </Container>
  );
}
