import {INFORMATION} from '../app/constants';

export async function getProjects(){
    const response = await fetch(`${INFORMATION.PUBLIC_INFO_API}/ObrasPublicas`);
    const json = await response.json();

    return json;
}