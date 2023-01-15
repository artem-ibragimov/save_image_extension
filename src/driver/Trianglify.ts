import { Driver, IDriver } from 'src/driver/Abstract';

export class Trianglify extends Driver implements IDriver {

   isApplicable(url: string): boolean {
      return url.includes('trianglify.io');
   }

   init(createIcon: () => HTMLImageElement): void {
      const canvas = document.querySelector('canvas');
      if (!canvas) { return; }
      const icon = createIcon();
      icon.onclick = () => {
         chrome.runtime.sendMessage(canvas.toDataURL('image/png'));
      };
      const panel = canvas.parentElement && canvas.parentElement.querySelector('div');
      if (!panel) { return; }
      panel.appendChild(icon);
      icon.style.display = 'inline-block';
      icon.style.marginLeft = '10px';
      icon.style.verticalAlign = 'middle';
   }
}