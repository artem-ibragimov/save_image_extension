import { IDriver } from 'src/driver/Abstract';
import { GoogleDocsDriver } from 'src/driver/GoogleDocs';
import { Trianglify } from 'src/driver/Trianglify';
import { createIcon } from 'src/UI/icon';

const DRIVERS: IDriver[] = [
   new GoogleDocsDriver(),
   new Trianglify(),
];
const driver: IDriver | null = DRIVERS.find((d) => d.isApplicable(window.location.host)) || null;

function main() {
   if (!driver) { return; }
   driver.init(createIcon);
}

let isInit = false;
window.addEventListener('load', () => {
   if (isInit) { return; }
   isInit = true;
   main();
});