export const createIcon = (): HTMLImageElement => {
   const icon = document.createElement('img');
   icon.src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQ0lEQVR4nO2cv0ocURSHP4mF6aOLpPBPJ7iibpvYhTxF2qQKmNqXiGJjs429raivoC8REoXEQEhIfcPArIVklt1x77nn3vl98Ctn5szH4dy7y8yAEEIIIYQQQhTIPLAGDCbIRsQ6NhquuTLmmKY6l3FEDzgGfgJhwlxHrOe64ZonY45pqvM70McBu8DtFIJzEx08yO61lBwyE51c9nFLySFD0clkz085k0sQHVLIXn+C5JCx6JHsLQwXwa6KDpadPei46GDV2RKNjWyJxqazJRqbMSLR2MxsiaZxgZzpH1ESTeNupHIj0Q08ZavaWdGn9fkf52DMMRJthEQbIdFGFCv6Dj+8LFl0AF7hg0+li/4CvCYdc8A74G/pokOd24btWMzcAL9mLNi96FBYJBqJJnUXqqNJL06jg/RSNaOR6OQdp44mvSSNDtIL1IzGV/SDBYkmdReqo0kvTqOD9FI1o5Hohy64BN4DexO+MhczVQ0fgKuSOvoH8Aa/vK1rzFr0b2AT//TrWrMV/ZF82M9VdNUhC+TDc+BPjqLPyY+LHEUPyY9hjqLHvRXllapmiTZAoo2QaCMk2giJNkKijZBoIyTaCIk2QqKNkGgjJNoIiTZCoo2QaCMk2giJ7oroNh8YPHPwoMxgypy1uM/KzcxYa1FAV7Li6SOwodBUTzg9Y8YcObix4CyficAS8M3BzQUn+Qq8IBI7ks1I8jaRWQQOgXsHXRWMc1+Pi2id/D+qRWDVwZZsYJTVGAufEEIIIYQQQpCaf7ND0ci6ABnqAAAAAElFTkSuQmCC`;
   icon.width = 25;
   icon.height = 25;
   icon.style.cursor = 'pointer';
   return icon;
};