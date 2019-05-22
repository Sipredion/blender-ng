import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {UtilityService} from '../../../services/utility.service';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements OnInit {

  @Input() color: string;
  @Input() disabled?: boolean;

  private buttonColor: string;
  private buttonFocusColor;
  private borderColor: string;
  private device: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2,
              private utilityService: UtilityService) {
  }

  @HostListener('mouseenter')
  hover() {
    this.onHover();
  }

  @HostListener('mouseleave')
  unHover() {
    this.restoreDefault();
  }

  @HostListener('mousedown')
  click() {
    this.onMouseClick();
  }

  @HostListener('mouseup')
  unClick() {
    this.restoreDefault();
  }

  @HostListener('focus')
  focus() {
    this.onFocus();
  }

  @HostListener('focusout')
  unFocus() {
    this.restoreDefault();
  }

  @HostListener('touchstart')
  touch(event) {
    event.preventDefault();
  }

  ngOnInit() {
    this.utilityService.screenSize$.subscribe(deviceType => {
      this.device = deviceType;
    });
    this.setInitialStyle(this.color, this.disabled);
  }

  // Button State Functions //

  onHover() {
  }

  onMouseClick() {

  }

  onTouchStart() {

  }

  onFocus() {

  }

  restoreDefault() {
  }

  private setInitialStyle(color: string, disabled: boolean) {
    this.setButtonColor(color, disabled);
    const el = this.el.nativeElement;
    this.renderer.addClass(el, 'app-button-initial');
    this.renderer.setStyle(el, 'color', `rgb(${this.buttonColor})`);
    this.renderer.setStyle(
      el,
      'box-shadow',
      `0 2px 4px rgba(${this.buttonColor}, 0.5), 0 0 1px rgba(${this.buttonColor}, 0.13)`
    );
    if (this.borderColor !== null || this.borderColor !== '' || this.borderColor !== undefined) {
      this.renderer.setStyle(el, 'border', `1px solid rgb(${this.borderColor})`);
      this.renderer.setStyle(el, 'text-shadow', `0 1px 2px rgba(0, 0, 0, 0.2)`);
    }
  }

  protected setButtonColor(color: string, disabled: boolean) {
    if (!disabled) {
      switch (color) {
        case 'primary':
          this.buttonColor = '12, 103, 153';
          this.buttonFocusColor = '4, 63, 94';
          break;
        case 'accent':
          this.buttonColor = '120, 218, 5';
          this.buttonFocusColor = '72, 135, 0';
          break;
        case 'warn':
          this.buttonColor = '241, 59,  6';
          this.buttonFocusColor = '148, 33,  0';
          break;
        case 'light':
          this.buttonColor = '255, 255, 255';
          this.borderColor = '255, 255, 255';
          this.buttonFocusColor = '200, 200, 200';
          break;
        default:
          this.buttonColor = '61, 61, 61';
          this.buttonFocusColor = '0, 0, 0';
          break;
      }
    } else {
      // Set Default color for disabled buttons
      this.buttonColor = '61, 61, 61';
      this.buttonFocusColor = '0, 0, 0';
    }
  }
}
