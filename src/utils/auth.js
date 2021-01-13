const AuthMail = (mail) => {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail,
    )
  ) {
    return true;
  }
  return false;
};

const AuthTel = (string) => [...string].every((c) => '0123456789'.includes(c));

export {AuthMail, AuthTel} ;