<script setup>
import { ref, onMounted } from 'vue'
import { read, utils, writeFileXLSX } from 'xlsx'
import VueOfficeExcel from '@vue-office/excel'
import '@vue-office/excel/lib/index.css'

import VueOfficeDocx from '@vue-office/docx'
import VueOfficePdf from '@vue-office/pdf'

import '@vue-office/docx/lib/index.css'

const html = ref('')
const tableau = ref()
const src = ref('')

// onMounted(async () => {
//     /* Download from https://docs.sheetjs.com/pres.numbers */
//     const f = await fetch('https://docs.sheetjs.com/pres.numbers')
//     const ab = await f.arrayBuffer()

//     /* parse workbook */
//     const wb = read(ab)

//     /* update data */
//     html.value = utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]])
// })

async function importExcel(e) {
    const file = e.target.files[0]
    const ab = await file.arrayBuffer()

    // 预览地址
    // 1. 接收arrayBuffer
    // src.value = ab
    // 2. 生成临时地址
    src.value = URL.createObjectURL(file)
    console.log(src.value)

    /* parse workbook */
    const wb = read(ab)
    const json = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
    console.log(json)
    /* update data */
    html.value = utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]])
}

/* get live table and export to XLSX */
function exportFile() {
    const wb = utils.table_to_book(tableau.value.getElementsByTagName('TABLE')[0])
    writeFileXLSX(wb, 'SheetJSVueHTML.xlsx')
}

const docxSrc = ref('')
const pdfSrc = ref('')

function importDocx(e) {
    const file = e.target.files[0]
    docxSrc.value = URL.createObjectURL(file)
}
function importPdf(e) {
    const file = e.target.files[0]
    pdfSrc.value = URL.createObjectURL(file)
}
</script>

<template>
    <div ref="tableau" v-html="html"></div>
    <button @click="exportFile">Export XLSX</button>
    <input type="file" @change="importExcel" />
    <input type="file" @change="importDocx" />
    <input type="file" @change="importPdf" />

    <hr />
    <!-- <div>预览excel</div>
    <vue-office-excel :src="src" style="height: 600px"></vue-office-excel>
    <hr /> -->
    <!-- <div>预览docx</div>
    <vue-office-docx :src="docxSrc"></vue-office-docx> -->
    <!-- <hr />
    <div>预览pdf</div>
    <vue-office-pdf :src="pdfSrc"></vue-office-pdf> -->
</template>
<style>
/* table {
    border-collapse: collapse;
    width: 100%;
}
table,
th,
td {
    border: 1px solid rgb(211, 105, 105);
} */
</style>
