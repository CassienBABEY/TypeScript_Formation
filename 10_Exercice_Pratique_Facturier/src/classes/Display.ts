import { HasHTMLFormat } from "../interfaces/HasHTMLFormat.js";
import { HasRender} from "../interfaces/hasRender.js";

export class Display implements HasRender {

    formContainer: HTMLDivElement;

    constructor(
        private container: HTMLDivElement,
        private hiddenDiv: HTMLDivElement
    ) {
        this.formContainer = document.getElementById("form-container") as HTMLDivElement;
    }

    render(docObj: HasHTMLFormat, docType:string) {
        const HMTLString: string = docObj.htmlFormat();
        this.container.innerHTML = HMTLString;
        this.hiddenDiv.classList.remove('invisible');
        this.formContainer.innerHTML = "";
    }
}