'use strict';

class Driver {
}

class GoogleDocsDriver extends Driver {
    doneHref = [];
    isApplicable(url) {
        return url.includes('docs.google.com');
    }
    init(createIcon) {
        document.body.addEventListener('click', () => {
            const image = document.querySelector('image');
            if (!image) {
                return;
            }
            const href = image.getAttribute('xlink:href');
            if (!href || this.doneHref.includes(href)) {
                return;
            }
            const icon = createIcon();
            icon.onclick = (e) => {
                e.preventDefault();
                e.stopImmediatePropagation();
                chrome.runtime.sendMessage(href);
            };
            const root = image.closest('div.kix-appview-clipped-ui-elements-container');
            if (!root) {
                return;
            }
            const container = document.querySelector("div.kix-embeddedobjectdragger.kix-embeddedobjectdragger-cropmode");
            if (!container) {
                return;
            }
            const place = document.querySelector("div.kix-rotatingtilemanager-content");
            if (!place) {
                return;
            }
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

class Trianglify extends Driver {
    isApplicable(url) {
        return url.includes('trianglify.io');
    }
    init(createIcon) {
        const canvas = document.querySelector('canvas');
        if (!canvas) {
            return;
        }
        const icon = createIcon();
        icon.onclick = () => {
            chrome.runtime.sendMessage(canvas.toDataURL('image/png'));
        };
        const panel = canvas.parentElement && canvas.parentElement.querySelector('div');
        if (!panel) {
            return;
        }
        panel.appendChild(icon);
        icon.style.display = 'inline-block';
        icon.style.marginLeft = '10px';
        icon.style.verticalAlign = 'middle';
    }
}

const createIcon = () => {
    const icon = document.createElement('img');
    icon.src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQ0lEQVR4nO2cv0ocURSHP4mF6aOLpPBPJ7iibpvYhTxF2qQKmNqXiGJjs429raivoC8REoXEQEhIfcPArIVklt1x77nn3vl98Ctn5szH4dy7y8yAEEIIIYQQQhTIPLAGDCbIRsQ6NhquuTLmmKY6l3FEDzgGfgJhwlxHrOe64ZonY45pqvM70McBu8DtFIJzEx08yO61lBwyE51c9nFLySFD0clkz085k0sQHVLIXn+C5JCx6JHsLQwXwa6KDpadPei46GDV2RKNjWyJxqazJRqbMSLR2MxsiaZxgZzpH1ESTeNupHIj0Q08ZavaWdGn9fkf52DMMRJthEQbIdFGFCv6Dj+8LFl0AF7hg0+li/4CvCYdc8A74G/pokOd24btWMzcAL9mLNi96FBYJBqJJnUXqqNJL06jg/RSNaOR6OQdp44mvSSNDtIL1IzGV/SDBYkmdReqo0kvTqOD9FI1o5Hohy64BN4DexO+MhczVQ0fgKuSOvoH8Aa/vK1rzFr0b2AT//TrWrMV/ZF82M9VdNUhC+TDc+BPjqLPyY+LHEUPyY9hjqLHvRXllapmiTZAoo2QaCMk2giJNkKijZBoIyTaCIk2QqKNkGgjJNoIiTZCoo2QaCMk2giJ7oroNh8YPHPwoMxgypy1uM/KzcxYa1FAV7Li6SOwodBUTzg9Y8YcObix4CyficAS8M3BzQUn+Qq8IBI7ks1I8jaRWQQOgXsHXRWMc1+Pi2id/D+qRWDVwZZsYJTVGAufEEIIIYQQQpCaf7ND0ci6ABnqAAAAAElFTkSuQmCC`;
    icon.width = 25;
    icon.height = 25;
    icon.style.cursor = 'pointer';
    return icon;
};

const DRIVERS = [
    new GoogleDocsDriver(),
    new Trianglify(),
];
const driver = DRIVERS.find((d) => d.isApplicable(window.location.host)) || null;
function main() {
    if (!driver) {
        return;
    }
    driver.init(createIcon);
}
let isInit = false;
window.addEventListener('load', () => {
    if (isInit) {
        return;
    }
    isInit = true;
    main();
});
