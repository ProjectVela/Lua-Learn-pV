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

    {
      question: "What keyword is used to define a variable in Lua?",
      options: ["var", "let", "local", "define"],
      correctIndex: 2
    },
    {
      question: "Which of the following is used to create a table in Lua?",
      options: ["{}", "[]", "()", "<>"],
      correctIndex: 0
    },
    {
      question: "What is the result of '5 + 3 * 2' in Lua?",
      options: ["11", "16", "13", "10"],
      correctIndex: 0
    },
    {
      question: "Which operator is used for equality comparison in Lua?",
      options: ["=", "==", "===", "!="],
      correctIndex: 1
    },
    {
      question: "How do you create a comment in Lua?",
      options: ["// comment", "# comment", "-- comment", "/* comment */"],
      correctIndex: 2
    },
    {
      question: "Which function is used to print output to the console in Lua?",
      options: ["echo()", "output()", "print()", "log()"],
      correctIndex: 2
    },
    {
      question: "How do you define a function in Lua?",
      options: ["function name() {}", "def name() {}", "function name() end", "func name() {}"],
      correctIndex: 2
    },
    {
      question: "Which of the following is the correct way to define a string in Lua?",
      options: ["'Hello World'", 'Hello World', "print('Hello World')", "\"Hello World\""],
      correctIndex: 0
    },
    {
      question: "What is the result of 'not true' in Lua?",
      options: ["true", "false", "nil", "error"],
      correctIndex: 1
    },
    {
      question: "Which data structure does Lua use to store key-value pairs?",
      options: ["Array", "Table", "List", "Set"],
      correctIndex: 1
    },
    {
      question: "What is the output of 'print(2 + 3 * 4)'?",
      options: ["14", "20", "11", "10"],
      correctIndex: 0
    },
    {
      question: "What is the result of 'type(123)' in Lua?",
      options: ["string", "number", "table", "function"],
      correctIndex: 1
    },
    {
      question: "Which of the following is a correct way to loop through a table in Lua?",
      options: ["for i = 1, #table do", "for i, v in table do", "for i, v in ipairs(table) do", "while i < #table do"],
      correctIndex: 2
    },
    {
      question: "What does 'return' do in a function?",
      options: ["Exits the function", "Prints a value", "Returns a value to the caller", "Defines the function"],
      correctIndex: 2
    },
    {
      question: "What does the 'break' statement do in Lua?",
      options: ["Exits the current loop", "Ends the program", "Stops the function", "Skips the current iteration"],
      correctIndex: 0
    },
    {
      question: "Which operator is used for string concatenation in Lua?",
      options: [".", "&", "+", "|"],
      correctIndex: 0
    },
    {
      question: "How do you access a field in a table by key in Lua?",
      options: ["table[key]", "table.key", "table[key()]"],
      correctIndex: 0
    },
    {
      question: "How do you declare a global variable in Lua?",
      options: ["global varName", "varName", "local varName", "None of the above"],
      correctIndex: 1
    },
    {
      question: "Which function checks whether a value is a number in Lua?",
      options: ["isnumber()", "isNumeric()", "type()", "number()"],
      correctIndex: 2
    },
    {
      question: "What is the output of 'print(5 == 5)'?",
      options: ["true", "false", "5", "nil"],
      correctIndex: 0
    },
    {
      question: "Which of the following is used to repeat a block of code in Lua?",
      options: ["repeat", "loop", "while", "for"],
      correctIndex: 0
    },
    {
      question: "What will 'x = {}' create in Lua?",
      options: ["An empty string", "An empty list", "An empty table", "An empty function"],
      correctIndex: 2
    },
    {
      question: "Which Lua function would you use to remove the last element from a table?",
      options: ["pop()", "remove()", "table.remove()", "delete()"],
      correctIndex: 2
    },
    {
      question: "Which Lua function is used to generate random numbers?",
      options: ["math.random()", "random()", "rand()", "math.rand()"],
      correctIndex: 0
    },
    {
      question: "What does 'os.date()' return in Lua?",
      options: ["The current date and time", "A random date", "A string of the current time", "The current year"],
      correctIndex: 0
    },
    {
      question: "What is the result of 'print(type(nil))'?",
      options: ["string", "table", "function", "nil"],
      correctIndex: 3
    },
    {
      question: "Which function is used to execute a command in Lua?",
      options: ["os.execute()", "command()", "run()", "exec()"],
      correctIndex: 0
    },
    {
      question: "How do you define a local variable in Lua?",
      options: ["local varName", "varName", "let varName", "define varName"],
      correctIndex: 0
    },
    {
      question: "How do you define an array in Lua?",
      options: ["array = {1, 2, 3}", "array[1, 2, 3]", "array = [1, 2, 3]", "array = <1, 2, 3>"],
      correctIndex: 0
    },
    {
      question: "What is the result of 'true and false' in Lua?",
      options: ["true", "false", "nil", "error"],
      correctIndex: 1
    },
    {
      question: "How do you create a function that returns multiple values in Lua?",
      options: ["return a, b", "return {a, b}", "function a, b", "return a and b"],
      correctIndex: 0
    }
    
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

{
      question: "What is the purpose of the 'require' function in Lua?",
      options: ["To import external libraries", "To declare variables", "To define functions", "To create tables"],
      correctIndex: 0
    },
    {
      question: "Which function is used to get the length of a table in Lua?",
      options: ["#table", "table.length", "table.size()", "length(table)"],
      correctIndex: 0
    },
    {
      question: "How do you remove the first element from a table in Lua?",
      options: ["table.removeFirst()", "table.remove(1)", "table.pop()", "table.shift()"],
      correctIndex: 1
    },
    {
      question: "What is the correct way to create a new instance of a Roblox Part?",
      options: ["part = Instance.new('Part')", "part = createPart('Part')", "part = new('Part')", "part = createInstance('Part')"],
      correctIndex: 0
    },
    {
      question: "Which Roblox API service is responsible for handling player data?",
      options: ["DataStoreService", "PlayerDataService", "GameDataService", "PlayerStorageService"],
      correctIndex: 0
    },
    {
      question: "What is the default value of a variable in Lua if it is not explicitly initialized?",
      options: ["nil", "0", "false", "undefined"],
      correctIndex: 0
    },
    {
      question: "Which method can you use to create a new GUI button in Roblox?",
      options: ["Instance.new('TextButton')", "CreateButton('TextButton')", "new('TextButton')", "Button.new('TextButton')"],
      correctIndex: 0
    },
    {
      question: "What is the function 'game:GetService('Players')' used for in Roblox?",
      options: ["To get the Players service", "To get the current player", "To get the game settings", "To get player stats"],
      correctIndex: 0
    },
    {
      question: "What function would you use to make a Part visible or invisible in Roblox?",
      options: ["part.Visible = true", "part.Transparency = 0", "part.CanCollide = false", "part.Transparency = 1"],
      correctIndex: 0
    },
    {
      question: "How do you listen for a player joining the game in Roblox?",
      options: ["game.Players.PlayerAdded", "game.Players.Joined", "game.PlayerAdded", "game.Player.Join"],
      correctIndex: 0
    },
    {
      question: "Which function is used to create a new clone of a Part in Roblox?",
      options: ["part:Clone()", "part:Copy()", "part:Duplicate()", "Instance.new('Clone', part)"],
      correctIndex: 0
    },
    {
      question: "In Roblox, how do you change the position of a Part?",
      options: ["part.Position = Vector3.new(0, 0, 0)", "part:SetPosition(0, 0, 0)", "part.Position.set(0, 0, 0)", "part.setPosition(Vector3.new(0, 0, 0))"],
      correctIndex: 0
    },
    {
      question: "What is the correct way to create a custom event in Roblox?",
      options: ["local event = Instance.new('BindableEvent')", "local event = Event.new('Bindable')", "local event = BindableEvent.new()", "local event = new('BindableEvent')"],
      correctIndex: 0
    },
    {
      question: "Which service in Roblox is used for managing in-game physics and collisions?",
      options: ["PhysicsService", "Workspace", "CollisionService", "PartService"],
      correctIndex: 1
    },
    {
      question: "What is the purpose of the 'Touched' event in Roblox?",
      options: ["Triggered when a player touches a part", "Triggered when a part is clicked", "Triggered when a part collides", "Triggered when a part is resized"],
      correctIndex: 0
    },
    {
      question: "Which Roblox method is used to check if a player has a specific tool in their backpack?",
      options: ["player:HasTool(tool)", "player.Backpack:FindFirstChild(tool)", "player:FindTool(tool)", "player.Backpack:Has(tool)"],
      correctIndex: 1
    },
    {
      question: "How do you call a function in Roblox from another script?",
      options: ["script.Parent.FunctionName()", "game:FunctionName()", "script.FunctionName()", "script.Parent:Call('FunctionName')"],
      correctIndex: 0
    },
    {
      question: "What does the 'game:GetService('ReplicatedStorage')' function do in Roblox?",
      options: ["Gets the ReplicatedStorage service", "Gets the current game storage", "Replicates game data to players", "Gets the game asset database"],
      correctIndex: 0
    },
    {
      question: "Which function is used to stop a loop in Roblox?",
      options: ["break", "stop()", "exit()", "return"],
      correctIndex: 0
    },
    {
      question: "What function is used to wait for a part to be loaded into the game in Roblox?",
      options: ["part:WaitForChild()", "part:Wait()", "game:WaitForPart()", "game.WaitForPart()"],
      correctIndex: 0
    },
    {
      question: "Which method is used to listen for a player's character loading in Roblox?",
      options: ["game.Players.PlayerAdded", "game.Players.CharacterAdded", "game.Players.CharacterLoaded", "game.Players.PlayerCharacterAdded"],
      correctIndex: 1
    },
    {
      question: "How do you add a force to a part in Roblox?",
      options: ["part.Velocity = Vector3.new(10, 0, 0)", "part:AddForce(Vector3.new(10, 0, 0))", "part:ApplyForce(Vector3.new(10, 0, 0))", "part:Velocity = Vector3.new(10, 0, 0)"],
      correctIndex: 0
    },
    {
      question: "Which function would you use to print the name of the player who triggered an event in Roblox?",
      options: ["print(player.Name)", "print(event.Player)", "print(event.Player.Name)", "print(event.Name)"],
      correctIndex: 2
    },
    {
      question: "What function do you use to create a sound in Roblox?",
      options: ["Instance.new('Sound')", "createSound('Sound')", "Sound.new()", "create('Sound')"],
      correctIndex: 0
    },
    {
      question: "How do you check if a part is touching another part in Roblox?",
      options: ["part:IsTouching(otherPart)", "part:Touched(otherPart)", "part:CheckTouch(otherPart)", "part:CollidesWith(otherPart)"],
      correctIndex: 0
    },
    {
      question: "What does the 'Humanoid' object in Roblox represent?",
      options: ["The player's character", "A non-player character's health", "An NPC's movement system", "A player's avatar body part"],
      correctIndex: 1
    },
    {
      question: "How do you get the player's score in Roblox?",
      options: ["game.Players.PlayerAdded.Score", "player.leaderstats.Score", "player.Score()", "player.Leaderboard.Score"],
      correctIndex: 1
    },
    {
      question: "How do you get the current position of a player's character in Roblox?",
      options: ["player.Character.HumanoidRootPart.Position", "player.Character.Position", "game.Players.PlayerAdded.CharacterPosition", "player.Character.Position()"],
      correctIndex: 0
    },
    {
      question: "Which function is used to disable or enable a part's collisions in Roblox?",
      options: ["part.CanCollide = true/false", "part:Collisions(true/false)", "part:EnableCollisions()", "part:SetCollisions()"],
      correctIndex: 0
    }
    
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

    {
      question: "What is the purpose of the 'metatable' in Lua?",
      options: [
        "To define the structure of a table",
        "To enable operator overloading",
        "To store data in an optimized format",
        "To create classes and objects"
      ],
      correctIndex: 1
    },
    {
      question: "Which of the following is a valid way to create a class in Lua?",
      options: [
        "local MyClass = {name = 'MyClass'}",
        "local MyClass = {__index = {name = 'MyClass'}}",
        "local MyClass = class{name = 'MyClass'}",
        "local MyClass = setmetatable({}, {__index = MyClass})"
      ],
      correctIndex: 1
    },
    {
      question: "What is the result of executing '5 / 2' in Lua?",
      options: ["2", "2.5", "2.0", "3"],
      correctIndex: 1
    },
    {
      question: "In Roblox, how would you make a script run on the server and the client simultaneously?",
      options: [
        "Use 'RemoteEvent' to communicate between server and client",
        "Run a script in 'ServerScriptService' and 'LocalScript'",
        "Use 'RemoteFunction' to call methods across the network",
        "Run scripts in both 'Workspace' and 'ReplicatedStorage'"
      ],
      correctIndex: 0
    },
    {
      question: "Which function is used to invoke a function on the server from the client in Roblox?",
      options: [
        "game.ReplicatedStorage:InvokeServer()",
        "game:GetService('Players'):InvokeServer()",
        "game.Server:Invoke()",
        "game.ReplicatedStorage:InvokeClient()"
      ],
      correctIndex: 0
    },
    {
      question: "What does the Lua operator '__index' allow you to do?",
      options: [
        "Override the default behavior of the index operation on a table",
        "Define a custom way to compare two tables",
        "Define custom functions for tables",
        "Track when a table is accessed"
      ],
      correctIndex: 0
    },
    {
      question: "What will 'print(10 + '5')' output in Lua?",
      options: [
        "15",
        "10 + 5",
        "error: invalid operand",
        "15.0"
      ],
      correctIndex: 2
    },
    {
      question: "In Roblox, how do you find out if a specific player is in a specific area?",
      options: [
        "Use 'Workspace:FindPartsInRegion3()' and check if the player is within the region",
        "Use 'game.Players.PlayerAdded()' and check for proximity",
        "Use 'PlayerInRegion()' function in a script",
        "Use 'game:GetService('Players'):FindPlayerByName()'"
      ],
      correctIndex: 0
    },
    {
      question: "Which method can be used to change the parent of a Roblox Part dynamically during runtime?",
      options: [
        "part.Parent = newParent",
        "part:SetParent(newParent)",
        "part:MoveTo(newParent)",
        "part:ChangeParent(newParent)"
      ],
      correctIndex: 0
    },
    {
      question: "Which function would you use to calculate a random number in a specific range in Lua?",
      options: [
        "math.random(min, max)",
        "random(min, max)",
        "math.randomrange(min, max)",
        "math.randomize(min, max)"
      ],
      correctIndex: 0
    },
    {
      question: "In Lua, what is the purpose of the 'coroutine' module?",
      options: [
        "To manage parallel execution of code",
        "To allow functions to pause and resume execution",
        "To optimize loops and control flow",
        "To create new instances of objects asynchronously"
      ],
      correctIndex: 1
    },
    {
      question: "How do you convert a table to a string representation in Lua?",
      options: [
        "table.tostring(table)",
        "table.concat(table)",
        "tostring(table)",
        "table.toString()"
      ],
      correctIndex: 2
    },
    {
      question: "In Roblox, which method is used to fire an event from the client to the server?",
      options: [
        "RemoteEvent:FireServer()",
        "game.ReplicatedStorage:FireClient()",
        "RemoteFunction:FireServer()",
        "game.ReplicatedStorage:FireServer()"
      ],
      correctIndex: 0
    },
    {
      question: "What is the correct way to clone a table in Lua?",
      options: [
        "table.clone(t)",
        "t:copy()",
        "setmetatable({}, {__index = t})",
        "table.deepcopy(t)"
      ],
      correctIndex: 2
    },
    {
      question: "What is the purpose of 'wait()' function in Roblox?",
      options: [
        "Pauses the script for a specified amount of time",
        "Pauses the entire game loop",
        "Delays all scripts by one frame",
        "Stops the script until the next game frame"
      ],
      correctIndex: 0
    },
    {
      question: "How can you stop an infinite loop in Roblox while running a game?",
      options: [
        "Use 'break' to exit the loop",
        "Use 'return' to stop the loop",
        "Call 'stop()' on the loop",
        "Use 'pause()' to interrupt the loop"
      ],
      correctIndex: 0
    },
    {
      question: "What does the method 'Instance.new()' do in Roblox?",
      options: [
        "Creates a new instance of a Roblox object",
        "Instantiates a new class",
        "Creates a new variable",
        "Creates a new Roblox model"
      ],
      correctIndex: 0
    },
    {
      question: "What method would you use to asynchronously load a module in Roblox?",
      options: [
        "require()",
        "load()",
        "game:LoadModule()",
        "game:GetService('ModuleScript')"
      ],
      correctIndex: 0
    },
    {
      question: "What is the significance of '__metatable' in Lua?",
      options: [
        "It allows you to protect a table from being modified",
        "It defines a custom operator for table operations",
        "It stores the metatable of an object",
        "It defines how a table is serialized"
      ],
      correctIndex: 0
    },
    {
      question: "What is the correct way to check if a value exists in a table in Lua?",
      options: [
        "if table[value] then",
        "if table.has(value) then",
        "if table:exists(value) then",
        "if value in table then"
      ],
      correctIndex: 0
    },
    {
      question: "How do you detect whether a part has been touched by another object in Roblox?",
      options: [
        "part.Touched:Connect(function(hit) end)",
        "part:Touching(hit)",
        "part.OnTouch(function(hit) end)",
        "part:Touching()"
      ],
      correctIndex: 0
    },
    {
      question: "How can you persist a player's data between game sessions in Roblox?",
      options: [
        "Use DataStoreService",
        "Use PlayerDataService",
        "Use player.LocalStorage",
        "Use ReplicatedStorage"
      ],
      correctIndex: 0
    },
    {
      question: "How would you create a custom function that executes in parallel with other scripts in Roblox?",
      options: [
        "Use coroutines",
        "Use threads",
        "Use events",
        "Use separate LocalScripts"
      ],
      correctIndex: 0
    },
    {
      question: "How do you make a model persist even when the player leaves the game in Roblox?",
      options: [
        "Save the model to DataStore",
        "Set the model as Persistent in Workspace",
        "Clone the model to ReplicatedStorage",
        "Use a Script to store the model"
      ],
      correctIndex: 0
    },
    {
      question: "How do you bind an input action (like key press) to a script in Roblox?",
      options: [
        "game:GetService('UserInputService'):InputBegan()",
        "game.InputBegan()",
        "game:GetService('UserInputService'):InputPressed()",
        "game.InputPressed()"
      ],
      correctIndex: 0
    },
    {
      question: "What is the correct way to check if a player's character is alive in Roblox?",
      options: [
        "player.Character:FindFirstChild('Humanoid')",
        "player.Character:FindFirstChildOfClass('Humanoid')",
        "player.Character.Humanoid.Health > 0",
        "player.Character:HasHumanoid()"
      ],
      correctIndex: 1
    },
    {
      question: "What is the most efficient way to handle large data in a Roblox game?",
      options: [
        "Use DataStoreService",
        "Use RemoteEvent for data transmission",
        "Use a Custom Module for local storage",
        "Store data in a part's attributes"
      ],
      correctIndex: 0
    }
    
  ]
};
