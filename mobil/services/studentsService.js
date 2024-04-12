
/*
* File: studentsService.js
* Author: Béres Délia
* Copyright: 2024, Béres Délia
* Group: Szoft II_1_E
* Date: 2024-04-12
* Github: 
* Licenc: GNU GPL
*/

const host = 'http://localhost:8000/';
const endpoint = 'students';

export async function getStudents() {
    const url = host + endpoint;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}