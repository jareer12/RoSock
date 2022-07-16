local HttpService = game:GetService("HttpService")
local Base64 = require(script.Parent.Base)

Connection = {}
Connection.__index = Connection

function Connection.new(url, id)
    local newConnection = {}
    setmetatable(newConnection, Connection)

    newConnection.url = url
    newConnection.id = id

    newConnection.handlers = {}

    spawn(
        function()
            while wait() do
                local success, response =
                    pcall(
                    function()
                        local getData = HttpService:RequestAsync({Url = url .. "/poll/" .. id, Method = "GET"})
                        local response = HttpService:JSONDecode(getData.Body)
                        if response.success == true then
                            newConnection.handlers[response.event.name](response.event.data)
                        end
                    end
                )
            end
        end
    )
    spawn(
        function()
            while wait(5) do
                local success, response =
                    pcall(
                    function()
                        HttpService:RequestAsync(
                            {
                                Url = newConnection.url .. "/poll/" .. newConnection.id,
                                Method = "POST",
                                Headers = {
                                    ["Content-Type"] = "Application/JSON"
                                },
                                Body = HttpService:JSONEncode(
                                    {
                                        name = Base64.encode("internal_ping"),
                                        data = Base64.encode("Initialze Internal Ping")
                                    }
                                )
                            }
                        )
                    end
                )
            end
        end
    )

    local function close()
        HttpService:RequestAsync(
            {
                Url = newConnection.url .. "/connection/" .. newConnection.id,
                Method = "DELETE"
            }
        )
    end

    game.Close:Connect(close)

    return newConnection
end

function Connection:send(name, data)
    HttpService:RequestAsync(
        {
            Url = self.url .. "/poll/" .. self.id,
            Method = "POST",
            Headers = {
                ["Content-Type"] = "Application/JSON"
            },
            Body = HttpService:JSONEncode(
                {
                    name = Base64.encode(name),
                    data = Base64.encode(data)
                }
            )
        }
    )
end

function Connection:on(event, handler)
    self.handlers[event] = handler
end

function Connection:Disconnect()
    HttpService:RequestAsync(
        {
            Url = self.url .. "/connection/" .. self.id,
            Method = "DELETE"
        }
    )
end

return Connection
