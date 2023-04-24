import { HasHTMLFormat } from "../interfaces/HasHTMLFormat.js";
import { HasRender} from "../interfaces/HasRender.js";

export class Display implements HasRender {

    formContainer: HTMLDivElement;

    constructor(
        private container: HTMLDivElement,
        private hiddenDiv: HTMLDivElement,
        private btnPrint: HTMLButtonElement
    ) {
        this.formContainer = document.getElementById("form-container") as HTMLDivElement;
    }

    render(docObj: HasHTMLFormat, docType:string) {
        const HMTLString: string = docObj.htmlFormat();
        this.container.innerHTML = HMTLString;
        if(docType === "invoice"){
            this.btnPrint.innerText = "Imprimer la facture"
        }else {
            this.btnPrint.innerText = "Imprimer le devis"
        }

        this.hiddenDiv.classList.remove('invisible');
        this.formContainer.innerHTML = "";
    }
}