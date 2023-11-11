import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { toDataURL } from 'qrcode';
import { logoBase64 } from '../shared/logos-base64';
import { textBody } from '../shared/texts-body';
import JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  listaFormulario?: any[]; // Substitua 'any' pelo tipo adequado se necessário
  private pdf?: jsPDF;
  base64String?: string;

  constructor() { }

  ngOnInit(): void {
    const listaFormulario = sessionStorage.getItem('listaFormulario');
    this.listaFormulario = listaFormulario ? JSON.parse(listaFormulario) : [];
  }

  public async gerarPDF(formulario: any, abrirNavegador: boolean, qrCode: boolean): Promise<void> {
    this.pdf = new jsPDF();

    //CABEÇALHO
    this.pdf.addImage(logoBase64.logoEsquerda, 'PNG', 8, 16, 55, 10);
    this.pdf.addImage(logoBase64.logoDireita1, 'PNG', 180, 16, 18, 8);
    this.pdf.addImage(logoBase64.logoDireita2, 'PNG', 112, 16, 37,12);

    const textoEntreLogos = 'Um Produto';
    this.pdf.setFont('helvetica');
    this.pdf.setFontSize(10);
    this.pdf.text(textoEntreLogos, 152, 22);

    // Adiciona a linha preta abaixo dos logos
    this.pdf.setDrawColor(-1);
    this.pdf.setLineWidth(-1);
    this.pdf.line(10, 35, this.pdf.internal.pageSize.getWidth() - 10, 35);

    //CORPO
    const halfPageWidthPrezadoAndAcordo = this.pdf.internal.pageSize.getWidth() / 1;

    const dict = textBody.dict;
    const halfPageWidthDict = this.pdf.internal.pageSize.getWidth() / 1.5;

    const serasa = textBody.serasa;
    const halfPageWidthSerasa = this.pdf.internal.pageSize.getWidth() / 1 - 10 - 10;

    const avalista = textBody.avalista;
    const halfPageWidthAvalista = this.pdf.internal.pageSize.getWidth() / 1 - 12 - 13;
    const textLines = this.pdf.splitTextToSize(serasa, halfPageWidthSerasa);
    const textHeight = textLines.length * 6;

    const coluna1Texto = "CÓDIGO DO CLIENTE";
    const coluna2Texto = "VALOR A PAGAR";
    const coluna3Texto = "DATA DE VENCIMENTO";
    const informacoesDinamicas = [
      "6338612952",
      `R$ ${formulario.valor}`,
      this.formatarData(formulario.dataVencimento)
    ];

    const pageWidth = this.pdf.internal.pageSize.getWidth();
    const colWidth = (pageWidth - 10.8 * 5) / 3; // Três colunas com margem entre elas
    const startY = 165;

    this.pdf.setFillColor(128, 128, 128);
    this.pdf.rect(160, 40, 40, 25, 'F');
    this.pdf.setFont('helvetica');
    this.pdf.setFontSize(11);
    this.pdf.text("Valor do acordo ", 165, 50, { maxWidth: halfPageWidthPrezadoAndAcordo, align: 'left' });
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.setFontSize(10);
    this.pdf.text(`R$ ${formulario.valor}`, 173, 58, { maxWidth: halfPageWidthPrezadoAndAcordo, align: 'left' });
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.text("Prezado(a) ", 10, 50, { maxWidth: halfPageWidthPrezadoAndAcordo, align: 'left' });
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text(`${formulario.nomeCliente}`, 30, 50, { maxWidth: halfPageWidthPrezadoAndAcordo, align: 'left' });
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.text("Acordo firmado na opção de pagamento via PIX na data ", 10, 65, { maxWidth: halfPageWidthPrezadoAndAcordo, align: 'left' });
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text(this.formatarData(formulario.dataVencimento), 100, 65, { maxWidth: halfPageWidthPrezadoAndAcordo, align: 'left' });
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.text(dict, 10, 80, { maxWidth: halfPageWidthDict, align: 'left' });
    this.pdf.text(serasa, 10, 105, { maxWidth: halfPageWidthSerasa, align: 'left'});
    this.pdf.text(avalista, 13, 130, { maxWidth: halfPageWidthAvalista, align: 'left'});
    this.pdf.setDrawColor(0, 0, 139);
    this.pdf.rect(10, 123, halfPageWidthSerasa - 4, textHeight);

    this.pdf.setFont('helvetica', 'bold');
    this.pdf.setFontSize(11);
    this.pdf.text(coluna1Texto, 13, startY, { maxWidth: colWidth });
    this.pdf.text(coluna2Texto, 13 * 2 + colWidth, startY, { maxWidth: colWidth });
    this.pdf.text(coluna3Texto, 13 * 3 + colWidth * 2, startY, { maxWidth: colWidth });

    this.pdf.setFont('helvetica', 'normal');
    this.pdf.setFontSize(10);
    informacoesDinamicas.forEach((info, index) => {
      const xOffset = 13 * (index + 1) + colWidth * index;
      this.pdf?.text(info, xOffset, startY + 5, { maxWidth: colWidth });
    });
    this.pdf.setDrawColor(0, 0, 0);
    this.pdf.setLineWidth(0.5);
    this.pdf.rect(10, startY - 10 , pageWidth - 10 * 2.4, 23);

    this.pdf.setFont('helvetica', 'normal');
    this.pdf.setLineWidth(0);

    for (let x = 15; x < this.pdf.internal.pageSize.getWidth() - 18; x += 0.5 + 0.5) {
      this.pdf.line(x, 185, x + 0.5, 185); //linha pontilhada
    }

    this.pdf.text("Documento Para Pagamento", 11, 198, { maxWidth: halfPageWidthPrezadoAndAcordo, align: 'left' });


    const pageWidthSecondPart = this.pdf.internal.pageSize.getWidth();
    const colWidthSecondPart = (pageWidthSecondPart - 10.8 * 5) / 3;
    const startYSecondPart = 220;

    this.pdf.setFont('helvetica', 'bold');
    this.pdf.setFontSize(11);
    this.pdf.text(coluna1Texto, 13, startYSecondPart, { maxWidth: colWidthSecondPart });
    this.pdf.text(coluna2Texto, 13 * 2 + colWidthSecondPart, startYSecondPart, { maxWidth: colWidthSecondPart });
    this.pdf.text(coluna3Texto, 13 * 3 + colWidthSecondPart * 2, startYSecondPart, { maxWidth: colWidthSecondPart });

    this.pdf.addImage(logoBase64.logoEsquerda, 'PNG', 13, 205, 55, 10);

    this.pdf.setFont('helvetica', 'normal');
    this.pdf.setFontSize(9);
    this.pdf.text("CONTRA APRESENTAÇÃO", 13, 231, { maxWidth: halfPageWidthPrezadoAndAcordo, align: 'left' });

    this.pdf.setFont('helvetica', 'normal');
    this.pdf.setFontSize(10);
    informacoesDinamicas.forEach((info, index) => {
      const xOffset = 13 * (index + 1) + colWidthSecondPart * index;
      this.pdf?.text(info, xOffset, startYSecondPart + 5, { maxWidth: colWidthSecondPart });
    });
    this.pdf.setDrawColor(0, 0, 0);
    this.pdf.setLineWidth(0.5);
    this.pdf.rect(10, startYSecondPart - 18 , pageWidthSecondPart - 10 * 2.4, 33);

    if (qrCode) {
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.setFontSize(12);
    this.pdf.text("ESCANEIE O QRCODE P/PAGAR!", 100, 241, { maxWidth: halfPageWidthPrezadoAndAcordo, align: 'center' });

    const qrCodeData = 'teste@example.com';
    const qrCodeDataURL = await toDataURL(qrCodeData);
    this.pdf.addImage(qrCodeDataURL, 'PNG', 75, 242, 50, 50);
    } else  {
      const canvas = document.createElement('canvas');
      this.pdf.setFont('helvetica');
      this.pdf.setFontSize(9);
      const codigoBarrasPix = formulario.codigoBarrasPix;
      JsBarcode(canvas, codigoBarrasPix, { format: 'CODE128' });
      const barcodeDataUrl = canvas.toDataURL('image/png');
      this.pdf.addImage(barcodeDataUrl, 'PNG', 65, 242, 80, 40);
    }

    if (abrirNavegador){
      const pdfData = this.pdf.output('blob');
      const url = URL.createObjectURL(pdfData);
      window.open(url, '_blank');
    } else {
      this.pdf.save(`Pagamento-${formulario.nomeCliente}.pdf`);
  }
}

  private formatarData(data: string): string {
    console.log(data);

    const dateObj = new Date(data+'T00:00:00');
    const opcoesDeData: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: 'America/Sao_Paulo'
    };
    console.log(dateObj);

    return dateObj.toLocaleDateString('pt-BR', opcoesDeData);
  }
}


