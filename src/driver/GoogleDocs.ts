import { Driver, IDriver } from 'src/driver/Abstract';

export class GoogleDocsDriver extends Driver implements IDriver {
   private doneHref: string[] = [];
   isApplicable(url: string): boolean {
      return url.includes('docs.google.com');
   }

   init(createIcon: () => HTMLImageElement): void {
      document.body.addEventListener('click', () => {
         const image = document.querySelector('image');
         if (!image) { return; }
         const href = image.getAttribute('xlink:href');
         if (!href || this.doneHref.includes(href)) { return; }
         const icon = createIcon();
         icon.onclick = (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            chrome.runtime.sendMessage(href);
         };
         const root = image.closest('div.kix-appview-clipped-ui-elements-container');
         if (!root) { return; }
         const container = document.querySelector("div.kix-embeddedobjectdragger.kix-embeddedobjectdragger-cropmode");
         if (!container) { return; }
         const place = document.querySelector("div.kix-rotatingtilemanager-content");
         if (!place) { return; }
         place.appendChild(icon);
         icon.style.zIndex = '99999';
         icon.style.position = 'absolute';
         const { top, left, height, width } = getComputedStyle(container);
         icon.style.left = `${parseInt(left) + parseInt(width) / 2}px`;
         icon.style.top = `${parseInt(top) + parseInt(height)}px`;
         icon.style.display = 'block';
         this.doneHref.push(href);
      });
   }
}