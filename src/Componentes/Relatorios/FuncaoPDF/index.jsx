import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function CriarPDF({criadorPDF, tempoFuncionamentoPDF, horaRelatorioPDF,dataRelatorioPDF}){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [ //para criar o titulo
        {
            text: 'RELATORIO',
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45],
        }
    ];
    /*
    const colocarDados = dados.map((dadosbanco) => { //Para colocar os dados lá embaixo
        return [
            {text: dadosbanco.criador, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: dadosbanco.tempo, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: dadosbanco.id, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: dadosbanco.data, fontSize: 9, margin: [0, 2, 0, 2]}
        ]
    });*/

    const detalhes = [ //Criar o body
		{
			table:{
                headerRows: 1,
                widths: ['*', '*', '*', '*'],
                body: [
                    [
                        {text: criadorPDF, style: 'tableHeader', fontSize: 10},
                        {text: tempoFuncionamentoPDF, style: 'tableHeader', fontSize: 10},
                        {text: horaRelatorioPDF, style: 'tableHeader', fontSize: 10},
                        {text: dataRelatorioPDF, style: 'tableHeader', fontSize: 10},
                    ],
                ]
            },
            layout: 'headerLineOnly' //quiser com linhas embaixo uma da outra coloca 'lightHorizontalLines'
		}
	];

    const docDefinitions = { //Criar a definição do papel
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content: [detalhes],      
    }

    pdfMake.createPdf(docDefinitions).download();
}

export default CriarPDF