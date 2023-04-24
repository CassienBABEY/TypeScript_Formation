import { HasHTMLFormat } from "./HasHTMLFormat";

export interface HasRender {
    render(docObj: HasHTMLFormat, docType:string): void;
}