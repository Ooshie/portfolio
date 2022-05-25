/*
const formId = "1FAIpQLSfYiCLnwIY4N22GKpq4QkPE93kF1uyRkP5H9WuMr_Wtb5Dqjw";
const entry1 = "entry.2037317104";
const entry2 = "entry.116139889";
const entry3 = "entry.1629295841"; */


const formId = "1FAIpQLSdwfYHq5G1e9lLGXotUdvsZ3gi3BF2tjLhLafvbOmwGSaJHKQ";
const entry1 = "entry.1826419211";
const entry2 = "entry.245704264";
const entry3 = "entry.675523372";
const entry4 = "entry.271255052";

const getPath = formId => `https://docs.google.com/forms/d/e/${formId}/formResponse`;

/* google forms console to get entry id's

const printLabel = i => document . querySelectorAll ( '[aria-level^="3"]' )[i].innerText;
const printEntry = ( e,i) => console . log ( printLabel( i ), e . name );
const entryList = document . querySelectorAll ( '[name^=entry]' );
[ ... entryList ]. forEach ( printEntry );

// for formID (doesn't work for some reason)
const id = ( document . location . href ). match ( / [ -\w ] {25,} / );
console . log ( `id: ${ id } ` );

*/

const postToGoogleDB = function (data) {
    const path = getPath(formId);
    const url = getURL(path, data)
    sendRequest('POST', url)
        .then(responseEvent);
}

const getURL = function (path, params) {
    const url = new URL(path);
    for (let key in params) {
        url.searchParams.set(key, params[key]);
    }
    return url;
}

const initRequest = function (verb, url) {
    const init = new Object();
    init.method = verb;
    init.mode = 'no-cors';
    return new Request(url, init);
}

const sendRequest = async function (verb, url) {
    const request = initRequest(verb, url);
    const response = await fetch(request);
    return response;
}

const responseEvent = response => alert('Success!'); 