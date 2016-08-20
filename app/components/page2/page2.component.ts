import {Component, AfterViewInit, ViewChild, ElementRef} from "@angular/core";
import {Page} from 'ui/page';

@Component({
    selector: "page2",
    templateUrl: "components/page2/page2.component.html",
})
export class Page2Component implements AfterViewInit {
    public counter: number = 16;

    @ViewChild('txt') txtEle: ElementRef;

    constructor(private page: Page){

    }

    ngAfterViewInit(){
        console.log('page measured height ', this.page.getMeasuredHeight());
        console.log('txtEle android ', this.txtEle.nativeElement.android);
        console.log('txtEle ios ', this.txtEle.nativeElement.ios);
    }

    onLoad(args){
        console.log('after load stacklayout height is ', args.object.getMeasuredHeight());
        console.log('after load page measured height ', this.page.getMeasuredHeight());
        console.log('after load txtEle android ', this.txtEle.nativeElement.android);
        console.log('after load txtEle ios ', this.txtEle.nativeElement.ios);
    }
}