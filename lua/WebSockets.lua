local Config = {
    ["ServerURL"] = "https://WebSockets.jareer12.repl.co" -- Your Server URL
}

local Players = game:GetService("Players")
local HTTPServer = game:GetService("HttpService")
local robloxLongPolling = require(script.Parent.Module)
local connection = robloxLongPolling.Connect(Config.ServerURL, "")

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

    connection:send("fetch_users", Data)
    wait(5)
end
