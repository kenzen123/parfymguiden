export interface Author {
  name: string;
  role: string;
  bio: string;
}

export const authors: Record<string, Author> = {
  "Elin Wallenberg": {
    name: "Elin Wallenberg",
    role: "Doftskribent, medgrundare",
    bio: "Elin har arbetat med parfymförsäljning i nischbutiker i Stockholm sedan 2013 och har provat och sålt över tusen dofter över disk. Hon skriver Parfymguidens marknads- och köpguider, och testar minst tre nya parfymer varje vecka.",
  },
  "Noa Fredriksson": {
    name: "Noa Fredriksson",
    role: "Doftskribent, medgrundare",
    bio: "Noa har en kandidatexamen i kemi och ansvarar för Parfymguidens mer tekniska guider — koncentration, hållbarhet och hur doftmolekyler faktiskt beter sig på hud. Har testat parfym systematiskt sedan 2019.",
  },
};
