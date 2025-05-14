const BASE_URL = 'http://127.0.0.1:8000/'

export const API_ENDPOINTS = {

   

    GET_FINANCIAL_ATTRIB: (cik:any)=>`${BASE_URL}financial-attrib/${cik}`,
    GET_COMPANIES:`${BASE_URL}company`,
    POST_CREATE_NEW_TARGET:`${BASE_URL}fetch-cik/`

    





}