// quizzes.js

// Define the quiz categories
const quizCategories = [
  { label: "Basic Lua", value: "basic" },
  { label: "Intermediate Lua", value: "intermediate" },
  { label: "Advanced Lua", value: "advanced" }
];

// Define the quizzes for each category
const quizzes = {
  basic: [
    {
      question: "What is the correct syntax for a variable in Lua?",
      options: ["var = 10", "local var = 10", "int var = 10", "var: 10"],
      correctIndex: 1
    },
    {
      question: "How do you define a function in Lua?",
      options: ["function myFunc() end", "def myFunc() end", "func myFunc() end", "function: myFunc()"],
      correctIndex: 0
    },
    {
      question: "Which operator is used for concatenation in Lua?",
      options: ["&", "+", "=", ".."],
      correctIndex: 3
    },
    {
      question: "How do you define a table in Lua?",
      options: ["table = {}", "local table = {}", "table = []", "table = ()"],
      correctIndex: 1
    },
    {
      question: "What is the output of print(type('Hello World')) in Lua?",
      options: ["string", "text", "str", "Hello World"],
      correctIndex: 0
    },
    // ... add 25 more questions for basic Lua
  ],

  intermediate: [
    {
      question: "Which of the following is a valid table constructor in Lua?",
      options: ["{}", "[]", "()", "<>"],
      correctIndex: 0
    },
    {
      question: "What does the 'pairs' function do in Lua?",
      options: [
        "Iterates over all elements in an array",
        "Iterates over all elements in a table",
        "Returns the number of elements in an array",
        "Returns the length of a string"
      ],
      correctIndex: 1
    },
    {
      question: "What function is used to add an element to the end of a table?",
      options: ["append()", "insert()", "table.insert()", "table.push()"],
      correctIndex: 2
    },
    {
      question: "What does 'local' keyword do in Lua?",
      options: [
        "Defines a global variable",
        "Defines a local variable within a block",
        "Defines a function",
        "Defines a table"
      ],
      correctIndex: 1
    },
    {
      question: "What is the output of the following code: 'print(10 / 0)'?",
      options: ["0", "Infinity", "NaN", "Error"],
      correctIndex: 3
    },
    // ... add 25 more questions for intermediate Lua
  ],

  advanced: [
    {
      question: "What is the purpose of the 'metatable' in Lua?",
      options: [
        "It allows you to define object-oriented behavior",
        "It allows you to manipulate a table's internal structure",
        "It defines a global table",
        "It stores the memory address of a table"
      ],
      correctIndex: 0
    },
    {
      question: "What does the 'coroutine' module do in Lua?",
      options: [
        "It provides a way to handle multiple threads of execution",
        "It allows for memory management",
        "It defines the structure of a function",
        "It allows for network communication"
      ],
      correctIndex: 0
    },
    {
      question: "How do you create a new thread using the coroutine library in Lua?",
      options: [
        "coroutine.create()",
        "thread.new()",
        "newThread()",
        "create.thread()"
      ],
      correctIndex: 0
    },
    {
      question: "What is the purpose of 'setmetatable()' in Lua?",
      options: [
        "It sets a new metatable for a table",
        "It allows you to create a table",
        "It defines a global function",
        "It defines a local variable"
      ],
      correctIndex: 0
    },
    {
      question: "What will 'print(pcall(function() error('Test') end))' output?",
      options: ["false", "true", "Test", "Error"],
      correctIndex: 0
    },
    // ... add 25 more questions for advanced Lua
  ]
};
