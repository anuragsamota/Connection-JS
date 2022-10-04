const inp  = document.getElementById('url-inp');
const getbtn = document.getElementById('get');
const postbtn = document.getElementById('post');
const putbtn = document.getElementById('put');
const deletebtn = document.getElementById('delete');

let endpoint;
let data = {
    id : 1234,
    name : 'test'
};


function getEndpoint(){
    endpoint = inp.value;
}



getbtn.onclick = async function() {
    getEndpoint();
    const res = await getRequest(endpoint);
    console.log(res);

};
postbtn.onclick = async function() {
    getEndpoint();
    const res = await postRequest(endpoint,data);
    console.log(res);
}
putbtn.onclick = async function() {
    getEndpoint();
    const res = await putRequest(endpoint,data);
    console.log(res);
}
deletebtn.onclick = async function() {
    getEndpoint();
    const res = await deleteRequest(endpoint);
    console.log(res);
}
;
