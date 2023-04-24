import { HasHTMLFormat } from "../interfaces/HasHTMLFormat";

export interface HasRender {
    render(docObj: HasHTMLFormat, docType:string): void;
}