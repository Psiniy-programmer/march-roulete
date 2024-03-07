import { SOURCE } from './compliments'

const LS_KEY = 'COMPLIMENT';

export const getCompliment = () => {
    const viewedCompliments = localStorage.getItem(LS_KEY);

    if (!viewedCompliments) {
        const newCompliment = SOURCE[Math.floor(Math.random()*SOURCE.length)];
        const lsItem = JSON.stringify([newCompliment]);
        localStorage.setItem(LS_KEY, lsItem);

        return newCompliment;
    }

    const parsedCompliments = JSON.parse(viewedCompliments);

    const filteredCompl = SOURCE.filter((compl) => !parsedCompliments.includes(compl));
    
    if (filteredCompl.length === 0) {
        localStorage.removeItem(LS_KEY);
        return getCompliment();
    }
    
    const newCompliment = filteredCompl[Math.floor(Math.random()*filteredCompl.length)];
    const lsItem = JSON.stringify([...parsedCompliments, newCompliment]);

    localStorage.setItem(LS_KEY, lsItem);

    return newCompliment;
};

export const scrollTo = (id) => {
    const el = document.getElementById(id) 
    el.scrollIntoView({
        behavior: 'smooth'
    });
};