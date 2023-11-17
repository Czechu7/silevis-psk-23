import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf-creator',
  templateUrl: './pdf-creator.component.html',
  styleUrls: ['./pdf-creator.component.scss']
})
export class PdfCreatorComponent {
  formData: Record<string, string> = {
    ['data_umowy']: '17.11.2023', // Dostęp za pomocą notacji ['data_umowy']
    ['nazwa_dziekan']:'Jan Kowalski',
    ['nazwa_firmy']:'Nazwa firmy',
    ['siedziba_firmy']:'Siedziba firmy',
    ['ulica_firmy']:'Ulica firmy',
    ['firma_krs']:'Firma KRS',
    ['firma_nip']:'Firma NIP',
    ['firma_regon']:'Firma regon',
    ['firma_reprez']:'firma reprezentowana przez',
    ['nazwa_studenta']:'Nazwa studenta',
    ['numer_indeksu']:'Numer indeksu',
    ['data_od']:'Data od',
    ['data_do']:'Data do',
  };

  generatePdf(): void {
    const docDefinition: any = {
      content: [
        {
          text: 'Załącznik nr 1 do Zarządzenia Nr 54/19',
          alignment: 'right',
          fontSize: 10,
          bold: true,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `Rektora Politechniki Świętokrzyskiej z dnia 20 września 2019 r.`, //${this.formData['data_umowy']}
          alignment: 'right',
          fontSize: 10,
          bold: true,
          margin: [ 0, 0, 0, 25 ]
        },
        {
          text: `Umowa`, //${this.formData['data_umowy']}
          alignment: 'center',
          fontSize: 16,
          bold: true,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `o organizację praktyki studenta Politechniki Świętokrzyskiej`, //${this.formData['data_umowy']}
          alignment: 'center',
          fontSize: 16,
          bold: true,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `zawarta w dniu ${this.formData['data_umowy']}r. pomiędzy:`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 3 ]
        },
        {
          text: `Politechniką Świętokrzyską al. Tysiąclecia Państwa Polskiego 7, 25-314 Kielce,
          zwaną dalej Uczelnią, reprezentowaną na podstawie udzielonego przez Rektora Uczelni 
          pełnomocnictwa, przez Dziekana Wydziału ${this.formData['nazwa_dziekan']}`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `a`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `${this.formData['nazwa_firmy']} z siedzibą w ${this.formData['siedziba_firmy']} ul. ${this.formData['ulica_firmy']}`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `o nr KRS ${this.formData['firma_krs']}, NIP ${this.formData['firma_nip']}, Regon ${this.formData['firma_regon']}, zwanym dalej`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `Zakładem lub Zakładem Pracy, reprezentowanym przez ${this.formData['firma_reprez']}`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 25 ]
        },
        {
          text: `§ 1. Uczelnia kieruje studenta ${this.formData['nazwa_studenta']}`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `nr albumu ${this.formData['numer_albumu']} do Zakładu w celu odbycia przez niego praktyki studenckiej`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `w okresie od ${this.formData['okres_od']} do ${this.formData['okres_do']}`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `§ 2. Zakład zobowiązuje się do:`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `1) zapewnienia odpowiednich stanowisk pracy, pomieszczeń, warsztatów, urządzeń, narzędzi`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `i materiałów zgodnie z programem praktyki stanowiącym załącznik nr 1 do niniejszej `, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `umowy;          `, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `2) zapoznania studenta z zakładowym regulaminem pracy, przepisami o bezpieczeństwie`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `i higienie pracy oraz o ochronie danych/tajemnicy przedsiębiorstwa itp. obowiązujących`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `w Zakładzie;`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `3) nadzoru nad wykonaniem przez studenta zadań wynikających z programu praktyki.`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `§ 3. Uczelnia zobowiązuje się do sprawowania kierownictwa dydaktycznego nad praktyką`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `studencką oraz jej kontroli i oceny, zgodnie z programem praktyk.`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `§ 4. W przypadku gdy Zakład zdecyduje o możliwości przyznania studentowi wynagrodzenia `, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `z tytułu pracy wykonywanej w trakcie odbywania praktyki, stosowna umowa zawierana jest`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `pomiędzy Zakładem a studentem, bez udziału i pośrednictwa Uczelni`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `§ 5. 1. Strony wyznaczają osoby właściwe do kontaktu w bieżących sprawach:
          1) z ramienia Zakładu Pracy …………………………………………………………………
                          tel.: …………………………………………………………………
                          e-mail: …………………………………………………………………
          2) z ramienia Uczelni: …………………………………………………………………
                          tel.: …………………………………………………………………
                          e-mail: …………………………………………………………………
          `, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
        },
        {
          text: `2. Klauzula informacyjna dotycząca przetwarzania przez Uczelnię danych osobowych 
          pozyskanych z Zakładu stanowi załącznik nr 2 do niniejszej umowy. Zakład zobowiązuje się 
          do udostępnienia załącznika osobom, których dane przekazano na podstawie niniejszej 
          umowy.
          § 6. Umowa niniejsza została sporządzona w dwóch jednobrzmiących egzemplarzach po 
          jednym dla każdej ze Stron.
          § 7. Ewentualne spory mogące wyniknąć na tle stosowania niniejszej umowy będą 
          rozstrzygane na zasadzie mediacji przez wytypowanych przez każdą ze Stron mediatorów.
          § 8. Umowa została zawarta na czas odbywania przez studenta praktyki określony w § 1.
          `, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 25 ]
        },
        {
          columns: [
				{
					text: 'W imieniu Zakładu:',
          alignment: 'center',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
				},
				{
					text: 'W imieniu Politechniki Świętokrzyskiej:',
          alignment: 'center',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
				}
			]
        },
        {
          columns: [
				{
					text: '……………………………………………….',
          alignment: 'center',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
				},
				{
					text: '……………………………………………….',
          alignment: 'center',
          fontSize: 10,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
				}
			]
        },
        {
          columns: [
				{
					text: 'Podpis i pieczęć',
          alignment: 'center', 
          fontSize: 5,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
				},
				{
					text: 'Podpis i pieczęć',
          alignment: 'center',
          fontSize: 5,
          bold: false,
          margin: [ 0, 0, 0, 5 ]
				}
			]
        },
      ]
    };

    pdfMake.createPdf(docDefinition).download('generated-pdf.pdf');
  }
}
