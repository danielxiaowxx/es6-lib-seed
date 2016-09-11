import hello from '../../src/hello';

describe('hello', () => {

  // 测试sayHi方法
  describe('sayHi function', () => {
    beforeEach(() => {
      spy(hello, 'sayHi');
    });

    it('No Arguments', () => {
      hello.sayHi();
      expect(hello.sayHi).to.have.always.returned('hello ');
    });

    it('Provide a name parameter', () => {
      hello.sayHi('daniel');
      expect(hello.sayHi).to.have.always.returned('hello daniel');
    });
    // 尽量覆盖所有测试用例

  });

  // Don't touch me

});
