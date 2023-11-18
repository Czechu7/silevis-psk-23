import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { StudentFormService } from '../../service/student-form.service';
import { IStudentForm } from 'src/app/shared/interfaces/IStudentForm.model';
import { TranslateService } from '@ngx-translate/core';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf-creator',
  templateUrl: './pdf-creator.component.html',
  styleUrls: ['./pdf-creator.component.scss'],
})

export class PdfCreatorComponent implements OnInit {
  loggedUserData: IStudentForm;
  formData: any;

  constructor(private studentFormService: StudentFormService, protected translate: TranslateService) {   
     (pdfMake as any).fonts = {
    times: {
      normal: 'https://db.onlinewebfonts.com/t/32441506567156636049eb850b53f02a.ttf',
      bold: 'https://db.onlinewebfonts.com/t/f3a3df668a6b2982e99096657b8dba7f.ttf',
      italics: 'https://db.onlinewebfonts.com/t/32441506567156636049eb850b53f02a.ttf',
      bolditalics: 'https://db.onlinewebfonts.com/t/32441506567156636049eb850b53f02a.ttf'
    },
  };
}


  ngOnInit(): void {
    console.log('Created');
    this.loggedUserData = this.studentFormService.loggedUserData;
    this.createFormData();
  }

  private createFormData() {
    this.formData = {
      ['data_umowy']: '18.11.2023',
      ['nazwa_dziekan']: 'dr hab. inż. Roman Deniziak, prof. PŚk',
      ['nazwa_firmy']: this.loggedUserData.firmName,
      ['siedziba_firmy']: 'Siedziba firmy',
      ['ulica_firmy']: this.loggedUserData.address,
      ['firma_krs']: this.loggedUserData.KRS,
      ['firma_nip']: this.loggedUserData.NIP,
      ['firma_regon']: this.loggedUserData.regon,
      ['firma_reprez']: 'firma reprezentowana przez',
      ['nazwa_studenta']: 'Nazwa studenta',
      ['numer_indeksu']: '111111',
      ['data_od']: '10.08.2023',
      ['data_do']: '24.08.2023',
      ['dzisiejsza_data']: '18.11.2023',
    };
  }

protected generatePdf(): void {
    const docDefinition: any = {
      content: [
        {
          text: 'Załącznik nr 1 do Zarządzenia Nr 54/19',
          alignment: 'right',
          fontSize: 10,
          bold: true,
          margin: [0, 0, 0, 5],
        },
        {
          text: `Rektora Politechniki Świętokrzyskiej z dnia 20 września 2019 r.`, //${this.formData['data_umowy']}
          alignment: 'right',
          fontSize: 10,
          bold: true,
          margin: [0, 0, 0, 25],
        },
        {
          text: `Umowa`, //${this.formData['data_umowy']}
          alignment: 'center',
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 5],
        },
        {
          text: `o organizację praktyki studenta Politechniki Świętokrzyskiej`, //${this.formData['data_umowy']}
          alignment: 'center',
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 5],
        },
        {
          text: `zawarta w dniu ${this.formData['data_umowy']}r. pomiędzy:`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 3],
        },
        {
          text: `Politechniką Świętokrzyską al. Tysiąclecia Państwa Polskiego 7, 25-314 Kielce,
          zwaną dalej Uczelnią, reprezentowaną na podstawie udzielonego przez Rektora Uczelni 
          pełnomocnictwa, przez Dziekana Wydziału ${this.formData['nazwa_dziekan']}`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `a`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `${this.formData['nazwa_firmy']} z siedzibą w ${this.formData['ulica_firmy']} ul. ${this.formData['ulica_firmy']}`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `o nr KRS ${this.formData['firma_krs']}, NIP ${this.formData['firma_nip']}, Regon ${this.formData['firma_regon']}, zwanym dalej`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `Zakładem lub Zakładem Pracy, reprezentowanym przez ${this.formData['firma_reprez']}`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 25],
        },
        {
          text: `§ 1. Uczelnia kieruje studenta ${this.formData['nazwa_studenta']}`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 3],
        },
        {
          text: `nr albumu ${this.formData['numer_indeksu']} do Zakładu w celu odbycia przez niego praktyki studenckiej`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `w okresie od ${this.formData['okres_od']} do ${this.formData['okres_do']}`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `§ 2. Zakład zobowiązuje się do:`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `1) zapewnienia odpowiednich stanowisk pracy, pomieszczeń, warsztatów, urządzeń, narzędzi`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `i materiałów zgodnie z programem praktyki stanowiącym załącznik nr 1 do niniejszej `, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `umowy;          `, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `2) zapoznania studenta z zakładowym regulaminem pracy, przepisami o bezpieczeństwie`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `i higienie pracy oraz o ochronie danych/tajemnicy przedsiębiorstwa itp. obowiązujących`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `w Zakładzie;`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `3) nadzoru nad wykonaniem przez studenta zadań wynikających z programu praktyki.`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `§ 3. Uczelnia zobowiązuje się do sprawowania kierownictwa dydaktycznego nad praktyką`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `studencką oraz jej kontroli i oceny, zgodnie z programem praktyk.`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `§ 4. W przypadku gdy Zakład zdecyduje o możliwości przyznania studentowi wynagrodzenia `, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `z tytułu pracy wykonywanej w trakcie odbywania praktyki, stosowna umowa zawierana jest`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `pomiędzy Zakładem a studentem, bez udziału i pośrednictwa Uczelni`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `§ 5. 1. Strony wyznaczają osoby właściwe do kontaktu w bieżących sprawach:
          1) z ramienia Zakładu Pracy …………………………………………………………………
                          tel.: …………………………………………………………………
                          e-mail: …………………………………………………………………
          2) z ramienia Uczelni: …………………………………………………………………
                          tel.: …………………………………………………………………
                          e-mail: …………………………………………………………………
          `,
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
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
          margin: [0, 0, 0, 25],
        },
        {
          columns: [
            {
              text: 'W imieniu Zakładu:',
              alignment: 'center',
              fontSize: 10,
              bold: false,
              margin: [0, 0, 0, 5],
            },
            {
              text: 'W imieniu Politechniki Świętokrzyskiej:',
              alignment: 'center',
              fontSize: 10,
              bold: false,
              margin: [0, 0, 0, 5],
            },
          ],
        },
        {
          columns: [
            {
              text: '……………………………………………….',
              alignment: 'center',
              fontSize: 10,
              bold: false,
              margin: [0, 0, 0, 5],
            },
            {
              text: '……………………………………………….',
              alignment: 'center',
              fontSize: 10,
              bold: false,
              margin: [0, 0, 0, 5],
            },
          ],
        },
        {
          columns: [
            {
              text: 'Podpis i pieczęć',
              alignment: 'center',
              fontSize: 5,
              bold: false,
              margin: [0, 0, 0, 5],
            },
            {
              text: 'Podpis i pieczęć',
              alignment: 'center',
              fontSize: 5,
              bold: false,
              margin: [0, 0, 0, 5],
            },
          ],
        },
      ],defaultStyle: {
        font: 'times'
      }
    };

    pdfMake.createPdf(docDefinition).download('generated-pdf.pdf');
  }

protected generatePdf2(): void {
    const docDefinition: any = {
      content: [
        {
          text: 'Załącznik nr 2 do Zarządzenia Nr 54/19',
          alignment: 'right',
          fontSize: 10,
          bold: true,
          margin: [0, 0, 0, 5],
        },
        {
          text: `Rektora Politechniki Świętokrzyskiej z dnia 20 września 2019 r.`, //${this.formData['data_umowy']}
          alignment: 'right',
          fontSize: 10,
          bold: true,
          margin: [0, 0, 0, 25],
        },
        {
          text: `${this.formData['nazwa_studenta']}`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 12,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `Imię i nazwisko studenta`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 8,
          bold: false,
          margin: [0, 0, 0, 7],
        },
        {
          text: `Wydział Elektrotechniki, Automatyki i Informatyki`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 12,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `Wydział`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 8,
          bold: false,
          margin: [0, 0, 0, 7],
        },
        {
          text: `Kierunek, zakres - do wypelnienia`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `Kierunek, zakres`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `Nr albumu, forma studiów - do wypełnienia`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `Nr albumu, forma studiów`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 25],
        },
        {
          text: `Wydziałowy Kierownik Prarktyk`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: true,
          margin: [200, 0, 0, 3],
        },
        {
          text: `Nazwa kierownika pratyk - do wypelnienia`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: true,
          margin: [200, 0, 0, 5],
        },
        {
          text: `Wydział Elektrotechniki, Automatyki i Informatyki`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: true,
          margin: [200, 0, 0, 5],
        },
        {
          text: `Politechnika Świętokrzyska`, //${this.formData['data_umowy']}
          alignment: 'left',
          fontSize: 10,
          bold: true,
          margin: [200, 0, 0, 10],
        },
        {
          text: `Oświadczenie o znajomości zasad odbywania praktyki`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: `Oświadczam, że zapoznałem się z Regulaminem Praktyk Zawodowych w Politechnice
          Świętokrzyskiej oraz z niżej przedstawionymi warunkami praktyki studenckiej 
          i zobowiązuję się do ich przestrzegania.`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: `Warunki praktyki studenckiej:   `, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 10],
        },
        {
          text: `1. Uczelnia zobowiązana jest do sprawowania nadzoru dydaktyczno-wychowawczego 
          oraz organizacyjnego nad przebiegiem praktyk. Obowiązki te pełni w imieniu Uczelni 
          odpowiednio wydziałowy kierownik praktyk lub opiekun praktyki, który jest też
          upoważniony do rozstrzygania z kierownictwem Zakładu wszelkich spraw związanych 
          z przebiegiem praktyki.
          2. Student zobowiązuje się do odbycia praktyk zgodnie z programem, a ponadto do: 
          − przestrzegania ustalonego przez Zakład porządku i dyscypliny pracy,
          − przestrzegania zasad BHP i ochr. p. poż, 
          − przestrzegania zasad zachowania tajemnicy (odpowiednio: przedsiębiorstwa, służbowej lub 
          państwowej) oraz do ochrony poufności danych w zakresie określonym przez Zakład,
          − przestrzegania zasad odbywania praktyki określonych przez Uczelnię.
          3.  Po zakończeniu praktyki Student sporządza „Sprawozdanie z praktyki studenckiej” 
          potwierdzone przez zakładowego opiekuna praktyki i zaopiniowane przez opiekuna praktyk
          Sprawozdanie stanowi podstawę decyzji o zaliczeniu praktyki przez Studenta.

          Jednocześnie przyjmuję do wiadomości, że: Uczelnia nie ubezpiecza studentów –
          praktykantów od następstw nieszczęśliwych wypadków (NNW).
              Decyzję o ewentualnym ubezpieczeniu podejmę samodzielnie i z pełną 
          odpowiedzialnością, z uwzględnieniem wymogów w tym zakresie stawianych przez 
          Zakład, w którym odbywa się praktyka.`, //${this.formData['data_umowy']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          columns: [
            {
              text: 'Kielce dnia 18.11.2023r', //${this.formData['data_umowy']}
              alignment: 'left',
              fontSize: 10,
              bold: false,
              margin: [0, 0, 0, 5],
            },
            {
              text: '………………………………………………',
              alignment: 'right',
              fontSize: 10,
              bold: false,
              margin: [0, 0, 0, 3],
            },
          ],
        },
        {
          columns: [
            {
              text: '',
              alignment: 'left',
              fontSize: 10,
              bold: false,
              margin: [0, 0, 0, 5],
            },
            {
              text: 'Podpis studenta',
              alignment: 'center',
              fontSize: 5,
              bold: false,
              margin: [50, 0, 0, 5],
            },
          ],
        },
      ],defaultStyle: {
        font: 'times'
      }
    };

    pdfMake.createPdf(docDefinition).download('generated-pdf.pdf');
  
  }

protected generatePdfENGLISH(): void {
    const docDefinition: any = {
      content: [
        {
          text: 'Attachment No. 1 to Order No. 54/19',
          alignment: 'right',
          fontSize: 10,
          bold: true,
          margin: [0, 0, 0, 3],
        },
        {
          text: `By the Rector of Kielce University of Technology dated September 20, 2019.`, //${this.formData['contract_date']}
          alignment: 'right',
          fontSize: 10,
          bold: true,
          margin: [0, 0, 0, 25],
        },
        {
          text: `Agreement`, //${this.formData['contract_date']}
          alignment: 'center',
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 5],
        },
        {
          text: `on the organization of a student internship at Kielce University of Technology`, //${this.formData['contract_date']}
          alignment: 'center',
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 5],
        },
        {
          text: `concluded on ${this.formData['contract_date']} between:`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 3],
        },
        {
          text: `Kielce University of Technology, al. Tysiąclecia Państwa Polskiego 7, 25-314 Kielce,
          hereinafter referred to as the University, represented on the basis of the authorization granted by the University Rector by the Dean of the Faculty ${this.formData['dean_name']}`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `and`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `${this.formData['company_name']} with its registered office in ${this.formData['company_location']} ul. ${this.formData['company_street']}`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `with KRS No. ${this.formData['company_krs']}, NIP ${this.formData['company_nip']}, REGON ${this.formData['company_regon']}, hereinafter referred to as the Company or Workplace, represented by ${this.formData['company_representative']}`, //${this.formData['contract_date']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 25],
        },
        {
          text: `§ 1. The University directs the student ${this.formData['student_name']}`, //${this.formData['contract_date']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 3],
        },
        {
          text: `student ID ${this.formData['student_index']} to the Workplace for the purpose of completing a student internship`, //${this.formData['contract_date']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `in the period from ${this.formData['period_from']} to ${this.formData['period_to']}`, //${this.formData['contract_date']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `§ 2. The Workplace undertakes to:`, //${this.formData['contract_date']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `1) provide appropriate workstations, premises, workshops, equipment, tools`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `and materials in accordance with the internship program attached as Annex 1 to this `, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `agreement;`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `2) familiarize the student with the company's work regulations, safety regulations`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `and hygiene, and data/confidentiality protection regulations applicable`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `in the Workplace;`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `3) supervise the student's performance of tasks arising from the internship program.`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `§ 3. The University undertakes to exercise educational supervision over the student`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `internship, including its monitoring and evaluation, in accordance with the internship program.`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `§ 4. If the Workplace decides to grant the student remuneration `, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `for work performed during the internship, a relevant agreement is concluded`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `between the Workplace and the student, without the participation and intermediation of the University`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `§ 5. 1. The parties designate individuals authorized to contact in current matters:
          1) on behalf of the Workplace …………………………………………………………………
                          tel.: …………………………………………………………………
                          e-mail: …………………………………………………………………
          2) on behalf of the University: …………………………………………………………………
                          tel.: …………………………………………………………………
                          e-mail: …………………………………………………………………
          `,
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `2. The information clause regarding the processing of personal data by the University
          obtained from the Workplace constitutes Annex 2 to this agreement. The Workplace undertakes
          to provide the attachment to persons whose data has been transferred on the basis of this
          agreement.
          § 6. This agreement has been drawn up in two identical copies, one for each party.
          § 7. Any disputes arising from the application of this agreement will be resolved
          through mediation by mediators selected by each of the parties.
          § 8. The agreement has been concluded for the duration of the student's internship specified in § 1.
          `, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 25],
        },
        {
          columns: [
            {
              text: 'On behalf of the Workplace:',
              alignment: 'center',
              fontSize: 10,
              bold: false,
              margin: [0, 0, 0, 5],
            },
            {
              text: 'On behalf of Kielce University of Technology:',
              alignment: 'center',
              fontSize: 10,
              bold: false,
              margin: [0, 0, 0, 5],
            },
          ],
        },
        {
          columns: [
            {
              text: '……………………………………………….',
              alignment: 'center',
              fontSize: 10,
              bold: false,
              margin: [0, 0, 0, 5],
            },
            {
              text: '……………………………………………….',
              alignment: 'center',
              fontSize: 10,
              bold: false,
              margin: [0, 0, 0, 5],
            },
          ],
        },
        {
          columns: [
            {
              text: 'Signature and Seal',
              alignment: 'center',
              fontSize: 5,
              bold: false,
              margin: [0, 0, 0, 5],
            },
            {
              text: 'Signature and Seal',
              alignment: 'center',
              fontSize: 5,
              bold: false,
              margin: [0, 0, 0, 5],
            },
          ],
        },
      ],defaultStyle: {
        font: 'times'
      }
    };

    pdfMake.createPdf(docDefinition).download('generated-pdf.pdf');
  }

protected generatePdf2ENGLISH(): void {
    const docDefinition: any = {
      content: [
        {
          text: 'Attachment No. 2 to Order No. 54/19',
          alignment: 'right',
          fontSize: 10,
          bold: true,
          margin: [0, 0, 0, 5],
        },
        {
          text: `By the Rector of the Kielce University of Technology dated September 20, 2019.`, //${this.formData['contract_date']}
          alignment: 'right',
          fontSize: 10,
          bold: true,
          margin: [0, 0, 0, 25],
        },
        {
          text: `${this.formData['student_name']}`, //${this.formData['contract_date']}
          alignment: 'left',
          fontSize: 12,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `Student's full name`, //${this.formData['contract_date']}
          alignment: 'left',
          fontSize: 8,
          bold: false,
          margin: [0, 0, 0, 7],
        },
        {
          text: `Faculty of Electrical Engineering, Automatics and Computer Science`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 12,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `Faculty`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 8,
          bold: false,
          margin: [0, 0, 0, 7],
        },
        {
          text: `Field of study, scope - to be filled`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `Field of study, scope`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `Student ID, form of studies - to be filled`, //${this.formData['contract_date']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          text: `Student ID, form of studies`, //${this.formData['contract_date']}
          alignment: 'left',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 25],
        },
        {
          text: `Faculty Practicum Supervisor`, //${this.formData['contract_date']}
          alignment: 'left',
          fontSize: 10,
          bold: true,
          margin: [200, 0, 0, 3],
        },
        {
          text: `Name of the practicum supervisor - to be filled`, //${this.formData['contract_date']}
          alignment: 'left',
          fontSize: 10,
          bold: true,
          margin: [200, 0, 0, 5],
        },
        {
          text: `Faculty of Electrical Engineering, Automatics and Computer Science`, //${this.formData['contract_date']}
          alignment: 'left',
          fontSize: 10,
          bold: true,
          margin: [200, 0, 0, 5],
        },
        {
          text: `Kielce University of Technology`, //${this.formData['contract_date']}
          alignment: 'left',
          fontSize: 10,
          bold: true,
          margin: [200, 0, 0, 10],
        },
        {
          text: `Declaration of knowledge of the rules of internship`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: `I declare that I have familiarized myself with the Regulations for Professional Internships at the Kielce University of Technology and with the internship conditions outlined below, and I undertake to comply with them.`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: `Internship conditions:`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 10],
        },
        {
          text: `1. The University is obligated to supervise the didactic, educational, and organizational aspects of the internships. These duties are carried out on behalf of the University by the faculty internship supervisor or internship supervisor, who is also authorized to resolve any issues related to the internship with the management of the Department.
          2. The student undertakes to complete the internship according to the program and also to:
             − adhere to the order and discipline established by the Department,
             − adhere to health and safety rules and fire protection regulations,
             − adhere to the principles of maintaining confidentiality (corporate, professional, or state) and to protect the confidentiality of data within the scope specified by the Department,
             − adhere to the internship rules established by the University.
          3. After completing the internship, the student prepares a "Student Internship Report" confirmed by the company internship supervisor and evaluated by the internship supervisor. The report is the basis for the decision to pass the internship by the student.
          I also acknowledge that the University does not provide insurance for students - interns against the consequences of accidents (NNW). I will independently and responsibly decide on the possible insurance, taking into account the requirements set in this regard by the Department where the internship takes place.`, //${this.formData['contract_date']}
          alignment: '',
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 5],
        },
        {
          columns: [
            {
              text: 'Kielce, November 18, 2023', //${this.formData['contract_date']}
              alignment: 'left',
              fontSize: 10,
              bold: false,
              margin: [0, 0, 0, 5],
            },
            {
              text: '………………………………………………',
              alignment: 'right',
              fontSize: 10,
              bold: false,
              margin: [0, 0, 0, 3],
            },
          ],
        },
        {
          columns: [
            {
              text: '',
              alignment: 'left',
              fontSize: 10,
              bold: false,
              margin: [0, 0, 0, 5],
            },
            {
              text: 'Student\'s Signature',
              alignment: 'center',
              fontSize: 5,
              bold: false,
              margin: [50, 0, 0, 5],
            },
          ],
        },
      ],
      defaultStyle: {
        font: 'times'
      }
    };

    pdfMake.createPdf(docDefinition).download('generated-pdf.pdf');
}
}
