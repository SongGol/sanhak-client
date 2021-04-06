const request = require("request");

const options = {
    url: "https://9u31ip8rz2.execute-api.ap-northeast-2.amazonaws.com/test_stage/lambda-get?userid=kkk&func_name=isAvailableID"
};

/* 
    headers: {
        'dad': 'adwad'
    }
*/

//get방식
request.get(options, (error, response, body) => {
    console.log('get error:', error);
    console.log('get statusCode:', response && response.statusCode); 
    console.log('body:', body);
});