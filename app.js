const phoneticRadicals = {
    '工': 'コウ',
    '正': 'セイ or ショウ',
    '丁': 'テイ or チョウ',
    '台': 'タイ or シ',
    '周': 'シュウ or チョウ',
};

const modifiedReadings = {
    '空': { radical: '工', reading: 'クウ' },
};

const exceptionReadings = {
    '左': { radical: '工', reading: 'サ' }
};

function searchKanji() {
    const kanjiInput = document.getElementById('kanjiInput').value.trim();
    const resultDiv = document.getElementById('phonetic-info');

    if (!kanjiInput) {
        resultDiv.innerHTML = '';
        return;  // Do nothing if the input is empty
    }

    // Check if it matches a phonetic radical
    for (const radical in phoneticRadicals) {
        if (phoneticRadicals[radical].includes(kanjiInput)) {
            resultDiv.innerHTML = `
                <p>The character <span class="highlighted-kanji">${kanjiInput}</span></p>
                <p>contains the phonetic radical <span class="highlighted-kanji">${radical}</span></p>
                <p>which is read <span class="highlighted-kanji">${phoneticRadicals[radical]}</span>.</p>
            `;
            return;
        }
    }

    // Check for modified readings
    if (modifiedReadings[kanjiInput]) {
        const { radical, reading } = modifiedReadings[kanjiInput];
        const radicalReading = phoneticRadicals[radical];
        resultDiv.innerHTML = `
            <p>The character <span class="highlighted-kanji">${kanjiInput}</span> is read <span class="highlighted-kanji">${reading}</span>,</p>
            <p>a modification of the reading of the phonetic radical <span class="highlighted-kanji">${radical}</span>,</p>
            <p>which is usually read <span class="highlighted-kanji">${radicalReading}</span>.</p>
        `;
        return;
    }

    // Check for exception readings
    if (exceptionReadings[kanjiInput]) {
        const { radical, reading } = exceptionReadings[kanjiInput];
        const radicalReading = phoneticRadicals[radical];
        resultDiv.innerHTML = `
            <p>The character <span class="highlighted-kanji">${kanjiInput}</span> is read <span class="highlighted-kanji">${reading}</span>.</p>
            <p>It’s an exception within the kanji that share the phonetic radical <span class="highlighted-kanji">${radical}</span>,</p>
            <p>which is usually read <span class="highlighted-kanji">${radicalReading}</span>.</p>
        `;
        return;
    }

    resultDiv.innerHTML = `<p>No results found for <span class="highlighted-kanji">${kanjiInput}</span>.</p>`;
}
