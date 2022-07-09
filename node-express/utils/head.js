//header for all pages

function headerCon(insertData) {
  const headerData = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css" class="rel">
    <title>Document</title>
</head>
<body>
    <br/>    <br/>
  
${insertData}
</body>

</html>
`;

  return headerData;
}

module.exports = {
  headerCon,
};
