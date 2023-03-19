const url = "http://localhost:8000/api";
let token = "GiRT1DbqVVv1gSozWmZmsZXvesTo4TaJZjM1dqF7";

export const link = axios.create({
        baseURL : url,
        headers:{
            'api_token' : token,
        },
    });
