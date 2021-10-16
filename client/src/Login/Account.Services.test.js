const rewire = require("rewire")
const Account_Services = rewire("./Account.Services")
const login = Account_Services.__get__("login")
const logout = Account_Services.__get__("logout")
const isAuthenticated = Account_Services.__get__("isAuthenticated")
const handleResponse = Account_Services.__get__("handleResponse")
// @ponicode
describe("login", () => {
    test("0", () => {
        let callFunction = () => {
            login("user_name", "!Lov3MyPianoPony")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            login("user_name", "accessdenied4u")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            login("user name", "accessdenied4u")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            login("username", "YouarenotAllowed2Use")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            login("user-name", "YouarenotAllowed2Use")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            login(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("logout", () => {
    test("0", () => {
        let callFunction = () => {
            logout()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("isAuthenticated", () => {
    test("0", () => {
        let callFunction = () => {
            isAuthenticated()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleResponse", () => {
    test("0", () => {
        let callFunction = () => {
            handleResponse({ status: 401, ok: "4.0.0-beta1\t", statusText: "odm", text: () => "foo bar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            handleResponse({ status: 402, ok: "v1.2.4", statusText: "ssf", text: () => "Hello, world!" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            handleResponse({ status: 400, ok: 0, statusText: "esa", text: () => "This is a Text" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            handleResponse({ status: 500, ok: "1.0.0", statusText: "odm", text: () => "foo bar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            handleResponse({ status: 401, ok: "1.0.0", statusText: "wad", text: () => "Hello, world!" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            handleResponse(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
