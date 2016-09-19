const hello = {
  sayHi(name) {
    if (name && typeof name != 'string') throw new Error('parameter name type error, must be a string');
    return `Hello ${name || ''}`;
  }
};

export default hello;
