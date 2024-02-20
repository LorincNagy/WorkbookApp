# OOP Basics with Java questions

# Java ecosystem

## What is the JVM?
The JVM (Java Virtual Machine) is a crucial component of the Java platform. It is a virtual machine that executes Java bytecode, which is the compiled form of Java source code. The JVM provides a runtime environment in which Java applications can run independently of the underlying hardware and operating system.
## What does Java compilation mean?
Java compilation refers to the process of converting human-readable Java source code into a machine-readable format called bytecode.

## What is Java bytecode?
Java bytecode is a low-level, platform-independent representation of Java programs. It is the compiled form of Java source code and serves as an intermediate step between the human-readable source code and the machine-executable instructions. Java bytecode is designed to be executed by the Java Virtual Machine (JVM).
## What is the difference between the JRE and the JDK?
JRE (Java Runtime Environment):
The JRE is a package that includes the necessary components to run Java applications. It is intended for end-users who only need to run Java programs but do not develop or compile them.

JDK (Java Development Kit):
The JDK is a software package that includes tools and utilities required for Java development. It is meant for developers who want to write, compile, and debug Java applications. The JDK includes all the components of the JRE and provides additional development-specific tools:
Java Compiler (javac)
Development Libraries
Debugging and Monitoring Tools

## What is the `Iterable` interface?
The Iterable interface is a fundamental interface in the Java Collections Framework. It defines a contract for objects that can be iterated or looped over using the enhanced for loop or iterators.
The Iterable interface declares a single method.
By implementing the Iterable interface, a class indicates that it can be iterated over, enabling the use of the enhanced for loop (for-each loop) or explicit iterators to traverse its elements.

## What is the `Collection` interface?
The Collection interface is a fundamental interface in the Java Collections Framework. It defines a contract for objects that represent a group of elements or a collection of objects. The Collection interface provides operations for adding, removing, querying, and manipulating elements in a collection.
Eg.
size(),isEmpty(),contains(Object element),clear()

## What is the `Map` interface?
The Map interface is a fundamental interface in the Java Collections Framework. It represents a collection of key-value pairs, where each key is unique within the map. The Map interface provides methods for adding, retrieving, updating, and removing elements based on their keys.
Eg.
containsKey(Object key),containsValue(Object value),put(K key, V value)

## Compare sets, lists, and queues in Java.
Sets, lists, and queues are all different types of collections in Java, each serving specific purposes and offering different characteristics.

Sets:

- Sets are collections that do not allow duplicate elements. Each element in a set is unique.
- Sets do not have a specific order, and the iteration order may vary depending on the implementation.
- Common implementations of the Set interface include HashSet, TreeSet, and LinkedHashSet.
- Sets are useful when you want to ensure uniqueness of elements and perform operations such as checking for membership or removing duplicates.

Lists:

- Lists are ordered collections that allow duplicate elements. Elements in a list are inserted in a specific order and can be accessed by their indices.
- Lists allow positional access, meaning you can retrieve elements by their index.
- Common implementations of the List interface include ArrayList, LinkedList, and Vector.
- Lists are suitable when you need to maintain the order of elements and perform operations such as random access, insertion, and removal at specific positions.

Queues:

- Queues are collections that follow the First-In-First-Out (FIFO) order, where elements are added at the end and removed from the beginning.
- Queues typically support operations like adding elements to the end (enqueue) and removing elements from the front (dequeue).
- Common implementations of the Queue interface include LinkedList, ArrayDeque, and PriorityQueue.
- Queues are useful when you need to model scenarios such as task scheduling, event processing, or managing elements based on their priority or arrival order.

## Compare `ArrayList` and `LinkedList` in Java.
ArrayList and LinkedList are both implementations of the List interface in Java. They provide similar functionality but differ in their underlying data structures and performance characteristics.

ArrayList: Offers better performance for random access and is efficient for accessing elements by index. It is less efficient for frequent insertions and removals in the middle of the list due to the need for shifting elements.

LinkedList: Provides efficient insertion and removal operations, especially at the beginning or end of the list. Random access is slower, and it consumes more memory due to the additional references for each element.

## Are sets sorted in Java?
SorterSet and TreeSet are ordered/sorted.
Set,HashSet,LinkedHashSet are not;



# Language features

## What control statements are available in Java?
Java provides several control statements that allow you to control the flow of execution in your programs. The main control statements in Java are:
Conditional Statements/Decision Making:if,else,else if,switch
Looping Statements:for,while,do-while
Jump Statements:break,continue

## Compare the different looping constructs in Java.
for loop:
- for loop provides a concise way of writing the loop structure. Unlike a while loop, a for statement consumes the initialization, condition and increment/decrement in one line thereby providing a shorter, easy to debug structure of looping.  
  enchanted for loop:
- Used to iterate over elements of an array or a collection without explicitly managing indices.
- Automatically iterates over each element in the given iterable object.
  while loop:
- A while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement.
  do while:
- do while loop is similar to while loop with only difference that it checks for condition after executing the statements, and therefore is an example of Exit Control Loop.

## Compare the different conditional constructs in Java.
If Statement:
- Executes a block of code if the specified condition evaluates to true.
- Optionally followed by else or else if to handle additional conditions.
- Useful when you want to execute code based on a single condition.
  If-else Statement:
- Allows you to specify different code blocks to execute based on a condition.
- If the condition in the if statement is false, the code block in the else statement is executed.
- Useful when you want to perform different actions based on a binary condition.
  else if:
- Allows you to specify multiple conditions and execute the code block associated with the first true condition.
- The conditions are checked sequentially, and only the code block associated with the first true condition is executed.
- Useful when you have multiple mutually exclusive conditions to evaluate.
  switch:
- Evaluates an expression and matches it against various cases to execute the corresponding code block.
- Supports multiple cases and an optional default case for when none of the cases match.
- Useful when you have a finite number of possible values to check against.

## What is a `while` loop?
Java while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement. While loop in Java comes into use when we need to repeatedly execute a block of statements. The while loop is considered as a repeating if statement. If the number of iterations is not fixed, it is recommended to use the while loop.

## How do you manually break out of a loop?
By using the statement "break;"

## What does the `var` keyword mean?
The var keyword is a feature introduced in Java 10 that allows you to declare local variables with inferred types. It is part of Java's enhanced type inference capabilities, known as "Local Variable Type Inference."  
When you use the var keyword to declare a variable, the Java compiler infers the type of the variable based on the expression used to initialize it. The type inference occurs at compile time, and the resulting variable has the same type as the expression on the right-hand side of the initialization.

## What are _lambda expressions_? How are they used in Java development?
A lambda expression is a short block of code which takes in parameters and returns a value. Lambda expressions are similar to methods, but they do not need a name and they can be implemented right in the body of a method.

# Type system

## What are primitive types in Java? Give some examples.
Primitive types are basic data types predefined by the Java language. They represent simple values and are not objects. They are stored directly in memory and have a fixed size.  
boolean: Represents a boolean value, which can be either true or false.
byte: 8-bit signed two's complement integer. It has a minimum value of -128 and a maximum value of 127 (inclusive).
short: 16-bit signed two's complement integer. It has a minimum value of -32,768 and a maximum value of 32,767 (inclusive).
int: 32-bit signed two's complement integer, which has a minimum value of -2^31 and a maximum value of 2^31-1
long: 64-bit two's complement integer. The signed long has a minimum value of -2^63 and a maximum value of 2^63-1.
float: single-precision 32-bit IEEE 754 floating point.
double: double-precision 64-bit IEEE 754 floating point.
char: a single 16-bit Unicode character. It has a minimum value of '\u0000' (or 0) and a maximum value of '\uffff' (or 65,535 inclusive).

## What is the difference between primitive types and reference types?
Primitive types are basic data types predefined by the Java language. They represent simple values and are not objects. They are stored directly in memory and have a fixed size.  
Reference types refer to objects created from classes or interfaces. They are more complex and can have methods, fields, and other members. They are stored in the heap memory and accessed through references.  
Primitive type variables hold the actual value, so when assigned to another variable or passed to a method, the value is copied.  
Reference type variables hold a reference (memory address), so when assigned to another variable or passed to a method, the reference is copied, not the object itself.  
Primitive types do not have methods or fields associated with them.  
Reference types can have methods, fields, and other members associated with them. You can access and manipulate these members using the reference variable.  
Each primitive type has a corresponding wrapper class (e.g., Integer for int, Double for double). Wrapper classes provide methods and utility functions to operate on primitive values.  
Reference types themselves do not have corresponding wrapper classes.

## What is a class in Java?
Class is a blueprint or a template that defines the structure and behavior of objects. It serves as a blueprint for creating objects, which are instances of the class. A class encapsulates data (in the form of fields) and behavior (in the form of methods) that define the characteristics and actions of objects.  
A class in Java typically contains the following elements:
- Fields (Variables)
- Methods
- Constructors
- Acces modifiers

## What is an object in Java?
An object is an instance of a class.

## What is a constructor?
A constructor is a special method within a class that is used to initialize objects of that class. It is called automatically when an object is created using the new keyword. The purpose of a constructor is to ensure that an object is properly initialized with the required data and put into a valid state.

## What is an `enum` in Java?
An enum is a special data type that represents a fixed set of predefined constants. It is used to define a collection of related values that are distinct and known in advance. The enum keyword is used to declare an enumeration.

## Explain the difference between a class and an enum.
Classes are used to define blueprints or templates for objects. They encapsulate data (fields) and behavior (methods) and allow you to create multiple instances (objects) based on the class.  
Enums are used to define a fixed set of predefined constants that represent distinct values. They provide a way to represent a restricted range of values for a particular variable or property.  
Classes can have multiple instances (objects) created from them. Each instance has its own set of data and can exhibit behavior through methods.  
An enum type has no instances other than those defined by its enum constants. It is a compile-time error to attempt to explicitly instantiate an enum type.  
In summary, classes are used to define general-purpose blueprints for objects, while enums are used when you have a fixed set of distinct values. Classes provide more flexibility and can have multiple instances with varying data, while enums have a fixed number of instances with predefined constant values.

## Explain the difference between a class and a record.
Classes are used to define blueprints or templates for objects. They encapsulate data (fields) and behavior (methods) and allow you to create multiple instances (objects) based on the class.   
Records are immutable data classes that require only the type and name of fields.  
Classes can be mutable (their fields can be modified) or immutable (their fields are read-only and cannot be modified after initialization), depending on how they are implemented. Mutability is determined by the programmer's choice when designing the class.  
Records are implicitly immutable. Once created, the fields of a record cannot be modified. Records promote immutability by automatically generating the necessary methods to initialize and access the fields.


## What are interfaces? Why should we use them?
In Java, an interface is a reference type that defines a contract of methods that a class implementing the interface must adhere to. It specifies a set of method signatures (without method bodies) that define the behavior expected from implementing classes. Interfaces are used to establish a common protocol or behavior that multiple classes can adhere to.  
Purpose of the interface:
- Provides communication − One of the uses of the interface is to provide communication. Through interface you can specify how you want the methods and fields of a particular type.
- Multiple inheritance  − Java doesn’t support multiple inheritance, using interfaces you can achieve multiple inheritance.

## What is inheritance?
Inheritance in Java is a mechanism in which one object acquires all the properties and behaviors of a parent object. It is an important part of OOPs (Object Oriented programming system).  
The idea behind inheritance in Java is that you can create new classes that are built upon existing classes. When you inherit from an existing class, you can reuse methods and fields of the parent class. Moreover, you can add new methods and fields in your current class also.  
Inheritance represents the IS-A relationship which is also known as a parent-child relationship.

## Is multiple inheritance allowed in Java?
No, Java does not support multiple inheritance for classes. Multiple inheritance refers to the ability of a class to inherit from multiple classes simultaneously. In Java, a class can inherit from only one superclass, which is known as single inheritance.  
Multiple and hybrid inheritance is supported through interface only.

## What is a static class member?
A static class member in Java is a member (field or method) that belongs to the class itself rather than to individual instances (objects) of the class. It is associated with the class itself, not with specific instances of the class. Static members are declared using the static keyword.  
Static class members in Java belong to the class itself, rather than to individual instances of the class. They are shared among all instances and can be accessed directly using the class name. Static fields hold shared data, and static methods provide behavior that is not dependent on instance-specific data. Static members are commonly used for constants, utility methods, and shared state in Java classes.

## Can a static method use non-static members?
No, a static method in Java cannot directly access or use non-static members (fields or methods) of a class. This is because non-static members are associated with individual instances (objects) of the class, while static methods are associated with the class itself.

## What does the `final` keyword mean in Java?
The final keyword is used to indicate that something is unchangeable or cannot be modified. It can be applied to variables, methods, and classes, each with its own specific meaning.  
When applied to a variable, the final keyword makes it a constant, meaning its value cannot be modified once assigned.  
It's worth noting that final variables and fields are different from final references. While a final variable cannot be reassigned once initialized, the object it refers to can still be modified if it is mutable.
When applied to a method, the final keyword indicates that the method cannot be overridden by subclasses.  
When applied to a class, the final keyword indicates that the class cannot be subclassed or extended.

## What does the `abstract` keyword mean in Java?
The abstract keyword is a non-access modifier, used for classes and methods:
- Abstract class: is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class).
- Abstract method: can only be used in an abstract class, and it does not have a body. The body is provided by the subclass (inherited from).
  The abstract keyword is used to define a level of abstraction in the class hierarchy. Abstract classes provide a way to share common method signatures and behavior among related classes, while abstract methods establish a contract that subclasses must adhere to.  
  Abstract class achieves partial abstraction (0 to 100%) whereas interface achieves fully abstraction (100%).
- ![My Remote Image](https://i.imgur.com/1OjHyjh.png)

## What is _overloading_ in Java?
Method overloading refers to the ability to define multiple methods with the same name but different parameters within the same class. It allows a class to have multiple methods with the same name but different argument lists, enabling flexibility and code reuse.

## What is _overriding_ in Java?
Method overriding refers to the ability of a subclass to provide a different implementation for a method that is already defined in its superclass. It allows a subclass to modify the behavior of an inherited method to suit its specific needs.

## What is the difference between overloading and overriding?
Overloading is about defining multiple methods with the same name but different parameter lists within the same class, while overriding is about providing a new implementation for a method in a subclass that was already defined in its superclass. Overloading is determined at compile-time, while overriding is determined at runtime based on the actual type of the object.

## What is `null`?
Null is a special literal that represents the absence of a value or the lack of an object reference. It is commonly used to indicate that a variable does not currently refer to any object.

## Compare the access modifiers in Java.
- ![My Remote Image](https://i.imgur.com/nyYES9S.png)  
  Access modifiers are keywords used to specify the accessibility of classes, methods, variables, and constructors. They control the visibility and accessibility of these elements to other parts of the program. There are four access modifiers in Java:  
  public:
- The public access modifier allows unrestricted access to the class, method, variable, or constructor from any part of the program.
- Public members can be accessed by other classes and packages without any restrictions.
  private:
- The private access modifier restricts the access of a class, method, variable, or constructor to only within the same class.
- Private members are not accessible from other classes or packages.
  protected:
- The protected access modifier allows access to a class, method, variable, or constructor within the same package or subclasses in different packages.
- Protected members are not accessible by classes in different packages unless they are subclasses of the class containing the protected member.
  Default:
- If no access modifier is specified, the default access modifier is applied.
- The default access allows access to a class, method, variable, or constructor within the same package only.
- Default members are not accessible from classes in different packages, even if they are subclasses.

## What is the default access modifier in a class?
The default access modifier in Java, also known as package-private access, is applied when no access modifier is explicitly specified for a class, method, variable, or constructor.  
When a class does not have an access modifier, it is accessible within the same package (package-level access) but not accessible outside of the package. This means that the class is only visible and can be accessed by other classes within the same package.

## What is the purpose of the `equals()` method?
The purpose of the equals() method is to provide a way to compare objects for equality based on custom criteria. It is commonly used when working with collections, searching for objects, or implementing data structures that require equality checks. By overriding equals(), you can define how two objects of your class should be considered equal, beyond the default reference comparison provided by the Object class.

## What is the difference between `==` and `equals()`?
In general, both equals() and “==” operators in Java are used to compare objects to check equality, but here are some of the differences between the two:
- The main difference between the .equals() method and == operator is that one is a method, and the other is the operator.
- We can use == operators for reference comparison (address comparison) and .equals() method for content comparison. In simple words, == checks if both objects point to the same memory location whereas .equals() evaluates to the comparison of values in the objects.

## What is the difference between `long` and `Long`?
long (lowercase):
- long is a primitive data type in Java.

Long (uppercase):
- Long is a wrapper class in Java, which wraps the long primitive type into an object.
- It provides useful methods and functionalities to work with long values.
- It is part of the Java class library and belongs to the java.lang package.
- It allows long values to be treated as objects and enables features like nullability and method invocation.
  Primitive vs. Object: long is a primitive data type, while Long is a wrapper class that provides an object representation of long.  
  Nullability: long cannot be null since it is a primitive type, while Long can be assigned null as it is an object.  
  Usage in Collections: long cannot be directly used in collections like List or Map, while Long can be used as an object in such collections.  
  Additional Methods: Long provides methods to perform operations on long values, such as parsing, conversion, comparison, and arithmetic operations.

## Which can store bigger numbers, `long` or `Long`?
Long objects have the same limitations as long (primitive) in terms of the maximum value.  
-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.

## What kind of packages do you know under `java.util.*` ? Bring at least 3 examples.
java.util.Scanner
java.util.Random
java.util.Date

# Architecture

## Explain the Single Responsibility Principle.
The idea behind the SRP is that every class, module, or function in a program should have one responsibility/purpose in a program. As a commonly used definition, "every class should have only one reason to change".

## Explain the Interface Segregation Principle.
The interface segregation principle states that the interface of a program should be split in a way that the user/client would only have access to the necessary methods related to their needs.

## What is _composition over inheritance_?
Composition over inheritance (or composite reuse principle) in object-oriented programming (OOP) is the principle that classes should favor polymorphic behavior and code reuse by their composition (by containing instances of other classes that implement the desired functionality) over inheritance from a base or parent class.

## What is a model class?
A model class, also known as a domain class or entity class, is a class in object-oriented programming that represents a concept or entity from the problem domain being modeled in the software application.

## What is a service class?
A service class, also known as a service layer or service component, is a class in software development that encapsulates the business logic and acts as an intermediary between the presentation layer (user interface) and the data access layer. It provides a set of operations or services that can be performed on entities or objects within an application.  
Responsibilites of a service class:
- business logic
- validation
- error handling
- comunication with other layers such as data and user interface

## Explain the Open/Closed principle.
The open-closed principle states that software entities (classes, modules, functions, and so on) should be open for extension, but closed for modification.  
In other words, the behavior of a software entity should be easily extendable without modifying its existing code.

## Explain the Liskov Substitution Principle.
The Liskov Substitution Principle states that subclasses should be substitutable for their base classes.  
This means that, given that class B is a subclass of class A, we should be able to pass an object of class B to any method that expects an object of class A and the method should not give any weird output in that case.  
This is the expected behavior, because when we use inheritance we assume that the child class inherits everything that the superclass has. The child class extends the behavior but never narrows it down.

## Explain the Dependency Inversion Principle.
The Dependency Inversion Principle (DIP) is a principle in object-oriented design that guides the decoupling of modules or classes by promoting the dependency on abstractions rather than concrete implementations.  
The Dependency Inversion Principle can be summarized as follows:
- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Abstractions should not depend on details. Details should depend on abstractions.

## What do we mean by the Gang of Four (GoF) Design Patterns? Can you name some of these patterns?
The Gang of Four (GoF) Design Patterns refer to a set of 23 design patterns documented in the book "Design Patterns: Elements of Reusable Object-Oriented Software".  
The GoF Design Patterns provide solutions to recurring design problems in software development and promote best practices for creating flexible, reusable, and maintainable code. The patterns are categorized into three main categories based on their purpose: creational patterns, structural patterns, and behavioral patterns.

Creational Patterns:

- Singleton: restricts the initialization of a class to ensure that only one instance of the class can be created.
- Factory Method: takes out the responsibility of instantiating a object from the class to a Factory class.
- Builder: Creating an object step by step and a method to finally get the object instance.

Structural Patterns:

- Adapter: Provides an interface between two unrelated entities so that they can work together.
- Decorator: The decorator design pattern is used to modify the functionality of an object at runtime.
- Composite: Used when we have to implement a part-whole hierarchy. For example, a diagram made of other pieces such as circle, square, triangle, etc.

Behavioral Patterns:

- Observer: Defines a one-to-many dependency between objects, so that when one object changes state, all its dependents are notified and updated automatically.
- Strategy: Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Clients can dynamically select the algorithm they want to use.
- Template Method: Defines the skeleton of an algorithm in a superclass, allowing subclasses to provide specific implementations of certain steps.

## What are the risks associated with using the GoF design patterns?
- Over-engineering: One of the risks is overusing or over-complicating design patterns where they are not necessary. Applying design patterns without a genuine need can lead to unnecessarily complex code, increased maintenance efforts, and reduced readability. It's crucial to assess the actual problem and choose the appropriate pattern accordingly.
- Increased Complexity: Some design patterns introduce additional layers of abstraction, which can increase the overall complexity of the codebase. This complexity may make the code harder to understand, debug, and maintain, especially for less experienced developers. It's important to strike a balance between the benefits of patterns and the clarity of the codebase.
- Learning Curve: Understanding and effectively applying design patterns require knowledge and experience. If developers on a project are unfamiliar with certain patterns, it may result in misunderstandings or misimplementations, leading to suboptimal or even incorrect code. Adequate training and documentation should be provided to ensure that developers have the necessary skills to use patterns correctly.
- Performance Overhead: In some cases, applying design patterns may introduce performance overhead due to additional indirection or abstraction layers. While this impact is usually negligible, in performance-critical systems, it's essential to evaluate the potential impact and consider trade-offs between the benefits of patterns and performance requirements.
- Tight Coupling: Improper application of design patterns can lead to tight coupling between classes or components. This can make the code more difficult to modify and maintain, as changes in one part of the system may have unintended effects on other interconnected components. It's important to consider the modularity and dependencies between classes when applying design patterns.
- Antipatterns: Incorrectly applying or misusing design patterns can result in antipatterns, which are solutions that seem initially correct but lead to negative consequences in the long run. It's crucial to understand the intent and principles behind each pattern to avoid falling into antipattern traps.

## What do we mean by YAGNI?
YAGNI (You Are Not Going to Need It)  
This principle emphasizes keeping your programs simple and avoiding complex features in software development.  
This is to ensure time management and efforts on features of a program that are unlikely to be used and to focus on features that meet the immediate requirement of your project.  
By following this principle, you can keep your codebase simple and maintainable and also help reduce the risk of bugs and errors.

## What do we mean by SLAP?
SLAP (Single Level Of Abstraction)  
The slap principle proposes that code should have a single level of abstraction. That is, a block of code should not mix what the code does and how it works. As SLAP promotes code clarity, maintainability, and reusability, functions and modules are focused on completing one task at a time.  
The code is easier to read, understand, and modify when it is at the same level of abstraction, since it is modular, and each piece can be understood independently.  
Thus, code in a function or module should be at the same abstraction level and should not mix lower-level implementation details with higher-level business logic.

## What do we mean by KISS?
KISS ( Keep It Simple Stupid)  
KISS is a principle that advocates keeping systems, software, or any solution as simple as possible.  
The purpose of this principle is to avoid unnecessary complexity and to focus on the most essential features or components of a project.  
In General, KISS provides developers with a useful guideline for creating software that is easy to understand, maintain, and use, as well as that delivers a good user experience.

## What is the Repository Pattern?
The Repository Pattern provides an abstraction layer between the application's business logic and the data persistence mechanisms, such as databases, file systems, or external APIs.  
The Repository Pattern aims to centralize and encapsulate the logic for interacting with data sources. It provides a consistent and standardized way to perform CRUD (Create, Read, Update, Delete) operations on data entities, abstracting away the underlying data access implementation details.


## What is a CRUD interface?
A CRUD interface is an interface that defines the standard set of operations for managing persistent data entities. CRUD stands for Create, Read, Update, and Delete, which are the basic operations performed on data.


# Unit testing
## Why is unit testing a good practice?
The purpose of unit testing is to catch errors early in the development process, when they are cheaper and easier to fix.  
By testing each unit in isolation, we can catch errors and bugs early in the development process, before they have a chance to cause larger problems in the system as a whole. Unit tests also serve as a form of documentation, providing a clear specification of the expected behavior of each unit of code.  
Unit testing can help ensure that code is of high quality, by identifying and fixing errors early on. It can also encourage developers to write more modular and reusable code.  
By catching bugs early, unit testing can reduce the amount of time spent debugging and troubleshooting.  
When code is well-tested, it is easier to make changes or refactor it without introducing new bugs or breaking existing functionality.  
By catching issues early and reducing debugging time, unit testing can lead to faster development and deployment.  
Unit tests provide a common language and understanding of how a system works, which can improve collaboration and communication among team members.

## What is JUnit?
JUnit is a popular open-source testing framework for Java applications. It provides a simple and standardized way to write and execute unit tests for Java code. JUnit is widely used in the Java community for automated testing, especially for writing test cases at the unit level.

## What is a parameterized test?
A parameterized test is a type of test in which the same test case is executed multiple times with different sets of input values. It allows you to test a specific behavior or method against various combinations of inputs and expected outcomes, all within a single test structure.

## What options do you have in NUnit to create parameterized tests?
The TestCase attribute allows the developer to specify the values to be passed to the unit test by simply embedding them in the attribute signature.  
The TestCaseSource attribute also provides complete test cases but unlike the TestCase attribute, it points at an external method. Not being limited by language constraints, complex types can be provided.  
Values attribute :
- Random attribute will generate the amount of random values specified by the constructor. Optionally, the values can be constrained within a given range. This attribute supports numeric types only.
- Range attribute will generate all values between the two given boundaries of the range. This attribute supports numeric types only.
- values attribute will return all the specified values. For Boolean and Enum parameters, the attribute will generate all possible values unless some of them are specified. Since the values are inlined, the same restrictions of the TestCase attribute apply.
  Unlike the Values attribute, the ValueSource attribute allows you to specify a generator method that will generate values for the decorated parameter of the test.

## What is _mocking_?
Mocking is a technique used in software development and testing to create objects that simulate the behavior of real objects. In the context of unit testing, mocking involves creating mock objects that mimic the behavior of dependencies or collaborators of the code under test. These mock objects allow you to isolate and control the behavior of the system under test, enabling focused and reliable testing.

## What is the difference between _mocking_, _stubbing_ and _faking_?
Mocking involves creating objects that mimic the behavior of real objects or dependencies. Mock objects are typically used in unit testing to replace dependencies and simulate their behavior, allowing for isolated and controlled testing. Mocking frameworks provide features to define expectations, specify method behaviors, and verify method calls during testing.

Stubbing is a form of mocking where you create objects or methods that provide predetermined responses to method calls. Stubs are used to simulate specific behaviors or scenarios in order to test different code paths. Unlike full mock objects, stubs often have predefined behaviors and may not perform detailed verification of method calls.

Faking refers to the creation of simplified or partial implementations of dependencies or collaborators. Fakes are typically used in integration testing or when testing against external systems or resources. Fakes provide a simplified alternative that behaves similarly to the real system but may not fully implement all features or handle all edge cases. Fakes are often used to speed up testing or isolate dependencies that are difficult to set up or maintain in a test environment.



# Databases

## What are relational databases? What are their advantages and disadvantages?
A relational database is a type of database that stores and provides access to data points that are related to one another. Relational databases are based on the relational model, an intuitive, straightforward way of representing data in tables. In a relational database, each row in the table is a record with a unique ID called the key. The columns of the table hold attributes of the data, and each record usually has a value for each attribute, making it easy to establish the relationships among data points.  
**Advantages:**
- **Simplicity of Model:** In contrast to other types of database models, the relational database model is much simpler. It does not require any complex queries because it has no query processing or structuring so simple SQL queries are enough to handle the data.
- **Ease of Use:** Users can easily access/retrieve their required information within seconds without indulging in the complexity of the database. Structured Query Language (SQL) is used to execute complex queries.
- **Accuracy:** A key feature of relational databases is that they’re strictly defined and well-organized, so data doesn’t get duplicated. Relational databases have accuracy because of their structure with no data duplication.
- **Data Integrity:** RDBMS databases are also widely used for data integrity as they provide consistency across all tables. The data integrity ensures the features like accuracy and ease of use.
- **Normalization:** As data becomes more and more complex, the need for efficient ways of storing it increases.  Normalization is a method that breaks down information into manageable chunks to reduce storage size.  Data can be broken up into different levels with any level requiring preparation before moving onto another level of normalizing your data.  
  Database normalization also ensures that a relational database has no variety or variance in its structure and can be manipulated accurately.  This ensures that integrity is maintained when using data from this database for your business decisions.
- **Collaboration:** Multiple users can access the database to retrieve information at the same time and even if data is being updated.
- **Security:** Data is secure as Relational Database Management System allows only authorized users to directly access the data. No unauthorized user can access the information.

**Disadvantages:**
- **Maintenance Problem:** The maintenance of the relational database becomes difficult over time due to the increase in the data. Developers and programmers have to spend a lot of time maintaining the database.
- **Cost:** The relational database system is costly to set up and maintain. The initial cost of the software alone can be quite pricey for smaller businesses, but it gets worse when you factor in hiring a professional technician who must also have expertise with that specific kind of program.
- **Physical Storage:** A relational database is comprised of rows and columns, which requires a lot of physical memory because each operation performed depends on separate storage. The requirements of physical memory may increase along with the increase of data.
- **Lack of Scalability:** While using the relational database over multiple servers, its structure changes and becomes difficult to handle, especially when the quantity of the data is large.  Due to this, the data is not scalable on different physical storage servers.  Ultimately, its performance is affected i.e. lack of availability of data and load time etc.  As the database becomes larger or more distributed with a greater number of servers, this will have negative effects like latency and availability issues affecting overall performance.
- **Complexity in Structure:** Relational databases can only store data in tabular form which makes it difficult to represent complex relationships between objects. This is an issue because many applications require more than one table to store all the necessary data required by their application logic.
- **Decrease in performance over time:** The relational database can become slower, not just because of its reliance on multiple tables.  When there is a large number of tables and data in the system, it causes an increase in complexity.  It can lead to slow response times over queries or even complete failure for them depending on how many people are logged into the server at a given time.

## How do you associate entities to each other in a relational database model?
In a relational database model, entities are associated with each other through relationships that define how they are connected or related. The most common types of relationships in a relational database are:

One-to-One (1:1) Relationship: In a one-to-one relationship, each entity in one table is associated with exactly one entity in another table, and vice versa. This type of relationship is typically represented by including a foreign key column in one of the tables that references the primary key of the other table. For example, if you have two tables, "Person" and "Address," where each person has one address and each address belongs to one person, you can represent this relationship by including a foreign key column (e.g., "person_id") in the "Address" table that references the primary key column (e.g., "id") of the "Person" table.

One-to-Many (1:N) Relationship: In a one-to-many relationship, an entity in one table can be associated with multiple entities in another table, but each entity in the second table is associated with only one entity in the first table. This relationship is also represented using foreign keys, where the "one" side of the relationship (parent table) includes the primary key column, and the "many" side (child table) includes a foreign key column referencing the primary key column of the parent table. For example, if you have two tables, "Department" and "Employee," where each department can have multiple employees but each employee belongs to only one department, you would include a foreign key column (e.g., "department_id") in the "Employee" table that references the primary key column (e.g., "id") of the "Department" table.

Many-to-Many (N:N) Relationship: In a many-to-many relationship, entities in one table can be associated with multiple entities in another table, and vice versa. This type of relationship requires an additional table, known as a junction table or association table, to represent the relationship. The junction table includes foreign keys that reference the primary keys of the two related tables. For example, if you have two tables, "Student" and "Course," where each student can enroll in multiple courses and each course can have multiple students, you would create a junction table (e.g., "Enrollment") with foreign key columns referencing the primary keys of the "Student" and "Course" tables.

## What are tables in a relational database?
Tables are the primary means of organizing and structuring data in a relational database. They provide a structured and tabular representation of data, enabling efficient storage, retrieval, and manipulation of information. Tables play a vital role in establishing relationships, maintaining data integrity, and enabling powerful data querying capabilities in relational databases.

## What is a _primary key_?
A PRIMARY KEY is a single column/field in a table that uniquely identifies each record in a database table. It is the most appropriate candidate key to be the main key of any table.  
A table can have only one PRIMARY KEY, which may consist of single or multiple fields. When multiple fields are used as a primary key, they are called a Composite Key.

## What is a _foreign key_?
In SQL, a Foreign Key is a column (or combination of columns) in a table whose values match the values of a Primary Key column in another table. Using the Foreign key, we can link two tables together.  
A Foreign Key is also known as a Referencing key of a table because it can reference any field defined as unique.

## What does the SQL abbreviation stand for?
The SQL abbreviation stands for Structured Query Language.

## What are some of the SQL database providers that you’ve heard of?
Oracle Database, MySQL, Microsoft SQL Server, PostgreSQL, SQLite,
## What are SQL data types? Are there any differences in data types between different SQL databases?
SQL data types represent the kind of data that can be stored in database columns or variables.  
Each SQL database provides its own set of data types, but there are common data types that are widely supported across different SQL databases.  
However, there can be some differences and variations in data types between different SQL databases, especially in terms of the names, sizes, and specific features associated with each data type.  
While there are common data types across SQL databases, there can be differences in their names, sizes, and behavior.  
For example, the INTEGER data type in one database may have a different size or range compared to another database.  
Additionally, some databases may provide additional data types or have specialized data types for specific purposes.

## What are _constraints_ in SQL?
SQL constraints are used to specify rules for the data in a table.  
Constraints are used to limit the type of data that can go into a table. This ensures the accuracy and reliability of the data in the table. If there is any violation between the constraint and the data action, the action is aborted.  
Constraints can be column level or table level. Column level constraints apply to a column, and table level constraints apply to the whole table.  
The following constraints are commonly used in SQL:
- **NOT NULL** - Ensures that a column cannot have a NULL value
- **UNIQUE** - Ensures that all values in a column are different
- **PRIMARY KEY** - A combination of a **NOT NULL** and **UNIQUE**. Uniquely identifies each row in a table
- **FOREIGN KEY** - Prevents actions that would destroy links between tables
- **CHECK** - Ensures that the values in a column satisfies a specific condition
- **DEFAULT** - Sets a default value for a column if no value is specified
- **CREATE INDEX** - Used to create and retrieve data from the database very quickly

## How can we program different SQL databases in Java?
To program different SQL databases in Java, you can utilize the JDBC (Java Database Connectivity) API, which is a standard Java API for interacting with databases.  
JDBC provides a set of classes and interfaces that enable Java applications to connect to databases, execute SQL statements, retrieve and manipulate data, and manage database transactions.

## Which SQL statement is used to create tables? Describe the syntax briefly.
The SQL statement used to create tables is the **CREATE TABLE** statement.  
The **CREATE TABLE** statement specifies the table name, column names, data types, constraints, and any additional table-level properties.
  ```SQL
CREATE TABLE Customers (
   CustomerID INT PRIMARY KEY,
   FirstName VARCHAR(50) NOT NULL,
   LastName VARCHAR(50) NOT NULL,
   Email VARCHAR(100) UNIQUE,
   Age INT
);
  ```
## Which SQL statement can be used to insert values? Describe the syntax briefly.
The **INSERT INTO** statement is used to insert new records in a table. It allows you to add new rows or records to a table by specifying the column names and corresponding values you want to insert.
  ```SQL
  INSERT INTO Customers (CustomerID, FirstName, LastName, Email, Age)
  VALUES (1, 'John', 'Doe', 'johndoe@example.com', 30);
  ```

## Which SQL statement can be used to update values? Describe the syntax briefly.
The **UPDATE** statement is used to modify the existing records in a table. It allows you to modify existing records in a table by specifying the column names and the new values you want to set.
  ```SQL
  UPDATE Customers
  SET FirstName = 'Jane', Age = 35
  WHERE CustomerID = 1;
  ```
The WHERE clause specifies which record(s) that should be updated. If you omit the WHERE clause, all records in the table will be updated!

## Which SQL statement can be used to delete rows?. Describe the syntax briefly.
The **DELETE** statement is used to delete existing records in a table.
  ```SQL
  DELETE FROM Customers
  WHERE CustomerID = 1;
  ```
## Which SQL statement can be used to create queries?. Describe the syntax briefly.
The SQL statement used to create queries in SQL is the **SELECT** statement. It allows you to retrieve data from one or more tables in a database based on specified conditions and criteria.
```SQL
SELECT CustomerID, FirstName, LastName
FROM Customers
WHERE Age > 30
ORDER BY LastName ASC;
```
## How can you join tables together in SQL? When should you do it?
In SQL, you can join tables together using the **JOIN** clause to combine rows from two or more tables based on a related column between them. Joining tables allows you to retrieve data from multiple tables simultaneously and create a result set that combines information from different tables based on specified relationships.
```SQL
SELECT CustomerID, FirstName, LastName
FROM Customers
WHERE Age > 30
ORDER BY LastName ASC;
```













