function checkingWhetherDuplicateContentExists(pdfArray, pdfCount, duplicateContentArray) {
    if (duplicateContentArray.includes(pdfArray[pdfCount])) {
        return true
    } else {
        duplicateContentArray.push(pdfArray[pdfCount])
        return false       
    }
}

function savingPDFNotesIntoDatabase(pdfCount) {
    console.log(`task for saving into DB`)
    return true
}


let pdfNotesSection = ["a","b","c","d","e","f","g","a","h","i"]
let isDuplicatePDfContet
let duplicateContentArray = []
for (let counter = 0; counter <= pdfNotesSection.length; counter++){
    // is duplicate content exists (pdf[index])
    isDuplicatePDfContet = false
    isDuplicatePDfContet = checkingWhetherDuplicateContentExists(pdfNotesSection,counter,duplicateContentArray)
    if(isDuplicatePDfContet){
        console.log(`duplicate content ${pdfNotesSection[counter]}`)
        continue;
    }
    savingPDFNotesIntoDatabase()
}

