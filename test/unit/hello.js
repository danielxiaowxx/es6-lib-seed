import hello from '../../src/hello';

describe('hello', () => {

  // 测试sayHi方法
  describe('sayHi function', () => {
    beforeEach(() => {
      spy(hello, 'sayHi');
    });

    it('No Arguments', () => {
      hello.sayHi();
      expect(hello.sayHi).to.have.returned(sinon.match(value => value.trim() === 'Hello'));
    });

    it('Provide a valid name parameter', () => {
      hello.sayHi('daniel');
      expect(hello.sayHi).to.have.returned('Hello daniel');
    });

    it('Provide a invalid type name parameter', () => {
      try {
        hello.sayHi(1);
      } catch(e) {}
      expect(hello.sayHi).to.have.thrown('Error'); // 这里是错误的类型，比如new Error()就是Error，new TypeError()就是TypeError
    });
    // 尽量覆盖所有入参测试用例 - 参数无值情况，参数有效情况，参数无效情况

  });

  // Don't touch me

});
