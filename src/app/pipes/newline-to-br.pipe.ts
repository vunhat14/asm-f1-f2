import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nbsp',
  standalone: true
})
export class NewlineToBrPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    // Replace newlines with <br> tags
    return value.replace(/\n/g, '<br>');
  }
}
