function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const quizzes = {
  basic: [
    {
      question: "What is the correct way to define a variable in Lua?",
      options: ["int x = 5", "x := 5", "local x = 5", "var x = 5"],
      correctIndex: 2
    },
    {
      question: "Which of the following is the correct syntax for a Lua `if` statement?",
      options: ["if (x == 10) { ... }", "if x == 10 then ... end", "if x = 10: ...", "if x == 10: ... end"],
      correctIndex: 1
    },
    {
      question: "How do you print text in Lua?",
      options: ["echo('Hello')", "printf('Hello')", "print('Hello')", "log('Hello')"],
      correctIndex: 2
    },
    {
      question: "What is the default value of a Lua variable that hasn’t been initialized?",
      options: ["nil", "0", "false", "undefined"],
      correctIndex: 0
    },
    {
      question: "Which of these is NOT a valid Lua data type?",
      options: ["integer", "boolean", "function", "string"],
      correctIndex: 0
    },
    {
      question: "What does the `type()` function in Lua return?",
      options: ["Data type of a variable", "Value of the variable", "Memory address of the variable", "Length of a string"],
      correctIndex: 0
    },
    {
      question: "What is a table in Lua?",
      options: ["Array", "Function", "Object", "A data structure"],
      correctIndex: 3
    },
    {
      question: "What does the `pairs()` function do in Lua?",
      options: ["Returns the index of a table", "Iterates through all table keys and values", "Creates a copy of a table", "None of the above"],
      correctIndex: 1
    },
    {
      question: "How do you create a function in Lua?",
      options: ["function myFunction() ... end", "def myFunction() ... end", "func myFunction() ... end", "function: myFunction() ... end"],
      correctIndex: 0
    }
  ],
  api: [
    {
      question: "Which of the following is used to create a new part in Roblox Studio?",
      options: ["game.Workspace:CreatePart()", "game.CreatePart()", "Instance.new('Part')", "game.Part.new()"],
      correctIndex: 2
    },
    {
      question: "How do you change the color of a part in Roblox?",
      options: ["part.Color = Color3.fromRGB(255, 0, 0)", "part.Color = 'red'", "part:SetColor(Color3.fromRGB(255, 0, 0))", "part:SetColor('red')"],
      correctIndex: 0
    },
    {
      question: "How can you check if a player is touching a part in Roblox?",
      options: ["part.Touched:Connect(function(hit) ... end)", "part.OnTouch(hit) ... end", "part.Contact:Connect(function(hit) ... end)", "part.OnTouch()"],
      correctIndex: 0
    },
    {
      question: "What does `game:GetService('Players')` return?",
      options: ["List of all players in the game", "Player object", "Players service", "A reference to the Player class"],
      correctIndex: 2
    },
    {
      question: "How do you set a player's leaderstats in Roblox?",
      options: ["game.Players.PlayerAdded:Connect(function(player) ... end)", "player.leaderstats = 10", "player:SetLeaderstats(10)", "player.leaderstats.Score = 10"],
      correctIndex: 3
    },
    {
      question: "Which of these functions is used to teleport a player to a position?",
      options: ["player:Teleport(position)", "player:MoveTo(position)", "game.Teleport(player, position)", "player:SetPosition(position)"],
      correctIndex: 1
    },
    {
      question: "How do you check if a player has a specific tool?",
      options: ["if player:HasTool('ToolName')", "if player.Backpack:FindFirstChild('ToolName')", "if player:HasItem('ToolName')", "if player.Tools:Find('ToolName')"],
      correctIndex: 1
    },
    {
      question: "How do you destroy an object in Roblox?",
      options: ["object:Destroy()", "object:Remove()", "object:Delete()", "object:Clear()"],
      correctIndex: 0
    },
    {
      question: "How do you set a player's health in Roblox?",
      options: ["player.Health = 100", "player:SetHealth(100)", "player:Health:Set(100)", "player.Character.Humanoid.Health = 100"],
      correctIndex: 3
    },
    {
      question: "How can you detect if a part is touching the ground?",
      options: ["part.Touched:Connect(function(hit) if hit:IsA('Terrain') then ... end end)", "part:TouchingGround() end", "part:HitGround() end", "part.IsOnGround() end"],
      correctIndex: 0
    }
  ],
  logic: [
    {
      question: "What does a `while` loop do in Lua?",
      options: ["Repeats the code while the condition is true", "Repeats the code a certain number of times", "Checks a condition once", "Executes once if the condition is true"],
      correctIndex: 0
    },
    {
      question: "What is a table in Lua?",
      options: ["An array", "A function", "A type of object", "A data structure that can hold multiple values"],
      correctIndex: 3
    },
    {
      question: "What is the difference between `==` and `=` in Lua?",
      options: ["`==` is for assignment, `=` is for comparison", "`==` is for comparison, `=` is for assignment", "`==` is used only for strings", "`=` is not valid in Lua"],
      correctIndex: 1
    },
    {
      question: "Explain the difference between a `for` loop and a `while` loop in Lua.",
      options: ["A `for` loop runs a fixed number of times, while a `while` loop runs while a condition is true", "A `for` loop runs while a condition is true, and a `while` loop runs a fixed number of times", "Both loops are exactly the same", "A `while` loop cannot be used in Lua"],
      correctIndex: 0
    },
    {
      question: "What does the `break` statement do in a loop?",
      options: ["Stops the loop immediately", "Skips to the next iteration", "Ends the current function", "Exits the program"],
      correctIndex: 0
    },
    {
      question: "How do you implement recursion in Lua?",
      options: ["Call the function within itself", "Use a `goto` statement", "Loop through all values and call a function", "Call a function indirectly using a callback"],
      correctIndex: 0
    },
    {
      question: "What is the result of `3 + '5'` in Lua?",
      options: ["8", "35", "Error", "3 '5'"],
      correctIndex: 2
    },
    {
      question: "How do you handle error-catching in Lua?",
      options: ["Use `try...catch`", "Use `error()`", "Use `pcall()`", "Use `assert()`"],
      correctIndex: 2
    },
    {
      question: "What is the purpose of the `return` statement?",
      options: ["Returns the value of a function", "Returns the program to the main thread", "Stops the program", "Loops back to the start of the function"],
      correctIndex: 0
    },
    {
      question: "What does the `assert()` function do in Lua?",
      options: ["Raises an error if the condition is false", "Prints an error message", "Stops the program if the condition is true", "None of the above"],
      correctIndex: 0
    }
  ]
};

function randomizeQuizzes() {
  Object.keys(quizzes).forEach(category => {
    quizzes[category].forEach(quiz => {
      shuffleArray(quiz.options); // Randomize the options for each question
      quiz.correctIndex = quiz.options.indexOf(quiz.options[quiz.correctIndex]); // Update the correctIndex after shuffling
    });
  });
}

// Call randomizeQuizzes when you load the page or whenever needed
randomizeQuizzes();
