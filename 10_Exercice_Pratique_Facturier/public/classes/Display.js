export class Display {
    constructor(container, hiddenDiv) {
        this.container = container;
        this.hiddenDiv = hiddenDiv;
        this.formContainer = document.getElementById("form-container");
    }
    render(docObj, docType) {
        const HMTLString = docObj.htmlFormat();
        this.container.innerHTML = HMTLString;
        this.hiddenDiv.classList.remove('invisible');
        this.formContainer.innerHTML = "";
    }
}
