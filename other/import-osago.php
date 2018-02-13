<?php

require_once('security/settings.php');
$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, 'https://www.mrprice.com.ua/service/api-comp/contract/report-for-mtsbu');
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    $base_auth,
));

curl_setopt($curl, CURLOPT_POSTFIELDS, '{
    "dateFrom" : "2017-12-11T00:00:00.000",
    "dateTo"   : "2017-12-12T00:00:00.000",
    "state"    : ["CONCLUDED"]
}');
$data = curl_exec($curl);
curl_close($curl);

echo '<pre>';
print_r($data);
echo '<pre>';
