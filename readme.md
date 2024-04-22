# SOLID Principles


> ### "The only thing that is constant is change" 
> #### Heraclitus (Greek philosopher)
> Heraclitus was an ancient Greek pre-Socratic philosopher from the city of Ephesus, which was then part of the Persian Empire

 ___

 # Explaination

 
**S - Single-responsibility Principle** - (SRP)
  - Every component should have one and only one ~~responsibility~~ reason to change (Component - can be A Class, A Method  or A Module).

**O - Open-Closed Principle** - (OCP)
  - Software components should be closed for modification, but open for extension
    - **Closed for modification** - New Feature getting added to the software component, should NOT have to modify existing code.
    - **Open for extension** - A software component should be extendable to add a new feature or to add a new behavior to it.
  - **CAUTION**
    - DO NOT FOLLOW THE OPEN CLOSED PRINCIPLE BLINDLY.
    - YOU WILL END UP WITH A HUGE NUMBER OF CLASSES THAT CAN COMPLICATE YOUR OVERALL DESIGN.
    - MAKE A SUBJECTIVE, RATHER THAN AN OBJECTIVE DECISION.

**L - Liskov Substitution Principle**
  - Initially introduced by **Barbara Liskov**
  - Objects should be replaceable with their subtypes without affecting the correctness of program
    - Note
      - Change the 'is-A' way of thinking
      - > "If it look like a duck and quacks like a duck but it needs batteries, you probably have the wrong abstraction!"
      - We need to move to "The Liskov way of thinking"
    - Solution to achieve 
      - Break the hierarchy
      - Tell, Don't ask 
     

**I - Interface Segregation Principle**
 - No client should  be forced to depend on methods it does not use

**D - Dependency Inversion Principle**
 - High-level modules should not depend on low-level modules. Both should depend on abstractions.
 - Abstractions should not depend on details. Details should depend on abstractions.

## Additional terms
### Dependency Injection

Dependency Injection (DI) is a design pattern widely used in software development, particularly in object-oriented and modular programming paradigms. At its core, DI is a technique for achieving inversion of control (IoC), where the control of object creation and assembly is shifted away from the object itself to an external entity. In DI, the dependencies of a class are supplied from the outside, typically via constructor injection, method injection, or property injection.

Here's a breakdown of the key concepts:

1. **Dependency**: A dependency is an object that another object depends on to perform its function. For example, if you have a class representing a database manager, it might depend on a database connection object to perform its operations.

2. **Injection**: Injection refers to the process of supplying a dependency to a dependent object. Instead of the dependent object creating its dependencies, they are provided from the outside.

3. **Inversion of Control (IoC)**: In traditional programming, the flow of control is determined by the program logic. In IoC, the control over the flow of a program is inverted: a framework or container manages the flow, calling the appropriate parts of the code as necessary.

Dependency Injection is beneficial for several reasons:

- **Decoupling**: DI helps decouple classes, making them easier to maintain, test, and reuse because each class is focused on its own responsibility and doesn't need to worry about how its dependencies are created.

- **Flexibility and Testability**: By injecting dependencies, it becomes easier to replace them with alternate implementations, which is particularly useful for testing. You can easily substitute real dependencies with mock or fake objects during testing to isolate the unit under test.

- **Promotes Single Responsibility Principle (SRP)**: DI encourages adherence to the SRP by ensuring that each class has a single responsibility and doesn't concern itself with creating its dependencies.

There are different approaches to implementing DI, including Constructor Injection, Setter Injection, and Interface Injection. Each approach has its own advantages and use cases, but constructor injection is generally preferred as it ensures that all required dependencies are provided when an object is instantiated, leading to more predictable behavior.

Frameworks like Spring (for Java), Angular (for TypeScript), and ASP.NET Core (for C#) provide robust DI containers to manage dependencies automatically, reducing boilerplate code and making it easier to implement DI in large-scale applications.



 ## Insides

 - Software is never dormant. It always keeps changing.
 - SOLID Principles are all interwined and interdependent.
 - SOLID Principles are most effective when they are combined together.
 - It is important to get wholesome view of all the SOLID principles.
 - SOLID principles complement each other, and work together in unison, to achieve the common purpose of well-designed software.


<br/><br/><br/><br/>
 <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-c3d53ca5-d48b-48ac-beb0-cbd06fd28953.jpg" alt="drawing" width="500"/>


 
