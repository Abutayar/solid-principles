# SOLID Principles

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

**D - Dependency Inversion Principle**
