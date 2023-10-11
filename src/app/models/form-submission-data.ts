
export interface FormSubmissionData {
    sousAction: string;
    taux: number;
    cout: number | null;
    dateDebutRealisation: Date;
    dateSaisieRealisation: Date;
    dateFinRealisation: Date;
    numFicheProjet: number;
    commentaire: string;
  }