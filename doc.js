const puppeteer = require('puppeteer');

const cash = [
    {
        orderNumber: '203',
        paymentNumber: 25020,
        transactionNumber: 24764,
        transactionAmount: '1.10',
        createdAt: '12/11/2019 2:49:00 am',
        updatedAt: '12/11/2019 2:49:00 am',
        maskedpan: ''
    },
    {
        orderNumber: '35',
        paymentNumber: 24852,
        transactionNumber: 24586,
        transactionAmount: '15.33',
        createdAt: '12/11/2019 1:50:57 am',
        updatedAt: '12/11/2019 1:50:57 am',
        maskedpan: ''
    },
    {
        orderNumber: '3',
        paymentNumber: 24820,
        transactionNumber: 24538,
        transactionAmount: '13.14',
        createdAt: '12/11/2019 12:15:41 am',
        updatedAt: '12/11/2019 12:15:41 am',
        maskedpan: ''
    }
];

createDoc = async (cash) => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        await page.setContent(`<html>
<head>
    <title>Convert JSON Data to HTML Table</title>
    <style>
        th, td, p, input {
            font: 14px Verdana;
        }

        table, th, td {
            border: solid 1px #DDD;
            border-collapse: collapse;
            padding: 2px 3px;
            text-align: center;
        }

        th {
            font-weight: bold;
        }
    </style>
</head>
<body>

<p id="showData"></p>
</body>

<script>
    function CreateTableFromJSON(cash) {
        var col = [];
        for (var i = 0; i < cash.length; i++) {
            for (var key in cash[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < cash.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = cash[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }

    document.addEventListener = function() {
        CreateTableFromJSON(${cash});
    };

</script>
</html>`, {waitUntil: 'networkidle0', timeout: 0})
    } catch (e) {
        console.log(e);
    }

    await page.setViewport({
        width: 1440,
        height: 900,
        deviceScaleFactor: 2,
    });

    await page.evaluate(() => document.body.style.background = 'white');
    await page.pdf({path: "public/dani.pdf", pageRanges: "1", format: "A4", printBackground: false});
    await browser.close();
};

() => {
    createDoc(cash)
};
