export class Storage {
    
    constructor() {}

    static checkLocalStorage(): void {
        if(localStorage.getItem('invoice') === null){
            localStorage.setItem('invoice', '[]');
        }
        if(localStorage.getItem('estimate') === null){
            localStorage.setItem('estimate', '[]')

        }
    }
}