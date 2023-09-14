/**
 * Each distinct product of a product family should have a base interface. All
 * variants of the product must implement this interface.
 */
interface IAbstractProductA {
  usefulFunctionA(): string;
}

/**
 * Here's the the base interface of another product. All products can interact
 * with each other, but proper interaction is possible only between products of
 * the same concrete variant.
 */
interface IAbstractProductB {
  /**
   * Product B is able to do its own thing...
   */
  usefulFunctionB(): string;

  /**
   * ...but it also can collaborate with the ProductA.
   *
   * The Abstract Factory makes sure that all products it creates are of the
   * same variant and thus, compatible.
   */
  anotherUsefulFunctionB(collaborator: IAbstractProductA): string;
}

/**
 * The Abstract Factory interface declares a set of methods that return
 * different abstract products. These products are called a family and are
 * related by a high-level theme or concept. Products of one family are usually
 * able to collaborate among themselves. A family of products may have several
 * variants, but the products of one variant are incompatible with products of
 * another.
 */
interface IAbstractFactory {
  createProductA(): IAbstractProductA;

  createProductB(): IAbstractProductB;
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
class ConcreteProductA1 implements IAbstractProductA {
  public usefulFunctionA(): string {
    return 'The result of the product A1.';
  }
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
class ConcreteProductB1 implements IAbstractProductB {
  public usefulFunctionB(): string {
    return 'The result of the product B1.';
  }

  /**
   * The variant, Product B1, is only able to work correctly with the variant,
   * Product A1. Nevertheless, it accepts any instance of IAbstractProductA as
   * an argument.
   */
  public anotherUsefulFunctionB(collaborator: IAbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}

/**
 * Concrete Factories produce a family of products that belong to a single
 * variant. The factory guarantees that resulting products are compatible. Note
 * that signatures of the Concrete Factory's methods return an abstract product,
 * while inside the method a concrete product is instantiated.
 */
class ConcreteFactory1 implements IAbstractFactory {
  public createProductA(): IAbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): IAbstractProductB {
    return new ConcreteProductB1();
  }
}

class ConcreteProductA2 implements IAbstractProductA {
  public usefulFunctionA(): string {
    return 'The result of the product A2.';
  }
}

class ConcreteProductB2 implements IAbstractProductB {
  public usefulFunctionB(): string {
    return 'The result of the product B2.';
  }

  /**
   * The variant, Product B2, is only able to work correctly with the variant,
   * Product A2. Nevertheless, it accepts any instance of IAbstractProductA as
   * an argument.
   */
  public anotherUsefulFunctionB(collaborator: IAbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B2 collaborating with the (${result})`;
  }
}

/**
 * Each Concrete Factory has a corresponding product variant.
 */
class ConcreteFactory2 implements IAbstractFactory {
  public createProductA(): IAbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): IAbstractProductB {
    return new ConcreteProductB2();
  }
}

/**
* The client code works with factories and products only through abstract
* types: IAbstractFactory and AbstractProduct. This lets you pass any factory or
* product subclass to the client code without breaking it.
*/
function clientCode(factory: IAbstractFactory): void {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}

/**
 * The client code can work with any concrete factory class.
 */
console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());

export {};
