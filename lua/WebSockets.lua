local Config = {
    ["ServerURL"] = "https://WebSockets.jareer12.repl.co" -- Your Server URL
}

local Sockets = require(script.Parent.Main)

local Players = game:GetService("Players")
local HTTPServer = game:GetService("HttpService")
local connection = Sockets.Connect(Config.ServerURL, "")

while true do
    local Users = {}
    local players = game.Players:GetPlayers()

    for _, player in pairs(players) do
        table.insert(
            Users,
            HTTPServer:JSONEncode(
                {
                    ["UserId"] = player.UserId,
                    ["Name"] = player.Name,
                    ["DisplayName"] = player.DisplayName
                }
            )
        )
    end

    local Data =
        HTTPServer:JSONEncode(
        {
            ["Data"] = Users
        }
    )

    connection:send(
        "initialize",
        HTTPServer:JSONEncode(
            {
                ["PlaceId"] = game.PlaceId
            }
        )
    )
    connection:send("fetch_users", Data)
    connection:on(
        "send_message",
        function(data)
            print("Received")
            print(data)
        end
    )
    wait(2)
end
