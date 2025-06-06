/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 * @NModuleScope Public
 */
define(['N/log', 'N/query', 'N/url'], function (log, query, url) {
    function onRequest(context) {
        const apiEndpoint = url.resolveScript({
            scriptId: 'customscript_dt_react_demo_api',
            deploymentId: 'customdeploy_dt_react_demo_api',
        });

        const cssUrl = getFileUrl('datatek-react-demo.css');
        const jsUrl = getFileUrl('datatek-react-demo.js');

        context.response.write(`
      <!doctype html>
      <html lang="en">       
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script>
            window.apiEndpoint = "${apiEndpoint}";
          </script>
          <link type="text/css" rel="stylesheet" href="${cssUrl}"/>
          <title>NetSuite React Demo</title>
        </head>
          <body class="bg-slate-900">
            <div id="root"></div>
          </body>
        <script type="text/javascript" src="${jsUrl}"></script>
      </html>
    `);
    }

    //////////////////////////////////////////////////

    function getFileUrl(filename) {
        const results = query
            .runSuiteQL({
                query: `
          select url
          from file
          where name = '${filename}'
        `,
            })
            .asMappedResults();

        if (Array.isArray(results) && results.length > 0) {
            return results[0]['url'];
        }
    }

    return {
        onRequest,
    };
});
