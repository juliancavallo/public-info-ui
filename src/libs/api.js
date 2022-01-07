import {INFORMATION} from '../common/constants';
import {stringify} from 'query-string'

export async function getProjects(params){
    if(params){
        for (const key of Object.keys(params)) {
            if (params[key] === "") {
                delete params[key];
            }
        }
    }
    const q  = stringify(params);
    
    const response = await fetch(`${INFORMATION.PUBLIC_INFO_API}/ObrasPublicas?${q}`, {
        method: 'GET'
    });
    const json = await response.json();

    return json;
}