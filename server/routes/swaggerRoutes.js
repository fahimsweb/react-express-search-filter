/* Routes configuration for swagger api docs */

const swaggerRoutes = {
    // Default api route
    "/": {
            get: {
                tags: ["Store"],
                description: "Lists the store data object",
                summary: "Lists entire data object",
                responses:{
                    200: {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object"
                                }
                            }
                        }
                    }
                }
            }
        },

    // Cars by Id api route
    "/cars/{id}": {
        get: {
            tags: ["Store"],
            description: "Get Cars by Id",
            summary: "Get Cars by Id",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    description: "id of the car",
                    type: "string",
                    example: "1"
                }
            ],
            responses: {
                200: {
                    description: "OK",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object"
                            }
                        }
                    }
                }
            }
        }
    },


    // brands by id api route
    "/brands/{id}": {
        get: {
            tags: ["Store"],
            description: "Get brands by Id",
            summary: "Get brands by Id",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    description: "id of the brand",
                    type: "string",
                    example: "1"
                }
            ],
            responses: {
                200: {
                    description: "OK",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object"
                            }
                        }
                    }
                }
            }
        }
    },

    // company by id api route 
    "/companies/{id}": {
        get: {
            tags: ["Store"],
            description: "Get companies by Id",
            summary: "Ger companies by Id",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    description: "id of the Company",
                    type: "string",
                    example: "1"
                }
            ],
            responses: {
                200: {
                    description: "OK",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object"
                            }
                        }
                    }
                }
            }
        }
    }
}

module.exports = swaggerRoutes;