import { createHashHistory } from 'history';

const history = createHashHistory();


export function redirectTo(url){
    history.push(url);
}