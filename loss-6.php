<?php
set_time_limit(5000000);

/*
Выполнена. Выплата
Статус присваивается после получения информации о выплате страхового возмещения

???
*/

require_once('security/settings.php');


$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, $url_operation);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
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
    "opCode": "confirm",
    "request": {
        "req_ID": "Z183JPB70000DN"
    }
}');

set_time_limit(300);

$data = curl_exec($curl);
curl_close($curl);

echo '<pre>';
//print_r(json_decode($data, true));
print_r($data);
echo '</pre>';


/*
Z1819PB700007Y

Z181FPB7000036

*/