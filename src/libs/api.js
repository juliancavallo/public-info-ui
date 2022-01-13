import {INFORMATION} from '../common/constants';
import {stringify} from 'query-string'

export async function getProjects(params){
    return get(params, 'projects')
}

export async function getSalaries(params){
    return get(params, 'salaries')
}

const get = async (params, endpoint) =>{
    if(params){
        for (const key of Object.keys(params)) {
            if (params[key] === "") {
                delete params[key];
            }
        }
    }
    const q  = stringify(params);


    const response = await fetch(`${INFORMATION.PUBLIC_INFO_API}/${endpoint}?${q}`, {
        method: 'GET'
    })
    .then(async function(data) {
        if(data.ok) {
            return {
                'data': await data.json(),
                'success': true
            };
        } else {
            return {
                'message': `Error fetching data. \n${data.status} - ${data.statusText}`,
                'success': false
            };
        }
      })
      .catch(function(error) {
        console.log(error);
      });

      return response;
}