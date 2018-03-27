<?php

$claim_id = 'Z182QPB7000050';

//$base_path = 'download/';
$base_path = '\\\\filestore-5\\loss_doc_privat\\';

require_once 'security/settings.php';
$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, $url_request_report);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_SSLKEY, dirname(__FILE__) . "/security/key.pem");
curl_setopt($curl, CURLOPT_SSLCERT, dirname(__FILE__) . "/security/19dec_cert.pem");
curl_setopt($curl, CURLOPT_KEYPASSWD, $curl_password);
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

echo $base_path . $claim_id;
echo '<hr/>';
echo '<pre>';
print_r($data);

echo '</pre>';

// do {
//     $data = $this->createDoc($date, $tlCode, $reportCode);
//     if ($data['requestReport']['status'] != 2) {
//         sleep(2);//Ждем 2 сек.
//     }
//  $i++;
// } while (($data['requestReport']['status'] != 2) && ($i < 5));

if ($data['requestReport']['status'] == 2) {

    if (!file_exists($base_path . $claim_id)) {
        mkdir($base_path . $claim_id);
    }

    foreach ($data['report'] as $item) {
        download($item['extension'], $item['tiket'], $item['url'], $claim_id, $base_path, $curl_password);
    }
}
function download($extension, $tiket, $url_request_report, $claim_id, $base_path, $curl_password)
{
    ini_set('max_execution_time', 300);
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url_request_report);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_SSLKEY, dirname(__FILE__) . "/security/key.pem");
    curl_setopt($curl, CURLOPT_SSLCERT, dirname(__FILE__) . "/security/19dec_cert.pem");
    curl_setopt($curl, CURLOPT_KEYPASSWD, $curl_password);
    $data = curl_exec($curl);
    curl_close($curl);

    if (trim($extension == '')) {
        $file_name = $tiket;
    } else {
        $file_name = $tiket . '.' . $extension;
    }

    if (!file_exists($base_path . $claim_id . '/' . $file_name)) {
        file_put_contents($base_path . $claim_id . '/' . $file_name, $data);
    }

}
