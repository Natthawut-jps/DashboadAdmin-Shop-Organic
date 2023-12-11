import excel from "exceljs";
import { saveAs } from "file-saver";


interface address {
    name: string,
    crounty: string,
    amphure: string,
    tambon: string,
    zipcode: number,
}
interface column {
    header: string,
    key: string,
    width: number,
}
const Excel = () => {

    const column: column[] = [
        { header: 'name', key: 'name', width: 30 },
        { header: 'crounty', key: 'crounty', width: 20 },
        { header: 'amphure', key: 'amphure', width: 20 },
        { header: 'tambon', key: 'tambon', width: 20 },
        { header: 'zipcode', key: 'zipcode', width: 10 },
    ]
    const data: address[] = [
        {
            name: 'natthawut1',
            crounty: 'lie1',
            amphure: 'chiangkan1',
            tambon: 'chiangkan1',
            zipcode: 42001,
        },
        {
            name: 'natthawut2',
            crounty: 'lie2',
            amphure: 'chiangkan2',
            tambon: 'chiangkan2',
            zipcode: 42002,
        },
        {
            name: 'natthawut3',
            crounty: 'lie3',
            amphure: 'chiangkan3',
            tambon: 'chiangkan3',
            zipcode: 42003,
        },
        {
            name: 'natthawut4',
            crounty: 'lie4',
            amphure: 'chiangkan4',
            tambon: 'chiangkan4',
            zipcode: 42004,
        },
    ]

    // created workbook
    const workbook = new excel.Workbook();
    const ws = workbook.addWorksheet('address');

    // adjustment
    ws.columns = column;
    ws.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '06E102' } };
    ws.getRow(1).border = { left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    ws.addRows(data);

    // saveAs
    (async () => {
        await workbook.xlsx.writeBuffer().then((buffer) => {
            saveAs(new Blob([buffer], { type: 'application/xlsx' }), 'example.xlsx')
        })
    })();
}

export default Excel;