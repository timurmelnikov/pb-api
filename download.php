<?php

require_once('security/settings.php');

$claim_id = 'Z1817PB700001T';

$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_SSLKEY, dirname(__FILE__) . "/security/key.pem");
curl_setopt($curl, CURLOPT_SSLCERT, dirname(__FILE__) . "/security/19dec_cert.pem");
curl_setopt($curl, CURLOPT_KEYPASSWD, $sid);
curl_setopt($curl, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Accept: application/json',
    'sid: Pa9tees9hequooQu5ahpo',
));

curl_setopt($curl, CURLOPT_POSTFIELDS, '{
    "reqId": "' . $claim_id . '",
    "reportCode": "LD"
}');

$data = curl_exec($curl);
curl_close($curl);

$data = json_decode($data, true);
echo '<pre>';
print_r($data);
//echo $data;
echo '</pre>';

if ($data['requestReport']['status'] == 2) {

    mkdir('download/' . $claim_id);

    foreach ($data['report'] as $item) {
        download($item['extension'], $item['tiket'], $item['url'], $claim_id);
    }
}
function download($extension, $tiket, $url, $claim_id)
{
    ini_set('max_execution_time', 300);
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_SSLKEY, dirname(__FILE__) . "/security/key.pem");
    curl_setopt($curl, CURLOPT_SSLCERT, dirname(__FILE__) . "/security/19dec_cert.pem");
    curl_setopt($curl, CURLOPT_KEYPASSWD, $sid);
    $data = curl_exec($curl);
    curl_close($curl);
    $file_name = $tiket . '.' . $extension;
    file_put_contents('download/' . $claim_id . '/' . $file_name, $data);
}
