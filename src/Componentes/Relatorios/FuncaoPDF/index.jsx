import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function CriarPDF(dadosbanco){
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
                        {text: 'Criador', style: 'tableHeader', fontSize: 10},
                        {text: 'Tempo de funcionamento', style: 'tableHeader', fontSize: 10},
                        {text: 'ID do terreno', style: 'tableHeader', fontSize: 10},
                        {text: 'Data', style: 'tableHeader', fontSize: 10},
                    ],
                    [
                        {text: 'Nickollas', style: 'tableHeader', fontSize: 10},
                        {text: '12 horas', style: 'tableHeader', fontSize: 10},
                        {text: '7F', style: 'tableHeader', fontSize: 10},
                        {text: '23/03/2023', style: 'tableHeader', fontSize: 10},
                    ],
                    [
                        {text: 'Gabriel', style: 'tableHeader', fontSize: 10},
                        {text: '3 horas', style: 'tableHeader', fontSize: 10},
                        {text: 'A1', style: 'tableHeader', fontSize: 10},
                        {text: '23/03/2023', style: 'tableHeader', fontSize: 10},
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