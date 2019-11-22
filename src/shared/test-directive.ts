import { Directive, OnInit, Input } from "@angular/core";

@Directive({
  selector: '[test]',
})
export class TestDirective implements OnInit{

  @Input() test: string;

  public ngOnInit() {
    console.log('directive init', this.test);
  }

}